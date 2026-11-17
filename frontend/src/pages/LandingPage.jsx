import React, { useState } from 'react';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import TopRecruiters from '../components/TopRecruiters';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import DemoModal from '../components/DemoModal';
import OpportunityModal from '../components/OpportunityModal';

const LandingPage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isOpportunityModalOpen, setIsOpportunityModalOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onOpenOpportunities={() => setIsOpportunityModalOpen(true)}
      />

      {/* Statistics Section */}
      <Statistics />

      {/* Features Section */}
      <Features onSelectFeature={() => setIsDemoModalOpen(true)} />

      {/* How It Works Section */}
      <HowItWorks onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* Top Recruiters Section */}
      <TopRecruiters />

      {/* Why Choose PlaceTrack Section */}
      <WhyChooseUs onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* Student Testimonials */}
      <Testimonials />

      {/* FAQ Accordion Section */}
      <FAQ />

      {/* Final CTA Banner */}
      <CTA onOpenDemo={() => setIsDemoModalOpen(true)} />

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
};

export default LandingPage;
