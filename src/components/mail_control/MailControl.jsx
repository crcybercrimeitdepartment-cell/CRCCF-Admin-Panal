import React from 'react';
import { 
  User, Settings, Shield, EyeOff, Lock, 
  Inbox, Send, XOctagon, History, Filter, Bell,
  Smartphone, Key, ShieldAlert, Activity, Database,
  FileEdit, MailQuestion, Calendar, PenTool
} from 'lucide-react';
import PageHeaderWithBack from '../common/PageHeaderWithBack';
import { useScrollNavigation } from '../common/useScrollNavigation';

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

export default function MailControl({ onBack }) {
  const { currentView, navigateTo, goBack } = useScrollNavigation('main', { scope: 'mail' });

  const mainCards = [
    { id: 'profile', title: 'Email Account Profile', description: 'Manage your email profile, signatures, and personal details.', Icon: User, theme: 'blue' },
    { id: 'settings', title: 'Email Account Settings', description: 'Configure privacy, security, and access controls.', Icon: Shield, theme: 'emerald' },
    { id: 'controls', title: 'Email Account Controls', description: 'Control email account lifecycle and status.', Icon: Settings, theme: 'indigo' },
    { id: 'sending', title: 'Email Sending Controls', description: 'Manage composing, inboxes, and email filters.', Icon: Send, theme: 'violet' },
  ];

  const accountSettingsCards = [
    { title: 'Privacy Settings', description: 'Manage tracking, read receipts, and exposure.', Icon: EyeOff, theme: 'blue' },
    { title: 'Security Settings', description: 'Configure encryption, certificates, and passwords.', Icon: Lock, theme: 'emerald' },
    { title: 'Registered Phone Number', description: 'Update or verify recovery telephone lines.', Icon: Smartphone, theme: 'amber' },
    { title: 'Registered ID Details', description: 'Manage digital ID tokens and corporate credentials.', Icon: Key, theme: 'violet' },
    { title: 'Access Control', description: 'Restrict client logins and protocol authorizations.', Icon: ShieldAlert, theme: 'rose' },
    { title: 'Account Status', description: 'Check suspension, activity, or quota standing.', Icon: Activity, theme: 'cyan' },
    { title: 'Sign-in Activity', description: 'Audit geographical origins and sign-in timeframes.', Icon: History, theme: 'indigo' },
    { title: 'Email Storage Status', description: 'Track quota consumption and archival buckets.', Icon: Database, theme: 'emerald' },
  ];

  const sendingControlCards = [
    { title: 'Inbox Management', description: 'Configure inbox sorting, priority, and views.', Icon: Inbox, theme: 'blue' },
    { title: 'Sent Mail Controls', description: 'Manage retention and tracing for dispatched mail.', Icon: Send, theme: 'emerald' },
    { title: 'Draft Management', description: 'Configure auto-save and message draft states.', Icon: FileEdit, theme: 'indigo' },
    { title: 'Outbox Monitoring', description: 'Inspect outbound queuing and throttled queues.', Icon: MailQuestion, theme: 'amber' },
    { title: 'Scheduled Mails', description: 'Manage timed dispatches and release schedules.', Icon: Calendar, theme: 'cyan' },
    { title: 'Compose Controls', description: 'Set standard fonts, corporate branding, and limits.', Icon: PenTool, theme: 'violet' },
    { title: 'Reject Mail', description: 'View blocked or rejected email attempts.', Icon: XOctagon, theme: 'rose' },
    { title: 'Email Account', description: 'Switch or manage active sending identities.', Icon: User, theme: 'cyan' },
    { title: 'Mail Delete History', description: 'Review logs of deleted emails.', Icon: History, theme: 'amber' },
    { title: 'Email Filters & Rules', description: 'Configure automatic sorting and actions.', Icon: Filter, theme: 'violet' },
    { title: 'Email Notification Settings', description: 'Manage desktop and mobile alerts.', Icon: Bell, theme: 'blue' },
  ];

  const handleMainCardClick = (id) => {
    if (id === 'settings') navigateTo('settings');
    else if (id === 'sending') navigateTo('sending');
    else console.log(`Clicked ${id}`);
  };

  const headerContent = {
    main: {
      title: "Mail Control Center",
      description: "Manage enterprise email configurations, enforce privacy protocols, and monitor outbound communication flow. Configure routing settings, handle multi-user mail distribution, and track system-level message logs for comprehensive email governance."
    },
    settings: {
      title: "Email Account Settings",
      description: "Configure your enterprise email privacy protocols, manage security configurations, update associated phone numbers and IDs, and seamlessly enforce robust access control policies across all user devices."
    },
    sending: {
      title: "Email Sending Controls",
      description: "Govern the entire outbound and inbound email lifecycle. Manage your inboxes, draft new communications, monitor outgoing traffic, manage rejection logs, and configure automated filtering rules and alert notifications."
    }
  };

  const currentHeader = headerContent[currentView] || headerContent.main;

  return (
    <div className="w-full max-w-[1720px] mx-auto px-2.5 sm:px-6 lg:px-8 py-6">
      
      <PageHeaderWithBack
        title={currentHeader.title}
        description={currentHeader.description}
        onBack={currentView !== 'main' ? () => goBack('main') : onBack}
        backLabel="Back"
      />

      {currentView === 'main' && (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
          {mainCards.map((card) => (
            <Card key={card.id} {...card} onClick={() => handleMainCardClick(card.id)} />
          ))}
        </div>
      )}

      {currentView === 'settings' && (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
          {accountSettingsCards.map((card, idx) => (
            <Card key={idx} {...card} onClick={() => console.log(`Clicked ${card.title}`)} />
          ))}
        </div>
      )}

      {currentView === 'sending' && (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
          {sendingControlCards.map((card, idx) => (
            <Card key={idx} {...card} onClick={() => console.log(`Clicked ${card.title}`)} />
          ))}
        </div>
      )}

    </div>
  );
}
