# 📑 AtmoTrack: Final Product Requirements Document (PRD)
**Phase 3 — Final Version**

---

## 1. Product Overview

AtmoTrack is a prototype digital companion designed to explore how gastrointestinal symptom patterns, dosing context, and (eventually) objective motility data could be translated into practical support for patients using GLP-1 medications such as semaglutide and tirzepatide. While these therapies can be life-changing, gastrointestinal side effects are a common reason for discontinuation, often without sufficient tools to help patients understand or manage them.

The current prototype focuses on patient-facing support through symptom logging, dosing tracking, and AI-assisted interpretation that provides dietary guidance and educational context around GLP-1-related motility changes. Rather than functioning as a medical decision tool, AtmoTrack demonstrates how structured inputs and generative AI can help make complex physiological effects more understandable and actionable for everyday use by patients.

AI in AtmoTrack is intentionally constrained to act as a translation and guidance layer. It provides general lifestyle and dietary suggestions while avoiding diagnosis, treatment decisions, or medication recommendations. The product serves as a proof-of-concept for how clinically validated motility data could eventually be incorporated into safer, more supportive digital experiences.


---

## 2. Core Features & Status

| Feature | Description | Status | AI-driven? |
|---------|------------|--------|------------|
| Symptom Log | Users log appetite, nausea, bloating, bowel movements, and other GI symptoms | Implemented | No |
| Adaptive Meal Guidance | AI generates meal suggestions based on symptoms | Implemented | Yes |
| Motility Insights (Dummy) | Displays simplified gastric emptying and transit time patterns | Partially Implemented | Yes |
| Dosing Tracker | Log GLP-1 medication brand, dose, and timing | Implemented | No |
| Ask AtmoTrack | Explains how symptoms, meals, and medication timing interact | Implemented | Yes |
| Clinician Dashboard | Visualize symptom trends and correlations | Future | Yes |
| Persistent User Accounts | Save symptom logs for clinician sharing | Future | No |


---

## 3. AI Specification

**What the AI does:**
- **Generates personalized meal plans** (Breakfast / Lunch / Dinner + ingredient list + grocery summary) tailored to the user’s latest symptom and dosing inputs.
- **Interprets symptom entries** and returns short, non-diagnostic explanations (e.g., “Symptoms consistent with delayed gastric emptying: consider smaller, lower-fat meals”).
- **Produces motility-style insights** from dummy sensor values (for demo purposes).

**Inputs:** latest symptom controls (sliders/chips/radios), latest dosing entry, optional free-text question.  
**Outputs:** structured meal plan text (meals + calories/grocery list), short guidance sentences, and educational reminders.

**Model & Tooling:** Gemini model via **Google AI Studio** (prompt-driven; no custom backend). The app integrates AI responses produced in AI Studio and surfaces them in the Meal Plan and Insights pages.

**Guardrails / Constraints:**
- The AI is constrained to **educational guidance only** (explicit instructions in prompts to avoid diagnosis or dose change instructions).
- The UI displays a safety disclaimer and encourages users to consult clinicians for serious symptoms.
- No patient-identifying data is exported or shared by the prototype.

---

## 4. Technical Architecture

**Frontend**
- React app (single-page multi-tab navigation using components: `Home`, `MealPlan`, `Dosing`, `SymptomLog`, `MotilityInsights`, `About`).
- State: `symptomLogs` and `doseLogs` are stored in React state (session). No database.

**Backend**
- None for this prototype. AI inference is done via Google AI Studio (Gemini) outside the app; integration is prompt/response oriented.

**Data Flow:**
User interacts with UI (sliders/radios/dose form) →
App collects latest values in React state →
App constructs prompt (or uses saved AI Studio response) →
Gemini returns text (meal plan / insight) →
App displays structured output to user


---

## 5. Prompting & Iteration Summary

**Key prompts used:**
1. “Generate a one-day meal plan for a GLP-1 medication user. Small, high-protein, easy-to-digest meals, include calories and grocery list.”  
2. “Given user symptom ratings (appetite, energy, nausea severity, bowel movement), return an adaptive meal plan and a 1-2 sentence rationale.”  
3. “Produce a short motility insight sentence given dummy gastric emptying and transit time values.”

**Iteration Notes:** Prompts were refined to (a) include GLP-1 context and specific drugs, (b) ban diagnostic language, and (c) force structured outputs (Breakfast:, Lunch:, Dinner:, Grocery:). Short, explicit guardrail lines produced the most reliable outputs.

---

## 6. UX and Limitations 

**Intended flow:** User opens app → logs dose and symptoms → clicks “Generate Meal Plan” → receives meal plan + grocery list + insight → optionally views history.

**Known limitations:**
- Logs are stored only in-memory (session lost on refresh).  
- No clinician dashboard or secure database yet.  
- Motility data is simulated (dummy values); real device integration is future work.  
- AI output quality fot 'Ask AtmoTrack' depends on prompt quality and may be generic at times.

---

## 7. Future Roadmap
- Add persistent storage (secure, opt-in) for longitudinal tracking.  
- Build clinician dashboard with aggregated trends and exportable reports.  
- Integrate real motility device data and tune AI prompts on real-world signals.  
- Implement safe evaluation framework (metrics, user testing, clinical review).

---



