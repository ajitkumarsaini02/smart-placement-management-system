import React from "react";
import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-container">
      <HeroContent />
      <HeroPreview />
    </div>
  </section>
);

export default Hero;
