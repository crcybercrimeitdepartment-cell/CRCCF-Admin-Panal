import React from 'react';
import { Zap, Eye, Settings, Cloud } from 'lucide-react';
import PageHeaderWithBack from '../../common/PageHeaderWithBack';

const colorThemes = {
  blue: { iconBg: 'bg-gradient-to-br from-[#1D6CE0] to-[#0B3B73]', text: 'text-[#1D6CE0]', borderHover: 'border-[#1D6CE0]/50', glow: 'from-[#1D6CE0]/15', stripes: 'from-[#1D6CE0] to-[#0B3B73]' },
  indigo: { iconBg: 'bg-gradient-to-br from-[#6366f1] to-[#4338ca]', text: 'text-[#4f46e5]', borderHover: 'border-[#4f46e5]/50', glow: 'from-[#6366f1]/15', stripes: 'from-[#6366f1] to-[#4338ca]' },
  emerald: { iconBg: 'bg-gradient-to-br from-[#10b981] to-[#047857]', text: 'text-[#059669]', borderHover: 'border-[#059669]/50', glow: 'from-[#10b981]/15', stripes: 'from-[#10b981] to-[#047857]' },
  violet: { iconBg: 'bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9]', text: 'text-[#7c3aed]', borderHover: 'border-[#7c3aed]/50', glow: 'from-[#8b5cf6]/15', stripes: 'from-[#8b5cf6] to-[#6d28d9]' },
  rose: { iconBg: 'bg-gradient-to-br from-[#f43f5e] to-[#be123c]', text: 'text-[#e11d48]', borderHover: 'border-[#e11d48]/50', glow: 'from-[#f43f5e]/15', stripes: 'from-[#f43f5e] to-[#be123c]' },
  amber: { iconBg: 'bg-gradient-to-br from-[#f59e0b] to-[#b45309]', text: 'text-[#d97706]', borderHover: 'border-[#d97706]/50', glow: 'from-[#f59e0b]/15', stripes: 'from-[#f59e0b] to-[#b45309]' },
  cyan: { iconBg: 'bg-gradient-to-br from-[#06b6d4] to-[#0e7490]', text: 'text-[#0891b2]', borderHover: 'border-[#0891b2]/50', glow: 'from-[#06b6d4]/15', stripes: 'from-[#06b6d4] to-[#0e7490]' }
};

export const GalleryCard = ({ title, description, Icon, theme = 'blue', onClick, index }) => {
  const t = colorThemes[theme] || colorThemes.blue;
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
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-bl-[18px] sm:rounded-bl-[24px] -z-10">
        <div className={`absolute bottom-[-10px] left-[-20px] w-40 h-6 -rotate-45 bg-gradient-to-r ${t.stripes} opacity-[0.08]`} />
        <div className={`absolute bottom-[-24px] left-[-20px] w-40 h-6 -rotate-45 bg-gradient-to-r ${t.stripes} opacity-[0.15]`} />
        <div className={`absolute bottom-[-38px] left-[-20px] w-40 h-6 -rotate-45 bg-gradient-to-r ${t.stripes} opacity-[0.25]`} />
      </div>

      {/* Giant Watermark Icon Bottom Right */}
      {Icon && <Icon size={120} strokeWidth={1.5} className={`absolute -bottom-6 -right-6 ${t.text} opacity-[0.04] -z-10 -rotate-12`} />}

      {/* Top Right Field Number */}
      {index !== undefined && (
        <div className="absolute top-2.5 right-3 sm:top-4 sm:right-5 text-[10px] sm:text-[12px] font-bold text-slate-300">
          #{String(index + 1).padStart(2, '0')}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 relative z-10 w-full h-full">
        {/* Top/Left Icon Box */}
        <div className="flex items-center justify-between sm:block">
          <div className={`w-[38px] h-[38px] sm:w-[60px] sm:h-[60px] rounded-[13px] sm:rounded-[18px] ${t.iconBg} flex items-center justify-center shrink-0 shadow-md sm:shadow-lg text-white group-hover:scale-105 transition-transform duration-300`}>
            {Icon && <Icon size={20} className="sm:hidden" strokeWidth={2} />}
            {Icon && <Icon size={28} className="hidden sm:block" strokeWidth={2} />}
          </div>
          {/* On mobile, small right circle arrow in top row */}
          <div className={`sm:hidden w-6 h-6 rounded-full ${t.iconBg} flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform`}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 mt-0 sm:mt-0.5 sm:pr-8">
          <h3 className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider sm:tracking-widest mb-1 sm:mb-1.5 line-clamp-2">
            {title}
          </h3>
          <p className="text-[11.5px] sm:text-[14px] font-semibold text-[#1e293b] leading-snug line-clamp-2 mb-2.5 sm:mb-4 group-hover:text-black">
            {description}
          </p>
          
          {/* View Details Button */}
          <div className="mt-auto pt-0.5">
            <span className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-solid ${t.borderHover} ${t.text} text-[8.5px] sm:text-[10px] font-bold uppercase tracking-wider bg-white/50 backdrop-blur-sm group-hover:bg-white transition-colors`}>
              View Details <svg width="11" height="11" className="sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </span>
          </div>
        </div>
      </div>

      {/* Right Circle Arrow - Desktop only */}
      <div className={`hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full ${t.iconBg} items-center justify-center text-white shadow-md transition-transform group-hover:translate-x-1`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </div>
    </div>
  );
};

export const defaultPhotoActionCards = [
  { title: 'Add Photo', description: 'Add a new photo to the gallery.', Icon: Zap, theme: 'blue' },
  { title: 'View Photo', description: 'View all photos in this gallery.', Icon: Eye, theme: 'indigo' },
  { title: 'Manage Photo', description: 'Edit or delete existing photos.', Icon: Settings, theme: 'emerald' },
  { title: 'Upload Photo', description: 'Bulk upload photos to the gallery.', Icon: Cloud, theme: 'violet' },
];

export default function GalleryManagementControl({
  title = 'Gallery Management Control',
  description = 'Add, view, manage, and bulk upload photos for the selected gallery.',
  sectionNumber = '24',
  onBack,
  backLabel = 'Back',
  onActionClick,
  actionCards = defaultPhotoActionCards,
  standalone = false,
}) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('crccf-internal-navigate', { detail: { scope: 'management', view: 'gallery' } }));
    }
  };

  const content = (
    <div className="w-full">
      <PageHeaderWithBack
        sectionNumber={sectionNumber}
        title={title}
        description={description}
        onBack={handleBack}
        backLabel={backLabel}
      />

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
        {actionCards.map((card, idx) => (
          <GalleryCard 
            key={idx} 
            index={idx} 
            {...card} 
            onClick={() => {
              if (onActionClick) {
                onActionClick(card.title);
              } else {
                console.log(`Clicked ${card.title} in ${title}`);
              }
            }} 
          />
        ))}
      </div>
    </div>
  );

  if (standalone) {
    return (
      <div 
        className="w-full max-w-[1720px] mx-auto px-2.5 sm:px-6 lg:px-8 py-6 select-none"
        onCopy={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        onSelect={(e) => e.preventDefault()}
      >
        {content}
      </div>
    );
  }

  return content;
}

export { GalleryManagementControl as GalleryPage };
