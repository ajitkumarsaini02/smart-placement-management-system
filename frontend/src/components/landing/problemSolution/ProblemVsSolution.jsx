import React from "react";
import ProblemSolutionHeader from "./ProblemSolutionHeader";
import ProblemComparisonGrid from "./ProblemComparisonGrid";

const ProblemVsSolution = () => (
  <section className="section problem-solution-section" id="problem-solution">
    <div className="section-container">
      <ProblemSolutionHeader />
      <ProblemComparisonGrid />
    </div>
  </section>
);

export default ProblemVsSolution;
