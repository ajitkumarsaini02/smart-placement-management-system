import React, { useState } from 'react';
import './item.css';
import { Check, ArrowRight } from 'lucide-react';

const Item = ({ props }) => {
  const [applied, setApplied] = useState(false);

  return (
    <div className="item-card">
      <div className="w-full flex justify-between items-center text-xs text-slate-400">
        <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
          {props.category || 'Placement Drive'}
        </span>
        <span className="text-emerald-600 font-bold">CGPA ≥ {props.cgpa || '7.0'}</span>
      </div>

      <img src={props.image} alt={props.title} className="p-2 bg-slate-50 border border-slate-100" />

      <div className="text-center w-full">
        <h2>{props.title}</h2>
        <p className="text-xs text-slate-500 line-clamp-1">{props.role || 'Software Engineering Role'}</p>
        <h3>Package: ₹{props.price} LPA</h3>
      </div>

      <button
        onClick={() => setApplied(!applied)}
        className={`btn-primary ${applied ? '!bg-emerald-600 hover:!bg-emerald-700' : ''}`}
      >
        {applied ? (
          <>
            <Check className="w-4 h-4 stroke-[3]" />
            <span>Applied Successfully</span>
          </>
        ) : (
          <>
            <span>Apply for Drive</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
};

export default Item;
