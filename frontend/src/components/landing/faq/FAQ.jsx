import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqData from "./faqData";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="section-container">
        <div className="section-header-centered">
          <span className="section-badge badge-mint">Help &amp; Answers</span>
          <h2 className="section-title">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="section-description">
            Everything you need to know before getting started. Can't find your
            answer? Our support team is here to help.
          </p>
        </div>

        <div className="faq-accordion-container">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`faq-chevron ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer-content">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
