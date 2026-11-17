import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Footer from '../components/Footer';

const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-600 antialiased selection:bg-blue-600 selection:text-white">
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default UserLayout;
