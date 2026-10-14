import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Home, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  KeyRound,
  Fingerprint,
  Info
} from 'lucide-react';
import Cloudinary from '../constants/Cloudinary';

/**
 * LoginPage Component
 * Styled for CR Cyber Crime Super Admin Control Management System.
 *
 * Features:
 * - Username & Password inputs with show/hide toggle & Caps Lock detection
 * - Prominent "Skip to Homepage" button for direct bypass
 * - One-click demo credential autofill (Officer Rajesh Kumar / CR-8
 * 094)
 * - Official CRCCF branding, national tricolor bar & watermarks
 * - Syncs with session storage ('isAuthenticated' and 'currentUser')
 */
export default function LoginPage({ onLoginSuccess, onSkip, onHomeClick }) {
  const navigate = useNavigate();

  // Form State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [capsLockActive, setCapsLockActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Detect Caps Lock state
  const handleKeyDown = (e) => {
    if (e.getModifierState) {
      setCapsLockActive(e.getModifierState('CapsLock'));
    }
  };

  const handleKeyUp = (e) => {
    if (e.getModifierState) {
      setCapsLockActive(e.getModifierState('CapsLock'));
    }
  };

  // Safe navigation helper that handles React Router, custom callbacks, and direct URLs
  const navigateToHome = () => {
    if (typeof onHomeClick === 'function') {
      onHomeClick();
      return;
    }
    if (typeof onSkip === 'function') {
      onSkip();
      return;
    }
    try {
      navigate('/');
    } catch {
      window.location.href = '/';
    }
  };

  // One-click demo credentials autofill
  const handleFillDemo = () => {
    setUsername('CR-8094');
    setPassword('CyberAdmin@2026');
    setErrorMessage('');
  };

  // Form Submit Handler
  const handleLogin = (e) => {
    if (e) e.preventDefault();
    setErrorMessage('');

    if (!username.trim()) {
      setErrorMessage('Please enter your Officer ID or authorized Username');
      return;
    }
    if (!password) {
      setErrorMessage('Please enter your access password');
      return;
    }

    setIsLoading(true);

    // Simulate authentication verification
    setTimeout(() => {
      try {
        // Save authenticated officer state in sessionStorage
        sessionStorage.setItem('isAuthenticated', 'true');
        sessionStorage.setItem('hasSkipped', 'true');
        sessionStorage.setItem('crccf_nav_app', 'Demo1');
        const officerProfile = {
          officerName: username.toUpperCase() === 'CR-8094' ? 'Rajesh Kumar' : username,
          empId: username.toUpperCase() === 'CR-8094' ? 'CR-8094' : `CR-${Math.floor(1000 + Math.random() * 9000)}`,
          designation: 'Director',
          department: 'Cyber Crime Cell',
          category: 'Class-I',
          role: 'SUPER ADMIN',
          loginTime: new Date().toISOString(),
        };
        sessionStorage.setItem('currentUser', JSON.stringify(officerProfile));
        sessionStorage.setItem('officerInfo', JSON.stringify(officerProfile));
      } catch (err) {
        console.warn('Could not save session:', err);
      }

      setIsLoading(false);
      setSuccessMessage('Officer identity verified. Entering portal...');

      setTimeout(() => {
        if (typeof onLoginSuccess === 'function') {
          onLoginSuccess();
        } else {
          navigateToHome();
        }
      }, 700);
    }, 850);
  };

  // Direct Skip to Homepage Action
  const handleSkipToHome = () => {
    try {
      // Grant standard viewing access for the session
      sessionStorage.setItem('hasSkipped', 'true');
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('crccf_nav_app', 'Demo1');
      if (!sessionStorage.getItem('currentUser')) {
        const guestOfficer = {
          officerName: 'Rajesh Kumar',
          empId: 'CR-8094',
          designation: 'Director',
          department: 'Cyber Crime Cell',
          category: 'Class-I',
          role: 'SUPER ADMIN',
          isGuestBypass: true,
        };
        sessionStorage.setItem('currentUser', JSON.stringify(guestOfficer));
      }
    } catch (err) {
      console.warn('Session write bypass warning:', err);
    }

    navigateToHome();
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-slate-900 selection:text-white bg-[#f0f6ff] w-full max-w-full relative overflow-x-hidden">
      
      {/* Background Watermark (identical to App.jsx) */}
      <div id="watermark-bg" className="fixed top-0 left-0 w-full h-[100vh] z-0 pointer-events-none select-none">
        <div className="w-full h-full overflow-hidden">
          {/* Desktop Watermark */}
          <img
            src={Cloudinary.watermark}
            alt="Global Background Desktop"
            className="hidden md:block w-full h-full object-cover opacity-20 filter drop-shadow-sm"
          />
          {/* Mobile / Phone Watermark */}
          <img
            src={Cloudinary.phoneWatermark}
            alt="Global Background Phone"
            className="block md:hidden w-full h-full object-cover opacity-20 filter drop-shadow-sm"
          />
        </div>
      </div>

      {/* Ambient background glow elements */}
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed -bottom-24 -right-24 w-96 h-96 bg-[#1D6CE0]/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Top Header / Portal Navbar */}
      <header className="relative z-10 w-full bg-gradient-to-r from-[#F0F5FA] to-[#E2EDF8] border-b border-slate-300 shadow-sm px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: CRCCF Logo & Title */}
          <div 
            onClick={navigateToHome} 
            className="flex items-center gap-3 cursor-pointer group select-none"
            title="CR Cyber Crime Coordination & Forensics"
          >
            <img 
              src={Cloudinary.logo} 
              alt="CRCCF Badge" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-sm transition-transform group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="text-[15px] sm:text-[18px] font-black text-[#0B3B73] tracking-wide uppercase leading-tight">
                CR CYBER CRIME
              </span>
              <span className="text-[7.5px] sm:text-[9.5px] font-extrabold text-[#1D6CE0] uppercase tracking-[0.08em] leading-tight">
                SUPER ADMIN CONTROL MANAGEMENT SYSTEM
              </span>
            </div>
          </div>

          {/* Right: National Emblem & Skip to Homepage Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* National Emblem (Desktop) */}
            <div className="hidden sm:flex items-center gap-2.5 px-3 py-1 bg-white/80 rounded-full border border-blue-200/60 shadow-2xs">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="Emblem of India" 
                className="h-5 w-auto object-contain"
                style={{ filter: 'invert(87%) sepia(27%) saturate(1478%) hue-rotate(345deg) brightness(101%) contrast(97%)' }}
              />
              <span className="text-[9px] font-bold text-[#0B3B73] tracking-wider uppercase">
                GOVERNMENT OF INDIA
              </span>
            </div>

            {/* Quick Skip button in header */}
            <button
              type="button"
              onClick={handleSkipToHome}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold text-[#0B3B73] bg-white hover:bg-blue-50 border border-blue-200 shadow-xs hover:shadow-sm transition-all cursor-pointer group active:scale-95"
              title="Bypass login and jump straight to the dashboard"
            >
              <Home size={14} className="text-[#1D6CE0] group-hover:scale-110 transition-transform" />
              <span>Skip to Home</span>
              <ArrowRight size={13} className="text-[#1D6CE0] group-hover:translate-x-0.5 transition-transform" />
            </button>

          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-[460px] sm:max-w-[480px]">
          
          {/* Card Container */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-blue-200/90 shadow-[0_20px_50px_rgba(11,59,115,0.12)] overflow-hidden transition-all duration-300">
            
            {/* National Flag Tricolor Accent Bar */}
            <div className="h-1.5 w-full flex">
              <div className="h-full w-1/3 bg-[#FF9933]" title="Saffron" />
              <div className="h-full w-1/3 bg-[#FFFFFF]" title="White" />
              <div className="h-full w-1/3 bg-[#138808]" title="Green" />
            </div>

            {/* Inner Content Padding */}
            <div className="p-6 sm:p-8">
              
              {/* Badge & Security Heading */}
              <div className="flex flex-col items-center text-center mb-6">
                
                {/* Shield Icon Badge */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0B3B73] to-[#1D6CE0] p-0.5 shadow-lg shadow-blue-500/20 mb-3.5 flex items-center justify-center relative group">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-80" />
                    <Shield className="w-8 h-8 text-[#0B3B73] relative z-10 drop-shadow-xs" />
                    <KeyRound className="w-4 h-4 text-[#1D6CE0] absolute -bottom-0.5 -right-0.5 z-10" />
                  </div>
                  {/* Glowing live status dot */}
                  <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
                  </span>
                </div>

                {/* Restricted Access Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#0B3B73] text-[10px] font-black tracking-wider uppercase mb-2">
                  <Fingerprint size={12} className="text-[#1D6CE0]" />
                  <span>RESTRICTED ACCESS PORTAL</span>
                </div>

                <h1 className="text-2xl sm:text-[26px] font-black text-[#0B3B73] tracking-tight leading-tight">
                  Officer Authentication
                </h1>
                <p className="text-xs text-slate-500 mt-1 max-w-sm">
                  Sign in with your authorized Police / Super Admin credentials to access the central intelligence system.
                </p>
              </div>

              {/* Demo One-Click Autofill Banner */}
              <div 
                onClick={handleFillDemo}
                className="mb-5 p-2.5 rounded-xl bg-gradient-to-r from-blue-50/90 via-indigo-50/60 to-blue-50/90 border border-blue-200/80 flex items-center justify-between cursor-pointer group hover:bg-blue-100/60 transition-all select-none shadow-2xs"
                title="Click to automatically fill default Super Admin credentials"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#1D6CE0] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Sparkles size={14} />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-[#0B3B73] leading-tight">
                      Quick Demo: Officer Rajesh Kumar
                    </p>
                    <p className="text-[9.5px] font-semibold text-slate-500 font-mono">
                      ID: CR-8094 • Super Admin
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#1D6CE0] group-hover:underline px-2 py-1 bg-white rounded-md border border-blue-200/60 shadow-2xs shrink-0">
                  Auto-fill
                </span>
              </div>

              {/* Error & Success Alerts */}
              {errorMessage && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-red-700 animate-in fade-in duration-200">
                  <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-600" />
                  <span className="text-xs font-semibold leading-relaxed">{errorMessage}</span>
                </div>
              )}

              {successMessage && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5 text-emerald-800 animate-in fade-in duration-200">
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-emerald-600" />
                  <span className="text-xs font-semibold leading-relaxed">{successMessage}</span>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                
                {/* 1. Username / Officer ID Field */}
                <div>
                  <label 
                    htmlFor="username-input" 
                    className="block text-xs font-bold text-[#0B3B73] mb-1.5 uppercase tracking-wide"
                  >
                    Officer ID / Username
                  </label>
                  <div className="relative rounded-xl bg-white shadow-xs border border-slate-200 focus-within:border-[#1D6CE0] focus-within:ring-2 focus-within:ring-[#1D6CE0]/20 transition-all flex items-center overflow-hidden h-11">
                    <div className="pl-3.5 pr-2 text-[#0B3B73] flex items-center justify-center">
                      <User size={18} strokeWidth={2.2} />
                    </div>
                    <input
                      id="username-input"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      onKeyDown={handleKeyDown}
                      onKeyUp={handleKeyUp}
                      placeholder="e.g. CR-8094 or rajesh.kumar"
                      autoComplete="username"
                      disabled={isLoading}
                      className="w-full h-full pr-3 bg-transparent text-sm text-[#0B3B73] placeholder-slate-400 font-medium focus:outline-none"
                    />
                    {username && (
                      <button
                        type="button"
                        onClick={() => setUsername('')}
                        className="pr-3 text-slate-400 hover:text-slate-600 text-xs font-bold"
                        aria-label="Clear username"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* 2. Password Field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label 
                      htmlFor="password-input" 
                      className="block text-xs font-bold text-[#0B3B73] uppercase tracking-wide"
                    >
                      Password / Access Key
                    </label>
                    {capsLockActive && (
                      <span className="text-[10px] font-bold text-amber-600 flex items-center gap-1">
                        <AlertCircle size={11} /> Caps Lock is ON
                      </span>
                    )}
                  </div>
                  <div className="relative rounded-xl bg-white shadow-xs border border-slate-200 focus-within:border-[#1D6CE0] focus-within:ring-2 focus-within:ring-[#1D6CE0]/20 transition-all flex items-center overflow-hidden h-11">
                    <div className="pl-3.5 pr-2 text-[#0B3B73] flex items-center justify-center">
                      <Lock size={18} strokeWidth={2.2} />
                    </div>
                    <input
                      id="password-input"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={handleKeyDown}
                      onKeyUp={handleKeyUp}
                      placeholder="Enter authorized password"
                      autoComplete="current-password"
                      disabled={isLoading}
                      className="w-full h-full pr-2 bg-transparent text-sm text-[#0B3B73] placeholder-slate-400 font-medium focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="px-3 text-slate-400 hover:text-[#0B3B73] transition-colors focus:outline-none cursor-pointer"
                      title={showPassword ? 'Hide password' : 'Show password'}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Help Links */}
                <div className="flex items-center justify-between text-xs pt-0.5">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-[#1D6CE0] focus:ring-[#1D6CE0]/30 cursor-pointer accent-[#1D6CE0]"
                    />
                    <span className="font-semibold text-slate-600">Remember session</span>
                  </label>
                  
                  <span 
                    onClick={() => alert('For password resets or emergency officer key authorization, please contact the Central Cyber Cell Command Desk.')}
                    className="font-bold text-[#1D6CE0] hover:text-[#0B3B73] hover:underline cursor-pointer"
                  >
                    Helpdesk Support
                  </span>
                </div>

                {/* Primary Button: Sign In */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 rounded-xl bg-gradient-to-r from-[#1D6CE0] to-[#0B3B73] hover:from-[#175cc0] hover:to-[#082b54] text-white font-extrabold text-sm tracking-wide shadow-md shadow-blue-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed group mt-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Verifying Credentials...</span>
                    </>
                  ) : (
                    <>
                      <span>Authorize & Enter Portal</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>

              {/* Divider with "OR" */}
              <div className="relative my-5 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative bg-white px-3 text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  OR DIRECT ACCESS
                </div>
              </div>

              {/* Skip Button (Explicit Requirement) */}
              <button
                type="button"
                onClick={handleSkipToHome}
                className="w-full h-11 rounded-xl bg-[#F0F5FA] hover:bg-[#E2EDF8] text-[#0B3B73] border border-blue-200/90 font-black text-xs sm:text-sm tracking-wide shadow-2xs hover:shadow-xs active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
                title="Bypass login and navigate straight to the homepage"
              >
                <Home size={17} className="text-[#1D6CE0] group-hover:scale-110 transition-transform" />
                <span>Skip to Homepage (Direct Access)</span>
                <ArrowRight size={15} className="text-[#1D6CE0] group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

            {/* Card Footer Security Guarantee */}
            <div className="bg-[#F8FAFD] border-t border-blue-100/80 px-6 py-3 flex items-center justify-between text-[10.5px] text-slate-500">
              <div className="flex items-center gap-1.5 font-bold text-[#0B3B73]">
                <Shield size={13} className="text-emerald-600" />
                <span>256-Bit SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-1">
                <span>IT Act 2000 Compliant</span>
                <Info size={11} className="text-slate-400" />
              </div>
            </div>

          </div>

          {/* Bottom Statutory Notice */}
          <div className="mt-5 text-center px-4">
            <p className="text-[11px] font-medium text-slate-500 leading-relaxed">
              Law Enforcement & Cyber Intelligence Gateway. Unauthorized access or attempt to compromise this portal is strictly prohibited and subject to legal prosecution.
            </p>
            <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-wider">
              © 2026 CR Cyber Crime Coordination & Forensics (CRCCF). All Rights Reserved.
            </p>
          </div>

        </div>
      </main>

    </div>
  );
}
