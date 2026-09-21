import React from 'react';
import { Settings } from 'lucide-react';

export default function SuperAdminAccount({ onClick = () => {} }) {
  return (
    <div 
      onClick={onClick}
      className="relative overflow-hidden bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(11,59,115,0.12)] hover:border-[#1D6CE0]/30 transition-all duration-400 hover:-translate-y-1 cursor-pointer flex items-center gap-4 group select-none min-h-[86px] isolate"
    >
      {/* Decorative background gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent" />
      <div className="relative z-10 w-12 h-12 rounded-[14px] bg-gradient-to-br from-indigo-50 to-indigo-100/50 text-indigo-600 border border-indigo-200/50 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 ease-out before:absolute before:inset-0 before:rounded-[14px] before:bg-indigo-600/0 group-hover:before:bg-indigo-600/5 before:transition-colors">
        <Settings size={22} strokeWidth={2.2} />
      </div>
      <div className="relative z-10 flex flex-col justify-center min-w-0 flex-1">
        <h4 className="text-[13px] font-extrabold text-[#0B3B73] tracking-wide uppercase transition-all duration-300 line-clamp-1 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0B3B73] group-hover:to-[#1D6CE0]">
          Super Admin Account
        </h4>
        <p className="text-[11px] text-slate-500 font-medium line-clamp-2 leading-relaxed mt-0.5 group-hover:text-slate-600 transition-colors duration-300">
          Configure administrator email, system username, billing tier, and account preferences.
        </p>
      </div>
    </div>
  );
}
