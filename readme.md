# Razorpay AI Buildathon — Full Plan
**Track: AI Risk Manager**
**Project working name: SentinelPay — Explainable Merchant Risk Agent**

---

## 1. Build vs Reuse — the decision

Don't fork/relabel GenRx. Different domain, different data shape, and a panel that reads your GitHub history will notice. Instead, **carry over the pattern**, not the code:

```
GenRx:       VCF file  → rule-based pharmacogenomic risk engine → LLM explanation (Gemini + Llama3 fallback) → report
SentinelPay: Transaction → rule-based fraud/risk scoring engine  → LLM explanation (same fallback pattern)   → dashboard
```

This is a genuinely strong talking point in the interview: *"I noticed the same architecture — deterministic rules engine feeding an LLM explanation layer — solves both a clinical decision problem and a fintech risk problem. That's the pattern I build with."* Say this explicitly in your pitch. It shows systems thinking, not copy-paste.

---

## 2. Full Build Plan (day by day)

**Stack:** React + TailwindCSS (frontend) · Node/Express (backend) · MongoDB (storage) · Gemini API free tier with a rule-based fallback if LLM call fails (same pattern as GenRx) · Recharts (metrics) · Deploy: Vercel (frontend) + Render (backend)

**Data:** Use a public transactions/fraud dataset (e.g. Kaggle "Credit Card Fraud Detection" or a UPI-transactions dataset) seeded into MongoDB. Simulate a "live feed" by streaming rows in on an interval (setInterval pushing 1 transaction every few seconds) so the dashboard looks like it's watching real-time traffic, not replaying a static table.

### Day 1–2: Problem definition + data
- Pick 4 concrete risk signals to implement (don't do generic "ML fraud score"):
  1. Velocity — too many transactions from same user/device in short window
  2. Geo mismatch — billing location vs IP/device location
  3. Ticket size anomaly — value far outside user's historical average
  4. New-device + high-value combo
- Clean and load your dataset into MongoDB. Write the schema (transaction, user history, device info).

### Day 3–5: Backend — rules engine + LLM layer
- Build a scoring function: each rule contributes weighted points → total risk score (0–100).
- Threshold logic: score > 70 = "block", 40–70 = "hold for review", <40 = "allow".
- On flag, call Gemini with a structured prompt: transaction data + which rules fired → get back a plain-English explanation and a recommended action.
- **Fallback**: if the LLM call fails or times out, fall back to a templated explanation built from which rules fired (exactly like your GenRx Llama3 fallback). This is a real production pattern — mention it explicitly, it signals reliability thinking.
- Log latency for every scoring + explanation call (you'll want this number for the pitch).

### Day 6–7: Frontend dashboard
- Live feed table: transaction ID, amount, risk score (color-coded badge), status.
- Click a row → side panel shows the LLM's reasoning and recommended action.
- Analyst can click Approve/Block — store the decision (shows human-in-the-loop, not full automation, which is the honest and safer framing for a risk product).
- A small metrics panel: total transactions processed, % flagged, average explanation latency, rule-trigger breakdown chart.

### Day 8: Deploy + test
- Deploy backend to Render, frontend to Vercel. Test the full flow live, not just on localhost — judges will click the link.
- Fix edge cases: LLM timeout, empty states, mobile responsiveness (panel may view on a phone).

### Day 9: README + architecture diagram
- One diagram: `Data source → Rules Engine → Risk Score → LLM Explanation Layer (w/ fallback) → Dashboard → Analyst Action`
- State your numbers: avg scoring latency, avg LLM explanation latency, % of flagged transactions, false-positive tradeoffs you observed.
- Write a short "What I'd do with production-scale data" section — this is what turns a demo into something that reads like product thinking.

### Day 10: Record the pitch (script below) + do 2–3 practice run-throughs out loud before recording final take.

### Remaining days before Sept 5: Interview prep — rehearse answering "why this architecture," "how would this scale," "what breaks first" out loud, not just in your head.

---

## 3. Five-Minute Pitch Script (timed)

*Read this out loud once to check your pacing — aim for ~140–150 words/minute. Adjust to your natural speaking style; this is a scaffold, not a script to memorize word-for-word.*

**[0:00–0:20] Hook + who you are**
> "Hi, I'm Sameer Maurya, a third-year IT student at ABES Engineering College. I want to start with something I noticed while building this: the same architecture I used to explain clinical genetic risk to doctors — a rules engine feeding an LLM explanation layer — is exactly what's needed to explain fraud risk to a payments analyst. That realization is why I built SentinelPay."

**[0:20–0:50] The problem**
> "Razorpay processes billions of dollars in transactions. Every one of those carries fraud risk, and today a lot of that review is manual — an analyst looking at a flagged transaction with no context beyond a number. That's slow, and it's hard to trust a score you can't interrogate. SentinelPay is an agent that doesn't just flag a transaction — it explains, in plain language, exactly why, and recommends what to do about it."

**[0:50–2:20] Live demo (90 sec)**
> *(Screen recording of the dashboard)*
> "Here's the live feed — transactions streaming in real time. This one just got flagged: ticket size 8x the user's average, from a new device, in a geography that doesn't match their billing history. Watch what happens when I click it — [click] — the system doesn't just show a number, it shows the reasoning: 'This transaction was flagged due to an unusual combination of new-device access and a transaction value significantly above the user's historical pattern. Recommended action: hold for manual review.' An analyst can approve or block right here, and that decision gets logged. On the metrics side, average scoring latency is [X]ms, and LLM explanation latency is [Y]ms — fast enough to sit in a real review queue, not slow it down."

**[2:20–3:50] Architecture (90 sec)**
> "Under the hood: transactions come in, hit a rules engine — I'm scoring on four signals: velocity, geo mismatch, ticket size anomaly, and new-device-plus-high-value. That produces a risk score. If it crosses a threshold, I call an LLM to generate the human-readable explanation and recommendation. And critically — if that LLM call fails or times out, there's a fallback that builds a templated explanation from which rules fired, so the system never just... goes silent. That fallback pattern is something I learned building GenRx, a clinical decision system I built earlier this year with a Gemini-plus-Llama3 fallback chain for 100% response reliability. I'm applying the same reliability thinking here, because a risk system that goes down when the LLM API hiccups isn't a risk system you can trust."

**[3:50–4:50] What I'd build next / ownership signal**
> "If I were building this inside Razorpay, the next step is obvious: replace my four hand-picked rules with the actual historical fraud patterns you already have — this becomes far more powerful with real transaction-scale data instead of a Kaggle dataset. I'd also add a feedback loop where an analyst's approve/block decisions retrain the rule weights over time, so the system gets sharper the more it's used. This is the part I'm most excited about — not the demo I built in a week, but the system it becomes with real scale and real feedback."

**[4:50–5:00] Close**
> "I built this in about a week, end to end, because I wanted to show — not just tell you — that I can take an ambiguous problem and ship a working system around it. That's what I want to keep doing here. Thanks for watching."

*(Adjust the [X]ms / [Y]ms placeholders to your actual measured numbers before recording.)*

---

## 4. How to convince the panel to take you

Razorpay's stated culture (from their careers page): **ownership over micromanagement, people over pedigree, curiosity as the entry bar.** Your talking points should map directly onto that, not onto generic "I'm a hard worker" language.

**Opening framing for the interview:** Don't wait to be asked — proactively say what you'd change now that you've built SentinelPay once. This single move (showing hindsight and iteration instinct) is one of the strongest signals you can give, because it's exactly the "own the outcome" behavior they describe wanting.

**Likely questions and how to anchor answers:**

| Question | Anchor your answer in |
|---|---|
| "Why this architecture and not a pure ML classifier?" | Explainability — an analyst needs to *trust* a decision, not just see a number. Reference your GenRx experience explaining risk to non-technical clinicians. |
| "How would this scale to 10M transactions/day?" | Talk about batching LLM calls, caching explanations for repeated rule-combinations, and only calling the LLM for borderline/high-value cases rather than every flagged transaction. |
| "What breaks first?" | Be honest — likely the LLM API rate limit / latency under load. Explain your fallback already handles this gracefully. Honesty about weak points reads better than pretending it's bulletproof. |
| "Walk me through your GenRx project." | Have this tight and ready — VCF parser → risk engine → LLM explanation → dashboard, 6 drug-gene pairs, 100% reliability via fallback chain. This is your strongest existing proof point. |
| "Why do you want this internship specifically?" | Tie it to ownership: you want to build something that ships and is used, not something graded and shelved. Mention their "you own the full loop" framing directly — it shows you read and understood their pitch, not just applied blindly. |

**Also bring up, unprompted, if it doesn't come up naturally:**
- Your Razorpay payment integration in the Nursery e-commerce platform (signature verification, real checkout flow) — you've already shipped *with their actual product*, which very few applicants will be able to say.
- 1000+ DSA problems solved, 1835 LeetCode rating — use only if a fundamentals/system-design question comes up, don't force it in.

**Tone to aim for:** calm, specific, comfortable saying "I don't know, but here's how I'd find out" if something genuinely stumps you. Razorpay's culture description explicitly says interns question CXOs and get thanked for it — confidence paired with intellectual honesty is what they're filtering for, not a polished non-answer.