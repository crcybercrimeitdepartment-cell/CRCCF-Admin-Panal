import React from 'react';
import { UserCheck, Settings, History, ShieldCheck, Shield, Users, Key, Activity } from 'lucide-react';

const colorThemes = {
  blue: { iconBg: 'bg-gradient-to-br from-[#1D6CE0] to-[#0B3B73]', text: 'text-[#1D6CE0]', borderHover: 'border-[#1D6CE0]/50', glow: 'from-[#1D6CE0]/15', stripes: 'from-[#1D6CE0] to-[#0B3B73]' },
  indigo: { iconBg: 'bg-gradient-to-br from-[#6366f1] to-[#4338ca]', text: 'text-[#4f46e5]', borderHover: 'border-[#4f46e5]/50', glow: 'from-[#6366f1]/15', stripes: 'from-[#6366f1] to-[#4338ca]' },
  emerald: { iconBg: 'bg-gradient-to-br from-[#10b981] to-[#047857]', text: 'text-[#059669]', borderHover: 'border-[#059669]/50', glow: 'from-[#10b981]/15', stripes: 'from-[#10b981] to-[#047857]' },
  violet: { iconBg: 'bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9]', text: 'text-[#7c3aed]', borderHover: 'border-[#7c3aed]/50', glow: 'from-[#8b5cf6]/15', stripes: 'from-[#8b5cf6] to-[#6d28d9]' },
  rose: { iconBg: 'bg-gradient-to-br from-[#f43f5e] to-[#be123c]', text: 'text-[#e11d48]', borderHover: 'border-[#e11d48]/50', glow: 'from-[#f43f5e]/15', stripes: 'from-[#f43f5e] to-[#be123c]' },
  amber: { iconBg: 'bg-gradient-to-br from-[#f59e0b] to-[#b45309]', text: 'text-[#d97706]', borderHover: 'border-[#d97706]/50', glow: 'from-[#f59e0b]/15', stripes: 'from-[#f59e0b] to-[#b45309]' },
  cyan: { iconBg: 'bg-gradient-to-br from-[#06b6d4] to-[#0e7490]', text: 'text-[#0891b2]', borderHover: 'border-[#0891b2]/50', glow: 'from-[#06b6d4]/15', stripes: 'from-[#06b6d4] to-[#0e7490]' }
};

const Card = ({ title, description, Icon, theme = 'blue', onClick }) => {
  const t = colorThemes[theme];
  return (
    <div 
      onClick={onClick}
      className="group relative flex flex-col sm:flex-row bg-white rounded-[18px] sm:rounded-[24px] border border-slate-100 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.04)] sm:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden p-3 sm:p-5 sm:pr-12 min-h-[160px] isolate"
    >
      {/* Top Left Glow */}
      <div className={`absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br ${t.glow} to-transparent rounded-full blur-3xl -z-10`} />
      
      {/* Top Right Glow */}
      <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl ${t.glow} to-transparent rounded-full blur-3xl -z-10`} />

      {/* Bottom Left Stripes */}
      <div className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden rounded-bl-[24px] -z-10">
        <div className={`absolute bottom-[-10px] left-[-20px] w-40 h-6 -rotate-45 bg-gradient-to-r ${t.stripes} opacity-[0.08]`} />
        <div className={`absolute bottom-[-24px] left-[-20px] w-40 h-6 -rotate-45 bg-gradient-to-r ${t.stripes} opacity-[0.15]`} />
        <div className={`absolute bottom-[-38px] left-[-20px] w-40 h-6 -rotate-45 bg-gradient-to-r ${t.stripes} opacity-[0.25]`} />
      </div>

      {/* Giant Watermark Icon Bottom Right */}
      <Icon size={120} strokeWidth={1.5} className={`absolute -bottom-6 -right-6 ${t.text} opacity-[0.04] -z-10 -rotate-12`} />

      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 relative z-10 w-full h-full">
        {/* Left Icon Box */}
        <div className="flex items-center justify-between sm:block">
          <div className={`w-[38px] h-[38px] sm:w-[60px] sm:h-[60px] rounded-[13px] sm:rounded-[18px] ${t.iconBg} flex items-center justify-center shrink-0 shadow-md sm:shadow-lg text-white group-hover:scale-105 transition-transform duration-300`}>
            <Icon size={20} className="sm:hidden" strokeWidth={2} />
            <Icon size={28} className="hidden sm:block" strokeWidth={2} />
          </div>
          <div className={`sm:hidden w-6 h-6 rounded-full ${t.iconBg} flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform`}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 mt-0.5">
          <h3 className="text-[11px] sm:text-[14px] font-black text-[#1e293b] uppercase tracking-wide leading-snug line-clamp-2 mb-1.5 group-hover:text-[#0f172a]">
            {title}
          </h3>
          <p className="text-[10px] sm:text-[11.5px] text-slate-500 font-medium leading-[1.4] line-clamp-2 mb-4">
            {description}
          </p>
          
          {/* View Details Button */}
          <div className="mt-auto">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-solid ${t.borderHover} ${t.text} text-[8.5px] sm:text-[10px] font-bold uppercase tracking-wider bg-white/50 backdrop-blur-sm group-hover:bg-white transition-colors`}>
              View Details <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </span>
          </div>
        </div>
      </div>

      {/* Right Circle Arrow */}
      <div className={`hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full ${t.iconBg} items-center justify-center text-white shadow-md transition-transform group-hover:translate-x-1`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </div>
    </div>
  );
};

const superAdminCards = [
  { id: 'profile', title: 'Super Admin Profile', description: 'Manage executive officer credentials, contact records, personal verification, and bio.', Icon: UserCheck, theme: 'blue' },
  { id: 'account', title: 'Super Admin Account', description: 'Configure administrator email, system username, billing tier, and account preferences.', Icon: Settings, theme: 'indigo' },
  { id: 'activity', title: 'Super Admin Activity', description: 'Audit trail logs, configuration change history, command execution timestamps, and traces.', Icon: History, theme: 'cyan' },
  { id: 'security', title: 'Super Admin Security', description: 'Multi-factor authentication (MFA), cryptographic keys, password rotation, and SSL rules.', Icon: ShieldCheck, theme: 'emerald' },
  { id: 'sub-admin', title: 'Sub Admin Access Control', description: 'Assign regional sub-admin permissions, departmental privilege roles, and scoping rules.', Icon: Shield, theme: 'violet' },
  { id: 'user-mgmt', title: 'User Management Control', description: 'Manage citizen accounts, police officer accounts, KYC approvals, and active credentials.', Icon: Users, theme: 'rose' },
  { id: 'system-access', title: 'System Access Control', description: 'IP address whitelisting, firewall rules, server gateway access, and API token controls.', Icon: Key, theme: 'amber' },
  { id: 'active-sessions', title: 'Super Admin Active Sessions', description: 'Live concurrent login sessions, device fingerprints, geo-location tracking, and instant revoke.', Icon: Activity, theme: 'emerald' },
];

import PageHeaderWithBack from '../common/PageHeaderWithBack';

export default function SuperadminControl({ onBack }) {
  return (
    <div className="w-full max-w-[1720px] mx-auto px-2.5 sm:px-6 lg:px-8 py-6">
      <PageHeaderWithBack
        title="Super Admin Control"
        description="Manage executive officer access, monitor active system sessions, configure system-wide security policies, and govern sub-admin privileges. Ensure absolute administrative oversight through comprehensive logs and authentication tracking."
        onBack={onBack}
        backLabel="Back"
      />

      {/* 8 Super Admin Cards in 4-Cards-Per-Row Layout */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
        {superAdminCards.map((card) => (
          <Card 
            key={card.id} 
            title={card.title}
            description={card.description}
            Icon={card.Icon}
            theme={card.theme}
            onClick={() => console.log(`Clicked ${card.id}`)} 
          />
        ))}
      </div>
    </div>
  );
}
