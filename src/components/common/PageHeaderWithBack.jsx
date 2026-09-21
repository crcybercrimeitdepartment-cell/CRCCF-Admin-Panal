import React from 'react';
import GlobalBackButton from './GlobalBackButton';

/**
 * PageHeaderWithBack
 * Unified page header featuring the centered title and section badge,
 * with the GlobalBackButton placed on the top-left side relative to the title.
 */
export default function PageHeaderWithBack({ 
  title, 
  description, 
  sectionNumber = null, 
  onBack = null, 
  backLabel = "Back" 
}) {
  return (
    <div className="relative w-full mb-6 sm:mb-8 mt-1 sm:mt-2">
      {/* Top-Left Back Button moved further to the left */}
      {onBack && (
        <div className="sm:absolute sm:left-0 sm:top-1 z-20 mb-3 sm:mb-0 flex justify-start">
          <GlobalBackButton onClick={onBack} label={backLabel} />
        </div>
      )}

      {/* Centered Title & Description */}
      <div className="flex flex-col items-center text-center max-w-3xl sm:max-w-4xl mx-auto px-4 sm:px-24">
        <div className="flex flex-col items-center mb-3 sm:mb-4">
          {sectionNumber && (
            <div className="flex items-center gap-3 mb-2 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white flex items-center justify-center text-[11px] font-bold shadow-sm">
                {sectionNumber}
              </div>
              <span className="text-[10px] font-bold text-blue-700 tracking-widest uppercase">Section</span>
            </div>
          )}
          <h1 className="text-[26px] sm:text-[32px] md:text-[40px] font-black text-[#192b4d] tracking-tight drop-shadow-sm">
            {title}
          </h1>
        </div>
        {description && (
          <p className="text-[13px] sm:text-[14px] md:text-[15px] text-slate-600 font-medium leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
