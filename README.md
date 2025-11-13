# AtmoTrack

AtmoTrack is an AI-powered nutrition and symptom tracking companion for individuals using GLP-1 medications.
It provides personalized dietary guidance and tracking to help patients manage appetite, meals, and GI symptoms, while offering clinicians data-driven insights into symptom trends, dosing response, and adherence to treatment regimens.
Through adaptive meal planning, symptom logging, and motility visualization, AtmoTrack bridges the gap between everyday nutrition support and clinical data monitoring.

---

## Key Features

- **Symptom Log:**  
  Track appetite, energy, bloating/gas, cramps, nausea, and bowel movements using simple 1–5 or severity scales.

- **Motility Insights:**  
  View dummy gastric emptying and transit time data, with visual graphs and AI-generated insights.

- **Adaptive Meal Planning:**  
  AI-generated 2-day meal plans tailored to user symptoms and motility patterns, including meal breakdowns and grocery lists.

- **Dosing Tracker:**  
  Log GLP-1 RA medication brand, dosage, and timing to correlate with symptom patterns.

- **Chat Assistant:**  
  Ask AtmoTrack about symptom management, nutrition guidance, or how to interpret data.

---

## AI Component

AtmoTrack uses **Google Gemini 1.5 Pro** in AI Studio to:
- Generate personalized meal plans based on user-entered symptoms.
- Provide natural-language summaries and dietary insights.
- Simulate motility-based data interpretations using dummy variables.

**Sample AI prompts used in development:**
1. “Generate a one-day meal plan for a GLP-1 medication user focusing on small, high-protein meals that are easy to digest.”
2. “Refine the meal plan format to show breakfast, lunch, dinner, ingredients, calories, and grocery list.”
3. “Add a ‘Motility Insights’ tab that shows dummy gastric emptying rate and transit time data with AI-generated insights.”

---

## How It Works

1. The user logs symptoms and dosage.
2. AI interprets symptom trends and motility data.
3. A tailored meal plan is generated to minimize discomfort and support nutritional needs.
4. Data and insights are saved for review under each section’s **History** view.

---

## Technology Stack

- **Frontend:** HTML, CSS, JavaScript  
- **AI Platform:** Google Gemini (AI Studio)  
- **Version Control:** GitHub  
- **Optional Hosting:** GitHub Pages or Google AI Studio preview

---

## How to View or Run

GitHub Pages:  
[https://github.com/emmamoran123/atmotrack.git]

Google AI Studio:  
[https://aistudio.google.com/apps/drive/1oeKsXjpV9xi3507L1Rvcr5xRIW9Yw4x9?showAssistant=true&resourceKey=&showCode=true]

---

## Developer Notes

This prototype was built as part of a design and AI integration project.  
All data (including motility readings) are dummy placeholders for demonstration purposes only.  
Future integration will include real device outputs and refined AI-diet feedback loops.

---

## Credits

Created by **Emma Moran**  
Powered by **Google Gemini AI Studio**  
