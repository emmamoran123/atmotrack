# 📑 Product Requirements Document (PRD)

## 1. Project Overview
- **Summary:**  
  AtmoTrack is an AI-powered nutrition and symptom tracking companion for individuals using GLP-1 medications.  
  It provides personalized dietary guidance and tracking to help patients manage appetite, meals, and GI symptoms, while offering clinicians data-driven insights into symptom trends, dosing response, and adherence to treatment regimens.

- **Context/Background:**  
  GLP-1 medications (like Ozempic, Wegovy, and Mounjaro) are transforming diabetes and obesity care, but many users experience GI side effects that make adherence difficult.  
  AtmoTrack bridges the gap between clinical care and daily nutrition by using AI to generate adaptive meal plans and visualize symptom and motility trends.

---

## 2. Goals and Objectives
- **Primary Goal(s):**  
  - Empower GLP-1 users to make informed dietary choices based on symptoms and dosing.  
  - Provide AI-generated, balanced, and easy-to-digest meal plans tailored to medication response.  

- **Secondary Goal(s):**  
  - Offer clinicians a clear view of patient adherence and symptom patterns.  
  - Lay groundwork for future integration with connected motility tracking devices and clinical systems.

---

## 3. Target Audience
- **Who are the users?**  
  - Adults using GLP-1 medications for diabetes or weight management.  
  - Clinicians monitoring patient response and adherence.

- **User Needs:**  
  - Simple, personalized meal planning guidance that accounts for GI symptoms.  
  - Easy logging of symptoms and medication dosing.  
  - Visualization of trends and progress over time.  
  - Clinician-facing insights to support patient monitoring.

---

## 4. Key Features / Requirements
- **Must-Have Features:**  
  - AI-generated meal plans based on user symptoms and dosing.  
  - Symptom logging (e.g., appetite, energy, nausea, bloating, bowel movements).  
  - Dosing tracker for GLP-1 brand, dose, and schedule.  
  - Motility insights with visualized dummy data for gastric emptying and transit time.  
  - History view for meal, symptom, and motility trends.  
  - “About” page with privacy and disclaimer information.  

- **Nice-to-Have Features (Optional):**  
  - Chatbot Q&A interface for AI-based diet coaching.  
  - PDF export or sharing options.  
  - Integration with wearables or clinical motility data.  

---

## 5. Design & User Experience
- **Visual Style / Vibe:**  
  Professional, calm, and health-focused. Clean interface with soft colors and rounded cards.  

- **Branding / Colors / Fonts:**  
  - Primary color: teal/blue gradient for trust and calmness.  
  - Accent color: light coral for highlights and alerts.  
  - Fonts: Sans-serif (e.g., Inter, Lato).  

- **Accessibility Considerations:**  
  - High-contrast text and icons.  
  - Alt text for all non-decorative images.  
  - Large buttons and form elements for mobile users.  

---

## 6. Content Requirements
- **Pages / Sections:**  
  - Home  
  - Meal Plan  
  - Dosing Tracker  
  - Symptom Log  
  - Motility Insights  
  - About  

- **Specific Content to Include:**  
  - Explanations of how AI is used in the app.  
  - Disclaimers about non-medical advice.  
  - Sample outputs for meal plans and insights.  
  - Placeholder or dummy data where applicable.

---

## 7. Technical Constraints
- **Technology Stack:**  
  - Frontend: HTML, CSS, JavaScript (static web app).  
  - AI Integration: Google AI Studio (Gemini 1.5).  
  - Charting: Chart.js (for motility visualization).  

- **Hosting / Deployment:**  
  - GitHub Pages (free, public hosting).  
  - Version control via GitHub repository.  

- **Performance / Security Requirements:**  
  - Must load in under 3 seconds on mobile.  
  - Fully mobile responsive.  
  - Include clear privacy disclaimer (no real medical data stored).

---

## 8. Out of Scope
- Real medical diagnostics or advice.  
- Integration with live clinical or wearable APIs (Phase 3 goal).  
- User authentication or cloud data sync (prototype phase).  

---

## 9. Acceptance Criteria
- Loads and functions correctly on desktop and mobile.  
- Symptom, dosing, and motility sections save and display data.  
- AI meal plan generator returns functional, structured results.  
- Accessible design verified (color contrast and tab navigation).  
- README.md and PRD are complete and updated in GitHub repo.

---
