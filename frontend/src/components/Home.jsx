import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main className="w-full grow min-h-[calc(100vh-190px)] bg-slate-50/50">
      <Outlet />
    </main>
  );
};

export default Home;
