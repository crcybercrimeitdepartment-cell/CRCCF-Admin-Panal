import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function ReportCrimeManagementControl({ onClick = () => {} }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/90 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(239,68,68,0.12)] hover:border-red-300 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex items-center gap-3.5 group select-none min-h-[82px]"
    >
      {/* Left Icon Badge */}
      <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 border border-red-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
        <ShieldAlert size={22} strokeWidth={2.2} />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-center min-w-0 flex-1">
        <h4 className="text-[13px] font-black text-[#0B3B73] tracking-tight uppercase group-hover:text-red-600 transition-colors line-clamp-1 leading-snug">
          Report Crime Management Control
        </h4>
        <p className="text-[10.5px] text-slate-500 font-medium line-clamp-2 leading-[1.35] mt-0.5">
          Process incident complaints, financial cyber frauds, emergency frozen accounts, and FIR intake.
        </p>
      </div>
    </div>
  );
}
