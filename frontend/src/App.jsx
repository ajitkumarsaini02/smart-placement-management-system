import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TopRecruiters from './components/TopRecruiters';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import OpportunityModal from './components/OpportunityModal';
import './App.css';

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isOpportunityModalOpen, setIsOpportunityModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAF7] text-slate-600 flex flex-col antialiased selection:bg-teal-100 selection:text-teal-900">
      {/* 1. Navbar */}
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* Main Home Page Content */}
      <main className="grow">
        {/* 2. Hero Section */}
        <Hero
          onOpenOpportunities={() => setIsOpportunityModalOpen(true)}
        />

        {/* 3. Statistics Section */}
        <Statistics />

        {/* 4. Features Section */}
        <Features onSelectFeature={() => setIsDemoModalOpen(true)} />

        {/* 5. How It Works */}
        <HowItWorks onOpenDemo={() => setIsDemoModalOpen(true)} />

        {/* 6. Top Recruiters */}
        <TopRecruiters />

        {/* 7. Why Choose PlaceTrack */}
        <WhyChooseUs onOpenDemo={() => setIsDemoModalOpen(true)} />

        {/* 8. Student Testimonials */}
        <Testimonials />

        {/* 9. FAQ Section */}
        <FAQ />

        {/* 10. Final CTA */}
        <CTA onOpenDemo={() => setIsDemoModalOpen(true)} />
      </main>

      {/* 11. Footer */}
      <Footer onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <OpportunityModal
        isOpen={isOpportunityModalOpen}
        onClose={() => setIsOpportunityModalOpen(false)}
      />
    </div>
  );
}

export default App;
