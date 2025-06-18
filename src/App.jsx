// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import WelcomeSection from './components/WelcomeSection';
import QuickHelp from './components/QuickHelp';
import MainFeatures from './components/MainFeatures.jsx';
import SecondaryFeatures from './components/SecondaryFeatures.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component */}
      <Header />

      {/* Banner Component */}
      <Banner />

      {/* Main Content Area */}
      <main className="p-4">
        {/* Welcome Section Component */}
        <WelcomeSection />

        {/* Quick Help Component */}
        <QuickHelp />

        {/* Main Features Grid Component */}
        <MainFeatures />

        {/* Secondary Features Grid Component */}
        <SecondaryFeatures />

        {/* Placeholder for remaining components */}
        <div className="text-center text-gray-500 py-4">
          <p>More components coming in next steps...</p>
        </div>
      </main>
    </div>
  );
};

export default App;