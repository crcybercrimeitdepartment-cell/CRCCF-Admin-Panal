import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { 
  Search, X, ArrowRight, Shield, Image, FileText, FileCheck, 
  Award, Briefcase, Play, Home, Cpu, Globe, Layers, Users, 
  Activity, Lock, Settings, Zap, Eye, Cloud, Check, BookOpen, 
  Building2, Phone, ShieldAlert, Heart, Calendar, UserCheck, Sparkles, AlertCircle
} from 'lucide-react';
import { searchProject, SEARCH_DATABASE } from '../../constants/searchData';

// Dynamic icon resolver
const iconMap = {
  Shield, Image, FileText, FileCheck, Award, Briefcase, Play, 
  Home, Cpu, Globe, Layers, Users, Activity, Lock, Settings, 
  Zap, Eye, Cloud, Check, BookOpen, Building2, Phone, ShieldAlert, 
  Heart, Calendar, UserCheck
};

const themeColors = {
  blue: { bg: 'bg-blue-50 text-blue-700', iconBg: 'bg-blue-600 text-white', badge: 'bg-blue-100 text-blue-800' },
  indigo: { bg: 'bg-indigo-50 text-indigo-700', iconBg: 'bg-indigo-600 text-white', badge: 'bg-indigo-100 text-indigo-800' },
  emerald: { bg: 'bg-emerald-50 text-emerald-700', iconBg: 'bg-emerald-600 text-white', badge: 'bg-emerald-100 text-emerald-800' },
  violet: { bg: 'bg-purple-50 text-purple-700', iconBg: 'bg-purple-600 text-white', badge: 'bg-purple-100 text-purple-800' },
  rose: { bg: 'bg-rose-50 text-rose-700', iconBg: 'bg-rose-600 text-white', badge: 'bg-rose-100 text-rose-800' },
  amber: { bg: 'bg-amber-50 text-amber-800', iconBg: 'bg-amber-500 text-white', badge: 'bg-amber-100 text-amber-900' },
  cyan: { bg: 'bg-cyan-50 text-cyan-700', iconBg: 'bg-cyan-600 text-white', badge: 'bg-cyan-100 text-cyan-800' }
};

const POPULAR_SUGGESTIONS = [
  'Journey Gallery',
  'Document Verification',
  'Online Applications',
  'Super Admin Control',
  'Cyber Fraud Complaint',
  'Add Photo',
  'Upload Photo',
  'FIR Status',
  'Internship',
  'Training Programs',
  'User Directory',
  'Security & MFA'
];

export default function HeaderSearchBar({ 
  placeholder = "Search records, users, reports...", 
  isMobile = false,
  onSearch = () => {} 
}) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });

  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Filter results
  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchProject(query).slice(0, 15);
  }, [query]);

  // Position calculation for portal/dropdown
  const updateCoords = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        top: Math.round(rect.bottom + 6),
        left: Math.round(rect.left),
        width: Math.round(rect.width)
      });
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      updateCoords();
      window.addEventListener('resize', updateCoords);
      window.addEventListener('scroll', updateCoords, true);
      return () => {
        window.removeEventListener('resize', updateCoords);
        window.removeEventListener('scroll', updateCoords, true);
      };
    }
  }, [isOpen, updateCoords]);

  // Outside click listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      const isInsideContainer = containerRef.current && containerRef.current.contains(e.target);
      const isInsideDropdown = dropdownRef.current && dropdownRef.current.contains(e.target);
      if (!isInsideContainer && !isInsideDropdown) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Scroll active item into view
  useEffect(() => {
    if (dropdownRef.current && selectedIndex >= 0) {
      const activeEl = dropdownRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  // Navigate to target
  const handleSelect = (item) => {
    if (!item || !item.target) return;
    const { scope, view } = item.target;

    try {
      if (scope === 'management') {
        window.dispatchEvent(new CustomEvent('crccf-internal-navigate', { 
          detail: { scope: 'app', view: 'Demo1' } 
        }));
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('crccf-internal-navigate', { 
            detail: { scope: 'management', view: view } 
          }));
        }, 30);
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('crccf-internal-navigate', { 
            detail: { scope: 'management', view: view } 
          }));
        }, 120);
      } else if (scope === 'app') {
        window.dispatchEvent(new CustomEvent('crccf-internal-navigate', { 
          detail: { scope: 'app', view: view } 
        }));
      }
    } catch (err) {
      console.error('Navigation error:', err);
    }

    setIsOpen(false);
    onSearch(item.title);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown') {
        setIsOpen(true);
      }
      return;
    }

    const itemsCount = results.length > 0 ? results.length : POPULAR_SUGGESTIONS.length;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < itemsCount - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : itemsCount - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results.length > 0 && selectedIndex >= 0 && results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      } else if (results.length > 0) {
        handleSelect(results[0]);
      } else if (!query.trim() && selectedIndex >= 0 && POPULAR_SUGGESTIONS[selectedIndex]) {
        setQuery(POPULAR_SUGGESTIONS[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  const renderDropdown = () => {
    if (!isOpen) return null;

    const dropdownContent = (
      <div 
        ref={dropdownRef}
        style={{
          position: 'fixed',
          top: `${coords.top}px`,
          left: `${coords.left}px`,
          width: `${Math.max(coords.width, isMobile ? 280 : 360)}px`,
          zIndex: 99999
        }}
        className="bg-white/98 backdrop-blur-md rounded-2xl border border-blue-200/90 shadow-[0_16px_40px_rgba(11,59,115,0.22)] max-h-[380px] overflow-y-auto no-scrollbar py-2 divide-y divide-slate-100 ring-1 ring-black/5 animate-in fade-in duration-100 select-none"
      >
        {/* State 1: Empty input - show popular suggestions */}
        {!query.trim() ? (
          <div className="p-2 sm:p-2.5">
            <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
              <Sparkles size={12} className="text-amber-500" />
              <span>Suggested Pages & Controls</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {POPULAR_SUGGESTIONS.map((sug, idx) => {
                const isSel = selectedIndex === idx;
                return (
                  <button
                    key={sug}
                    type="button"
                    data-index={idx}
                    onClick={() => {
                      setQuery(sug);
                      if (inputRef.current) inputRef.current.focus();
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                      isSel 
                        ? 'bg-[#1D6CE0] text-white shadow-xs' 
                        : 'bg-blue-50 text-[#1D6CE0] border border-blue-200/70 hover:bg-blue-100'
                    }`}
                  >
                    {sug}
                  </button>
                );
              })}
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-100 px-1 text-[10px] font-medium text-slate-400">
              Type any keyword to search across <strong>{SEARCH_DATABASE.length}</strong> pages, galleries, & controls.
            </div>
          </div>
        ) : results.length === 0 ? (
          /* State 2: No exact match - show message + quick alternative links */
          <div className="p-3.5 text-center">
            <div className="flex items-center justify-center gap-1.5 text-slate-500 mb-1">
              <AlertCircle size={15} className="text-amber-500" />
              <p className="text-[12px] font-bold text-[#0B3B73]">No exact page match for "{query}"</p>
            </div>
            <p className="text-[10.5px] text-slate-400 mb-2.5">Explore these popular sections instead:</p>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {POPULAR_SUGGESTIONS.slice(0, 6).map((sug) => (
                <button
                  key={sug}
                  type="button"
                  onClick={() => {
                    setQuery(sug);
                    if (inputRef.current) inputRef.current.focus();
                  }}
                  className="px-2.5 py-1 rounded-md text-[10.5px] font-semibold bg-blue-50 text-[#1D6CE0] border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
                >
                  {sug}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* State 3: Matched results list */
          <div className="py-1">
            <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Matching Pages ({results.length})</span>
              <span className="text-[9px] lowercase font-normal">Press Enter to open</span>
            </div>
            {results.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              const theme = themeColors[item.theme] || themeColors.blue;
              const IconComponent = iconMap[item.iconName] || Image;

              return (
                <div
                  key={item.id}
                  data-index={idx}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center gap-2.5 px-3 py-2 cursor-pointer transition-colors ${
                    isSelected 
                      ? 'bg-blue-50/90 text-blue-900' 
                      : 'hover:bg-slate-50 text-[#0B3B73]'
                  }`}
                >
                  {/* Left Icon Badge */}
                  <div className={`w-7 h-7 rounded-lg ${theme.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}>
                    <IconComponent size={14} strokeWidth={2.2} />
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 leading-tight">
                      <span className={`px-1.5 py-0.2 rounded text-[8.5px] font-extrabold uppercase tracking-wide ${theme.badge}`}>
                        {item.badge || item.category}
                      </span>
                      {item.hierarchy && item.hierarchy.length > 1 && (
                        <span className="text-[9.5px] text-slate-400 truncate max-w-[160px]">
                          {item.hierarchy[0]} &gt; {item.hierarchy[1]}
                        </span>
                      )}
                    </div>
                    <p className="text-[12px] font-bold truncate mt-0.5 text-[#0B3B73]">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Arrow */}
                  <div className="shrink-0 text-slate-400">
                    <ArrowRight size={13} strokeWidth={2.2} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );

    if (typeof document !== 'undefined') {
      return createPortal(dropdownContent, document.body);
    }
    return dropdownContent;
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${isMobile ? '' : 'max-w-[340px] xl:max-w-[420px]'} shrink-0`}
    >
      {/* =================================================================== */}
      {/* Search Bar Input (100% Identical Visual Style to Original)         */}
      {/* =================================================================== */}
      <div className={`relative w-full shadow-xs rounded-full bg-white border border-slate-200 focus-within:border-[#1D6CE0] focus-within:ring-2 focus-within:ring-[#1D6CE0]/20 transition-all flex items-center overflow-hidden ${isMobile ? 'h-8.5' : 'h-8.5 xl:h-9'}`}>
        <div className={`flex items-center justify-center ${isMobile ? 'pl-3' : 'pl-3.5'} text-[#0B3B73]`}>
          <Search size={14} strokeWidth={2.5} />
        </div>
        
        <input 
          ref={inputRef}
          type="text" 
          placeholder={placeholder}
          value={query}
          onFocus={() => {
            updateCoords();
            setIsOpen(true);
          }}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedIndex(-1);
            updateCoords();
            setIsOpen(true);
            onSearch(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          className={`w-full h-full pl-2.5 pr-2 bg-transparent ${isMobile ? 'text-[12px]' : 'text-[12px] xl:text-[12.5px]'} text-[#0B3B73] placeholder-slate-400 font-medium focus:outline-none`}
        />

        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSelectedIndex(-1);
              if (inputRef.current) inputRef.current.focus();
            }}
            className="p-1 text-slate-400 hover:text-slate-600 transition-colors mr-1 cursor-pointer"
            title="Clear search"
          >
            <X size={13} strokeWidth={2.5} />
          </button>
        )}

        <button
          type="button"
          onClick={() => {
            updateCoords();
            setIsOpen(true);
            if (results.length > 0) {
              handleSelect(results[0]);
            }
          }}
          className={`${isMobile ? 'mr-1.5 px-2.5 py-0.5 text-[10px]' : 'mr-1.5 px-3 py-1 text-[11px]'} rounded-full bg-gradient-to-r from-[#1D6CE0] to-[#0B3B73] text-white font-bold shadow-2xs hover:shadow-xs active:scale-95 transition-all cursor-pointer shrink-0`}
        >
          Search
        </button>
      </div>

      {/* Render the dropdown via portal attached directly below the bar */}
      {renderDropdown()}
    </div>
  );
}
