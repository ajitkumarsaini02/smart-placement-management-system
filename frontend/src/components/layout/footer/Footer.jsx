import React from 'react';
import { Briefcase, ArrowUp } from 'lucide-react';
import { footerColumns } from './footerLinks';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col-brand">
            <a href="#hero" className="footer-logo">
              <div className="footer-logo-icon"><Briefcase size={20} /></div>
              <span className="footer-brand-name">Place<span className="footer-brand-highlight">Track</span></span>
            </a>
            <p className="footer-tagline">Your Career. Your Placement. One Smart Platform.</p>
            <p className="footer-description">
              A centralized campus placement management platform streamlining the recruitment journey for students, training & placement cells, and global corporate hiring teams.
            </p>
          </div>

          {footerColumns.map((col, idx) => (
            <div key={idx} className="footer-col">
              <h4 className="footer-col-title">{col.title}</h4>
              <ul className="footer-links">
                {col.links?.map((link, i) => (
                  <li key={i}><a href={link.href} className="footer-link">{link.label}</a></li>
                ))}
                {col.items?.map((item, i) => (
                  <li key={i}><span className="footer-static-item">{item}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 PlaceTrack – Smart Placement Management & Tracking System. All rights reserved.
          </div>
          <div className="footer-bottom-actions">
            <button type="button" onClick={scrollToTop} className="btn-back-to-top" aria-label="Back to top">
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
