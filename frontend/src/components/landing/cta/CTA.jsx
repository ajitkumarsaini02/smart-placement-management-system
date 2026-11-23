import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Button from "../../common/Button";

/**
 * CTA Section: Transform Your Training & Placement Process
 * Direct match to myleadingcampus.com/training-placement/
 */
const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        {/* Decorative Background Glows */}
        <div className="cta-glow-circle-1" />
        <div className="cta-glow-circle-2" />

        <div className="cta-content">
          <div className="cta-pill">
            <Sparkles size={14} className="cta-sparkle" />
            <span>Digital Campus Hiring 2026</span>
          </div>

          <h2 className="cta-title">
            Transform Your Training &amp; Placement Process
          </h2>

          <p className="cta-description">
            Join institutions using PlaceTrack to automate recruiter management,
            placement tracking and student hiring workflows.
          </p>

          <div className="cta-trust-items">
            <div className="cta-trust-item">
              <CheckCircle2 size={16} />
              <span>No credit card required</span>
            </div>
            <div className="cta-trust-item">
              <CheckCircle2 size={16} />
              <span>Setup in 48 hours</span>
            </div>
            <div className="cta-trust-item">
              <CheckCircle2 size={16} />
              <span>Dedicated onboarding support</span>
            </div>
          </div>

          <div className="cta-actions">
            <Button
              href="/login"
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={16} />}
              iconPosition="right"
            >
              Get Started For Free
            </Button>
            <Button
              href="/login"
              variant="outline"
              size="lg"
              className="btn-outline-white"
            >
              Access Role Portals
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
