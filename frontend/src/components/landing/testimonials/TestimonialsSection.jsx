import React from "react";
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsGrid from "./TestimonialsGrid";

const TestimonialsSection = () => (
  <section className="section testimonials-section" id="testimonials">
    <div className="section-container">
      <TestimonialsHeader />
      <TestimonialsGrid />
    </div>
  </section>
);

export default TestimonialsSection;
