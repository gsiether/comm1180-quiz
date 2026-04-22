const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const weekTopics = {
  2: "Value Creation fundamentals: Customer Value (CV = ΣBenefits − ΣCosts), Multi-attribute model, STP (Segmentation, Targeting, Positioning), Porter's Generic Competitive Strategies (Cost Leadership, Differentiation, Cost Focus, Differentiation Focus), Ansoff Matrix (Market Penetration, Product Development, Market Development, Diversification), Value Proposition Canvas, Job-to-be-done theory, B2C vs B2B differences",
  3: "Cost-Volume-Profit (CVP) Analysis: Contribution Margin (CM = SP − VC), CM Ratio, Break-even Point (BEP units = FC/CM, BEP revenue = FC/CM Ratio), Weighted Average Contribution Margin for multi-product firms, Target profit calculations (pre-tax = after-tax/(1−tax rate)), Margin of Safety, Operating leverage",
  4: "Balanced Scorecard: four perspectives (Financial, Customer, Internal Business Process, Learning & Growth), strategy maps, leading vs lagging indicators, KPIs, linking strategy to operations, non-financial performance measurement",
  5: "Time Value of Money (TVM): Future Value (FV = PV(1+r)^n), Present Value, solving for r and n, Effective Annual Rate (EAR), Annual Percentage Rate (APR), Ordinary annuities, Annuity due, Deferred annuities, Perpetuities (PV = C/r), Growing perpetuities (PV = C1/(r−g))",
  7: "Capital Budgeting: Net Present Value (NPV = CF0 + ΣCFt/(1+r)^t), Internal Rate of Return (IRR), Profitability Index (PI = NPV/Initial Investment), Equivalent Annual Annuity (EAA), mutually exclusive projects, independent projects, NPV vs IRR conflicts",
  8: "Valuation: Bond pricing (P0 = coupon annuity PV + face value PV), bond yield to maturity, equity valuation using dividend discount model, Gordon Growth Model (P0 = D1/(r−g)), required return on equity (r = D1/P0 + g), dividend growth rate (g = Retention Ratio × ROI)",
  9: "Risk and Return: Holding Period Return (HPR), portfolio expected return, systematic vs unsystematic risk, Beta (β), Capital Asset Pricing Model (CAPM: E[Ri] = Rf + βi(E[RM]−Rf)), Weighted Average Cost of Capital (WACC = wE×RE + wP×RP + wD×RD×(1−TC)), capital structure, market value weights",
  10: "Integrated Value Creation: connecting strategy (Weeks 2, 4) with financial performance (Weeks 3, 5, 7, 8, 9), corporate governance, stakeholder value, sustainability and ESG considerations, long-run value creation",
};

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

  const { week, question, modelAnswer, questionType } = body;
  const topic = weekTopics[week] || "COMM1180 Value Creation concepts";

  const isFinance = [3, 5, 7, 8, 9].includes(Number(week));

  const prompt = `You are a UNSW tutor explaining a COMM1180 exam question. Return ONLY a JSON object — no markdown, no code fences, no extra text.

Week ${week} topic: ${topic}
Question: ${question}
Model answer: ${modelAnswer}

Return this exact JSON shape:
{
  "concept": "One sentence naming the concept or formula being tested.",
  "answer": "1-2 sentences explaining what the correct answer is and why.",${isFinance ? `
  "working": "Step-by-step calculation using the formula. Use → between steps. E.g. Formula → substitution → result.",` : ''}
  "tip": "One sentence memory tip or common exam mistake to avoid."
}

Rules:
- Every field must be a plain string (no nested objects).
- Keep each field short and student-friendly.
- Do not add any fields beyond those listed.`;

  try {
    const msg = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 600,
      messages: [{ role: "user", content: prompt }],
    });

    let structured;
    try {
      const raw = msg.content[0].text.trim().replace(/^```json\s*/i, '').replace(/```\s*$/, '');
      structured = JSON.parse(raw);
    } catch {
      structured = { answer: msg.content[0].text.trim() };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ structured }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Explanation failed", detail: err.message }),
    };
  }
};
