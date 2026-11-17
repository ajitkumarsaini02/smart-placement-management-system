import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="max-w-md mx-auto text-center py-20 px-4">
      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 font-black text-2xl">
        404
      </div>
      <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
        Page Not Found
      </h2>
      <p className="text-xs text-slate-500 mb-6">
        The placement page or resource you are looking for does not exist or has been relocated.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-2xs"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
