
import React, { useState } from 'react';
import { AppProvider } from './contexts/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Classes from './components/Classes';
import Schedule from './components/Schedule';
import Documents from './components/Documents';
import ChatBotSection from './components/ChatBotSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ViewState } from './types';

// The AppContent component handles the conditional rendering of different views based on the current state.
const AppContent: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header currentView={view} setView={setView} />
      <main className="flex-grow">
        {view === 'home' && <Hero setView={setView} />}
        {view === 'classes' && <Classes />}
        {view === 'schedule' && <Schedule />}
        {view === 'documents' && <Documents />}
        {view === 'chatbot' && <ChatBotSection />}
        {view === 'contact' && <ContactSection />}
      </main>
      <Footer />
    </div>
  );
};

/**
 * The main App component wraps the application with the AppProvider
 * and exports the component as default to fix the import error in index.tsx.
 */
const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
