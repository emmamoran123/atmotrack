import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MealPlanner from './components/MealPlanner';
import SymptomTracker from './components/SymptomTracker';
import MotilityInsights from './components/MotilityInsights';
import DosingTracker from './components/DosingTracker';
import About from './components/About';
import { SymptomLog } from './types';
import { DoseLog } from './types';

type Tab = 'Home' | 'Meal Plan' | 'Dosing' | 'Symptom Log' | 'Motility Insights' | 'About';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Home');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [symptomLogs, setSymptomLogs] = useState<SymptomLog[]>([]);
  const [doseLogs, setDoseLogs] = useState<DoseLog[]>([]);

  const handleSaveSymptomLog = (logData: Omit<SymptomLog, 'id'>) => {
    const newLog: SymptomLog = {
      ...logData,
      id: new Date().toISOString() + Math.random(),
    };
    setSymptomLogs(prevLogs => [newLog, ...prevLogs]);
  };
  
  const handleSaveDoseLog = (logData: Omit<DoseLog, 'id'>) => {
    const newLog: DoseLog = {
      ...logData,
      id: new Date().toISOString() + Math.random(),
    };
    setDoseLogs(prevLogs => [newLog, ...prevLogs]);
  };


  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home 
            setActiveTab={setActiveTab} 
            latestDose={doseLogs[0]} 
            latestSymptom={symptomLogs[0]} 
        />;
      case 'Meal Plan':
        return <MealPlanner latestDose={doseLogs[0]} latestSymptom={symptomLogs[0]} />;
      case 'Dosing':
        return <DosingTracker onSave={handleSaveDoseLog} doseLogs={doseLogs} />;
      case 'Symptom Log':
        return <SymptomTracker onSave={handleSaveSymptomLog} symptomLogs={symptomLogs} />;
      case 'Motility Insights':
        return <MotilityInsights />;
      case 'About':
        return <About />;
      default:
        return <Home 
            setActiveTab={setActiveTab} 
            latestDose={doseLogs[0]} 
            latestSymptom={symptomLogs[0]} 
        />;
    }
  };
  
    const PrivacyModal = () => (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 animate-fade-in"
      onClick={() => setIsPrivacyModalOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 md:p-8 relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsPrivacyModalOpen(false)}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
          aria-label="Close privacy statement"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 id="privacy-title" className="text-3xl font-bold text-slate-800 mb-4">Our Commitment to Your Privacy</h2>
        <div className="space-y-4 text-slate-600">
          <p>
            Your trust is our top priority. This statement outlines how we handle your data with care, transparency, and respect.
          </p>
          <div>
            <h3 className="text-lg font-semibold text-slate-700 mb-1">How Your Data Is Used</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>For You, and Only You:</strong> Your personal symptom logs and any connected clinical data (like from a CGM) are used exclusively to generate your personalized meal plans and insights.</li>
              <li><strong>No Third-Party Sharing:</strong> We will never sell or share your personally identifiable data with third parties for marketing or advertising purposes.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-700 mb-1">Security & Anonymization</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Secure Storage:</strong> All data you provide is stored securely using industry-standard encryption to protect it from unauthorized access.</li>
              <li><strong>Improving Our Service:</strong> To improve the AI's accuracy and our app's features, we may analyze data trends. When we do this, all data is fully anonymized and aggregated. This means your personal identity is completely removed, and we only look at broad, non-identifiable patterns.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-700 mb-1">You Are in Control</h3>
            <p>
              You have the right to view, manage, and delete your data within the app. Your health journey is your own, and you should always have control over your information.
            </p>
          </div>
        </div>
        <div className="mt-6 text-right">
          <button
            onClick={() => setIsPrivacyModalOpen(false)}
            className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen font-sans text-slate-800 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
             <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">
              AtmoTrack
            </h1>
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto p-4 md:p-8">
        {renderContent()}
      </main>

      {isPrivacyModalOpen && <PrivacyModal />}

      <footer className="text-center py-4 mt-8">
         <p className="text-slate-500 text-sm">Powered by Gemini AI</p>
         <button
           onClick={() => setIsPrivacyModalOpen(true)}
           className="text-sm text-slate-500 hover:text-teal-600 underline focus:outline-none"
         >
           Privacy Statement
         </button>
      </footer>
    </div>
  );
};

export default App;
