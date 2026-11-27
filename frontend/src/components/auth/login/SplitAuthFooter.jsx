import React from 'react';
import { Link } from 'react-router-dom';

export const SplitAuthFooter = () => (
  <footer className="split-auth-footer">
    <div className="split-auth-credits">
      <p className="split-dev-by">Developed &amp; Maintained By: Ajit Kumar Saini, Aditya Yadav (CSE-11)</p>
      <p className="split-team">Full Stack Development Team</p>
      <p className="split-copyright">© 2026 ABESEC Ghaziabad. All Rights Reserved.</p>
    </div>
    <div className="split-footer-links">
      <Link to="/" className="split-footer-link">Home</Link>
      <Link to="/login" className="split-footer-link">Login</Link>
    </div>
  </footer>
);

export default SplitAuthFooter;
