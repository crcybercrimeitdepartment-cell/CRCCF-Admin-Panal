import React from 'react';
import { Link } from 'react-router-dom';
import Cloudinary from '../constants/Cloudinary';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGlobe,
} from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'Officer Login', path: '/login' },
    { name: 'About Us', path: '/about' },
    { name: 'Intelligence Reports', path: '/reports' },
    { name: 'Audit Logs', path: '/audit' },
    { name: 'Documentation', path: '/docs' },
    { name: 'Support Center', path: '/support' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Use', path: '/terms' },
  ];

  const importantResources = [
    { name: 'Cyber Awareness', path: '#' },
    { name: 'Report a Cyber Crime', path: '#' },
    { name: 'Digital Safety Tips', path: '#' },
    { name: 'Government Initiatives', path: '#' },
    { name: 'Useful Links', path: '#' },
    { name: 'FAQs', path: '#' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const socialLinks = [
    { Icon: FaFacebookF, url: '#' },
    { Icon: FaTwitter, url: '#' },
    { Icon: FaLinkedinIn, url: '#' },
    { Icon: FaInstagram, url: '#' },
    { Icon: FaYoutube, url: '#' },
    { Icon: FaGlobe, url: '#' },
  ];

  return (
    <footer className="w-full max-w-full overflow-x-hidden bg-[#f4f7fb] text-[#1e2a52] relative flex flex-col font-sans border-t border-slate-200">
      
      {/* Background Watermark - Desktop */}
      <img 
        src={Cloudinary.footerWave} 
        alt="Decorative Footer Wave Desktop" 
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-[50%_60%] opacity-10 pointer-events-none z-0 mix-blend-multiply" 
      />
      {/* Background Watermark - Mobile / Phone */}
      <img 
        src={Cloudinary.footerPhoneWatermark} 
        alt="Decorative Footer Wave Phone" 
        className="block md:hidden absolute inset-0 w-full h-full object-cover object-center opacity-15 pointer-events-none z-0 mix-blend-multiply" 
      />

      {/* --- TOP SECTION --- */}
      <div className="max-w-[1720px] mx-auto w-full px-4 sm:px-6 md:px-10 py-6 lg:py-8 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10 xl:gap-14 relative z-10">
        
        {/* Col 1: Branding & Social */}
        <div className="flex flex-col space-y-2.5 max-w-sm lg:max-w-md xl:max-w-lg">
          <div className="flex items-center gap-3">
            <img src={Cloudinary.logoIile24} alt="CRCCF Badge" className="w-11 h-11 sm:w-12 sm:h-12 object-contain drop-shadow-md shrink-0" />
            <div className="flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B3B73] leading-none tracking-tight">CRCCF</h2>
              <p className="text-[#0B3B73] font-bold text-[9.5px] sm:text-[10px] uppercase tracking-wide">Cyber Crime Foundation</p>
              <div className="flex gap-1.5 sm:gap-2 text-[8px] font-semibold text-[#0B3B73] mt-0.5">
                <span>AWARE</span> <span className="text-orange-500">|</span> <span>SECURE</span> <span className="text-green-600">|</span> <span>TOGETHER</span>
              </div>
            </div>
          </div>
          
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Empowering a Safer, Smarter and Digitally Secure India through Awareness, Law, Technology and Collective Action.
          </p>
          
          <div className="flex items-center gap-2 pt-1.5 flex-wrap">
            {socialLinks.map((social, i) => (
              <a key={i} href={social.url} className="w-8 h-8 rounded-full bg-[#E5EEFA] hover:bg-blue-600 hover:text-white text-[#0B3B73] flex items-center justify-center transition-colors shadow-sm active:scale-95">
                <social.Icon size={14} />
              </a>
            ))}
          </div>
          <p className="text-xs sm:text-sm font-semibold text-[#0B3B73]">Follow Us for a Safer Digital India</p>
        </div>

        {/* Col 2: Quick Links */}
        <div className="flex flex-col w-full sm:w-auto">
          <h3 className="text-[15px] sm:text-[17px] font-bold text-[#0B3B73] mb-2 sm:mb-4 relative inline-block">
            Quick Links
            <span className="absolute left-0 -bottom-1 sm:-bottom-2 w-8 h-[2px] bg-[#0B3B73]"></span>
          </h3>
          <ul className="grid grid-flow-col grid-rows-4 auto-cols-max w-full sm:w-fit justify-between sm:justify-start gap-x-4 sm:gap-x-8 lg:gap-x-10 gap-y-1.5 sm:gap-y-2 mt-1">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <Link to={link.path} className="flex items-center text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors group whitespace-nowrap">
                  <ChevronRight size={14} className="text-[#0B3B73] mr-1.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Important Resources */}
        <div className="flex flex-col w-full sm:w-auto">
          <h3 className="text-[15px] sm:text-[17px] font-bold text-[#0B3B73] mb-2 sm:mb-4 relative inline-block">
            Important Resources
            <span className="absolute left-0 -bottom-1 sm:-bottom-2 w-8 h-[2px] bg-[#0B3B73]"></span>
          </h3>
          <ul className="grid grid-flow-col grid-rows-4 auto-cols-max w-full sm:w-fit justify-between sm:justify-start gap-x-4 sm:gap-x-8 lg:gap-x-10 gap-y-1.5 sm:gap-y-2 mt-1">
            {importantResources.map((link, i) => (
              <li key={i}>
                <a href={link.path} className="flex items-center text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors group whitespace-nowrap">
                  <ChevronRight size={14} className="text-[#0B3B73] mr-1.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* --- BOTTOM DARK BAR --- */}
      <div className="bg-[#0B3B73] text-white w-full py-3 sm:py-2.5 px-4 sm:px-6 md:px-10 relative z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1720px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-[13px] lg:text-sm text-center lg:text-left">
          
          <div className="text-slate-200 font-medium text-xs sm:text-[13px]">
            © 2026 CR Cyber Crime Foundation. All rights reserved.
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-slate-300 font-medium text-[11px] sm:text-xs">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="opacity-40">|</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <span className="opacity-40">|</span>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <span className="opacity-40">|</span>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 font-medium text-slate-200 text-[11px] sm:text-xs">
            <div className="flex flex-col h-[14px] w-[18px] mr-1 shadow-sm rounded-[1px] overflow-hidden shrink-0">
              <div className="bg-[#FF9933] flex-1"></div>
              <div className="bg-white flex-1 relative flex items-center justify-center">
                <div className="w-[3px] h-[3px] rounded-full bg-[#000080]"></div>
              </div>
              <div className="bg-[#138808] flex-1"></div>
            </div>
            <span>Digital India</span> 
            <span className="opacity-40 px-0.5">|</span> 
            <span>Secure India</span> 
            <span className="opacity-40 px-0.5">|</span> 
            <span>Empowered Citizens</span>
          </div>
          
        </div>
      </div>
      
    </footer>
  );
}
