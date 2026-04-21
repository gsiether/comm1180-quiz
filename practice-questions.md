# Practice Exam Questions — COMM1180 T1 2026
# Source: University-provided practice screenshots
# The redesign agent should read this file and add all questions below to the QUESTIONS array
# in index.html, using the same format as existing questions (week, type, question, keywords, modelAnswer, hint, hint2)

---

## WEEK 5 — Time Value of Money

### Q1 — APR / EAR / FV (multipart)
A bank account offers a 16.0% APR with monthly compounding.
A) What is the per period interest rate? (Round to two decimal places, % per month)
B) How much would a $700 investment be worth after 1 year? (Round to the nearest cent)

Model answers:
A) Periodic rate = APR / m = 16% / 12 = 1.33% per month
B) FV = $700 × (1 + 0.16/12)^12 = $700 × (1.013333)^12 = $700 × 1.17227 = $820.59

---

### Q2 — Solving for interest rate (numerical)
A saving account of $14,000 will be worth $30,000 in 10 years. What is the per year interest rate of a saving account? (Give answer correct to 2 decimal places, %)

Model answer:
r = (FV/PV)^(1/n) − 1 = (30,000/14,000)^(1/10) − 1 = (2.14286)^(0.1) − 1 = 1.07918 − 1 = 7.92% per year

---

### Q3 — Deferred perpetuity (numerical)
A perpetuity makes its first annual payment of $128 in 22 years. What is its present value at an annual discount rate of 5.0%?

Model answer:
Step 1: PV of perpetuity at year 21 (one period before first payment) = C/r = $128 / 0.05 = $2,560
Step 2: Discount back 21 years to today: PV = $2,560 / (1.05)^21 = $2,560 / 2.7856 = $919.07

---

### Q4 — Mortgage / annuity payment (numerical)
You are thinking of purchasing a house. The house costs $300,000. You have $40,000 in cash for a down payment. The bank is offering a 25-year mortgage requiring annual payments at an interest rate of 4.0% per year. What will your annual payment be if you sign up for this mortgage? (Round to the nearest dollar)

Model answer:
Loan = $300,000 − $40,000 = $260,000
Rearrange PV annuity: C = PV × r / [1 − (1+r)^−n]
C = $260,000 × 0.04 / [1 − (1.04)^−25]
(1.04)^25 = 2.6658, so (1.04)^−25 = 0.3751
C = $10,400 / [1 − 0.3751] = $10,400 / 0.6249 = $16,642 per year

---

## WEEK 7 — Capital Budgeting / Value from Investment

### Q5 — NPV with declining growing perpetuity (multipart)
The Sydney franchisee of McDonald's Fast Food restaurants is replacing kitchen appliances across all locations due to too many complaints about soggy burger paddies. This requires an upfront investment of $234,828 in year 0. There will be no positive cash flows in year 1. But starting in year 2, there will be an increase in operating cash flow of $51,000 per restaurant, which then gradually declines by 5.5% each subsequent year forever. Cost of capital is 9.5%.

A) What is the NPV of the upgrade per location? (Round to the nearest dollar)
B) Thus, the IRR of the project must be less than 9.5%. (True or False)
C) Keep the cost of capital at 9.5%. What rate of decline would make this project exactly break even? (Round to 2 decimal places; enter a negative growth rate with a minus)

Model answers:
A) This is a growing perpetuity (with g = −5.5% = −0.055) starting at year 2.
   PV at year 1 = C₁/(r−g) = $51,000/(0.095−(−0.055)) = $51,000/0.15 = $340,000
   PV at year 0 = $340,000/1.095 = $310,502
   NPV = −$234,828 + $310,502 = $75,674
B) FALSE — since NPV > 0 at 9.5% cost of capital, the IRR must be GREATER than 9.5%
C) Set NPV = 0: $234,828 = $51,000 / ((0.095 − g) × 1.095)
   (0.095 − g) = $51,000 / ($234,828 × 1.095) = $51,000 / $257,137 = 0.19836
   g = 0.095 − 0.19836 = −0.10336 = −10.34%

---

### Q6 — EAA / Equivalent Annual Annuity (multipart)
AT&T is choosing between two bus models. Discount rate is 10.0%. (Dollar amounts in thousands.)

Long Life model: Year 0: −$208.7k; Years 1–7: −$3.8k per year
Short Life model: Year 0: −$100.8k; Years 1–4: −$1.7k per year

The company plans to continue with one of the two models for the foreseeable future.
A) What is the annual cost of the Long Life model as an equivalent annual annuity? (Round to nearest dollar)
   What is the annual cost of the Short Life model as an equivalent annual annuity? (Round to nearest dollar)
B) Based on the costs, which should AT&T choose?
Options: Short Life because its EAA of costs is smaller; Long Life because it lasts longer; Short Life because NPV of costs is smaller; Long Life because its EAA of costs is smaller.

Model answers:
A) NPV(Long Life) = −208.7 − 3.8 × [1−(1.10)^−7]/0.10 = −208.7 − 3.8 × 4.8684 = −208.7 − 18.50 = −$227.20k
   EAA(Long) = −227.20 × 0.10 / [1−(1.10)^−7] = −22.72 / 0.4868 = −$46,672
   NPV(Short Life) = −100.8 − 1.7 × [1−(1.10)^−4]/0.10 = −100.8 − 1.7 × 3.1699 = −100.8 − 5.39 = −$106.19k
   EAA(Short) = −106.19 × 0.10 / [1−(1.10)^−4] = −10.619 / 0.3170 = −$33,498
B) AT&T should choose Short Life because the equivalent annual annuity of its costs is smaller (−$33,498 vs −$46,672)

---

### Q7 — NPV / IRR / PI / Payback — mutually exclusive projects (multipart)
A firm considers the following 2 mutually exclusive projects (cash flows in $) and wants a payback period of 2 years or less. Assume a discount rate of 10.3%.
Note: Define profitability index as PI = PV(future Cash Flows)/Cost.

| Year | Project A | Project B |
|------|-----------|-----------|
| 0    | −52       | −50       |
| 1    | 24        | 23        |
| 2    | 25        | 32        |
| 3    | 68        | 35        |
| 4    | 88        | 38        |

A) Payback period of Project A? Payback period of Project B? (Round to 2 decimal places)
B) Profitability index of Project A? Profitability index of Project B?
C) NPV of Project A? NPV of Project B?
D) IRR of Project A (%)? IRR of Project B (%)?
E) According to the payback rule, which should be chosen?
F) According to the profitability index, which should be chosen?
G) Which one would you recommend the firm choose?

Model answers:
A) Project A payback: After Y1: −52+24=−28; After Y2: −28+25=−3; Recovered in Y3: 2 + 3/68 = 2.04 years
   Project B payback: After Y1: −50+23=−27; After Y2: −27+32=+5; Recovered: 1 + 27/32 = 1.84 years
B) Discount factor at 10.3%: Y1=1/1.103, Y2=1/1.2166, Y3=1/1.3419, Y4=1/1.4801
   PV(A future CFs) = 24/1.103 + 25/1.2166 + 68/1.3419 + 88/1.4801 = 21.76+20.55+50.67+59.46 = $152.44
   PI(A) = 152.44/52 = 2.93
   PV(B future CFs) = 23/1.103 + 32/1.2166 + 35/1.3419 + 38/1.4801 = 20.85+26.30+26.08+25.67 = $98.90
   PI(B) = 98.90/50 = 1.98
C) NPV(A) = 152.44 − 52 = $100.44; NPV(B) = 98.90 − 50 = $48.90
D) IRR requires financial calculator. IRR(A) ≈ 57%, IRR(B) ≈ 47% (both well above 10.3%)
E) According to payback rule: choose Project B (payback 1.84 years < 2 years; A is 2.04 years which exceeds the 2-year limit)
F) According to PI: choose Project A (PI = 2.93 > 1.98)
G) Recommend Project A — it has the higher NPV ($100.44 vs $48.90), which maximises firm value

---

## WEEK 8 — Valuation / Value for Investors

### Q8 — Bond pricing semi-annual (numerical)
The yield to maturity of a $1,000 bond with a 7.2% coupon rate, semi-annual coupons, and two years to maturity is 8.2% APR, compounded semi-annually. What must its price be? (Round to the nearest cent)

Model answer:
Semi-annual coupon = 7.2%/2 × $1,000 = $36
Semi-annual YTM = 8.2%/2 = 4.1% = 0.041
Periods n = 2 × 2 = 4
P = $36 × [1−(1.041)^−4]/0.041 + $1,000/(1.041)^4
(1.041)^4 = 1.17478, so (1.041)^−4 = 0.85161
P = $36 × [1−0.85161]/0.041 + $1,000 × 0.85161
P = $36 × 3.6193 + $851.61
P = $130.29 + $851.61 = $981.90

Since YTM (8.2%) > coupon rate (7.2%) → discount bond → P < $1,000 ✓

---

### Q9 — Multi-stage dividend growth (multipart)
Hush Puppies Ltd. is growing fast. The company earned $1.04 per share in year 0 and reinvested all of it to fund growth opportunities that promise to return 38.0% next year. In a year, management plans to payout 12.0% and invest the rest for more growth, projected to be 23.0%. They will then raise the payout ratio to 51.0% and keep it there.

A) The expected dividend per share for year 1? (Round to 4 decimal places)
B) The expected dividend per share for year 2? (Round to 4 decimal places)

Model answers:
A) Year 0: EPS₀ = $1.04, retention = 100%, ROI on reinvestment = 38%
   EPS₁ = $1.04 × (1 + 1.00 × 0.38) = $1.04 × 1.38 = $1.4352
   D₁ = EPS₁ × payout₁ = $1.4352 × 0.12 = $0.1722
B) Year 1: retention = 88%, growth rate into Y2 = 0.88 × 0.23 = 0.2024
   EPS₂ = $1.4352 × (1 + 0.2024) = $1.4352 × 1.2024 = $1.7257
   D₂ = EPS₂ × payout₂ = $1.7257 × 0.51 = $0.8801

---

### Q10 — Gordon Growth Model (numerical)
A firm has just paid a dividend of $4.5. The long-term growth rate in earnings going forward will be 3.5% per annum. The firm's cost of equity capital is 11.1% per annum and there is no expected change in the dividend payout ratio. What price today would you estimate for the firm's shares? (Round to the nearest cent)

Model answer:
D₀ = $4.5 (just paid), g = 3.5%, r = 11.1%
D₁ = D₀ × (1+g) = $4.5 × 1.035 = $4.6575
P₀ = D₁/(r−g) = $4.6575/(0.111−0.035) = $4.6575/0.076 = $61.28

---

## WEEK 9 — Risk, Return & WACC

### Q11 — CAPM multi-company analysis (multipart)
The risk-free rate is currently 4.30%. You have the following information:

| Company | Expected Return | Beta |
|---------|----------------|------|
| A: Round Corp | 7.50% | 0.34 |
| B: Lemon LLC | 14.36% | ? |
| C: Beach Living Inc | ? | 1.43 |
| D: Tasman Devils Corp | 7.88% | 0.86 |
| E: Allied Metal Traders | 19.72% | 1.46 |

A) You know Round Corp is correctly priced. What does this tell you about the market return investors expect per year? (%)
B) What beta for Lemon LLC would make investor expectations consistent with your findings in A)?
C) Given the expected market return in A), what is the correct expected return for Beach Living Inc? (%)
D) Given the expected market return in A), are shares of Tasman Devils Corp overvalued, undervalued, or fairly valued?
E) Assume the market risk premium remains the same. What risk-free rate would be needed for Allied Metal Traders to have correct return expectations? (%)

Model answers:
A) CAPM using Round Corp: 7.50% = 4.30% + 0.34 × (E[RM]−4.30%)
   3.20% = 0.34 × MRP → MRP = 9.412%
   E[RM] = 4.30% + 9.412% = 13.71%
B) 14.36% = 4.30% + β × 9.412% → β = 10.06/9.412 = 1.069
C) E[R] = 4.30% + 1.43 × 9.412% = 4.30% + 13.46% = 17.76%
D) CAPM required: 4.30% + 0.86 × 9.412% = 4.30% + 8.09% = 12.39%
   Actual: 7.88% < 12.39% required → stock is OVERVALUED (price too high, return too low)
E) 19.72% = Rf + 1.46 × 9.412% → 19.72% = Rf + 13.74% → Rf = 5.98%

---

### Q12 — WACC with varying D/E ratios (multipart)
The Sandwich With A Pretty Big Pickle On It Corporation has a cost of equity of 14.30% and a cost of debt of 6.20%. The corporate tax rate is 30.00%.

Find the after-tax WACC if the firm's target debt-to-equity ratio is:
A) 0.25
B) 0.50
C) 1.00
D) 1.50

Model answers:
After-tax cost of debt = 6.20% × (1−0.30) = 4.34%
For D/E ratio d: wD = d/(1+d), wE = 1/(1+d)

A) D/E=0.25: wD=0.20, wE=0.80 → WACC = 0.80×14.30% + 0.20×4.34% = 11.44% + 0.87% = 12.31%
B) D/E=0.50: wD=0.333, wE=0.667 → WACC = 0.667×14.30% + 0.333×4.34% = 9.54% + 1.45% = 10.99%
C) D/E=1.00: wD=0.50, wE=0.50 → WACC = 0.50×14.30% + 0.50×4.34% = 7.15% + 2.17% = 9.32%
D) D/E=1.50: wD=0.60, wE=0.40 → WACC = 0.40×14.30% + 0.60×4.34% = 5.72% + 2.60% = 8.32%
