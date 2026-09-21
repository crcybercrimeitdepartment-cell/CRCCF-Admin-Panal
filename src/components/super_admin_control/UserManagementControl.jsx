import React from 'react';
import { Users } from 'lucide-react';

export default function UserManagementControl({ onClick = () => {} }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/90 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(11,59,115,0.09)] hover:border-rose-300 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex items-center gap-3.5 group select-none min-h-[82px]"
    >
      <div className="relative z-10 w-12 h-12 rounded-[14px] bg-gradient-to-br from-rose-50 to-rose-100/50 text-rose-600 border border-rose-200/50 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 ease-out before:absolute before:inset-0 before:rounded-[14px] before:bg-rose-600/0 group-hover:before:bg-rose-600/5 before:transition-colors">
        <Users size={22} strokeWidth={2.2} />
      </div>
      <div className="relative z-10 flex flex-col justify-center min-w-0 flex-1">
        <h4 className="text-[13px] font-black text-[#0B3B73] tracking-tight uppercase group-hover:text-rose-600 transition-colors line-clamp-1 leading-snug">
          User Management Control
        </h4>
        <p className="text-[11px] text-slate-500 font-medium line-clamp-2 leading-relaxed mt-0.5 group-hover:text-slate-600 transition-colors duration-300">
          Manage citizen accounts, police officer accounts, KYC approvals, and active credentials.
        </p>
      </div>
    </div>
  );
}
