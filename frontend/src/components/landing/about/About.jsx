import React from "react";
import AboutContent from "./AboutContent";
import AboutFlowGraphic from "./AboutFlowGraphic";

const About = () => (
  <section id="about" className="section about-section">
    <div className="section-container">
      <div className="about-layout-grid">
        <AboutContent />
        <AboutFlowGraphic />
      </div>
    </div>
  </section>
);

export default About;
