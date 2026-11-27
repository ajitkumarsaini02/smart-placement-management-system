import React from 'react';
import Header from '../components/layout/header/Header';
import Hero from '../components/landing/hero/Hero';
import ProblemVsSolution from '../components/landing/problemSolution/ProblemVsSolution';
import PlacementWorkflow from '../components/landing/workflow/PlacementWorkflow';
import CoreFeatures from '../components/landing/features/CoreFeatures';
import MeasurableResults from '../components/landing/statistics/MeasurableResults';
import TestimonialsSection from '../components/landing/testimonials/TestimonialsSection';
import FAQ from '../components/landing/faq/FAQ';
import CTA from '../components/landing/cta/CTA';
import LandingFooter from '../components/landing/footer/LandingFooter';

/**
 * Home Page: Full Training & Placement Management Platform (MyLeading Campus Architecture)
 */
const Home = () => {
  return (
    <div className="home-container">
      {/* 1. Header (Top Announcement Banner + Glassmorphic Nav) */}
      <Header />

      {/* Main Landing Page Flow */}
      <main className="main-content">
        {/* 2. Hero Section: Training & Placement Management Made Easy */}
        <Hero />

        {/* 3. The Problem: Your Placement Team Deserves Better Than Excel Sheets */}
        <ProblemVsSolution />

        {/* 4. Interactive 7-Step Placement Pipeline Workflow */}
        <PlacementWorkflow />

        {/* 5. Core Platform Features Grid */}
        <CoreFeatures />

        {/* 6. Measurable Results From Day One */}
        <MeasurableResults />

        {/* 7. Institutional Testimonials */}
        <TestimonialsSection />

        {/* 8. Frequently Asked Questions Accordion */}
        <FAQ />

        {/* 9. Bottom High-Impact CTA Banner */}
        <CTA />
      </main>

      {/* 10. Institutional Footer */}
      <LandingFooter />
    </div>
  );
};

export default Home;
