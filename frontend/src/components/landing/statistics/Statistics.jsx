import React from "react";
import StatCard from "./StatCard";

/**
 * Statistics Section: Dark Emerald Background (#064E3B) with 4 Key Metrics
 */
const Statistics = () => {
  const stats = [
    {
      id: 1,
      number: "100%",
      label: "Digital Process",
      description: "End-to-end paperless placement drives and records",
    },
    {
      id: 2,
      number: "3",
      label: "User Portals",
      description: "Integrated for Students, TPOs, and Recruiters",
    },
    {
      id: 3,
      number: "24/7",
      label: "Placement Tracking",
      description: "Round-the-clock circulars and application updates",
    },
    {
      id: 4,
      number: "1",
      label: "Unified Platform",
      description: "Zero fragmented spreadsheets or manual WhatsApp lists",
    },
  ];

  return (
    <section className="statistics-section">
      <div className="statistics-container">
        {/* Section Heading Header */}
        <div className="section-header-centered dark-header">
          <span className="section-tag-dark">Platform Impact</span>
          <h2 className="section-title text-white">
            Built for Scalable Campus Recruitment
          </h2>
          <p className="section-subtitle text-mint-soft">
            Eliminating coordination bottlenecks with automated eligibility
            checks and live application pipelines.
          </p>
        </div>

        {/* 4 Stat Cards Grid */}
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              number={stat.number}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
