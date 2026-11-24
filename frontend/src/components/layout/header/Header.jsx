import React from 'react';
import Navbar from '../navbar/Navbar';
import TopBanner from './TopBanner';

const Header = () => {
  return (
    <header className="site-header">
      <TopBanner />
      <Navbar />
    </header>
  );
};

export default Header;
