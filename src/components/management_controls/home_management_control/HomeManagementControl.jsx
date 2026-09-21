import React from 'react';
import { Home } from 'lucide-react';

export default function HomeManagementControl({ onClick = () => {} }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/90 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(11,59,115,0.09)] hover:border-blue-300 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex items-center gap-3.5 group select-none min-h-[82px]"
    >
      {/* Left Icon Badge */}
      <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-500 border border-rose-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
        <Home size={22} strokeWidth={2.2} />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-center min-w-0 flex-1">
        <h4 className="text-[13px] font-black text-[#0B3B73] tracking-tight uppercase group-hover:text-[#1D6CE0] transition-colors line-clamp-1 leading-snug">
          Home Management Control
        </h4>
        <p className="text-[10.5px] text-slate-500 font-medium line-clamp-2 leading-[1.35] mt-0.5">
          Configure hero slider banners, announcements ticker, quick links, and featured portal widgets.
        </p>
      </div>
    </div>
  );
}
