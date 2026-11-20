import React from "react";
import { Database, GitPullRequest, Eye } from "lucide-react";
import AboutFlowGraphic from "./AboutFlowGraphic";

const highlights = [
  {
    id: 1,
    icon: <Database size={22} className="about-icon" />,
    title: "Centralized Information",
    description:
      "Single source of truth for company job descriptions, student records, and placement criteria.",
  },
  {
    id: 2,
    icon: <GitPullRequest size={22} className="about-icon" />,
    title: "Better Coordination",
    description:
      "Synchronized communication between students, faculty coordinators, and corporate HR teams.",
  },
  {
    id: 3,
    icon: <Eye size={22} className="about-icon" />,
    title: "Transparent Tracking",
    description:
      "Clear, auditable progress for every application stage with zero lost circulars or confusion.",
  },
];

const About = () => (
  <section id="about" className="section about-section">
    <div className="section-container">
      <div className="about-layout-grid">
        <div className="about-content">
          <span className="section-eyebrow">Our Mission</span>
          <h2 className="section-title">
            Making Campus Placements More Organized and Transparent.
          </h2>
          <p className="about-lead-paragraph">
            PlaceTrack was conceived to solve the fundamental friction of
            traditional college placements. By replacing scattered spreadsheets,
            delayed email notices, and manual eligibility checks, we provide an
            integrated digital hub that empowers every participant in the
            recruitment ecosystem.
          </p>
          <div className="about-highlights-list">
            {highlights.map((item) => (
              <div key={item.id} className="about-highlight-item">
                <div className="about-highlight-icon-box">{item.icon}</div>
                <div className="about-highlight-details">
                  <h4 className="about-highlight-title">{item.title}</h4>
                  <p className="about-highlight-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <AboutFlowGraphic />
      </div>
    </div>
  </section>
);

export default About;
