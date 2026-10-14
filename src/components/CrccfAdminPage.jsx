/**
 * @file crccf.jsx
 * @description Global shared UI components for Crccf.
 *
 * Exports:
 *  - `ToolCard` (default)  — Home dashboard card for each intelligence category
 *  - Icon wrapper functions — Thin Lucide-React wrappers used in data/crccf.js
 *  - `Header`              — Top application bar with logos, title, and search
 *  - `Footer`              — Full-width dark footer with links, stats, and social icons
 *
 * Design conventions:
 *  - Cards use alternating slide-in animations (left/right) per row pair.
 *  - SVG `animate-draw-line` class traces the card border on hover.
 *  - All components are fully responsive (mobile-first Tailwind breakpoints).
 */
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PhoneCall, UserCheck, User, FileSpreadsheet, Search, Globe, Share2, Car, Building2, Landmark, Mail, ShieldAlert, Map, GraduationCap, Stethoscope, ShieldCheck, Navigation, Hotel, Fuel, Cpu, ChevronRight, Lock, Zap, Heart, Calendar, Clock, MessageSquare, HelpCircle, History, CreditCard, Train, AlertTriangle, Settings, Bell, LayoutDashboard, Layers, LogOut, Coins, Users, MessageCircle, Camera, Hash, Briefcase, Send, Smartphone, PlaySquare, FileText, Activity, Key, Shield, FileSignature, MapPin, TrendingUp, GitMerge, Grid, BarChart, FileCheck, Book, Scale, Gavel, FileSearch, AlertCircle, Bookmark, Scroll, Folder, Database, Info, BookOpen, Flame, Plane, ShoppingCart, Baby, Award, Rocket, Copyright, Lightbulb, Ship, Utensils, Pill, Factory, Store, Wine, PiggyBank, Handshake, ScanLine, Wind, CheckCircle, Home, Target, Shuffle, Filter, Scissors, ClipboardList, LineChart, UserPlus, UserMinus, UserX, Moon, PlayCircle, Network, Crosshair, Eye, Flag, Star, Brain, LifeBuoy, Phone, CalendarCheck, X } from 'lucide-react';
import Cloudinary from '../constants/Cloudinary';
import HeaderSearchBar from './common/HeaderSearchBar';

const cyberCrimeLogo = Cloudinary.logo;
const crccfLogoHeader = Cloudinary.logo;
const crccfLogoFooter = Cloudinary.logo;

// Reusable Officer Information Card Content (Prevents duplicate code & keeps data in sync)
function OfficerInfoContent({ currentOfficer, isMobile = false }) {
  if (isMobile) {
    return (
      <div className="grid grid-cols-2 gap-2 text-[10px] text-[#0B3B73]">
        <div className="flex flex-col">
          <span className="text-slate-400 font-semibold text-[8.5px]">Officer:</span>
          <span className="font-extrabold text-[#0B3B73] truncate" title={currentOfficer.officerName || currentOfficer.name || "Rajesh Kumar"}>
            {currentOfficer.officerName || currentOfficer.name || "Rajesh Kumar"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-slate-400 font-semibold text-[8.5px]">Dept:</span>
          <span className="font-bold text-[#0B3B73] truncate" title={currentOfficer.department || "Cyber Crime Cell"}>
            {currentOfficer.department || "Cyber Crime Cell"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-slate-400 font-semibold text-[8.5px]">Designation:</span>
          <span className="font-extrabold text-[#0B3B73]">{currentOfficer.designation || "Director"}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-slate-400 font-semibold text-[8.5px]">Category:</span>
          <span className="font-bold text-[#0B3B73]">{currentOfficer.category || "Class-I"}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-slate-400 font-semibold text-[8.5px]">Role:</span>
          <span className="px-2 py-0.5 rounded-md bg-[#1D6CE0] text-white text-[8px] font-black tracking-wider uppercase shadow-xs w-fit">
            {currentOfficer.role || "SUPER ADMIN"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-slate-400 font-semibold text-[8.5px]">Emp ID:</span>
          <span className="font-bold font-mono text-[#1D6CE0] bg-blue-50 px-1.5 py-0.5 rounded-md border border-blue-200 text-[8.5px] shadow-2xs w-fit">
            {currentOfficer.empId || "CR-8094"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full sm:w-auto max-w-full mx-auto bg-white/95 backdrop-blur-md px-3 sm:px-3.5 xl:px-5 py-1.5 md:py-1.5 xl:py-2 rounded-2xl border border-blue-200/90 shadow-[0_4px_14px_rgba(11,59,115,0.08)] text-[#0B3B73]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-y-1.5 sm:gap-y-2 gap-x-2.5 sm:gap-x-3.5 xl:gap-x-5 text-[10px] xl:text-[11.5px]">
        
        {/* Column 1: Officer Name & Department */}
        <div className="flex flex-col justify-center gap-1 border-r border-slate-200/80 pr-2.5 sm:pr-3.5 xl:pr-5">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="text-slate-400 font-semibold text-[9px] xl:text-[10px]">Officer:</span>
            <span className="font-extrabold text-[#0B3B73] max-w-[100px] sm:max-w-[120px] xl:max-w-[150px] truncate" title={currentOfficer.officerName || currentOfficer.name || "Rajesh Kumar"}>
              {currentOfficer.officerName || currentOfficer.name || "Rajesh Kumar"}
            </span>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap text-[9.5px] xl:text-[10.5px]">
            <span className="text-slate-400 font-semibold text-[8.5px] xl:text-[9.5px]">Dept:</span>
            <span className="font-bold text-[#0B3B73] max-w-[100px] sm:max-w-[120px] xl:max-w-[150px] truncate" title={currentOfficer.department || "Cyber Crime Cell"}>
              {currentOfficer.department || "Cyber Crime Cell"}
            </span>
          </div>
        </div>

        {/* Column 2: Designation & Category */}
        <div className="flex flex-col justify-center gap-1 border-r border-slate-200/80 pr-2.5 sm:pr-3.5 xl:pr-5">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="text-slate-400 font-semibold text-[9px] xl:text-[10px]">Designation:</span>
            <span className="font-extrabold text-[#0B3B73]">{currentOfficer.designation || "Director"}</span>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap text-[9.5px] xl:text-[10.5px]">
            <span className="text-slate-400 font-semibold text-[8.5px] xl:text-[9.5px]">Category:</span>
            <span className="font-bold text-[#0B3B73]">{currentOfficer.category || "Class-I"}</span>
          </div>
        </div>

        {/* Column 3: Role Badge & Emp ID */}
        <div className="flex flex-col justify-center gap-1">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="text-slate-400 font-semibold text-[9px] xl:text-[10px]">Role:</span>
            <span className="px-2 py-0.5 rounded-md bg-[#1D6CE0] text-white text-[8.5px] xl:text-[9.5px] font-black tracking-wider uppercase shadow-xs">
              {currentOfficer.role || "SUPER ADMIN"}
            </span>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap text-[9.5px] xl:text-[10.5px]">
            <span className="text-slate-400 font-semibold text-[8.5px] xl:text-[9.5px]">Emp ID:</span>
            <span className="font-bold font-mono text-[#1D6CE0] bg-blue-50 px-1.5 py-0.5 rounded-md border border-blue-200 text-[9px] xl:text-[10px] shadow-2xs">
              {currentOfficer.empId || "CR-8094"}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export function Header({ searchQuery = "", onSearchChange = () => { }, onHeaderIconClick = () => { }, selectedPage = null, onHomeClick = () => { }, officerInfo = null }) {
  const [showOfficerInfoMobile, setShowOfficerInfoMobile] = useState(false);

  // Dynamic Officer / User Details (Can be passed via props or loaded from sessionStorage)
  const defaultOfficer = {
    role: "SUPER ADMIN",
    officerName: "Rajesh Kumar",
    designation: "Director",
    department: "Cyber Crime Cell",
    category: "Class-I",
    empId: "CR-8094"
  };

  const currentOfficer = (() => {
    if (officerInfo && typeof officerInfo === 'object') {
      return { ...defaultOfficer, ...officerInfo };
    }
    try {
      const stored = sessionStorage.getItem('currentUser') || sessionStorage.getItem('officerInfo');
      if (stored) {
        return { ...defaultOfficer, ...JSON.parse(stored) };
      }
    } catch {
      // fallback
    }
    return defaultOfficer;
  })();

  // 8 Control buttons for Mobile in the exact requested order
  const mobileControlButtons = [
    { id: 'SuperAdminControl', label: 'Super Admin', Icon: Shield, onClick: () => onHeaderIconClick('SuperAdminControl') },
    { id: 'MailControl', label: 'Mail', Icon: Mail, onClick: () => onHeaderIconClick('MailControl') },
    { id: 'SoftwareControl', label: 'Software', Icon: Cpu, onClick: () => onHeaderIconClick('SoftwareControl') },
    { id: 'UserControl', label: 'User', Icon: Users, onClick: () => onHeaderIconClick('UserControl') },
    { id: 'DashboardControl', label: 'Dashboard', Icon: LayoutDashboard, onClick: () => onHeaderIconClick('DashboardControl') },
    { id: 'Demo1', label: 'Demo 1', Icon: Home, onClick: () => onHeaderIconClick('Demo1') },
    { id: 'Demo2', label: 'Demo 2', Icon: Layers, onClick: () => onHeaderIconClick('Demo2') },
    { 
      id: 'Logout', 
      label: 'Logout', 
      Icon: LogOut, 
      isLogout: true, 
      onClick: () => { 
        sessionStorage.removeItem('isAuthenticated'); 
        sessionStorage.removeItem('currentUser');
        sessionStorage.setItem('crccf_nav_app', 'Login');
        window.dispatchEvent(new CustomEvent('crccf-internal-navigate', { detail: { scope: 'app', view: 'Login' } }));
        if (typeof onHeaderIconClick === 'function') {
          onHeaderIconClick('Login');
        }
      } 
    },
  ];

  return (
    <header className="w-full relative font-sans z-50">
      
      {/* ========================================================================= */}
      {/* 📱 MOBILE VIEW ONLY (md:hidden)                                           */}
      {/* Restructured: Header Row -> Search Bar -> 8 Control Icons in Single Row    */}
      {/* ========================================================================= */}
      <div className="flex md:hidden flex-col w-full bg-gradient-to-b from-[#F0F5FA] to-[#E2EDF8] border-b border-slate-300 shadow-sm relative pt-2 pb-1.5 gap-1.5">
        
        {/* 1. MOBILE HEADER: [ Logo ] [ CR CYBER CRIME ] [ Info/Profile Icon ] */}
        <div className="flex items-center justify-between w-full px-2.5 relative z-20">
          {/* Logo on LEFT */}
          <div className="cursor-pointer shrink-0" onClick={onHomeClick}>
            <img 
              src={cyberCrimeLogo} 
              alt="CRCCF Badge" 
              className="w-9.5 h-9.5 min-[375px]:w-10 min-[375px]:h-10 object-contain drop-shadow-sm transition-transform active:scale-95" 
            />
          </div>

          {/* "CR CYBER CRIME" & Subtitle in CENTER */}
          <div className="flex flex-col items-center justify-center flex-1 px-1 min-w-0">
            <h1 className="text-[14.5px] min-[360px]:text-[16px] min-[393px]:text-[17px] font-black text-[#0B3B73] tracking-wide text-center uppercase drop-shadow-2xs leading-none">
              CR CYBER CRIME
            </h1>
            <p className="text-[#0B3B73] font-extrabold text-[6.5px] min-[360px]:text-[7.5px] min-[393px]:text-[8.5px] uppercase tracking-[0.05em] min-[360px]:tracking-[0.08em] mt-1 text-center leading-tight whitespace-nowrap">
              SUPER ADMIN CONTROL MANAGEMENT SYSTEM
            </p>
          </div>

          {/* Info/Profile Icon on RIGHT */}
          <button
            type="button"
            onClick={() => setShowOfficerInfoMobile(prev => !prev)}
            aria-label="Toggle Officer Information"
            className={`w-9 h-9 min-[375px]:w-9.5 min-[375px]:h-9.5 rounded-full flex items-center justify-center shrink-0 transition-all cursor-pointer ${
              showOfficerInfoMobile
                ? 'bg-[#1D6CE0] text-white shadow-md scale-105 ring-2 ring-[#1D6CE0]/30'
                : 'bg-[#E5EEFA] text-[#0B3B73] hover:bg-[#D0E3F5] active:scale-95 shadow-inner'
            }`}
          >
            <User size={18} strokeWidth={2.2} />
          </button>
        </div>

        {/* Officer Information Card Modal/Popover (Toggled on Info Icon click) */}
        {showOfficerInfoMobile && (
          <>
            {/* Backdrop to close when clicking outside */}
            <div 
              className="fixed inset-0 bg-slate-900/35 backdrop-blur-xs z-40"
              onClick={() => setShowOfficerInfoMobile(false)}
            />
            {/* Popover Card */}
            <div className="absolute top-[52px] left-2.5 right-2.5 z-50 bg-white/95 backdrop-blur-md rounded-2xl border border-blue-200/90 shadow-2xl p-3 text-[#0B3B73] animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-blue-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1D6CE0]"></span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0B3B73]">
                    Officer Information
                  </span>
                </div>
                <button 
                  type="button"
                  onClick={() => setShowOfficerInfoMobile(false)}
                  className="w-6 h-6 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close officer information"
                >
                  <X size={14} strokeWidth={2.5} />
                </button>
              </div>

              <OfficerInfoContent currentOfficer={currentOfficer} isMobile={true} />
            </div>
          </>
        )}

        {/* 2. SEARCH BAR: Directly below header, full available mobile width with inline dropdown */}
        <div className="w-full px-2.5 relative z-30">
          <HeaderSearchBar 
            isMobile={true} 
            placeholder="Search records, users, reports..." 
            onSearch={onSearchChange} 
          />
        </div>

        {/* 3. EIGHT CONTROL ICONS — SINGLE HORIZONTAL ROW */}
        <div className="w-full px-1 pt-0.5">
          <div className="grid grid-cols-8 gap-0.5 min-[360px]:gap-1 w-full items-start justify-items-center">
            {mobileControlButtons.map((btn) => {
              const isActive = selectedPage === btn.id || (btn.id === 'Demo1' && !selectedPage);
              return (
                <div
                  key={btn.id}
                  onClick={btn.onClick}
                  className="flex flex-col items-center justify-start cursor-pointer group w-full min-w-0 select-none"
                >
                  <div className={`w-[32px] h-[32px] min-[360px]:w-[34px] min-[360px]:h-[34px] min-[393px]:w-[36px] min-[393px]:h-[36px] rounded-full flex items-center justify-center shadow-inner transition-all mb-1 shrink-0 ${
                    btn.isLogout
                      ? 'bg-[#E5EEFA] text-[#0B3B73] active:bg-red-50 active:text-red-600 active:scale-95'
                      : isActive
                        ? 'bg-[#1D6CE0] text-white shadow-[0_3px_8px_rgba(29,108,224,0.4)] scale-105 ring-2 ring-[#1D6CE0]/20'
                        : 'bg-[#E5EEFA] text-[#0B3B73] active:bg-[#D0E3F5] active:scale-95'
                  }`}>
                    <btn.Icon size={15} strokeWidth={2.2} />
                  </div>
                  <div className="h-[18px] flex items-start justify-center w-full">
                    <span className={`text-[6px] min-[360px]:text-[6.5px] min-[393px]:text-[7px] font-bold text-center leading-[1.05] tracking-tight w-full px-0.5 break-words line-clamp-2 ${
                      btn.isLogout ? 'text-[#0B3B73] active:text-red-600' : 'text-[#0B3B73]'
                    }`}>
                      {btn.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 💻 DESKTOP / TABLET VIEW ONLY (hidden md:flex)                           */}
      {/* 100% UNCHANGED: Spacing, dimensions, positioning, components & functions  */}
      {/* ========================================================================= */}
      <div className="hidden md:flex w-full h-auto min-h-[185px] xl:h-[190px] bg-gradient-to-r from-[#F0F5FA] to-[#E2EDF8] flex-row items-center justify-between border-b border-slate-300 shadow-sm relative overflow-visible font-sans py-0 gap-0 z-30">
        
        {/* 1 & 2. Left Section: Logo Badge & 4 Compact Control Cards Grouped Together */}
        <div className="flex flex-row items-center gap-2 xl:gap-3.5 pl-3 pr-0 xl:pl-6 shrink-0 z-10 w-auto">
          <div className="cursor-pointer shrink-0" onClick={onHomeClick}>
            <img src={cyberCrimeLogo} alt="CRCCF Badge" className="w-[80px] h-[80px] xl:w-[94px] xl:h-[94px] object-contain drop-shadow-md transition-all" />
          </div>

          {/* 4 Control Cards - Sized Up & Beautifully Aligned */}
          <div className="flex items-center gap-1.5 xl:gap-2 shrink-0 w-auto overflow-visible py-2 justify-start px-0">
            {[
              { id: 'SuperAdminControl', label: 'SUPER ADMIN\nCONTROL', Icon: Shield },
              { id: 'MailControl', label: 'MAIL CONTROL', Icon: Mail },
              { id: 'SoftwareControl', label: 'SOFTWARE\nCONTROL', Icon: Cpu },
              { id: 'UserControl', label: 'USER CONTROL', Icon: Users }
            ].map((btn) => {
              const isActive = selectedPage === btn.id;
              return (
                <div 
                  key={btn.id}
                  onClick={() => onHeaderIconClick(btn.id)}
                  className="flex flex-col items-center justify-start cursor-pointer group w-[62px] xl:w-[68px] p-1"
                >
                  <div className={`w-[38px] h-[38px] xl:w-[42px] xl:h-[42px] rounded-full flex items-center justify-center shadow-inner transition-all mb-1 shrink-0 ${
                    isActive 
                      ? 'bg-[#1D6CE0] text-white shadow-[0_3px_10px_rgba(29,108,224,0.4)] scale-105 ring-2 ring-[#1D6CE0]/20' 
                      : 'bg-[#E5EEFA] text-[#0B3B73] group-hover:bg-[#D0E3F5] group-hover:scale-105 group-hover:shadow-xs'
                  }`}>
                    <btn.Icon size={18} className="xl:hidden" strokeWidth={2.2} />
                    <btn.Icon size={20} className="hidden xl:block" strokeWidth={2.2} />
                  </div>
                  <div className="h-[23px] xl:h-[25px] flex flex-col justify-start items-center">
                    <span className="text-[7.5px] xl:text-[8.5px] font-bold text-[#0B3B73] tracking-tight text-center leading-[1.15] whitespace-pre-line">
                      {btn.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Center Section: Title, Prominent 2-Row Officer Details & Search Bar */}
        <div className="flex-1 min-w-0 max-w-xl xl:max-w-2xl px-2 mx-1 xl:mx-3 relative z-40 flex flex-col items-center justify-center gap-1.5 xl:gap-2.5 h-full py-1.5">
          {/* Title Block */}
          <div className="flex flex-col items-center">
            <h2 className="text-[21px] xl:text-[25px] font-black text-[#0B3B73] leading-none tracking-wider text-center uppercase drop-shadow-2xs">
              CR CYBER CRIME
            </h2>
            <p className="text-[#0B3B73] font-extrabold text-[10.5px] xl:text-[12px] uppercase tracking-[0.1em] mt-1 text-center">
              SUPER ADMIN CONTROL MANAGEMENT SYSTEM
            </p>
          </div>

          {/* Dynamic Admin Officer Details Card */}
          <OfficerInfoContent currentOfficer={currentOfficer} isMobile={false} />

          {/* Search Bar with inline suggestions dropdown */}
          <HeaderSearchBar 
            isMobile={false} 
            placeholder="Search records, users, reports..." 
            onSearch={onSearchChange} 
          />
        </div>

        {/* 4. Right Menu Buttons (Dashboard Setting, 2 Demo tabs & Logout) */}
        <div className="flex items-center justify-center gap-1 md:gap-1 xl:gap-2 mr-1 xl:mr-2 shrink-0 h-full py-2 z-10 w-auto overflow-visible no-scrollbar px-0">
          {[
            { id: 'DashboardControl', label: 'DASHBOARD\nCONTROL', Icon: LayoutDashboard },
            { id: 'Demo1', label: 'DEMO 1', Icon: Home },
            { id: 'Demo2', label: 'DEMO 2', Icon: Layers }
          ].map((tab) => {
            const isActive = selectedPage === tab.id || (tab.id === 'Demo1' && !selectedPage);
            return (
              <div 
                key={tab.id}
                onClick={() => onHeaderIconClick(tab.id)}
                className="flex flex-col items-center justify-start cursor-pointer group w-[58px] xl:w-[66px] p-0.5"
              >
                <div className={`w-[36px] h-[36px] xl:w-[42px] xl:h-[42px] rounded-full flex items-center justify-center shadow-inner transition-all mb-1 shrink-0 ${
                  isActive 
                    ? 'bg-[#1D6CE0] text-white shadow-[0_3px_10px_rgba(29,108,224,0.4)] scale-105 ring-2 ring-[#1D6CE0]/20' 
                    : 'bg-[#E5EEFA] text-[#0B3B73] group-hover:bg-[#D0E3F5] group-hover:scale-105 group-hover:shadow-xs'
                }`}>
                  <tab.Icon size={17} className="xl:hidden" strokeWidth={2.2} />
                  <tab.Icon size={20} className="hidden xl:block" strokeWidth={2.2} />
                </div>
                <div className="h-[23px] xl:h-[25px] flex flex-col justify-start items-center">
                  <span className="text-[7.5px] xl:text-[8.5px] font-bold text-[#0B3B73] tracking-tight text-center leading-[1.15] whitespace-pre-line">
                    {tab.label}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Logout Button */}
          <div 
            onClick={() => { 
              sessionStorage.removeItem('isAuthenticated'); 
              sessionStorage.removeItem('currentUser');
              sessionStorage.setItem('crccf_nav_app', 'Login');
              window.dispatchEvent(new CustomEvent('crccf-internal-navigate', { detail: { scope: 'app', view: 'Login' } }));
              if (typeof onHeaderIconClick === 'function') {
                onHeaderIconClick('Login');
              }
            }}
            className="flex flex-col items-center justify-start cursor-pointer group w-[54px] xl:w-[62px] p-0.5"
          >
            <div className="w-[36px] h-[36px] xl:w-[42px] xl:h-[42px] rounded-full flex items-center justify-center shadow-inner transition-all mb-1 shrink-0 bg-[#E5EEFA] text-[#0B3B73] group-hover:bg-red-50 group-hover:text-red-600 group-hover:scale-105 group-hover:shadow-xs">
              <LogOut size={16} className="xl:hidden" strokeWidth={2.2} />
              <LogOut size={19} className="hidden xl:block" strokeWidth={2.2} />
            </div>
            <div className="h-[23px] xl:h-[25px] flex flex-col justify-start items-center">
              <span className="text-[7.5px] xl:text-[8.5px] font-bold text-[#0B3B73] group-hover:text-red-600 tracking-tight text-center leading-[1.15] uppercase transition-colors">
                LOGOUT
              </span>
            </div>
          </div>
        </div>

        {/* 5. Far Right Government Emblem Section */}
        <div className="relative h-full w-[185px] xl:w-[215px] shrink-0 block overflow-hidden">
          {/* The solid green background connecting seamlessly with the curve */}
          <div className="absolute inset-y-0 right-0 left-[55px] bg-[#01352A] z-0" />

          {/* The overlapping SVG Swoosh to create the curved flag edge */}
          <div className="absolute left-0 top-0 h-full w-14 z-10 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full drop-shadow-[-3px_0px_6px_rgba(0,0,0,0.15)]">
              {/* The Green Body fill that matches the background */}
              <path d="M100,0 C60,0 60,100 15,100 L100,100 Z" fill="#01352A" />
              
              {/* The Flag Stripes (drawn as thick strokes) */}
              <path d="M100,-2 C58,-2 58,100 13,100" fill="none" stroke="#FF9933" strokeWidth="5" />
              <path d="M100,-7 C54,-7 54,100 9,100" fill="none" stroke="#FFFFFF" strokeWidth="5" />
              <path d="M100,-12 C50,-12 50,100 5,100" fill="none" stroke="#138808" strokeWidth="5" />
            </svg>
          </div>

          {/* Content Layer (Emblem + Government Text) - positioned safely clear of the curve */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center pl-10 xl:pl-12 pr-2.5 xl:pr-3.5 select-none">
            {/* Emblem Icon (using filter to turn a black Wikipedia SVG into gold) */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
              alt="Emblem of India" 
              className="h-6 xl:h-7.5 w-auto object-contain mb-0.5 opacity-95"
              style={{ filter: 'invert(87%) sepia(27%) saturate(1478%) hue-rotate(345deg) brightness(101%) contrast(97%)' }}
            />
            <span className="text-white text-[6px] xl:text-[7px] font-bold tracking-widest mb-0.5 whitespace-nowrap">
              सत्यमेव जयते
            </span>
            <span className="text-white text-[9.5px] xl:text-[11px] font-bold tracking-wide text-center leading-tight whitespace-nowrap">
              Government of India
            </span>
            <span className="text-slate-300 text-[4px] xl:text-[4.5px] tracking-wide mt-0.5 text-center leading-tight whitespace-nowrap">
              Digital India | Secure India | Empowered Citizens
            </span>
          </div>
        </div>

      </div>

    </header>
  );
}

/**
 * Footer
 * Full-width dark footer displayed at the bottom of every page.
 *
 * Structure:
 *  TOP    — 12-column grid: Brand column (logo + tagline + stars + social icons)
 *           + 3 link columns (Modules, Company, Support)
 *           + Feature highlight column (Secure / No Data / Fast / Anywhere)
 *  MIDDLE — 4-stat bar: 2M+ Users | 150+ Countries | 99.9% Uptime | 4.9/5 Rating
 *  BOTTOM — Policy links on the left, "Made with ❤" on the right
 *
 * @component
 * @param {Object}   props               - Component props
 * @param {Function} [props.onSelectLink] - Optional callback when a footer link is clicked (receives link label string)
 * @returns {JSX.Element} A full-width dark <footer> element
 */
// Real-Time Ultra-Smooth Chroma-Key Video Canvas Component for User's running animation.mp4
const RunningManCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = '/running_animation.mp4';
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    let animId;
    // Offscreen canvas for fast pixel processing
    const offscreen = document.createElement('canvas');
    offscreen.width = 240;
    offscreen.height = 160;
    const offCtx = offscreen.getContext('2d', { willReadFrequently: true });

    const renderFrame = () => {
      const canvas = canvasRef.current;
      if (canvas && video.readyState >= 2 && offCtx) {
        const ctx = canvas.getContext('2d');
        const w = 240;
        const h = 160;

        // Draw video frame onto offscreen canvas
        offCtx.drawImage(video, 0, 0, w, h);
        const imgData = offCtx.getImageData(0, 0, w, h);
        const buf32 = new Uint32Array(imgData.data.buffer);

        // Fast character pixel isolation (Chroma Key using 32-bit words)
        // Assume the top-left pixel represents the background color to remove
        const bgPixel = buf32[0];
        const bgR = bgPixel & 0xFF;
        const bgG = (bgPixel >> 8) & 0xFF;
        const bgB = (bgPixel >> 16) & 0xFF;

        for (let i = 0; i < buf32.length; i++) {
          const p = buf32[i];
          const r = p & 0xFF;
          const g = (p >> 8) & 0xFF;
          const b = (p >> 16) & 0xFF;

          if (Math.abs(r - bgR) < 35 && Math.abs(g - bgG) < 35 && Math.abs(b - bgB) < 35) {
            buf32[i] = 0; // Make pixel transparent
          }
        }

        // Put pre-keyed frame onto visible canvas
        ctx.putImageData(imgData, 0, 0);
      }

      if ('requestVideoFrameCallback' in video) {
        video.requestVideoFrameCallback(renderFrame);
      } else {
        animId = requestAnimationFrame(renderFrame);
      }
    };

    video.play().then(() => {
      if ('requestVideoFrameCallback' in video) {
        video.requestVideoFrameCallback(renderFrame);
      } else {
        animId = requestAnimationFrame(renderFrame);
      }
    }).catch(err => {
      console.log('Video error:', err);
    });

    return () => {
      if (animId) cancelAnimationFrame(animId);
      video.pause();
      video.removeAttribute('src');
      video.load();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={240}
      height={160}
      className="runner-canvas"
    />
  );
};

