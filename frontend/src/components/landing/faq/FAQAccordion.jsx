import React from "react";
import { ChevronDown } from "lucide-react";
import faqData from "./faqData";

const FAQAccordion = ({ openIndex, onToggle }) => (
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
            onClick={() => onToggle(index)}
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
);

export default FAQAccordion;
