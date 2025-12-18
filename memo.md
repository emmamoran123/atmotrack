# AtmoTrack: Implementation & Ethics Memo


AtmoTrack was developed as an exploratory prototype to investigate how generative AI can support individuals using GLP-1 medications by translating complex physiological effects into actionable, everyday guidance. Throughout the build process, AI was not only a feature of the final product, but also a core collaborator in design, iteration, and technical execution. This memo reflects on how AI was used in practice, why the AI feature was designed the way it was, the ethical and technical trade-offs involved, and what I learned about building responsibly with generative AI tools.

I primarily used Google AI Studio (Gemini) as both a development and ideation partner. AI Studio was used to generate early UI scaffolding, React component logic, and prompt-based AI behaviors. For example, AI helped generate initial React components for tabbed navigation, symptom input controls, and state management patterns. It was also used extensively to draft and refine system prompts that would later define the behavior of the AI assistant within the app.

Beyond code generation, AI was used for copywriting and UX refinement, including onboarding language, symptom labels, disclaimers, and educational explanations. This was particularly helpful in a healthcare-adjacent context, where wording needs to be clear, empathetic, and non-alarmist. AI outputs often provided a strong first draft, but nearly all copy required human editing to ensure tone, safety, and clarity.

Human judgment was most important when deciding what AI should **not** do (e.g., diagnosing conditions or suggesting medication changes), when simplifying overly complex AI-generated designs, and to ensure that the final UI matched how real patients would realistically interact with the product. Rather than accepting AI output wholesale, I treated it as a collaborator whose suggestions needed filtering, constraint, and contextual grounding.


The core AI feature in AtmoTrack focuses on interpreting symptoms and generating adaptive dietary guidance rather than providing medical advice or predictive analytics. This choice was intentional. GLP-1 users frequently struggle with day-to-day decisions around eating, appetite, and GI discomfort, and this is an area where generative AI can provide immediate, personalized support without crossing into clinical decision-making.

More ambitious AI features such as automated diagnosis, dose optimization, or real-time clinical decision support were deliberately scoped out. These would require validated datasets, regulatory oversight, and clinician-in-the-loop systems that go far beyond a classroom prototype. Instead, I focused on an AI role that is educational, supportive, and transparent. The AI currently connects to the core value proposition by helping users make sense of how their symptoms, meals, and medication timing interact. While it does not yet fully close the loop (e.g., via persistent learning over time or real sensor data), the prototype demonstrates a believable and defensible foundation for future expansion.


From an ethical standpoint, the most significant risks involve over-reliance on AI, privacy, and medical misinterpretation. To mitigate these risks, explicit design constraints were added at both the prompt and UI level. The AI is instructed not to diagnose conditions, recommend medication changes, or present itself as a medical authority. The app reinforces this limitation through disclaimers and by encouraging clinician consultation for persistent or severe symptoms.

Privacy was addressed by intentionally not storing user data persistently. All symptom and dosing logs exist only in local session memory. While this limits long-term usefulness, it ensures that the prototype does not mishandle sensitive health information. This trade-off reflects a prioritization of ethical caution over feature completeness.

Bias and fairness were considered primarily in terms of generalizability. Because the AI relies on large language model training data rather than population-specific clinical datasets, its outputs may not reflect all dietary cultures, access constraints, or health conditions. This reinforces the decision to frame outputs as general guidance rather than personalized medical recommendations.

From an academic integrity perspective, AI was used transparently and reflectively. All AI-generated code and text were reviewed, edited, and integrated by me, and the final design decisions reflect my own judgment. AI functioned as a tool and collaborator, not a substitute for understanding.


The biggest surprise in this project was how much constraint improves quality. Early prompts that were broad or underspecified produced generic or unsafe outputs. As prompts became more explicit, defining tone, exclusions, structure, and boundaries, the AI became significantly more reliable and useful.

One lesson I would teach another founder is to treat prompt design as a form of product design. The behavior of an AI system is not accidental; it is shaped directly by the assumptions, limits, and intentions encoded in its instructions.

This project also changed how I think about AI in future ventures. Rather than viewing AI as a way to replace human expertise, I now see it as a powerful layer for translation and sensemaking to help users navigate complexity without removing human judgment. In a healthcare-adjacent context especially, responsible AI design is less about maximizing intelligence and more about defining appropriate boundaries.

AtmoTrack represents an early but thoughtful exploration of how generative AI can support patient experience without overstepping ethical or technical limits. By focusing on guidance, interpretation, and education, and by explicitly constraining AI behavior, the prototype demonstrates a responsible approach to building with AI. The lessons learned from this project will directly inform how I approach future capstone work and real-world AI-enabled products.
