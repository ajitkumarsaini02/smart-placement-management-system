import React from "react";
import {
  Zap,
  MonitorCheck,
  Radio,
  Sparkles,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";

/**
 * MeasurableResults Section: "Measurable Results From Day One"
 * Direct feature from myleadingcampus.com/training-placement/
 */
const MeasurableResults = () => {
  const results = [
    {
      metric: "80%",
      icon: <Zap size={20} />,
      title: "Faster Placement Operations",
      desc: "Automation eliminates weeks of manual coordination and repetitive spreadsheet data entry.",
    },
    {
      metric: "100%",
      icon: <MonitorCheck size={20} />,
      title: "Digital Placement Process",
      desc: "No paper, no lost spreadsheets, no missed deadlines — fully digital from the very first drive.",
    },
    {
      metric: "Live",
      icon: <Radio size={20} />,
      title: "Real-Time Tracking",
      desc: "Every stakeholder — student, recruiter, placement officer — sees instant round-wise status updates.",
    },
    {
      metric: "3X",
      icon: <Sparkles size={20} />,
      title: "Improved Recruiter Engagement",
      desc: "Self-service recruiter portal and instant shortlist sharing build long-term employer relationships.",
    },
    {
      metric: "35%",
      icon: <TrendingUp size={20} />,
      title: "Higher Placement Rates",
      desc: "Proactive student eligibility matching and automated reminders ensure maximum student participation.",
    },
    {
      metric: "4.9 / 5",
      icon: <HeartHandshake size={20} />,
      title: "Student Satisfaction",
      desc: "Transparent application tracking and feedback capture provide a stress-free campus placement experience.",
    },
  ];

  return (
    <section className="section measurable-results-section" id="results">
      <div className="section-container">
        {/* Header */}
        <div className="section-header-centered">
          <span className="section-badge badge-mint">Proven Impact</span>
          <h2 className="section-title">
            Measurable Results <br />
            <span className="text-primary">From Day One</span>
          </h2>
          <p className="section-description">
            Placement cells using PlaceTrack see real, quantifiable outcomes
            within their very first placement season — not months later.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="measurable-grid">
          {results.map((item, index) => (
            <div key={index} className="measurable-card">
              <div className="measurable-card-top">
                <span className="measurable-metric">{item.metric}</span>
                <div className="measurable-icon-circle">{item.icon}</div>
              </div>
              <h3 className="measurable-title">{item.title}</h3>
              <p className="measurable-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeasurableResults;
