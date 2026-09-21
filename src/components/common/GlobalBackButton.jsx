import React from 'react';
import { ArrowLeft } from 'lucide-react';

/**
 * GlobalBackButton
 * Unified global back button used consistently throughout all pages.
 * Positioned on the top-left side with respect to the page title.
 * 
 * @param {Function} onClick - Click handler to navigate back
 * @param {string} [label="Back"] - Optional text label (e.g. "Back")
 * @param {string} [className=""] - Additional Tailwind classes
 */
export default function GlobalBackButton({ 
  onClick, 
  label = "Back", 
  className = "" 
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 bg-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_14px_rgba(11,59,115,0.16)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-[#0B3B73] font-bold text-[13px] sm:text-[15px] group border border-slate-100 cursor-pointer select-none shrink-0 ${className}`}
      aria-label={label}
    >
      <ArrowLeft 
        size={18} 
        strokeWidth={2.5} 
        className="group-hover:-translate-x-1 transition-transform duration-200 text-[#0B3B73]" 
      />
      <span>{label}</span>
    </button>
  );
}
