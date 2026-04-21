const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: "Bad Request" };
  }

  const { questionType, question, answer, keywords, modelAnswer, parts, scenario } = body;

  try {
    if (questionType === "multipart") {
      // Grade each part separately
      const results = [];
      for (const part of parts) {
        if (!part.answer || part.answer.trim() === "") {
          results.push({ mark: 0, feedback: "No answer provided." });
          continue;
        }
        const prompt = `You are grading a COMM1180 (Value Creation) exam question at UNSW.

Scenario: ${scenario || ""}

Part (${part.label}): ${part.question}

Student answer: ${part.answer}

Keywords/concepts to look for: ${(part.keywords || []).join(", ")}

Model answer: ${part.modelAnswer}

Grade the student's answer on a scale of 0, 1, or 2:
- 2 = Correct and complete (full marks)
- 1 = Partially correct (shows understanding but missing key elements)
- 0 = Incorrect or blank

Respond in JSON format only:
{"mark": <0|1|2>, "feedback": "<1-2 sentence feedback explaining the mark>"}`;

        const msg = await client.messages.create({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 256,
          messages: [{ role: "user", content: prompt }],
        });

        let raw = msg.content[0].text.trim();
        const jsonMatch = raw.match(/\{[\s\S]*\}/);
        if (jsonMatch) raw = jsonMatch[0];
        const parsed = JSON.parse(raw);
        results.push({ mark: parsed.mark, feedback: parsed.feedback });
      }
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ results }),
      };
    }

    // SA or numerical
    if (!answer || answer.trim() === "") {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mark: 0, feedback: "No answer provided." }),
      };
    }

    const isNumerical = questionType === "numerical";
    const prompt = isNumerical
      ? `You are grading a COMM1180 (Value Creation) finance/quantitative exam question at UNSW.

Question: ${question}

Student answer: ${answer}

Keywords/steps to look for: ${(keywords || []).join(", ")}

Model answer / worked solution: ${modelAnswer}

Grade the student's answer on a scale of 0, 1, or 2:
- 2 = Correct answer with correct working/formula (full marks)
- 1 = Correct method/formula but arithmetic error, OR correct answer but minimal working shown
- 0 = Incorrect method and incorrect answer

Respond in JSON format only:
{"mark": <0|1|2>, "feedback": "<1-2 sentence feedback explaining the mark, mentioning the correct approach if wrong>"}`
      : `You are grading a COMM1180 (Value Creation) short-answer exam question at UNSW.

Question: ${question}

Student answer: ${answer}

Keywords/concepts to look for: ${(keywords || []).join(", ")}

Model answer: ${modelAnswer}

Grade the student's answer on a scale of 0, 1, or 2:
- 2 = Correct and complete
- 1 = Partially correct
- 0 = Incorrect or blank

Respond in JSON format only:
{"mark": <0|1|2>, "feedback": "<1-2 sentence feedback>"}`;

    const msg = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 256,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = msg.content[0].text.trim();
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (jsonMatch) raw = jsonMatch[0];
    const parsed = JSON.parse(raw);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mark: parsed.mark, feedback: parsed.feedback }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Marking failed", detail: err.message }),
    };
  }
};
