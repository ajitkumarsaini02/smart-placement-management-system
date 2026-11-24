import React from "react";
import ResultsHeader from "./ResultsHeader";
import ResultsGrid from "./ResultsGrid";

const MeasurableResults = () => (
  <section className="section measurable-results-section" id="results">
    <div className="section-container">
      <ResultsHeader />
      <ResultsGrid />
    </div>
  </section>
);

export default MeasurableResults;
