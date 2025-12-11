# 📑 AtmoTrack — Final Product Requirements Document (PRD)
**Phase 3 — Final Version**

---

## 1. Product Overview (Updated)

AtmoTrack is an AI-powered nutrition and symptom-tracking companion designed for individuals using GLP-1 medications such as semaglutide and tirzepatide. Patients on these therapies frequently experience appetite changes, nausea, slowed gastric motility, and inconsistent responses to dosage adjustments. Many lack day-to-day dietary guidance, while clinicians lack structured symptom data that links meals, dosing, and GI outcomes.

AtmoTrack addresses this gap by providing personalized dietary guidance, meal tracking, and symptom interpretation for patients, combined with clinician-friendly data insights about patterns, adherence, and potential motility issues. The prototype currently offers a functional AI assistant that generates meal recommendations, helps interpret user-entered symptoms, and explains potential links between diet, medication timing, and GLP-1 effects.

---

## 2. Core Features & Status

### Must-Have / Core Features

| Feature | Description | Status | AI-Driven? |
| --- | --- | ---: | :---: |
| AI dietary guidance | Personalized meal suggestions based on symptoms, appetite, GLP-1 effects | Implemented | Yes |
| Symptom interpretation | User inputs nausea, fullness, constipation, etc. and the AI explains likely causes | Implemented | Yes |
| User prompt interface | Clear, simple input area for logging meals and symptoms | Implemented | Partially |
| Guidance on gastric motility | AI provides behavior tips (timing, pacing, hydration) | Implemented | Yes |

### Secondary / Nice-to-Have Features

| Feature | Description | Status | AI-Driven? |
| --- | --- | ---: | :---: |
| Clinician data dashboard | Visual summaries of symptom trends | Future | Yes |
| Adaptive meal plan templates | Personalized schedules that evolve based on logs | Future | Yes |
| Logging history | Save meal entries long-term | Future | No |
| Visual motility graph | Interprets symptoms into a simplified motility estimate | Future | Yes |

---

## 3. AI Specification (Final)

### AI Tasks

The AI in AtmoTrack performs three primary tasks:

**Dietary Recommendation Generation**
- Generates low-GI, small-portion, motility-friendly meal suggestions.
- Tailors to symptoms such as nausea, early satiety, or constipation.

**Symptom Interpretation & Guidance**
- Accepts free-text symptom descriptions.
- Interprets possible GLP-1-related causes.
- Provides immediate suggestions that support patients (hydration, fiber adjustments, pacing).

**Education on GLP-1 Physiology**
- Produces easy-to-understand explanations about appetite suppression, delayed gastric emptying, and medication timing.

### AI Inputs
- Free-text from user (meals, symptoms, concerns)  
- Optional structured keywords (“nausea”, “fullness”, etc.)  
- User questions (“why am I bloated today?”)

### AI Outputs
- Meal recommendations  
- Explanation of symptom patterns  
- Behavior guidance  
- Educational snippets  
- Safety reminders

### AI Model + Tooling
- **Model:** Gemini model via Google AI Studio  
- **Framework:** No external backend; all inference occurs within AI Studio prompt flow

**Model Behavior Setup**
- Content filters: no diagnosis, no medication instructions  
- Style: supportive, simple, non-medical, and patient-friendly

### Guardrails / Boundaries
- Avoids providing clinical diagnoses  
- Avoids medication changes or dosing advice  
- Encourages clinician consultation when symptoms are severe or persistent  
- Uses safe, general health-education-level language  
- Meal suggestions remain “advice-neutral” (not prescriptive, not medical)

---

## 4. Technical Architecture (Reality Check)

### Front-End
- Built in Google AI Studio App Builder  
- Customizable prompt window for user input  
- Predefined system instruction prompting  
- Basic HTML/CSS elements (AI Studio default template)

### Back-End
- None: serverless architecture  
- AI responses generated directly from AI Studio environment  
- No data is stored between sessions

### External Tools
- Google AI Studio (Gemini API)  
- GitHub for version control

**Flow Diagram:**
User Input → AI Studio Prompt → Gemini Model → Processed Response → UI Output to User

---

## 5. Prompting & Iteration Summary

Throughout development, several prompting strategies shaped the AI’s behavior.

### Key Prompt Iterations

**Initial System Prompt**
- Focused on “AI nutrition assistant.”
- Too generic; added GLP-1 specificity.

**Revised Prompt**
- Added symptoms, motility context.
- Ensured explanations remained non-medical.

**Final Prompt**
- Clarifies:
  - Use patient-friendly tone
  - Offer dietary guidance
  - Explain symptom patterns without diagnosing
  - Include gentle safety reminders

### What I Learned
- The more explicit the constraints, the safer the AI becomes.  
- Prompt length was less important than clarity.  
- Tone, guardrails, and “don’t do X” instructions dramatically improved reliability.  
- Iteration is essential; many outputs only became consistent after refining the system instructions.

---

## 6. UX & Limitations

### Intended User Journey
1. User opens the AtmoTrack app  
2. Reads short instructions  
3. Enters a symptom, meal, question, or concern  
4. AI responds with:
   - Dietary suggestions
   - Symptom interpretations
   - Behavior or pacing recommendations  
5. User may enter follow-up questions

### Known Limitations
- No persistent data storage  
- No real clinician dashboard yet  
- No structured logging history  
- AI sometimes gives overly general explanations  
- Prototype is designed for temporary educational use — not as a medical tool

### Ethical Considerations
- Avoids medicalization or diagnosis  
- Protects user privacy (no data stored)  
- Encourages professional care for serious symptoms  
- Ensures suggestions remain general lifestyle guidance

---

## 7. Future Roadmap
- Build a clinician-facing symptom dashboard  
  - Trend graphs, motility indicators, adherence overview
- Adaptive, personalized meal plan engine  
  - Evolves recommendations based on user logs
- Symptom-motility scoring system  
  - Lightweight estimate based on AI-interpreted patterns
- User account system with secure data storage  
  - Enables tracking over time
- Evaluation and safety framework  
  - Designing guardrails, boundaries, and misuse prevention


