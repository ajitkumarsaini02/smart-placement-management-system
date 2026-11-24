import React from 'react';
import { Link } from 'react-router-dom';

export const SplitAuthFooter = () => (
  <footer className="split-auth-footer">
    <span>© 2026 PlaceTrack. All rights reserved.</span>
    <div className="split-footer-links">
      <Link to="/" className="split-footer-link">Home</Link>
      <Link to="/privacy" className="split-footer-link">Privacy Policy</Link>
      <Link to="/terms" className="split-footer-link">Terms of Service</Link>
    </div>
  </footer>
);

export default SplitAuthFooter;
