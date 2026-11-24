import React, { useState } from "react";
import FAQHeader from "./FAQHeader";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section faq-section">
      <div className="section-container">
        <FAQHeader />
        <FAQAccordion
          openIndex={openIndex}
          onToggle={(idx) => setOpenIndex(openIndex === idx ? null : idx)}
        />
      </div>
    </section>
  );
};

export default FAQ;
