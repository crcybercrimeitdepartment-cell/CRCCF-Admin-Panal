import PageHeaderWithBack from '../common/PageHeaderWithBack';
import { useScrollNavigation } from '../common/useScrollNavigation';
import React, { useState } from 'react';
import { ArrowLeft, Layout, User, Code, FileText, Image, Briefcase, Play, Info, MessageCircle, Star, Users, Database, Shield, Target, Award, Scale, EyeOff, BookOpen, AlertCircle, Copyright, Handshake, History, Building2, ShieldCheck, CheckCircle, FileCheck, Activity, Server, UserCheck, Globe, Layers, Zap, Cpu, MapPin, Settings, LifeBuoy, Eye, Search, Crosshair, Smartphone, Network, Cloud, BarChart, Palette, MonitorPlay, Terminal, Lock, Compass, ShieldAlert, Calendar, Heart, Bell, Copy, Banknote, Home } from 'lucide-react';

import HomeManagementControl from './home_management_control/HomeManagementControl';
import AboutUsManagementControl from './about_us_management_control/AboutUsManagementControl';
import OurServiceManagementControl from './our_service_management_control/OurServiceManagementControl';
import SoftwareProductManagementControl from './software_product_management_control/SoftwareProductManagementControl';
import SkillDevelopmentManagementControl from './skill_development_management_control/SkillDevelopmentManagementControl';
import CareersManagementControl from './careers_management_control/CareersManagementControl';
import InsightsManagementControl from './insights_management_control/InsightsManagementControl';
import ContactManagementControl from './contact_management_control/ContactManagementControl';
import ReportCrimeManagementControl from './report_crime_management_control/ReportCrimeManagementControl';
import GalleryManagementControl from './gallery_management_control/GalleryManagementControl';
import HeaderManagementControl from './header_management_control/HeaderManagementControl';
import FooterManagementControl from './footer_management_control/FooterManagementControl';
import DocumentVerificationManagementControl from './document_verification_management_control/DocumentVerificationManagementControl';
import OnlineApplicationManagementControl from './online_application_management_control/OnlineApplicationManagementControl';
import CheckApplicationStatusControl from './check_application_status_control/CheckApplicationStatusControl';
import DemoManagementControl from './demo_management_control/DemoManagementControl';

const mainDashboardCards = [
  { id: 'home', title: 'Home Management Control', description: 'Configure hero sliders, announcements ticker, quick links, and featured widgets.', Icon: Home, theme: 'blue' },
  { id: 'about-us', title: 'About Us Management Control', description: 'Manage organization mission, vision, leadership team profiles, and milestones.', Icon: Building2, theme: 'indigo' },
  { id: 'our-service', title: 'Our Service Management Control', description: 'Configure citizen services, advisory tiers, forensic support offerings, and SLA parameters.', Icon: ShieldCheck, theme: 'emerald' },
  { id: 'software-product', title: 'Software Product Management Control', description: 'Deploy and control cybersecurity tools, defense patches, license registries, and release repositories.', Icon: Cpu, theme: 'amber' },
  { id: 'skill-development', title: 'Skill Development Management Control', description: 'Administer cyber awareness courses, workshops, certification exams, and batches.', Icon: Award, theme: 'rose' },
  { id: 'careers', title: 'Careers Management Control', description: 'Publish job vacancies, internship drives, qualification guidelines, and applicant tracking.', Icon: UserCheck, theme: 'cyan' },
  { id: 'insights', title: 'Insights Management Control', description: 'Curate threat analysis bulletins, malware reports, whitepapers, and safety case studies.', Icon: Activity, theme: 'blue' },
  { id: 'contact', title: 'Contact Management Control', description: 'Manage police headquarters contacts, emergency helpline routing, emails, and addresses.', Icon: Smartphone, theme: 'rose' },
  { id: 'report-crime', title: 'Report Crime Management Control', description: 'Process incident complaints, financial cyber frauds, emergency frozen accounts, and FIR intake.', Icon: AlertCircle, theme: 'emerald' },
  { id: 'gallery', title: 'Gallery Management Control', description: 'Organize event photos, training seminars, summit ceremonies, and video press coverage.', Icon: Image, theme: 'amber' },
  { id: 'header', title: 'Header Management Control', description: 'Customize navigation items, government emblems, search parameters, and portal status badges.', Icon: Globe, theme: 'blue' },
  { id: 'footer', title: 'Footer Management Control', description: 'Configure statutory disclaimers, policy links, counters, copyright notices, and emergency bars.', Icon: Server, theme: 'indigo' },
  { id: 'doc-verification', title: 'Document Verification Management Control', description: 'Authenticate officer credential files, digital police certificates, KYC documents, and clearance seals.', Icon: FileCheck, theme: 'emerald' },
  { id: 'online-app', title: 'Online Application Management Control', description: 'Administer citizen application forms, digital registrations, forensic clearance requests, and more.', Icon: FileText, theme: 'blue' },
  { id: 'app-status', title: 'Check Application Status Control', description: 'Track reference token statuses, dispatch SMS updates, resolve inquiries, and update progress.', Icon: FileCheck, theme: 'emerald' },
  { id: 'demo', title: 'Demo Management Control', description: 'Sandbox testing environment, preview prototype modules, and portal simulation testing.', Icon: Play, theme: 'indigo' },
];

const colorThemes = {
  blue: { iconBg: 'bg-gradient-to-br from-[#1D6CE0] to-[#0B3B73]', text: 'text-[#1D6CE0]', borderHover: 'border-[#1D6CE0]/50', glow: 'from-[#1D6CE0]/15', stripes: 'from-[#1D6CE0] to-[#0B3B73]' },
  indigo: { iconBg: 'bg-gradient-to-br from-[#6366f1] to-[#4338ca]', text: 'text-[#4f46e5]', borderHover: 'border-[#4f46e5]/50', glow: 'from-[#6366f1]/15', stripes: 'from-[#6366f1] to-[#4338ca]' },
  emerald: { iconBg: 'bg-gradient-to-br from-[#10b981] to-[#047857]', text: 'text-[#059669]', borderHover: 'border-[#059669]/50', glow: 'from-[#10b981]/15', stripes: 'from-[#10b981] to-[#047857]' },
  violet: { iconBg: 'bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9]', text: 'text-[#7c3aed]', borderHover: 'border-[#7c3aed]/50', glow: 'from-[#8b5cf6]/15', stripes: 'from-[#8b5cf6] to-[#6d28d9]' },
  rose: { iconBg: 'bg-gradient-to-br from-[#f43f5e] to-[#be123c]', text: 'text-[#e11d48]', borderHover: 'border-[#e11d48]/50', glow: 'from-[#f43f5e]/15', stripes: 'from-[#f43f5e] to-[#be123c]' },
  amber: { iconBg: 'bg-gradient-to-br from-[#f59e0b] to-[#b45309]', text: 'text-[#d97706]', borderHover: 'border-[#d97706]/50', glow: 'from-[#f59e0b]/15', stripes: 'from-[#f59e0b] to-[#b45309]' },
  cyan: { iconBg: 'bg-gradient-to-br from-[#06b6d4] to-[#0e7490]', text: 'text-[#0891b2]', borderHover: 'border-[#0891b2]/50', glow: 'from-[#06b6d4]/15', stripes: 'from-[#06b6d4] to-[#0e7490]' }
};

const PremiumCard = ({ title, description, Icon, theme = 'blue', onClick, index }) => {
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
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-bl-[18px] sm:rounded-bl-[24px] -z-10">
        <div className={`absolute bottom-[-10px] left-[-20px] w-40 h-6 -rotate-45 bg-gradient-to-r ${t.stripes} opacity-[0.08]`} />
        <div className={`absolute bottom-[-24px] left-[-20px] w-40 h-6 -rotate-45 bg-gradient-to-r ${t.stripes} opacity-[0.15]`} />
        <div className={`absolute bottom-[-38px] left-[-20px] w-40 h-6 -rotate-45 bg-gradient-to-r ${t.stripes} opacity-[0.25]`} />
      </div>

      {/* Giant Watermark Icon Bottom Right */}
      <Icon size={120} strokeWidth={1.5} className={`absolute -bottom-6 -right-6 ${t.text} opacity-[0.04] -z-10 -rotate-12`} />

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
            <Icon size={20} className="sm:hidden" strokeWidth={2} />
            <Icon size={28} className="hidden sm:block" strokeWidth={2} />
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

const homeCards = [
  { title: 'Hero Control', description: 'Manage the main hero banner and slider configurations.', Icon: Layout, theme: 'blue' },
  { title: 'Who We Are Control', description: 'Configure the about us section content and text.', Icon: Info, theme: 'indigo' },
  { title: 'Introduction Control', description: 'Manage the introduction text and associated visuals.', Icon: FileText, theme: 'emerald' },
  { title: 'What We Do Control', description: 'Edit the services and core operations section.', Icon: Briefcase, theme: 'violet' },
  { title: 'Our Programs Control', description: 'Manage program offerings and detailed information.', Icon: Play, theme: 'rose' },
  { title: 'Our Tech Stack Control', description: 'Configure technology stack information and icons.', Icon: Code, theme: 'amber' },
  { title: 'Project and Portfolio Control', description: 'Update showcased projects, case studies, and portfolios.', Icon: Image, theme: 'cyan' },
  { title: 'Internship Programs Control', description: 'Manage internship postings and associated details.', Icon: Users, theme: 'blue' },
  { title: 'What We Provide Control', description: 'Configure provisions, resources, and benefits details.', Icon: Shield, theme: 'indigo' },
  { title: 'Why Choose Us Control', description: 'Edit the competitive advantage and USP sections.', Icon: Star, theme: 'emerald' },
  { title: 'Join Our Team Control', description: 'Manage career postings and hiring sections.', Icon: User, theme: 'violet' },
  { title: 'Digital Footprint Control', description: 'Update digital presence, media, and social links.', Icon: Database, theme: 'rose' },
  { title: 'Testimonials Control', description: 'Manage user reviews, quotes, and testimonials.', Icon: MessageCircle, theme: 'amber' },
];

const aboutUsCards = [
  { title: 'Meaning Behind Our Name', description: 'Configure the story and meaning behind the organization name.', Icon: Info, theme: 'blue' },
  { title: 'Our Gallery', description: 'Manage images, videos, and media in the about gallery.', Icon: Image, theme: 'indigo' },
  { title: 'Identity', description: 'Manage corporate identity, branding, and core values.', Icon: Shield, theme: 'emerald' },
  { title: 'Introduction', description: 'Update the main introductory text about the organization.', Icon: FileText, theme: 'violet' },
  { title: 'What We Do', description: 'Edit the description of operations and core services.', Icon: Briefcase, theme: 'rose' },
  { title: 'Mission & Vision', description: 'Configure the mission and vision statements.', Icon: Star, theme: 'amber' },
  { title: 'Activity', description: 'Manage records of organizational activities and events.', Icon: Play, theme: 'cyan' },
  { title: 'Purpose', description: 'Edit the fundamental purpose and goals of the organization.', Icon: Target, theme: 'blue' },
  { title: 'Objective', description: 'Update short-term and long-term organizational objectives.', Icon: Layout, theme: 'indigo' },
  { title: 'Achievement', description: 'Showcase awards, milestones, and major achievements.', Icon: Award, theme: 'emerald' },
  { title: 'Legal & Compliance', description: 'Manage legal documentation, compliance, and policies.', Icon: Scale, theme: 'violet' },
  { title: 'Privacy Policy', description: 'Manage privacy policy documentation and data guidelines.', Icon: EyeOff, theme: 'rose' },
  { title: 'Terms & Condition', description: 'Update terms of service and user agreements.', Icon: FileText, theme: 'amber' },
  { title: 'Instruction', description: 'Provide step-by-step instructions and user guidelines.', Icon: BookOpen, theme: 'cyan' },
  { title: 'Legal Disclaimer', description: 'Configure site-wide legal disclaimers and liability waivers.', Icon: AlertCircle, theme: 'blue' },
  { title: 'Copyright', description: 'Manage copyright notices and intellectual property details.', Icon: Copyright, theme: 'indigo' },
  { title: 'Partnership', description: 'Display and manage strategic partnerships and alliances.', Icon: Handshake, theme: 'emerald' },
  { title: 'History', description: 'Document the historical timeline and founding story.', Icon: History, theme: 'violet' },
];

const legalComplianceCards = [
  { title: 'Legal Identity', description: 'Manage core legal identity documentation.', Icon: FileText, theme: 'blue' },
  { title: 'Legal Entity', description: 'Configure corporate structure and legal entity data.', Icon: Building2, theme: 'indigo' },
  { title: 'Legal Authorizations & Cyber Licenses', description: 'Track cyber operations licenses and authorizations.', Icon: ShieldCheck, theme: 'emerald' },
  { title: 'Legal Right & Operational Limits', description: 'Define operational boundaries and legal rights.', Icon: Scale, theme: 'violet' },
  { title: 'CRCCF Legal Rights', description: 'Manage organization-specific legal rights.', Icon: BookOpen, theme: 'rose' },
  { title: 'Legal & Ethical Compliance', description: 'Monitor alignment with ethical and legal standards.', Icon: CheckCircle, theme: 'amber' },
  { title: 'Cyber Crime Investigation Approval', description: 'Handle approvals for cyber crime investigations.', Icon: FileCheck, theme: 'cyan' },
  { title: 'Cyber Investigation Capacity', description: 'Manage investigation scope and capacities.', Icon: Activity, theme: 'blue' },
  { title: 'Digital Investigation Infrastructure', description: 'Configure infrastructure used for digital investigations.', Icon: Server, theme: 'indigo' },
  { title: 'Role in Cybercrime Investigation', description: 'Define the roles and responsibilities in investigations.', Icon: UserCheck, theme: 'emerald' },
  { title: 'Investigation Scope & Social Responsibility', description: 'Manage the social impact and scope of investigations.', Icon: Globe, theme: 'violet' },
  { title: 'Cyber Investigation Compliance Framework', description: 'Monitor compliance within investigation protocols.', Icon: Layers, theme: 'rose' },
  { title: 'Investigation Ethics & Legal Standards', description: 'Track ethics adherence and legal standards.', Icon: Scale, theme: 'amber' },
  { title: 'Cyber Security & Investigation Protocols', description: 'Configure security protocols for cyber operations.', Icon: Shield, theme: 'cyan' },
  { title: 'Digital Security Certification', description: 'Manage organizational digital security certificates.', Icon: Award, theme: 'blue' },
  { title: 'Operational Resources & Team', description: 'Manage teams and resources allocated for operations.', Icon: Users, theme: 'indigo' },
  { title: 'Cybercrime Response Capabilities', description: 'Track incident response and handling capabilities.', Icon: Zap, theme: 'emerald' },
  { title: 'Team, Tool & Tech Capacity', description: 'Manage inventory of tools and technological capacity.', Icon: Cpu, theme: 'violet' },
  { title: 'Compliance with Indian Cyber Laws', description: 'Ensure alignment with regional Indian cyber laws.', Icon: MapPin, theme: 'rose' },
  { title: 'Cyber Law Compliance Standards', description: 'Define framework for cyber law standards.', Icon: FileText, theme: 'amber' },
  { title: 'Compliance with Cybercrime Regulation', description: 'Manage alignment with external cyber regulations.', Icon: Settings, theme: 'cyan' },
  { title: 'Cybercrime Compliance Framework', description: 'Configure the overarching compliance framework.', Icon: Layout, theme: 'blue' },
  { title: 'Resource & Report', description: 'Manage investigation resources and final reports.', Icon: FileText, theme: 'indigo' },
  { title: 'Recognized Power & Responsibility', description: 'Define the recognized powers and authorized responsibilities.', Icon: ShieldCheck, theme: 'emerald' },
];

const ourServiceCards = [
  { title: 'Software and IT Services', description: 'Manage software development and IT infrastructure services.', Icon: Code, theme: 'blue' },
  { title: 'Digital Marketing Services', description: 'Configure digital marketing, SEO, and social media campaigns.', Icon: Globe, theme: 'indigo' },
  { title: 'Victim Support Services', description: 'Manage cybercrime victim support and counseling resources.', Icon: LifeBuoy, theme: 'emerald' },
  { title: 'Legal Info & Doc Support', description: 'Update legal information and documentation templates.', Icon: FileText, theme: 'violet' },
  { title: 'Cyber Security Services', description: 'Configure enterprise cyber security and auditing services.', Icon: Shield, theme: 'rose' },
  { title: 'Cyber Investigation Services', description: 'Manage digital forensics and cyber investigation tools.', Icon: Activity, theme: 'amber' },
  { title: 'Legal Services', description: 'Configure legal counsel and representation services.', Icon: Scale, theme: 'cyan' },
  { title: 'Education Services', description: 'Manage educational programs and academic resources.', Icon: BookOpen, theme: 'blue' },
  { title: 'Training & Internship Services', description: 'Configure practical training and internship programs.', Icon: Users, theme: 'indigo' },
  { title: 'Placement Services', description: 'Manage career placement and recruitment assistance.', Icon: Briefcase, theme: 'emerald' },
  { title: 'Cyber Awareness Services', description: 'Configure public cyber awareness and safety campaigns.', Icon: Eye, theme: 'violet' },
  { title: 'Legal Support', description: 'Manage ongoing legal support and advisory services.', Icon: ShieldCheck, theme: 'rose' },
];

const softwareProductCards = [
  { title: 'Developed Software Products', description: 'Manage the portfolio of fully developed software products.', Icon: Code, theme: 'blue' },
  { title: 'Products Under Development', description: 'Track status and details of ongoing software projects.', Icon: Settings, theme: 'indigo' },
  { title: 'Upcoming Software Innovations', description: 'Plan and manage the pipeline for future software innovations.', Icon: Zap, theme: 'emerald' },
  { title: 'Cyber Security Software Solutions', description: 'Manage enterprise cyber security product offerings.', Icon: Shield, theme: 'violet' },
  { title: 'AI & Automation Products', description: 'Configure AI-driven and automated software solutions.', Icon: Cpu, theme: 'rose' },
  { title: 'Mobile Application Products', description: 'Manage mobile app deployments across iOS and Android.', Icon: Smartphone, theme: 'amber' },
  { title: 'Web-Based Digital Platforms', description: 'Track and manage web-based tools and digital platforms.', Icon: Globe, theme: 'cyan' },
  { title: 'Enterprise Software Solutions', description: 'Configure comprehensive enterprise-scale software suites.', Icon: Building2, theme: 'blue' },
  { title: 'Educational Technology Products', description: 'Manage EdTech products, LMS, and e-learning platforms.', Icon: BookOpen, theme: 'indigo' },
  { title: 'Data Analytics & Reporting Tools', description: 'Configure data visualization and analytics reporting tools.', Icon: Activity, theme: 'emerald' },
  { title: 'Cloud-Based Software Solutions', description: 'Manage SaaS and cloud-hosted product deployments.', Icon: Server, theme: 'violet' },
  { title: 'Research & Development Products', description: 'Track internal R&D software prototypes and tools.', Icon: FileText, theme: 'rose' },
  { title: 'Cyber Crime Investigation Software', description: 'Manage specialized software for cyber investigations.', Icon: Search, theme: 'amber' },
  { title: 'Cyber Security Software', description: 'Configure general cyber security and antivirus software.', Icon: ShieldCheck, theme: 'cyan' },
  { title: 'Cyber Crime Awareness Software', description: 'Manage tools designed for public cyber awareness.', Icon: Eye, theme: 'blue' },
  { title: 'Cyber Crime Victim Support Software', description: 'Configure software portals for victim assistance.', Icon: LifeBuoy, theme: 'indigo' },
  { title: 'Case Tracking Software', description: 'Manage legal and investigation case tracking software.', Icon: Database, theme: 'emerald' },
  { title: 'Cyber Intelligence Software', description: 'Configure threat intelligence and OSINT software tools.', Icon: Crosshair, theme: 'violet' },
  { title: 'Digital Forensic Support Tools', description: 'Manage digital forensic extraction and analysis tools.', Icon: Search, theme: 'rose' },
  { title: 'Training & Internship Management Software', description: 'Configure software for managing trainees and interns.', Icon: Users, theme: 'amber' },
  { title: 'User Support & Helpdesk Software', description: 'Manage IT helpdesk and customer support ticketing tools.', Icon: MessageCircle, theme: 'cyan' },
  { title: 'HR & Recruitment Management Software', description: 'Configure HR software, ATS, and employee management tools.', Icon: Briefcase, theme: 'blue' },
  { title: 'Police Investigation Tools & Software', description: 'Manage specific software tools provided to law enforcement.', Icon: Target, theme: 'indigo' },
  { title: 'Software Product Overview', description: 'View high-level analytics and summaries of all software products.', Icon: Layout, theme: 'emerald' },
];

const skillDevelopmentCards = [
  { title: 'Internships', description: 'Manage comprehensive internship programs across multiple disciplines.', Icon: Users, theme: 'blue' },
  { title: 'Training Programs', description: 'Manage specialized training courses and educational programs.', Icon: BookOpen, theme: 'indigo' },
  { title: 'Courses', description: 'Manage comprehensive course catalogs and educational curriculum.', Icon: Play, theme: 'cyan' },
  { title: 'Workshops', description: 'Manage hands-on workshops and intensive training sessions.', Icon: Cpu, theme: 'rose' },
  { title: 'Awareness Programs', description: 'Manage cyber awareness campaigns and public education programs.', Icon: Eye, theme: 'amber' },
  { title: 'Research Programs', description: 'Manage academic and industrial research programs.', Icon: Search, theme: 'cyan' },
  { title: 'Mentorship Programs', description: 'Manage personalized mentorship and professional guidance.', Icon: UserCheck, theme: 'violet' },
  { title: 'Corporate Training', description: 'Manage corporate upskilling and professional development.', Icon: Building2, theme: 'indigo' },
  { title: 'Hackathons', description: 'Manage competitive hackathons and coding challenges.', Icon: Zap, theme: 'cyan' },
  { title: 'Talent Placement Program', description: 'Manage talent acquisition, hiring, and job placement.', Icon: Briefcase, theme: 'blue' },
  { title: 'Career Guidance', description: 'Provide professional career counseling and path planning.', Icon: Compass, theme: 'emerald' },
  { title: 'Digital Libraries', description: 'Manage digital assets, educational resources, and books.', Icon: BookOpen, theme: 'violet' },
];

const internshipCards = [
  { title: 'Cybersecurity Internship', description: 'Manage internship programs focused on core cybersecurity.', Icon: Shield, theme: 'blue' },
  { title: 'Cyber Forensics Internship', description: 'Manage digital forensics and evidence analysis programs.', Icon: Search, theme: 'indigo' },
  { title: 'Ethical Hacking Internship', description: 'Manage programs for ethical hacking and vulnerability assessment.', Icon: Code, theme: 'emerald' },
  { title: 'Penetration Testing Internship', description: 'Configure offensive security and pen-testing internships.', Icon: Target, theme: 'violet' },
  { title: 'SOC Analyst Internship', description: 'Manage Security Operations Center (SOC) analyst programs.', Icon: Activity, theme: 'rose' },
  { title: 'Network Security Internship', description: 'Manage network infrastructure security internships.', Icon: Network, theme: 'amber' },
  { title: 'Cloud Security Internship', description: 'Configure cloud architecture and security programs.', Icon: Cloud, theme: 'cyan' },
  { title: 'Incident Response Internship', description: 'Manage cyber incident response training programs.', Icon: AlertCircle, theme: 'blue' },
  { title: 'Threat Intelligence Internship', description: 'Configure threat hunting and intelligence internships.', Icon: Crosshair, theme: 'indigo' },
  { title: 'Application Security (AppSec)', description: 'Manage software application security internships.', Icon: ShieldCheck, theme: 'emerald' },
  { title: 'Malware Analysis Internship', description: 'Configure reverse engineering and malware analysis programs.', Icon: Cpu, theme: 'violet' },
  { title: 'OSINT Internship', description: 'Manage Open Source Intelligence gathering programs.', Icon: Globe, theme: 'rose' },
  { title: 'Software Development Internship', description: 'Configure general software engineering internships.', Icon: Code, theme: 'amber' },
  { title: 'Web Development Internship', description: 'Manage frontend and backend web development programs.', Icon: Layout, theme: 'cyan' },
  { title: 'App Development Internship', description: 'Configure mobile and desktop application development programs.', Icon: Smartphone, theme: 'blue' },
  { title: 'iOS Development Internship', description: 'Manage specialized Apple iOS development internships.', Icon: Smartphone, theme: 'indigo' },
  { title: 'DevOps Internship', description: 'Configure CI/CD, infrastructure, and DevOps internships.', Icon: Server, theme: 'emerald' },
  { title: 'QA / Testing Internship', description: 'Manage quality assurance and software testing programs.', Icon: CheckCircle, theme: 'violet' },
  { title: 'Database Administration (DBA)', description: 'Configure database architecture and administration programs.', Icon: Database, theme: 'rose' },
  { title: 'Blockchain Internship', description: 'Manage Web3, smart contracts, and blockchain internships.', Icon: Layers, theme: 'amber' },
  { title: 'AI / Machine Learning Internship', description: 'Configure artificial intelligence and ML training programs.', Icon: Cpu, theme: 'cyan' },
  { title: 'Data Science Internship', description: 'Manage advanced data science and modeling internships.', Icon: Activity, theme: 'blue' },
  { title: 'Data Analyst Internship', description: 'Configure data analysis and visualization programs.', Icon: BarChart, theme: 'indigo' },
  { title: 'UI/UX Design Internship', description: 'Manage user interface and user experience design programs.', Icon: Palette, theme: 'emerald' },
  { title: 'IT Internship', description: 'Configure general Information Technology support programs.', Icon: MonitorPlay, theme: 'violet' },
  { title: 'HR Internship', description: 'Manage human resources and recruitment internships.', Icon: Users, theme: 'rose' },
  { title: 'Chartered Accountancy Internship', description: 'Configure accounting, auditing, and financial programs.', Icon: Briefcase, theme: 'amber' },
  { title: 'Journalism Internship', description: 'Manage reporting, media, and journalism internships.', Icon: FileText, theme: 'cyan' },
  { title: 'Digital Marketing Internship', description: 'Configure SEO, marketing, and campaign management programs.', Icon: Globe, theme: 'blue' },
  { title: 'Graphic Design Internship', description: 'Manage visual design and branding internships.', Icon: Image, theme: 'indigo' },
  { title: 'Content Writing Internship', description: 'Configure copywriting and content creation programs.', Icon: FileText, theme: 'emerald' },
  { title: 'Finance Internship', description: 'Manage corporate finance and economic analysis programs.', Icon: Briefcase, theme: 'violet' },
  { title: 'Business Development Internship', description: 'Configure sales and business growth internships.', Icon: Handshake, theme: 'rose' },
  { title: 'Product Management Internship', description: 'Manage product lifecycle and strategy internships.', Icon: Layout, theme: 'amber' },
  { title: 'Marketing Internship', description: 'Configure general marketing and advertising internships.', Icon: Star, theme: 'cyan' },
  { title: 'Reverse Engineering Internship', description: 'Manage software and hardware reverse engineering programs.', Icon: Cpu, theme: 'blue' },
  { title: 'Cyber Law Internship', description: 'Configure programs focused on digital technology laws.', Icon: Scale, theme: 'indigo' },
  { title: 'Cyber Psychology Internship', description: 'Manage psychology and human factors in cyber space programs.', Icon: User, theme: 'emerald' },
  { title: 'Cyber Crime Investigation Internship', description: 'Configure investigation techniques and procedures programs.', Icon: Search, theme: 'violet' },
  { title: 'Cybercrime Case Study Internship', description: 'Manage deep-dive case study and analysis internships.', Icon: BookOpen, theme: 'rose' },
  { title: 'Cyber Intelligence Internship', description: 'Configure advanced cyber intelligence operations programs.', Icon: Target, theme: 'amber' },
  { title: 'Digital Evidence Analysis Internship', description: 'Manage forensics and digital evidence analysis programs.', Icon: Search, theme: 'cyan' },
  { title: 'Cyber Risk Assessment Internship', description: 'Configure organizational risk assessment training programs.', Icon: ShieldCheck, theme: 'blue' },
  { title: 'Legal Research Internship', description: 'Manage comprehensive legal research and study programs.', Icon: BookOpen, theme: 'indigo' },
  { title: 'Corporate Law Internship', description: 'Configure enterprise and corporate law internships.', Icon: Briefcase, theme: 'emerald' },
  { title: 'Criminal Law Internship', description: 'Manage criminal justice and law internships.', Icon: Scale, theme: 'violet' },
  { title: 'Digital Rights Internship', description: 'Configure human rights in digital spaces programs.', Icon: Eye, theme: 'rose' },
  { title: 'Legal Consulting Internship', description: 'Manage advisory and legal consulting internships.', Icon: Handshake, theme: 'amber' },
];

const trainingProgramCards = [
  { title: 'Cybersecurity', description: 'Training in core cybersecurity concepts and practices.', Icon: Shield, theme: 'blue' },
  { title: 'Software Development', description: 'Comprehensive training in software engineering.', Icon: Code, theme: 'indigo' },
  { title: 'Data Analytics', description: 'Training in data processing, analytics, and visualization.', Icon: BarChart, theme: 'emerald' },
  { title: 'Data Science', description: 'Advanced training in data science and statistical modeling.', Icon: Activity, theme: 'violet' },
  { title: 'Artificial Intelligence & Machine Learning', description: 'Training in AI, ML models, and predictive algorithms.', Icon: Cpu, theme: 'rose' },
  { title: 'Web Development', description: 'Frontend and backend web development courses.', Icon: Layout, theme: 'amber' },
  { title: 'Mobile App Development', description: 'Cross-platform mobile application development training.', Icon: Smartphone, theme: 'cyan' },
  { title: 'iOS Development', description: 'Specialized Apple iOS app development courses.', Icon: Smartphone, theme: 'blue' },
  { title: 'DevOps Engineering', description: 'Training in CI/CD, automation, and DevOps methodologies.', Icon: Server, theme: 'indigo' },
  { title: 'Software Testing & QA', description: 'Quality assurance and software testing methodologies.', Icon: CheckCircle, theme: 'emerald' },
  { title: 'Database Administration (DBA)', description: 'Training in database management and architecture.', Icon: Database, theme: 'violet' },
  { title: 'Blockchain Development', description: 'Web3, smart contracts, and blockchain programming.', Icon: Layers, theme: 'rose' },
  { title: 'UI/UX Design', description: 'User interface and user experience design training.', Icon: Palette, theme: 'amber' },
  { title: 'Graphic Design', description: 'Visual design, branding, and digital graphic creation.', Icon: Image, theme: 'cyan' },
  { title: 'Content Writing', description: 'Training in copywriting, SEO content, and technical writing.', Icon: FileText, theme: 'blue' },
  { title: 'Digital Marketing', description: 'Comprehensive digital marketing and campaign training.', Icon: Globe, theme: 'indigo' },
  { title: 'Marketing Management', description: 'Training in strategic marketing management.', Icon: Star, theme: 'emerald' },
  { title: 'Business Development', description: 'Sales strategy and business growth training.', Icon: Handshake, theme: 'violet' },
  { title: 'Product Management', description: 'Product lifecycle and strategy management courses.', Icon: Layout, theme: 'rose' },
  { title: 'Finance & Accounting', description: 'Training in corporate finance, accounting, and economics.', Icon: Briefcase, theme: 'amber' },
  { title: 'Human Resources (HR)', description: 'HR management and recruitment training.', Icon: Users, theme: 'cyan' },
  { title: 'Journalism & Media', description: 'Training in reporting, media studies, and journalism.', Icon: FileText, theme: 'blue' },
  { title: 'Chartered Accountancy (CA)', description: 'Advanced accounting and auditing training.', Icon: Briefcase, theme: 'indigo' },
  { title: 'Ethical Hacking', description: 'Offensive security and ethical hacking practices.', Icon: Code, theme: 'emerald' },
  { title: 'Penetration Testing', description: 'Advanced penetration testing and vulnerability assessment.', Icon: Target, theme: 'violet' },
  { title: 'SOC Analyst', description: 'Security Operations Center monitoring and analysis.', Icon: Activity, theme: 'rose' },
  { title: 'Network Security', description: 'Securing network infrastructure and protocols.', Icon: Network, theme: 'amber' },
  { title: 'Cloud Security', description: 'Cloud architecture and cloud-native security training.', Icon: Cloud, theme: 'cyan' },
  { title: 'Incident Response', description: 'Cyber incident handling and response procedures.', Icon: AlertCircle, theme: 'blue' },
  { title: 'Threat Intelligence', description: 'Threat hunting and cyber intelligence gathering.', Icon: Crosshair, theme: 'indigo' },
  { title: 'Application Security (AppSec)', description: 'Securing software applications from vulnerabilities.', Icon: ShieldCheck, theme: 'emerald' },
  { title: 'Malware Analysis', description: 'Reverse engineering and analyzing malicious software.', Icon: Cpu, theme: 'violet' },
  { title: 'OSINT (Open Source Intelligence)', description: 'Open source intelligence collection and analysis.', Icon: Globe, theme: 'rose' },
  { title: 'Reverse Engineering', description: 'Hardware and software reverse engineering techniques.', Icon: Cpu, theme: 'amber' },
  { title: 'Cyber Forensics', description: 'Digital forensics and post-incident analysis.', Icon: Search, theme: 'cyan' },
  { title: 'Cyber Crime Investigation', description: 'Methodologies for investigating digital crimes.', Icon: Search, theme: 'blue' },
  { title: 'Cybercrime Case Study', description: 'In-depth analysis of major cybercrime cases.', Icon: BookOpen, theme: 'indigo' },
  { title: 'Cyber Intelligence', description: 'Advanced operations in cyber intelligence.', Icon: Target, theme: 'emerald' },
  { title: 'Digital Evidence Analysis', description: 'Acquisition and analysis of digital evidence.', Icon: Search, theme: 'violet' },
  { title: 'Cyber Risk Assessment', description: 'Evaluating and managing organizational cyber risks.', Icon: ShieldCheck, theme: 'rose' },
  { title: 'Cyber Psychology', description: 'Understanding the human element in cybersecurity.', Icon: User, theme: 'amber' },
  { title: 'Cyber Law', description: 'Training in digital technology and cyber laws.', Icon: Scale, theme: 'cyan' },
  { title: 'Legal Research', description: 'Methodologies for comprehensive legal research.', Icon: BookOpen, theme: 'blue' },
  { title: 'Corporate Law', description: 'Training in corporate legal compliance and structures.', Icon: Briefcase, theme: 'indigo' },
  { title: 'Criminal Law', description: 'Foundational training in criminal justice and law.', Icon: Scale, theme: 'emerald' },
  { title: 'Digital Rights', description: 'Studying human rights in the digital landscape.', Icon: Eye, theme: 'violet' },
  { title: 'Legal Consulting', description: 'Training for advisory and legal consulting roles.', Icon: Handshake, theme: 'rose' },
  { title: 'Cyber Threat Hunting', description: 'Proactively searching for cyber threats and anomalies.', Icon: Crosshair, theme: 'amber' },
];

const courseCards = [
  { title: 'Cybersecurity Course', description: 'Course on core cybersecurity concepts and practices.', Icon: Shield, theme: 'blue' },
  { title: 'Ethical Hacking Course', description: 'Offensive security and ethical hacking practices.', Icon: Code, theme: 'indigo' },
  { title: 'Penetration Testing Course', description: 'Advanced penetration testing and vulnerability assessment.', Icon: Target, theme: 'emerald' },
  { title: 'SOC Analyst Course', description: 'Security Operations Center monitoring and analysis.', Icon: Activity, theme: 'violet' },
  { title: 'Network Security Course', description: 'Securing network infrastructure and protocols.', Icon: Network, theme: 'rose' },
  { title: 'Cloud Security Course', description: 'Cloud architecture and cloud-native security.', Icon: Cloud, theme: 'amber' },
  { title: 'Incident Response Course', description: 'Cyber incident handling and response procedures.', Icon: AlertCircle, theme: 'cyan' },
  { title: 'Threat Intelligence Course', description: 'Threat hunting and cyber intelligence gathering.', Icon: Crosshair, theme: 'blue' },
  { title: 'Application Security (AppSec) Course', description: 'Securing software applications from vulnerabilities.', Icon: ShieldCheck, theme: 'indigo' },
  { title: 'Malware Analysis Course', description: 'Reverse engineering and analyzing malicious software.', Icon: Cpu, theme: 'emerald' },
  { title: 'OSINT (Open Source Intelligence) Course', description: 'Open source intelligence collection and analysis.', Icon: Globe, theme: 'violet' },
  { title: 'Reverse Engineering Course', description: 'Hardware and software reverse engineering techniques.', Icon: Cpu, theme: 'rose' },
  { title: 'Cyber Forensics Course', description: 'Digital forensics and post-incident analysis.', Icon: Search, theme: 'amber' },
  { title: 'Cyber Crime Investigation Course', description: 'Methodologies for investigating digital crimes.', Icon: Search, theme: 'cyan' },
  { title: 'Cybercrime Case Study Course', description: 'In-depth analysis of major cybercrime cases.', Icon: BookOpen, theme: 'blue' },
  { title: 'Cyber Intelligence Course', description: 'Advanced operations in cyber intelligence.', Icon: Target, theme: 'indigo' },
  { title: 'Digital Evidence Analysis Course', description: 'Acquisition and analysis of digital evidence.', Icon: Search, theme: 'emerald' },
  { title: 'Cyber Risk Assessment Course', description: 'Evaluating and managing organizational cyber risks.', Icon: ShieldCheck, theme: 'violet' },
  { title: 'Cyber Psychology Course', description: 'Understanding the human element in cybersecurity.', Icon: User, theme: 'rose' },
  { title: 'Cyber Threat Hunting Course', description: 'Proactively searching for cyber threats and anomalies.', Icon: Crosshair, theme: 'amber' },
  { title: 'Software Development Course', description: 'Comprehensive course in software engineering.', Icon: Code, theme: 'cyan' },
  { title: 'Data Analytics Course', description: 'Course in data processing, analytics, and visualization.', Icon: BarChart, theme: 'blue' },
  { title: 'Data Science Course', description: 'Advanced course in data science and statistical modeling.', Icon: Activity, theme: 'indigo' },
  { title: 'Artificial Intelligence & Machine Learning Course', description: 'Course in AI, ML models, and predictive algorithms.', Icon: Cpu, theme: 'emerald' },
  { title: 'Web Development Course', description: 'Frontend and backend web development courses.', Icon: Layout, theme: 'violet' },
  { title: 'Mobile App Development Course', description: 'Cross-platform mobile application development.', Icon: Smartphone, theme: 'rose' },
  { title: 'iOS Development Course', description: 'Specialized Apple iOS app development courses.', Icon: Smartphone, theme: 'amber' },
  { title: 'DevOps Engineering Course', description: 'Course in CI/CD, automation, and DevOps methodologies.', Icon: Server, theme: 'cyan' },
  { title: 'Software Testing & QA Course', description: 'Quality assurance and software testing methodologies.', Icon: CheckCircle, theme: 'blue' },
  { title: 'Database Administration (DBA) Course', description: 'Course in database management and architecture.', Icon: Database, theme: 'indigo' },
  { title: 'Blockchain Development Course', description: 'Web3, smart contracts, and blockchain programming.', Icon: Layers, theme: 'emerald' },
  { title: 'UI/UX Design Course', description: 'User interface and user experience design course.', Icon: Palette, theme: 'violet' },
  { title: 'Graphic Design Course', description: 'Visual design, branding, and digital graphic creation.', Icon: Image, theme: 'rose' },
  { title: 'Content Writing Course', description: 'Course in copywriting, SEO content, and technical writing.', Icon: FileText, theme: 'amber' },
  { title: 'Digital Marketing Course', description: 'Comprehensive digital marketing and campaign course.', Icon: Globe, theme: 'cyan' },
  { title: 'Marketing Management Course', description: 'Course in strategic marketing management.', Icon: Star, theme: 'blue' },
  { title: 'Business Development Course', description: 'Sales strategy and business growth course.', Icon: Handshake, theme: 'indigo' },
  { title: 'Product Management Course', description: 'Product lifecycle and strategy management course.', Icon: Layout, theme: 'emerald' },
  { title: 'Finance & Accounting Course', description: 'Course in corporate finance, accounting, and economics.', Icon: Briefcase, theme: 'violet' },
  { title: 'Chartered Accountancy (CA) Course', description: 'Advanced accounting and auditing course.', Icon: Briefcase, theme: 'rose' },
  { title: 'Cyber Law Course', description: 'Course in digital technology and cyber laws.', Icon: Scale, theme: 'amber' },
  { title: 'Legal Research Course', description: 'Methodologies for comprehensive legal research.', Icon: BookOpen, theme: 'cyan' },
  { title: 'Corporate Law Course', description: 'Course in corporate legal compliance and structures.', Icon: Briefcase, theme: 'blue' },
  { title: 'Criminal Law Course', description: 'Foundational course in criminal justice and law.', Icon: Scale, theme: 'indigo' },
  { title: 'Digital Rights Course', description: 'Studying human rights in the digital landscape.', Icon: Eye, theme: 'emerald' },
  { title: 'Legal Consulting Course', description: 'Course for advisory and legal consulting roles.', Icon: Handshake, theme: 'violet' },
  { title: 'Human Resources (HR) Course', description: 'HR management and recruitment course.', Icon: Users, theme: 'rose' },
  { title: 'Journalism & Media Course', description: 'Course in reporting, media studies, and journalism.', Icon: FileText, theme: 'amber' },
];

const workshopCards = [
  { title: 'Ethical Security Workshop', description: 'Hands-on workshop focusing on ethical security practices.', Icon: Shield, theme: 'blue' },
  { title: 'Cybersecurity Essentials Workshop', description: 'Core principles and essentials of cybersecurity.', Icon: ShieldCheck, theme: 'indigo' },
  { title: 'Network Security Workshop', description: 'Deep dive into network protocols and defense mechanisms.', Icon: Network, theme: 'emerald' },
  { title: 'SOC Analyst Workshop', description: 'Practical training on Security Operations Center monitoring.', Icon: Activity, theme: 'violet' },
  { title: 'Malware Analysis Workshop', description: 'Techniques for analyzing and understanding malware.', Icon: Cpu, theme: 'rose' },
  { title: 'React JS Workshop', description: 'Frontend development workshop focusing on React JS.', Icon: Code, theme: 'amber' },
  { title: 'Full Stack Development Workshop', description: 'Comprehensive full-stack web application development.', Icon: Layout, theme: 'cyan' },
  { title: 'Mobile App Development Workshop', description: 'Building and deploying cross-platform mobile apps.', Icon: Smartphone, theme: 'blue' },
  { title: 'API Development Workshop', description: 'Designing, building, and securing RESTful APIs.', Icon: Server, theme: 'indigo' },
  { title: 'Git & GitHub Workshop', description: 'Version control and collaboration using Git and GitHub.', Icon: FileText, theme: 'emerald' },
  { title: 'Data Analytics Workshop', description: 'Hands-on data processing and analytics tools.', Icon: BarChart, theme: 'violet' },
  { title: 'Data Science Workshop', description: 'Advanced statistics and data modeling techniques.', Icon: Activity, theme: 'rose' },
  { title: 'Machine Learning Workshop', description: 'Building and training machine learning algorithms.', Icon: Cpu, theme: 'amber' },
  { title: 'Generative AI Workshop', description: 'Exploring and building with generative AI models.', Icon: Cpu, theme: 'cyan' },
  { title: 'Prompt Engineering Workshop', description: 'Techniques for optimizing AI prompt interactions.', Icon: Terminal, theme: 'blue' },
  { title: 'UI/UX Design Workshop', description: 'Designing intuitive and engaging user interfaces.', Icon: Palette, theme: 'indigo' },
  { title: 'Figma Masterclass Workshop', description: 'Advanced interface design using Figma.', Icon: Image, theme: 'emerald' },
  { title: 'Graphic Design Workshop', description: 'Fundamentals of digital graphic design and branding.', Icon: Image, theme: 'violet' },
  { title: 'Digital Marketing Workshop', description: 'Strategies for digital marketing and online growth.', Icon: Globe, theme: 'rose' },
  { title: 'SEO Workshop', description: 'Search engine optimization and ranking strategies.', Icon: Search, theme: 'amber' },
  { title: 'Social Media Marketing Workshop', description: 'Building and managing social media campaigns.', Icon: Users, theme: 'cyan' },
  { title: 'Content Marketing Workshop', description: 'Creating compelling content for digital marketing.', Icon: FileText, theme: 'blue' },
  { title: 'Product Management Workshop', description: 'Managing product lifecycles and product strategies.', Icon: Layout, theme: 'indigo' },
  { title: 'Business Development Workshop', description: 'Techniques for sales and scaling business growth.', Icon: Handshake, theme: 'emerald' },
  { title: 'Entrepreneurship Workshop', description: 'Foundations of starting and managing a new venture.', Icon: Briefcase, theme: 'violet' },
  { title: 'Cyber Law Workshop', description: 'Navigating digital technology and cyber laws.', Icon: Scale, theme: 'rose' },
  { title: 'Digital Rights Workshop', description: 'Understanding human rights in digital spaces.', Icon: Eye, theme: 'amber' },
  { title: 'Legal Research Workshop', description: 'Effective methodologies for legal research.', Icon: BookOpen, theme: 'cyan' },
  { title: 'Cloud Computing Workshop', description: 'Fundamentals of cloud architecture and services.', Icon: Cloud, theme: 'blue' },
  { title: 'DevOps Fundamentals Workshop', description: 'Introduction to CI/CD and DevOps practices.', Icon: Server, theme: 'indigo' },
  { title: 'Docker & Kubernetes Workshop', description: 'Containerization and orchestration masterclass.', Icon: Layers, theme: 'emerald' },
  { title: 'Blockchain Development Workshop', description: 'Building smart contracts and decentralized apps.', Icon: Layers, theme: 'violet' },
  { title: 'Internet of Things (IoT) Workshop', description: 'Connecting and securing IoT devices and networks.', Icon: Cpu, theme: 'rose' },
  { title: 'Database Management Workshop', description: 'Designing and querying relational databases.', Icon: Database, theme: 'amber' },
  { title: 'Software Testing Automation Workshop', description: 'Automating software quality assurance workflows.', Icon: CheckCircle, theme: 'cyan' },
  { title: 'Reverse Engineering Workshop', description: 'Techniques for reverse engineering hardware/software.', Icon: Cpu, theme: 'blue' },
  { title: 'Threat Intelligence Workshop', description: 'Gathering and analyzing cyber threat intelligence.', Icon: Crosshair, theme: 'indigo' },
  { title: 'Cyber Forensics Workshop', description: 'Digital forensics and post-incident investigation.', Icon: Search, theme: 'emerald' },
  { title: 'OSINT Investigation Workshop', description: 'Advanced Open Source Intelligence gathering.', Icon: Globe, theme: 'violet' },
  { title: 'Incident Response Workshop', description: 'Hands-on cyber incident handling and response.', Icon: AlertCircle, theme: 'rose' },
  { title: 'Cyber Threat Hunting Workshop', description: 'Proactively detecting and neutralizing cyber threats.', Icon: Crosshair, theme: 'amber' },
  { title: 'Corporate Law Workshop', description: 'Navigating corporate legal structures and compliance.', Icon: Briefcase, theme: 'cyan' },
  { title: 'Criminal Law Workshop', description: 'Foundations of criminal justice and law.', Icon: Scale, theme: 'blue' },
  { title: 'Finance & Accounting Workshop', description: 'Essentials of corporate finance and accounting.', Icon: Briefcase, theme: 'indigo' },
  { title: 'Human Resource Management Workshop', description: 'Managing talent and organizational culture.', Icon: Users, theme: 'emerald' },
  { title: 'Journalism & Media Production Workshop', description: 'Modern reporting and digital media production.', Icon: FileText, theme: 'violet' },
  { title: 'Content Writing & Copywriting Workshop', description: 'Crafting high-impact copy and engaging content.', Icon: FileText, theme: 'rose' },
  { title: 'Startup & Innovation Workshop', description: 'Strategies for innovative product and startup creation.', Icon: Target, theme: 'amber' },
];

const awarenessCards = [
  { title: 'Cyber Safety Awareness Program', description: 'Program for general online safety and best practices.', Icon: Shield, theme: 'blue' },
  { title: 'Internet Security Awareness Program', description: 'Awareness on securing personal and enterprise internet connections.', Icon: Network, theme: 'indigo' },
  { title: 'Digital Privacy Awareness Program', description: 'Educating on data privacy and digital footprint protection.', Icon: EyeOff, theme: 'emerald' },
  { title: 'Online Fraud Prevention Awareness Program', description: 'Awareness on avoiding online scams and financial fraud.', Icon: AlertCircle, theme: 'violet' },
  { title: 'Phishing Awareness Program', description: 'Recognizing and avoiding email and message phishing attacks.', Icon: Crosshair, theme: 'rose' },
  { title: 'Ransomware Awareness Program', description: 'Awareness on ransomware risks and prevention strategies.', Icon: ShieldCheck, theme: 'amber' },
  { title: 'Social Engineering Awareness Program', description: 'Understanding psychological manipulation in cyber attacks.', Icon: UserCheck, theme: 'cyan' },
  { title: 'Password Security Awareness Program', description: 'Best practices for strong password management.', Icon: Lock, theme: 'blue' },
  { title: 'Safe Browsing Awareness Program', description: 'Guidelines for safe web browsing and downloading.', Icon: Globe, theme: 'indigo' },
  { title: 'Mobile Security Awareness Program', description: 'Securing mobile devices and applications.', Icon: Smartphone, theme: 'emerald' },
  { title: 'Cloud Security Awareness Program', description: 'Understanding risks and security in cloud storage.', Icon: Cloud, theme: 'violet' },
  { title: 'Network Security Awareness Program', description: 'Basic awareness on securing local and Wi-Fi networks.', Icon: Network, theme: 'rose' },
  { title: 'Artificial Intelligence (AI) Awareness Program', description: 'General education on AI capabilities and risks.', Icon: Cpu, theme: 'amber' },
  { title: 'Machine Learning Awareness Program', description: 'Introduction to machine learning concepts and uses.', Icon: Activity, theme: 'cyan' },
  { title: 'Generative AI Awareness Program', description: 'Awareness on generative AI models and their impact.', Icon: Cpu, theme: 'blue' },
  { title: 'Responsible AI Awareness Program', description: 'Ethics and responsibility in AI development and usage.', Icon: Scale, theme: 'indigo' },
  { title: 'Data Science Awareness Program', description: 'Introduction to data science and big data analytics.', Icon: BarChart, theme: 'emerald' },
  { title: 'Data Analytics Awareness Program', description: 'Awareness on data processing and analysis tools.', Icon: Activity, theme: 'violet' },
  { title: 'Web Development Career Awareness Program', description: 'Career paths and opportunities in web development.', Icon: Layout, theme: 'rose' },
  { title: 'Mobile App Development Awareness Program', description: 'Exploring careers in mobile application development.', Icon: Smartphone, theme: 'amber' },
  { title: 'Software Development Awareness Program', description: 'Understanding the software engineering lifecycle.', Icon: Code, theme: 'cyan' },
  { title: 'DevOps Awareness Program', description: 'Introduction to DevOps and continuous integration.', Icon: Server, theme: 'blue' },
  { title: 'Software Testing Awareness Program', description: 'Awareness on QA and software testing methodologies.', Icon: CheckCircle, theme: 'indigo' },
  { title: 'Blockchain Technology Awareness Program', description: 'Introduction to blockchain and decentralized systems.', Icon: Layers, theme: 'emerald' },
  { title: 'UI/UX Design Awareness Program', description: 'Awareness on user interface and user experience design.', Icon: Palette, theme: 'violet' },
  { title: 'Graphic Design Awareness Program', description: 'Career opportunities in digital graphic design.', Icon: Image, theme: 'rose' },
  { title: 'Digital Content Creation Awareness Program', description: 'Creating and managing digital content.', Icon: FileText, theme: 'amber' },
  { title: 'Content Writing Awareness Program', description: 'Awareness on professional copywriting and SEO content.', Icon: FileText, theme: 'cyan' },
  { title: 'Digital Marketing Awareness Program', description: 'Introduction to digital marketing and campaigns.', Icon: Globe, theme: 'blue' },
  { title: 'SEO Awareness Program', description: 'Understanding search engine optimization strategies.', Icon: Search, theme: 'indigo' },
  { title: 'Social Media Awareness Program', description: 'Safe and effective use of social media platforms.', Icon: Users, theme: 'emerald' },
  { title: 'Brand Building Awareness Program', description: 'Strategies for personal and corporate brand building.', Icon: Star, theme: 'violet' },
  { title: 'Entrepreneurship Awareness Program', description: 'Foundations and pathways for entrepreneurship.', Icon: Briefcase, theme: 'rose' },
  { title: 'Startup Ecosystem Awareness Program', description: 'Navigating and understanding the startup ecosystem.', Icon: Target, theme: 'amber' },
  { title: 'Financial Literacy Awareness Program', description: 'Basic financial education and literacy.', Icon: BarChart, theme: 'cyan' },
  { title: 'Personal Finance Awareness Program', description: 'Managing personal finance and budgeting.', Icon: FileText, theme: 'blue' },
  { title: 'Investment Awareness Program', description: 'Awareness on safe investment strategies and risks.', Icon: Activity, theme: 'indigo' },
  { title: 'Chartered Accountancy Career Awareness Program', description: 'Exploring career paths in chartered accountancy.', Icon: Briefcase, theme: 'emerald' },
  { title: 'Human Resources Awareness Program', description: 'Career paths in HR and organizational management.', Icon: Users, theme: 'violet' },
  { title: 'Leadership & Teamwork Awareness Program', description: 'Building essential leadership and team skills.', Icon: Handshake, theme: 'rose' },
  { title: 'Career Development Awareness Program', description: 'General career planning and development strategies.', Icon: Compass, theme: 'amber' },
  { title: 'Professional Communication Awareness Program', description: 'Developing professional communication skills.', Icon: MessageCircle, theme: 'cyan' },
  { title: 'Cyber Law Awareness Program', description: 'Understanding basic cyber laws and digital regulations.', Icon: Scale, theme: 'blue' },
  { title: 'Digital Rights Awareness Program', description: 'Awareness of fundamental digital human rights.', Icon: Eye, theme: 'indigo' },
  { title: 'Corporate Law Awareness Program', description: 'Introduction to corporate compliance and law.', Icon: Briefcase, theme: 'emerald' },
  { title: 'Criminal Law Awareness Program', description: 'Basic understanding of criminal law processes.', Icon: Scale, theme: 'violet' },
  { title: 'Legal Rights Awareness Program', description: 'General awareness on constitutional and legal rights.', Icon: BookOpen, theme: 'rose' },
  { title: 'Cyber Crime Prevention Awareness Program', description: 'Proactive strategies for preventing cybercrimes.', Icon: ShieldCheck, theme: 'amber' },
];

const researchCards = [
  { title: 'Cybersecurity Research Program', description: 'Advanced research in core cybersecurity practices.', Icon: Shield, theme: 'blue' },
  { title: 'Ethical Hacking Research Program', description: 'Exploring new ethical hacking methodologies.', Icon: Code, theme: 'indigo' },
  { title: 'Penetration Testing Research Program', description: 'Innovations in vulnerability assessment techniques.', Icon: Target, theme: 'emerald' },
  { title: 'Network Security Research Program', description: 'Research in securing advanced network protocols.', Icon: Network, theme: 'violet' },
  { title: 'Cloud Security Research Program', description: 'Addressing emerging threats in cloud environments.', Icon: Cloud, theme: 'rose' },
  { title: 'Application Security Research Program', description: 'Advancing software vulnerability mitigation.', Icon: ShieldCheck, theme: 'amber' },
  { title: 'Malware Analysis Research Program', description: 'Deep behavioral analysis of malicious code.', Icon: Cpu, theme: 'cyan' },
  { title: 'Threat Intelligence Research Program', description: 'Predictive modeling in cyber threat intelligence.', Icon: Crosshair, theme: 'blue' },
  { title: 'Cyber Threat Hunting Research Program', description: 'Developing proactive threat hunting strategies.', Icon: Target, theme: 'indigo' },
  { title: 'Digital Forensics Research Program', description: 'Advancements in post-incident data extraction.', Icon: Search, theme: 'emerald' },
  { title: 'OSINT Research Program', description: 'Innovating Open Source Intelligence gathering.', Icon: Globe, theme: 'violet' },
  { title: 'Cyber Crime Investigation Research Program', description: 'Methodologies for digital crime analysis.', Icon: ShieldAlert, theme: 'rose' },
  { title: 'Artificial Intelligence Research Program (AI)', description: 'General AI research and theoretical foundations.', Icon: Cpu, theme: 'amber' },
  { title: 'Machine Learning Research Program', description: 'Advancing statistical models and learning algorithms.', Icon: Activity, theme: 'cyan' },
  { title: 'Deep Learning Research Program', description: 'Research in neural networks and deep architectures.', Icon: Layers, theme: 'blue' },
  { title: 'Generative AI Research Program', description: 'Exploring capabilities of generative AI models.', Icon: Terminal, theme: 'indigo' },
  { title: 'Natural Language Processing Research Program (NLP)', description: 'Research in human-computer linguistic interaction.', Icon: MessageCircle, theme: 'emerald' },
  { title: 'Computer Vision Research Program', description: 'Advancements in digital image and video processing.', Icon: Eye, theme: 'violet' },
  { title: 'Data Science Research Program', description: 'Novel approaches in big data and statistical analysis.', Icon: BarChart, theme: 'rose' },
  { title: 'Data Analytics Research Program', description: 'Innovations in data processing and visualization.', Icon: Activity, theme: 'amber' },
  { title: 'Software Engineering Research Program', description: 'Researching modern software lifecycle paradigms.', Icon: Code, theme: 'cyan' },
  { title: 'Web Development Research Program', description: 'Exploring future frameworks and web standards.', Icon: Layout, theme: 'blue' },
  { title: 'Mobile App Development Research Program', description: 'Advancements in cross-platform mobile architectures.', Icon: Smartphone, theme: 'indigo' },
  { title: 'DevOps Research Program', description: 'Researching CI/CD and infrastructure automation.', Icon: Server, theme: 'emerald' },
  { title: 'Software Testing Research Program', description: 'Innovations in automated QA and testing.', Icon: CheckCircle, theme: 'violet' },
  { title: 'Blockchain Research Program', description: 'Advancing decentralized systems and cryptography.', Icon: Layers, theme: 'rose' },
  { title: 'Database Systems Research Program', description: 'Research in scalable and secure database architectures.', Icon: Database, theme: 'amber' },
  { title: 'Cloud Computing Research Program', description: 'Exploring serverless and distributed cloud computing.', Icon: Cloud, theme: 'cyan' },
  { title: 'UI/UX Research Program', description: 'Researching cognitive models in user interfaces.', Icon: Palette, theme: 'blue' },
  { title: 'Human Computer Interaction Research Program (HCI)', description: 'Studying physical and psychological HCI.', Icon: User, theme: 'indigo' },
  { title: 'Graphic Design Research Program', description: 'Evolution of visual communication and design.', Icon: Image, theme: 'emerald' },
  { title: 'Digital Media Research Program', description: 'Researching consumption and impact of digital media.', Icon: MonitorPlay, theme: 'violet' },
  { title: 'Digital Marketing Research Program', description: 'Analyzing emerging trends in online marketing.', Icon: Globe, theme: 'rose' },
  { title: 'Consumer Behavior Research Program', description: 'Studying psychological drivers of consumer choices.', Icon: Users, theme: 'amber' },
  { title: 'Market Research Research Program', description: 'Developing novel market analysis methodologies.', Icon: BarChart, theme: 'cyan' },
  { title: 'Product Management Research Program', description: 'Research in product lifecycle and user-centric strategies.', Icon: Layout, theme: 'blue' },
  { title: 'Business Strategy Research Program', description: 'Analyzing organizational planning and market expansion.', Icon: Briefcase, theme: 'indigo' },
  { title: 'Entrepreneurship Research Program', description: 'Studying the dynamics of startups and innovation.', Icon: Target, theme: 'emerald' },
  { title: 'Organizational Behavior Research Program', description: 'Research on workplace culture and employee dynamics.', Icon: Users, theme: 'violet' },
  { title: 'Financial Technology Research Program (FinTech)', description: 'Innovations in financial technology and digital banking.', Icon: Zap, theme: 'rose' },
  { title: 'Financial Analysis Research Program', description: 'Advanced techniques for financial modeling.', Icon: Activity, theme: 'amber' },
  { title: 'Accounting Research Program', description: 'Researching regulatory compliance and accounting standards.', Icon: FileText, theme: 'cyan' },
  { title: 'Human Resource Research Program', description: 'Future trends in talent management and HR.', Icon: UserCheck, theme: 'blue' },
  { title: 'Cyber Law Research Program', description: 'Studying the evolution of global cyber regulations.', Icon: Scale, theme: 'indigo' },
  { title: 'Corporate Law Research Program', description: 'Research in corporate governance and compliance.', Icon: Briefcase, theme: 'emerald' },
  { title: 'Criminal Law Research Program', description: 'Analyzing systemic shifts in criminal justice.', Icon: Scale, theme: 'violet' },
  { title: 'Digital Rights Research Program', description: 'Researching the protection of online human rights.', Icon: Eye, theme: 'rose' },
  { title: 'Legal Policy Research Program', description: 'Developing public policy and legal frameworks.', Icon: BookOpen, theme: 'amber' },
];

const mentorshipCards = [
  { title: 'Cybersecurity Career Mentorship Program', description: 'Guidance and mentorship for cybersecurity careers.', Icon: Shield, theme: 'blue' },
  { title: 'Ethical Hacking Mentorship Program', description: 'Mentorship in offensive security and ethical hacking.', Icon: Code, theme: 'indigo' },
  { title: 'Penetration Testing Mentorship Program', description: 'Expert guidance on penetration testing methodologies.', Icon: Target, theme: 'emerald' },
  { title: 'SOC Analyst Mentorship Program', description: 'Mentorship for Security Operations Center roles.', Icon: Activity, theme: 'violet' },
  { title: 'Network Security Mentorship Program', description: 'Career mentorship in network security and defense.', Icon: Network, theme: 'rose' },
  { title: 'Cloud Security Mentorship Program', description: 'Guidance for cloud security architecture and operations.', Icon: Cloud, theme: 'amber' },
  { title: 'Threat Intelligence Mentorship Program', description: 'Mentorship in threat hunting and intelligence gathering.', Icon: Crosshair, theme: 'cyan' },
  { title: 'Cyber Forensics Mentorship Program', description: 'Expert mentorship in digital forensics and analysis.', Icon: Search, theme: 'blue' },
  { title: 'Cyber Crime Investigation Mentorship Program', description: 'Guidance on digital crime investigation techniques.', Icon: ShieldAlert, theme: 'indigo' },
  { title: 'Cyber Law Mentorship Program', description: 'Mentorship for careers in cyber law and policy.', Icon: Scale, theme: 'emerald' },
  { title: 'Data Analytics Mentorship Program', description: 'Guidance in data processing and visualization.', Icon: BarChart, theme: 'violet' },
  { title: 'Data Science Mentorship Program', description: 'Mentorship in advanced data science and statistics.', Icon: Activity, theme: 'rose' },
  { title: 'Artificial Intelligence (AI) Mentorship Program', description: 'Career guidance in artificial intelligence.', Icon: Cpu, theme: 'amber' },
  { title: 'Machine Learning Mentorship Program', description: 'Mentorship for machine learning models and engineering.', Icon: Layers, theme: 'cyan' },
  { title: 'Generative AI Mentorship Program', description: 'Guidance on generative AI development and application.', Icon: Cpu, theme: 'blue' },
  { title: 'Prompt Engineering Mentorship Program', description: 'Mentorship in optimizing AI prompt interactions.', Icon: Terminal, theme: 'indigo' },
  { title: 'Business Analytics Mentorship Program', description: 'Guidance on aligning data with business strategies.', Icon: Briefcase, theme: 'emerald' },
  { title: 'Deep Learning Mentorship Program', description: 'Advanced mentorship in neural networks and deep learning.', Icon: Layers, theme: 'violet' },
  { title: 'Software Development Mentorship Program', description: 'Mentorship across the software engineering lifecycle.', Icon: Code, theme: 'rose' },
  { title: 'Full Stack Development Mentorship Program', description: 'Guidance for frontend and backend web development.', Icon: Layout, theme: 'amber' },
  { title: 'Web Development Mentorship Program', description: 'Career mentorship for modern web development.', Icon: Layout, theme: 'cyan' },
  { title: 'Mobile App Development Mentorship Program', description: 'Mentorship in cross-platform mobile application development.', Icon: Smartphone, theme: 'blue' },
  { title: 'iOS Development Mentorship Program', description: 'Specialized mentorship for Apple iOS ecosystem.', Icon: Smartphone, theme: 'indigo' },
  { title: 'DevOps Mentorship Program', description: 'Guidance on CI/CD pipelines and infrastructure automation.', Icon: Server, theme: 'emerald' },
  { title: 'Software Testing & QA Mentorship Program', description: 'Mentorship in automated software testing and QA.', Icon: CheckCircle, theme: 'violet' },
  { title: 'Database Administration (DBA) Mentorship Program', description: 'Guidance for database architecture and management.', Icon: Database, theme: 'rose' },
  { title: 'Blockchain Development Mentorship Program', description: 'Mentorship in decentralized applications and smart contracts.', Icon: Layers, theme: 'amber' },
  { title: 'UI/UX Design Mentorship Program', description: 'Guidance in user interface and experience design.', Icon: Palette, theme: 'cyan' },
  { title: 'Graphic Design Mentorship Program', description: 'Career mentorship in digital graphic design.', Icon: Image, theme: 'blue' },
  { title: 'Product Design Mentorship Program', description: 'Mentorship in product design lifecycle and strategy.', Icon: Layout, theme: 'indigo' },
  { title: 'Content Writing Mentorship Program', description: 'Guidance for professional copywriting and content strategy.', Icon: FileText, theme: 'emerald' },
  { title: 'Digital Marketing Mentorship Program', description: 'Mentorship in online marketing and campaign management.', Icon: Globe, theme: 'violet' },
  { title: 'SEO Mentorship Program', description: 'Guidance on search engine optimization and ranking strategies.', Icon: Search, theme: 'rose' },
  { title: 'Social Media Marketing Mentorship Program', description: 'Mentorship in building social media presence and engagement.', Icon: Users, theme: 'amber' },
  { title: 'Product Management Mentorship Program', description: 'Guidance for product lifecycles and agile management.', Icon: Layout, theme: 'cyan' },
  { title: 'Business Development Mentorship Program', description: 'Mentorship in sales, partnerships, and business growth.', Icon: Handshake, theme: 'blue' },
  { title: 'Entrepreneurship Mentorship Program', description: 'Guidance for founders on starting and managing ventures.', Icon: Briefcase, theme: 'indigo' },
  { title: 'Startup Growth Mentorship Program', description: 'Mentorship in scaling startups and navigating ecosystems.', Icon: Target, theme: 'emerald' },
  { title: 'Brand Management Mentorship Program', description: 'Guidance on building and sustaining brand identity.', Icon: Star, theme: 'violet' },
  { title: 'Finance & Accounting Mentorship Program', description: 'Mentorship in corporate finance and accounting practices.', Icon: Briefcase, theme: 'rose' },
  { title: 'Finance & Accounting Mentorship Program (Advanced)', description: 'Advanced mentorship in corporate finance and accounting practices.', Icon: Briefcase, theme: 'amber' },
  { title: 'Financial Analysis Mentorship Program', description: 'Guidance in financial modeling and investment analysis.', Icon: Activity, theme: 'cyan' },
  { title: 'Chartered Accountancy Mentorship Program', description: 'Mentorship for pursuing and succeeding in chartered accountancy.', Icon: Briefcase, theme: 'blue' },
  { title: 'Human Resources Mentorship Program', description: 'Career guidance in talent management and organizational culture.', Icon: Users, theme: 'indigo' },
  { title: 'Journalism & Media Mentorship Program', description: 'Mentorship in reporting, media studies, and journalism.', Icon: FileText, theme: 'emerald' },
  { title: 'Professional Communication Mentorship', description: 'Guidance for developing professional and corporate communication skills.', Icon: MessageCircle, theme: 'violet' },
  { title: 'Legal Research Mentorship Program', description: 'Mentorship in comprehensive legal research methodologies.', Icon: BookOpen, theme: 'rose' },
  { title: 'Corporate Law Mentorship Program', description: 'Guidance on corporate legal structures and compliance.', Icon: Briefcase, theme: 'amber' },
];

const corporateCards = [
  { title: 'Leadership Development Training', description: 'Training programs for emerging and current leaders.', Icon: UserCheck, theme: 'blue' },
  { title: 'Executive Leadership Training', description: 'Advanced leadership training for C-level executives.', Icon: Target, theme: 'indigo' },
  { title: 'Strategic Management Training', description: 'Training on business strategy and long-term planning.', Icon: Compass, theme: 'emerald' },
  { title: 'Project Management Training', description: 'Methodologies for effective project execution.', Icon: Layout, theme: 'violet' },
  { title: 'Change Management Training', description: 'Guiding organizations through structural changes.', Icon: Activity, theme: 'rose' },
  { title: 'Decision-Making Training', description: 'Analytical models for effective decision making.', Icon: Crosshair, theme: 'amber' },
  { title: 'Business Communication Training', description: 'Effective written and verbal business communication.', Icon: MessageCircle, theme: 'cyan' },
  { title: 'Professional Communication Training', description: 'Advanced training in corporate communication.', Icon: Globe, theme: 'blue' },
  { title: 'Corporate Etiquette Training', description: 'Standards and behavior in corporate environments.', Icon: Users, theme: 'indigo' },
  { title: 'Workplace Ethics Training', description: 'Maintaining integrity and ethics in the workplace.', Icon: Scale, theme: 'emerald' },
  { title: 'Team Building Training', description: 'Strategies for fostering collaborative teams.', Icon: Handshake, theme: 'violet' },
  { title: 'Conflict Resolution Training', description: 'Techniques for resolving workplace disputes.', Icon: ShieldCheck, theme: 'rose' },
  { title: 'Negotiation Skills Training', description: 'Training in effective business negotiations.', Icon: Briefcase, theme: 'amber' },
  { title: 'Critical Thinking Training', description: 'Developing analytical and critical thinking skills.', Icon: Eye, theme: 'cyan' },
  { title: 'Problem-Solving Training', description: 'Methodologies for creative problem resolution.', Icon: Search, theme: 'blue' },
  { title: 'Time Management Training', description: 'Maximizing productivity and managing time effectively.', Icon: Target, theme: 'indigo' },
  { title: 'Stress Management Training', description: 'Techniques for managing workplace stress.', Icon: LifeBuoy, theme: 'emerald' },
  { title: 'Emotional Intelligence Training', description: 'Developing self-awareness and emotional intelligence.', Icon: User, theme: 'violet' },
  { title: 'Human Resource Management Training', description: 'Core practices in managing human capital.', Icon: Users, theme: 'rose' },
  { title: 'Talent Acquisition Training', description: 'Strategies for recruiting and acquiring top talent.', Icon: UserCheck, theme: 'amber' },
  { title: 'Employee Engagement Training', description: 'Techniques for motivating and engaging employees.', Icon: Activity, theme: 'cyan' },
  { title: 'Performance Management Training', description: 'Systems for evaluating and improving performance.', Icon: BarChart, theme: 'blue' },
  { title: 'Product Management Training', description: 'Lifecycle management for products and services.', Icon: Layout, theme: 'indigo' },
  { title: 'Business Development Training', description: 'Strategies for sales and corporate partnerships.', Icon: Handshake, theme: 'emerald' },
  { title: 'Sales Excellence Training', description: 'Advanced training for sales teams and leadership.', Icon: Star, theme: 'violet' },
  { title: 'Customer Relationship Management Training', description: 'Training on CRM tools and customer retention.', Icon: Users, theme: 'rose' },
  { title: 'Entrepreneurship & Innovation Training', description: 'Fostering internal innovation and intrapreneurship.', Icon: Target, theme: 'amber' },
  { title: 'Digital Marketing Training', description: 'Corporate strategies for digital marketing.', Icon: Globe, theme: 'cyan' },
  { title: 'Brand Management Training', description: 'Sustaining and growing corporate brand identity.', Icon: Shield, theme: 'blue' },
  { title: 'Content Marketing Training', description: 'Creating strategic content for corporate branding.', Icon: FileText, theme: 'indigo' },
  { title: 'Financial Management Training', description: 'Training in managing corporate financial resources.', Icon: BarChart, theme: 'emerald' },
  { title: 'Corporate Finance Training', description: 'Advanced corporate finance and investment strategies.', Icon: Briefcase, theme: 'violet' },
  { title: 'Financial Analysis Training', description: 'Techniques for financial modeling and analysis.', Icon: Activity, theme: 'rose' },
  { title: 'Risk Management Training', description: 'Identifying and mitigating corporate risks.', Icon: ShieldAlert, theme: 'amber' },
  { title: 'Data Analytics for Business Training', description: 'Using data processing for business intelligence.', Icon: BarChart, theme: 'cyan' },
  { title: 'Business Intelligence Training', description: 'Leveraging BI tools for corporate decision making.', Icon: Activity, theme: 'blue' },
  { title: 'Artificial Intelligence (AI) for Business Training', description: 'Implementing AI solutions in corporate operations.', Icon: Cpu, theme: 'indigo' },
  { title: 'Generative AI in the Workplace Training', description: 'Using generative AI tools for productivity.', Icon: Terminal, theme: 'emerald' },
  { title: 'Cloud Computing Fundamentals Training', description: 'Corporate transition to cloud-based infrastructure.', Icon: Cloud, theme: 'violet' },
  { title: 'Digital Transformation Training', description: 'Guiding enterprise-wide digital transitions.', Icon: Layers, theme: 'rose' },
  { title: 'DevOps for Enterprises Training', description: 'Implementing DevOps practices at enterprise scale.', Icon: Server, theme: 'amber' },
  { title: 'Software Quality Assurance (QA) Training', description: 'Corporate training in software testing and QA.', Icon: CheckCircle, theme: 'cyan' },
  { title: 'Cybersecurity Awareness Training', description: 'Corporate-wide security awareness and training.', Icon: Shield, theme: 'blue' },
  { title: 'Information Security Training', description: 'Securing corporate data and information assets.', Icon: Lock, theme: 'indigo' },
  { title: 'Data Privacy & Compliance Training', description: 'Ensuring adherence to data privacy regulations.', Icon: FileCheck, theme: 'emerald' },
  { title: 'Cyber Risk Management Training', description: 'Evaluating and managing organizational cyber risks.', Icon: ShieldAlert, theme: 'violet' },
  { title: 'Corporate Law & Compliance Training', description: 'Navigating corporate legal structures and compliance.', Icon: Briefcase, theme: 'rose' },
  { title: 'Legal Risk Management Training', description: 'Identifying and mitigating corporate legal risks.', Icon: Scale, theme: 'amber' },
];

const hackathonCards = [
  { title: 'Cybersecurity Hackathon', description: 'Competitive challenges in core cybersecurity practices.', Icon: Shield, theme: 'blue' },
  { title: 'Ethical Hacking Hackathon', description: 'Challenges in offensive security and ethical hacking.', Icon: Code, theme: 'indigo' },
  { title: 'Penetration Testing Hackathon', description: 'Vulnerability assessment and penetration testing challenges.', Icon: Target, theme: 'emerald' },
  { title: 'Network Security Hackathon', description: 'Securing complex networks and defense mechanisms.', Icon: Network, theme: 'violet' },
  { title: 'Cloud Security Hackathon', description: 'Addressing threats and vulnerabilities in cloud environments.', Icon: Cloud, theme: 'rose' },
  { title: 'SOC Analyst Hackathon', description: 'Real-time security operations and incident monitoring.', Icon: Activity, theme: 'amber' },
  { title: 'Threat Intelligence Hackathon', description: 'Gathering and modeling cyber threat intelligence.', Icon: Crosshair, theme: 'cyan' },
  { title: 'Cyber Forensics Hackathon', description: 'Digital forensics and evidence extraction challenges.', Icon: Search, theme: 'blue' },
  { title: 'OSINT Challenge Hackathon', description: 'Advanced Open Source Intelligence gathering competitions.', Icon: Globe, theme: 'indigo' },
  { title: 'Cyber Crime Investigation Hackathon', description: 'Solving complex digital crime investigation scenarios.', Icon: ShieldAlert, theme: 'emerald' },
  { title: 'Malware Analysis Hackathon', description: 'Analyzing and reversing complex malicious code.', Icon: Cpu, theme: 'violet' },
  { title: 'Cyber Threat Hunting Hackathon', description: 'Proactive detection and neutralization of cyber threats.', Icon: Target, theme: 'rose' },
  { title: 'Artificial Intelligence (AI) Hackathon', description: 'Building general AI solutions and theoretical models.', Icon: Cpu, theme: 'amber' },
  { title: 'Machine Learning Hackathon', description: 'Developing predictive machine learning algorithms.', Icon: Layers, theme: 'cyan' },
  { title: 'Generative AI Hackathon', description: 'Creating solutions utilizing generative AI models.', Icon: Terminal, theme: 'blue' },
  { title: 'Prompt Engineering Hackathon', description: 'Optimizing and engineering advanced AI interactions.', Icon: FileText, theme: 'indigo' },
  { title: 'Data Science Hackathon', description: 'Solving big data challenges through statistical analysis.', Icon: BarChart, theme: 'emerald' },
  { title: 'Data Analytics Hackathon', description: 'Visualizing and analyzing complex data structures.', Icon: Activity, theme: 'violet' },
  { title: 'Business Analytics Hackathon', description: 'Aligning data insights with corporate business strategy.', Icon: Briefcase, theme: 'rose' },
  { title: 'Deep Learning Hackathon', description: 'Building neural networks and deep architecture models.', Icon: Layers, theme: 'amber' },
  { title: 'Software Development Hackathon', description: 'Creating comprehensive software engineering solutions.', Icon: Code, theme: 'cyan' },
  { title: 'Full Stack Development Hackathon', description: 'Building complete frontend and backend web applications.', Icon: Layout, theme: 'blue' },
  { title: 'Web Development Hackathon', description: 'Innovating with modern web frameworks and standards.', Icon: Globe, theme: 'indigo' },
  { title: 'Mobile App Development Hackathon', description: 'Developing cross-platform mobile applications.', Icon: Smartphone, theme: 'emerald' },
  { title: 'iOS Development Hackathon', description: 'Building specialized applications for the Apple ecosystem.', Icon: Smartphone, theme: 'violet' },
  { title: 'DevOps Innovation Hackathon', description: 'Automating CI/CD pipelines and cloud infrastructure.', Icon: Server, theme: 'rose' },
  { title: 'Blockchain Development Hackathon', description: 'Creating decentralized applications and smart contracts.', Icon: Layers, theme: 'amber' },
  { title: 'Database Engineering Hackathon', description: 'Designing scalable and secure database architectures.', Icon: Database, theme: 'cyan' },
  { title: 'Cloud Computing Hackathon', description: 'Building scalable cloud-native applications and services.', Icon: Cloud, theme: 'blue' },
  { title: 'API Development Hackathon', description: 'Designing robust and secure RESTful APIs.', Icon: Code, theme: 'indigo' },
  { title: 'UI/UX Design Hackathon', description: 'Designing intuitive user interfaces and experiences.', Icon: Palette, theme: 'emerald' },
  { title: 'Product Design Hackathon', description: 'Managing the product design lifecycle from concept to prototype.', Icon: Layout, theme: 'violet' },
  { title: 'Graphic Design Challenge Hackathon', description: 'Creating visual branding and digital graphic solutions.', Icon: Image, theme: 'rose' },
  { title: 'Digital Innovation Hackathon', description: 'Developing cutting-edge digital products and solutions.', Icon: Zap, theme: 'amber' },
  { title: 'Digital Marketing Hackathon', description: 'Creating comprehensive online marketing campaigns.', Icon: Globe, theme: 'cyan' },
  { title: 'Growth Marketing Hackathon', description: 'Innovating growth strategies and user acquisition models.', Icon: Activity, theme: 'blue' },
  { title: 'Content Creation Hackathon', description: 'Producing engaging multimedia and written content.', Icon: FileText, theme: 'indigo' },
  { title: 'Startup Innovation Hackathon', description: 'Building and pitching scalable startup ideas.', Icon: Target, theme: 'emerald' },
  { title: 'Entrepreneurship Hackathon', description: 'Founding and managing new entrepreneurial ventures.', Icon: Briefcase, theme: 'violet' },
  { title: 'Product Management Hackathon', description: 'Strategizing product lifecycles and user roadmaps.', Icon: Layout, theme: 'rose' },
  { title: 'Business Development Hackathon', description: 'Developing sales strategies and corporate partnerships.', Icon: Handshake, theme: 'amber' },
  { title: 'Financial Technology (FinTech) Innovation Hackathon', description: 'Innovating digital banking and financial technology solutions.', Icon: Zap, theme: 'cyan' },
  { title: 'Cyber Law Innovation Hackathon', description: 'Creating legal tech solutions for cyber regulations.', Icon: Scale, theme: 'blue' },
  { title: 'Legal Technology Hackathon', description: 'Innovating technology for legal research and compliance.', Icon: BookOpen, theme: 'indigo' },
  { title: 'Digital Rights Innovation Hackathon', description: 'Developing platforms to protect online human rights.', Icon: Eye, theme: 'emerald' },
  { title: 'Smart City Innovation Hackathon', description: 'Building technologies for intelligent urban environments.', Icon: Building2, theme: 'violet' },
  { title: 'Sustainable Technology Hackathon', description: 'Creating eco-friendly and sustainable tech solutions.', Icon: Cloud, theme: 'rose' },
  { title: 'Future Tech Innovation Hackathon', description: 'Exploring speculative and futuristic technology models.', Icon: Zap, theme: 'amber' },
];

const careersTopCards = [
  { title: 'Current Vacancy', description: 'Manage current job openings and vacancies.', Icon: Briefcase, theme: 'blue' },
  { title: 'Recruitment Rules/Policies', description: 'Manage recruitment guidelines and employee policies.', Icon: FileText, theme: 'indigo' },
  { title: 'Recruitment Advertisements', description: 'Manage job postings and recruitment ads.', Icon: Globe, theme: 'cyan' },
  { title: 'Press Release and Notices', description: 'Manage press releases and public recruitment notices.', Icon: FileCheck, theme: 'rose' },
  { title: 'Submit Resume', description: 'Manage candidate resume submissions and tracking.', Icon: Users, theme: 'emerald' },
];

const vacancyCards = [
  { title: 'Job Vacancy', description: 'Manage open job vacancies.', Icon: Briefcase, theme: 'blue' },
  { title: 'Post Vacancy', description: 'Create and post new job vacancies.', Icon: FileText, theme: 'indigo' },
  { title: 'Vacancy Card 1', description: 'Detailed view of vacancy group 1.', Icon: Layout, theme: 'emerald' },
  { title: 'Vacancy Card 2', description: 'Detailed view of vacancy group 2.', Icon: Layout, theme: 'violet' },
];

const policyCards = [
  { title: 'Recruitment Policy and Employment Overview', description: 'Overview of employment policies.', Icon: BookOpen, theme: 'blue' },
  { title: 'Career Development and Progress', description: 'Policies for career advancement.', Icon: Activity, theme: 'indigo' },
  { title: 'Employee Growth and Future Opportunity', description: 'Guidelines for employee growth.', Icon: Target, theme: 'emerald' },
  { title: 'CRCCF Employment Eligibility Criteria', description: 'Criteria for employment eligibility.', Icon: FileCheck, theme: 'violet' },
  { title: 'CRCCF Recruitment & Selection Process', description: 'Standard operating procedures for recruitment.', Icon: Users, theme: 'rose' },
  { title: 'CRCCF Recruitment Instructions', description: 'Instructions for recruiters and candidates.', Icon: FileText, theme: 'amber' },
  { title: 'CRCCF Recruitment Guidelines', description: 'General guidelines for the hiring process.', Icon: CheckCircle, theme: 'cyan' },
  { title: 'CRCCF Recruitment Calendar', description: 'Schedule and calendar for hiring drives.', Icon: Calendar, theme: 'blue' },
  { title: 'Code of Conduct & Professional Ethics', description: 'Ethics and conduct policies for employees.', Icon: Scale, theme: 'indigo' },
  { title: 'Training, Orientation & Skill Development', description: 'Onboarding and training procedures.', Icon: Cpu, theme: 'emerald' },
  { title: 'Performance Review & Evaluation System', description: 'System for evaluating employee performance.', Icon: BarChart, theme: 'violet' },
  { title: 'Employee Rights & Responsibilities', description: 'Rights and duties of all employees.', Icon: Shield, theme: 'rose' },
  { title: 'Volunteer & Internship Policy', description: 'Policies governing volunteers and interns.', Icon: Heart, theme: 'amber' },
  { title: 'Employee Recognition & Awards', description: 'Awards and recognition policies.', Icon: Award, theme: 'cyan' },
  { title: 'Dummy Policy 1', description: 'Placeholder for future policy 1.', Icon: FileText, theme: 'blue' },
  { title: 'Dummy Policy 2', description: 'Placeholder for future policy 2.', Icon: FileText, theme: 'indigo' },
];

const contactTopCards = [
  { title: 'Help Desk', description: 'Manage support tickets and help desk inquiries.', Icon: LifeBuoy, theme: 'blue' },
  { title: 'Follow Apps', description: 'Manage social media and application links.', Icon: Globe, theme: 'indigo' },
  { title: 'Branch Details', description: 'Manage regional branch information and contacts.', Icon: MapPin, theme: 'emerald' },
  { title: 'Officer', description: 'Manage contact details for official officers.', Icon: Shield, theme: 'violet' },
  { title: 'Employee', description: 'Manage internal employee contact directory.', Icon: Users, theme: 'rose' },
  { title: 'Teacher', description: 'Manage contact information for educational staff.', Icon: BookOpen, theme: 'amber' },
  { title: 'Reporter', description: 'Manage media and reporter contacts.', Icon: FileText, theme: 'cyan' },
  { title: 'Advocate', description: 'Manage legal advocate contact details.', Icon: Scale, theme: 'blue' },
  { title: 'Legal Advisor', description: 'Manage contacts for legal advisors.', Icon: Briefcase, theme: 'indigo' },
  { title: 'Board Director', description: 'Manage board of directors contact information.', Icon: Award, theme: 'emerald' },
  { title: 'Board Member', description: 'Manage board members contact details.', Icon: Users, theme: 'violet' },
  { title: 'AI Chat', description: 'Manage automated AI chat support configuration.', Icon: MessageCircle, theme: 'rose' },
  { title: 'Review', description: 'Manage user reviews and testimonials.', Icon: Star, theme: 'amber' },
  { title: 'Feedback', description: 'Manage user feedback and suggestions.', Icon: MessageCircle, theme: 'cyan' },
];

const followAppsCards = [
  { title: 'Add Link', description: 'Add new social or application links.', Icon: Zap, theme: 'blue' },
  { title: 'View Link', description: 'View all active application links.', Icon: Eye, theme: 'indigo' },
  { title: 'Manage Link', description: 'Edit or manage existing links.', Icon: Settings, theme: 'emerald' },
  { title: 'Upload Link', description: 'Bulk upload links via document.', Icon: Cloud, theme: 'violet' },
];

const reportCrimeTopCards = [
  { title: 'Report a Cyber Crime - Important Information', description: 'Crucial information before reporting a cyber crime.', Icon: AlertCircle, theme: 'rose' },
  { title: 'How to Report a Cyber Crime', description: 'Step-by-step guide on the reporting process.', Icon: Info, theme: 'blue' },
  { title: 'Cyber Fraud Complaint Registration', description: 'Portal for registering cyber fraud complaints.', Icon: ShieldAlert, theme: 'amber' },
  { title: 'Track Your Case Status', description: 'Monitor the progress of reported cases.', Icon: Activity, theme: 'emerald' },
  { title: 'Types of Cyber Crime', description: 'Database and definitions of cyber crime types.', Icon: Database, theme: 'indigo' },
  { title: 'Cyber Security Tips', description: 'General tips for maintaining digital security.', Icon: ShieldCheck, theme: 'cyan' },
  { title: 'Report a Cyber Crime - Awareness & Prevention Tips', description: 'Guidelines for preventing cyber attacks.', Icon: Eye, theme: 'violet' },
  { title: 'Legal Guidance & Awareness', description: 'Legal resources and awareness materials.', Icon: Scale, theme: 'blue' },
  { title: 'Cyber Laws & Rights', description: 'Information on digital rights and cyber laws.', Icon: BookOpen, theme: 'rose' },
  { title: 'Cyber Safety & Support for Girls and Women', description: 'Specialized support and safety guidelines.', Icon: Heart, theme: 'amber' },
  { title: 'Report a Cyber Crime - Victim Rights & Support', description: 'Rights and entitlements for cyber crime victims.', Icon: Users, theme: 'emerald' },
  { title: 'Report a Cyber Crime - Victim Support and Assistance', description: 'Active assistance programs for victims.', Icon: LifeBuoy, theme: 'cyan' },
  { title: 'Cyber Crime Prevention', description: 'Proactive measures against cyber crimes.', Icon: Shield, theme: 'indigo' },
  { title: 'Case Status', description: 'Manage and update internal case statuses.', Icon: FileCheck, theme: 'violet' },
  { title: 'Success Case Stories', description: 'Resolved cases and success stories.', Icon: Award, theme: 'rose' },
  { title: 'Ongoing Investigation Cases', description: 'Manage active and ongoing cyber investigations.', Icon: Search, theme: 'blue' },
  { title: 'Cyber Threat Intelligence', description: 'Actionable intelligence on emerging threats.', Icon: Crosshair, theme: 'amber' },
  { title: 'Cyber Crime FAQs', description: 'Frequently asked questions regarding cyber crimes.', Icon: MessageCircle, theme: 'emerald' },
];

const victimRightsSupportCards = [
  { title: 'Right of Cybercrime Victims', description: 'Information regarding the legal rights of cybercrime victims.', Icon: Scale, theme: 'blue' },
  { title: 'Victim Assistance & Protection', description: 'Assistance programs and protection measures for victims.', Icon: Shield, theme: 'indigo' },
  { title: 'Cybercrime Victim Rights & Relief', description: 'Details on relief options and rights for victims.', Icon: Heart, theme: 'emerald' },
  { title: 'Digital Crime Victim Help Desk', description: 'Direct help desk for victims of digital crimes.', Icon: LifeBuoy, theme: 'violet' },
  { title: 'Support Services for Victims', description: 'Comprehensive support services for affected individuals.', Icon: Users, theme: 'rose' },
  { title: 'Help & Justice for Victims', description: 'Resources for seeking justice and help.', Icon: Scale, theme: 'amber' },
  { title: 'Empowering Cybercrime Victims', description: 'Programs aimed at empowering cybercrime victims.', Icon: Target, theme: 'cyan' },
  { title: 'Digital Victim Support & Protection', description: 'Support and protection in the digital space.', Icon: ShieldCheck, theme: 'blue' },
  { title: 'Victim Protection & Legal Aid', description: 'Legal aid and protection services for victims.', Icon: Briefcase, theme: 'indigo' },
  { title: 'Online Harassment Help & Rights', description: 'Help and rights for victims of online harassment.', Icon: AlertCircle, theme: 'emerald' },
  { title: 'Cyber Justice for Victims', description: 'Navigating the cyber justice system.', Icon: Scale, theme: 'violet' },
  { title: 'Cybercrime Victim Advocacy', description: 'Advocacy groups and support for victims.', Icon: Users, theme: 'rose' },
  { title: 'Online Safety & Victim Help', description: 'Safety guidelines and help for victims online.', Icon: Shield, theme: 'amber' },
  { title: 'Justice & Healing for Victims', description: 'Resources for justice and emotional healing.', Icon: Heart, theme: 'cyan' },
  { title: 'Restoring Dignity to Cyber Victims', description: 'Programs focused on restoring dignity to victims.', Icon: Award, theme: 'blue' },
  { title: 'Digital Justice Support Services', description: 'Support services for obtaining digital justice.', Icon: MonitorPlay, theme: 'indigo' },
  { title: 'Victim Outreach & Legal Support', description: 'Outreach programs and legal support.', Icon: Network, theme: 'emerald' },
  { title: 'Psychological Counselling for Cyber Victims', description: 'Counselling and mental health support.', Icon: Activity, theme: 'violet' },
  { title: '24/7 Victim Helpline & Chat Support', description: 'Round-the-clock helpline and chat support.', Icon: MessageCircle, theme: 'rose' },
  { title: 'Women & Child Cyber Safety Support', description: 'Specialized support for women and children.', Icon: Users, theme: 'amber' },
  { title: 'Legal Guidance for Digital Crime Victims', description: 'Expert legal guidance for digital crimes.', Icon: BookOpen, theme: 'cyan' },
  { title: 'Data Privacy & Protection Support', description: 'Support for data privacy and protection issues.', Icon: Lock, theme: 'blue' },
  { title: 'Social Media Misuse Victim Aid', description: 'Aid for victims of social media misuse.', Icon: Globe, theme: 'indigo' },
  { title: 'Phishing & Online Scam Victim Support', description: 'Support for victims of phishing and online scams.', Icon: AlertCircle, theme: 'emerald' },
  { title: 'Cyber Extortion & Blackmail Response Team', description: 'Response team for cyber extortion and blackmail.', Icon: ShieldAlert, theme: 'violet' },
  { title: 'Digital Forensics Assistance for Victims', description: 'Digital forensics assistance and support.', Icon: Search, theme: 'rose' },
  { title: 'Educational Resources for Victim Rights', description: 'Educational materials on victim rights.', Icon: BookOpen, theme: 'amber' },
  { title: 'Cyber Victim Relief & Emergency Response', description: 'Emergency response and relief for cyber victims.', Icon: Zap, theme: 'cyan' },
];

const galleryTopCards = [
  { title: 'Journey Gallery', description: 'Photos showcasing the organizational journey.', Icon: Image, theme: 'blue' },
  { title: 'Course Gallery', description: 'Photos from various courses and classes.', Icon: Play, theme: 'indigo' },
  { title: 'Student Gallery', description: 'Photos featuring our students.', Icon: Users, theme: 'emerald' },
  { title: 'Internship Gallery', description: 'Photos from internship programs.', Icon: Briefcase, theme: 'violet' },
  { title: 'Project Gallery', description: 'Photos showcasing completed projects.', Icon: Layout, theme: 'rose' },
  { title: 'Event Gallery', description: 'Photos from major events and gatherings.', Icon: Calendar, theme: 'amber' },
  { title: 'Employees Gallery', description: 'Photos featuring our dedicated employees.', Icon: UserCheck, theme: 'cyan' },
  { title: 'Annual Celebrations Gallery', description: 'Photos from annual organizational celebrations.', Icon: Award, theme: 'blue' },
  { title: 'Achievement Gallery', description: 'Photos highlighting key achievements.', Icon: Target, theme: 'indigo' },
  { title: 'Work Highlights Gallery', description: 'Photos showcasing important work highlights.', Icon: Activity, theme: 'emerald' },
  { title: 'Success Stories Gallery', description: 'Photos of success stories and milestones.', Icon: Star, theme: 'violet' },
  { title: 'Workplace Gallery', description: 'Photos of the workplace and office environment.', Icon: Building2, theme: 'rose' },
  { title: 'Seminars & Workshops Gallery', description: 'Photos from seminars and workshops.', Icon: Users, theme: 'amber' },
  { title: 'Cyber Awareness Gallery', description: 'Photos from cyber awareness campaigns.', Icon: Shield, theme: 'cyan' },
  { title: 'Office Culture Gallery', description: 'Photos showcasing the internal office culture.', Icon: Heart, theme: 'blue' },
  { title: 'Awards & Recognition Gallery', description: 'Photos from award and recognition ceremonies.', Icon: Award, theme: 'indigo' },
  { title: 'Product Launches Gallery', description: 'Photos from new product launches.', Icon: Zap, theme: 'emerald' },
  { title: 'Team Moments Gallery', description: 'Candid photos of team moments.', Icon: Users, theme: 'violet' },
  { title: 'Media & Press Gallery', description: 'Photos from media and press interactions.', Icon: Globe, theme: 'rose' },
  { title: 'Student Activities Gallery', description: 'Photos of extracurricular student activities.', Icon: Activity, theme: 'amber' },
];

const photoActionCards = [
  { title: 'Add Photo', description: 'Add a new photo to the gallery.', Icon: Zap, theme: 'blue' },
  { title: 'View Photo', description: 'View all photos in this gallery.', Icon: Eye, theme: 'indigo' },
  { title: 'Manage Photo', description: 'Edit or delete existing photos.', Icon: Settings, theme: 'emerald' },
  { title: 'Upload Photo', description: 'Bulk upload photos to the gallery.', Icon: Cloud, theme: 'violet' },
];

const headerCards = [
  { title: 'Logo Control', description: 'Update and manage the main application logo.', Icon: Image, theme: 'blue' },
  { title: 'Content Control', description: 'Manage dynamic text and content in the header.', Icon: FileText, theme: 'indigo' },
  { title: 'Upcoming Event Control', description: 'Configure upcoming event banners or links.', Icon: Calendar, theme: 'emerald' },
  { title: 'Notification Control', description: 'Manage global header notifications and alerts.', Icon: AlertCircle, theme: 'rose' },
];

const footerCards = [
  { title: 'Footer Useful Links Control', description: 'Manage navigational links in the footer.', Icon: Globe, theme: 'cyan' },
  { title: 'Footer Address Control', description: 'Update physical address and contact info.', Icon: MapPin, theme: 'blue' },
  { title: 'Footer Content Control', description: 'Manage copyright text and general footer content.', Icon: FileText, theme: 'indigo' },
  { title: 'Footer Developer Control', description: 'Manage developer credits and technical links.', Icon: Code, theme: 'violet' },
];

const docVerificationCards = [
  { title: 'Student Verification', description: 'Verify student credentials and records.', Icon: BookOpen, theme: 'blue' },
  { title: 'Employee Verification', description: 'Verify employee backgrounds and IDs.', Icon: UserCheck, theme: 'indigo' },
  { title: 'Visitor Appointment Verification', description: 'Verify visitor appointments and access.', Icon: Calendar, theme: 'emerald' },
  { title: 'Gate Pass Verification', description: 'Verify facility gate passes and entry.', Icon: ShieldCheck, theme: 'violet' },
  { title: 'License Verification', description: 'Verify professional licenses and certs.', Icon: FileCheck, theme: 'rose' },
  { title: 'Organization Verification', description: 'Verify organizational identity.', Icon: Building2, theme: 'amber' },
  { title: 'Agreement Verification', description: 'Verify legal agreements and contracts.', Icon: Scale, theme: 'cyan' },
  { title: 'Web Domain Verification', description: 'Verify associated web domains.', Icon: Globe, theme: 'blue' },
  { title: 'Membership Verification', description: 'Verify member statuses and subscriptions.', Icon: Users, theme: 'indigo' },
  { title: 'Notice Verification', description: 'Verify official notices and circulars.', Icon: Bell, theme: 'emerald' },
  { title: 'Invitation Verification', description: 'Verify event and official invitations.', Icon: FileText, theme: 'violet' },
  { title: 'Certificate Verification', description: 'Verify issued certificates and awards.', Icon: Award, theme: 'rose' },
  { title: 'ID Card Verification', description: 'Verify digital and physical ID cards.', Icon: UserCheck, theme: 'amber' },
  { title: 'Authorization Verification', description: 'Verify authorization and access roles.', Icon: Shield, theme: 'cyan' },
  { title: 'Digital Signature Verification', description: 'Verify cryptographic digital signatures.', Icon: Lock, theme: 'blue' },
  { title: 'Email Address Verification', description: 'Verify official email communications.', Icon: MessageCircle, theme: 'indigo' },
  { title: 'Mobile Number Verification', description: 'Verify user contact numbers.', Icon: Smartphone, theme: 'emerald' },
  { title: 'Social Media Verification', description: 'Verify official social handles.', Icon: Globe, theme: 'violet' },
  { title: 'Software Product Verification', description: 'Verify software authenticity and licenses.', Icon: Code, theme: 'rose' },
  { title: 'Material Verification', description: 'Verify physical and digital materials.', Icon: Database, theme: 'amber' },
  { title: 'Book Verification', description: 'Verify publications and books.', Icon: BookOpen, theme: 'cyan' },
  { title: 'Report Verification', description: 'Verify case and analytics reports.', Icon: FileText, theme: 'blue' },
  { title: 'Letter Verification', description: 'Verify official letters and correspondence.', Icon: FileCheck, theme: 'indigo' },
  { title: 'Volunteer Verification', description: 'Verify volunteer credentials and history.', Icon: Users, theme: 'emerald' },
];

const onlineAppCards = [
  { title: '10th Certificate Application Form', description: 'Manage 10th-grade certificate applications.', Icon: FileText, theme: 'blue' },
  { title: '12th Certificate Application Form', description: 'Manage 12th-grade certificate applications.', Icon: FileCheck, theme: 'indigo' },
  { title: 'ITI Certificate Application Form', description: 'Manage ITI certificate applications.', Icon: BookOpen, theme: 'emerald' },
  { title: 'Diploma Certificate Application Form', description: 'Manage diploma certificate applications.', Icon: Award, theme: 'violet' },
  { title: 'Degree Certificate Application Form', description: 'Manage degree certificate applications.', Icon: ShieldCheck, theme: 'rose' },
  { title: 'Master Degree Certificate Application Form', description: 'Manage master degree applications.', Icon: Target, theme: 'amber' },
  { title: 'Seminar Registration Form', description: 'Manage registrations for upcoming seminars.', Icon: Users, theme: 'cyan' },
  { title: 'Webinar Registration Form', description: 'Manage online webinar registrations.', Icon: MonitorPlay, theme: 'blue' },
  { title: 'Workshop Registration Form', description: 'Manage hands-on workshop registrations.', Icon: Cpu, theme: 'indigo' },
  { title: 'Institutional Training Request Form', description: 'Manage training requests from institutions.', Icon: Building2, theme: 'emerald' },
  { title: 'Cyber Awareness Program Request Form', description: 'Manage cyber awareness program requests.', Icon: ShieldAlert, theme: 'violet' },
  { title: 'Collaboration Application Form', description: 'Manage institutional and corporate collaborations.', Icon: Handshake, theme: 'rose' },
  { title: 'Partnership Application Form', description: 'Manage strategic partnership requests.', Icon: Users, theme: 'amber' },
  { title: 'Researcher Application Form', description: 'Manage applications for research positions.', Icon: Search, theme: 'cyan' },
  { title: 'Freelance / Consultant Application Form', description: 'Manage freelance and consultant applications.', Icon: Briefcase, theme: 'blue' },
  { title: 'Volunteer Application Form', description: 'Manage volunteer program sign-ups.', Icon: Heart, theme: 'indigo' },
  { title: 'Job Application Form', description: 'Manage standard job applications.', Icon: FileText, theme: 'emerald' },
  { title: 'Event Participation Application Form', description: 'Manage general event participation.', Icon: Calendar, theme: 'violet' },
  { title: 'Duplicate ID Card Application Form', description: 'Manage requests for duplicate ID cards.', Icon: UserCheck, theme: 'rose' },
  { title: 'Duplicate Certificate Application Form', description: 'Manage requests for duplicate certificates.', Icon: Copy, theme: 'amber' },
  { title: 'Software Product Purchase Request Form', description: 'Manage software product purchase inquiries.', Icon: Code, theme: 'cyan' },
  { title: 'Software Product Demo Request Form', description: 'Manage requests for software demos.', Icon: Play, theme: 'blue' },
  { title: 'Technical Support Request Form', description: 'Manage technical support and help tickets.', Icon: Settings, theme: 'indigo' },
  { title: 'Membership Application Form', description: 'Manage new membership applications.', Icon: User, theme: 'emerald' },
  { title: 'Membership Renewal Application Form', description: 'Manage membership renewal requests.', Icon: History, theme: 'violet' },
  { title: 'Feedback & Suggestion Form', description: 'Manage user feedback and suggestions.', Icon: MessageCircle, theme: 'rose' },
  { title: 'Grievance Submission Form', description: 'Manage formal grievances and disputes.', Icon: AlertCircle, theme: 'amber' },
  { title: 'Complaint Submission Form', description: 'Manage formal complaints.', Icon: Shield, theme: 'cyan' },
  { title: 'Sponsorship Application Form', description: 'Manage sponsorship and funding requests.', Icon: Banknote, theme: 'blue' },
  { title: 'General Inquiry / Information Request Form', description: 'Manage general inquiries and information requests.', Icon: Info, theme: 'indigo' },
];

const insightsCards = [
  { title: 'Threat Intelligence Bulletin', description: 'Curate daily threat bulletins, zero-day alerts, and malware signatures.', Icon: ShieldAlert, theme: 'rose' },
  { title: 'Cyber Crime Research Reports', description: 'Publish quarterly digital forensic trends, scam vectors, and whitepapers.', Icon: FileText, theme: 'blue' },
  { title: 'Malware Analysis Feed', description: 'Deep behavioral breakdowns of emerging trojans, ransomware, and spyware.', Icon: Activity, theme: 'indigo' },
  { title: 'Case Studies & Investigation', description: 'Document resolved cybercrime investigations, case studies, and forensics.', Icon: Search, theme: 'emerald' },
  { title: 'Vulnerability Disclosure Desk', description: 'Track CVE patches, public disclosure notices, and security advisories.', Icon: ShieldCheck, theme: 'amber' },
  { title: 'Public Safety Bulletins', description: 'Citizen-centric guidelines, advisory alerts, and safety best practices.', Icon: LifeBuoy, theme: 'cyan' },
];

const appStatusCards = [
  { title: 'Track Reference Token', description: 'Search and inspect citizen token references, FIR status, and timestamps.', Icon: Search, theme: 'emerald' },
  { title: 'SMS & Dispatch Alerts', description: 'Dispatch automated SMS and email notifications regarding status updates.', Icon: Smartphone, theme: 'blue' },
  { title: 'Inquiry Resolution Desk', description: 'Review and reply to pending citizen inquiries and clarification requests.', Icon: MessageCircle, theme: 'indigo' },
  { title: 'Application Audit Log', description: 'Inspect timestamped audit logs for all application review actions.', Icon: History, theme: 'violet' },
  { title: 'Pending Clearance Queue', description: 'Manage applications awaiting forensic verification and officer sign-off.', Icon: FileCheck, theme: 'amber' },
  { title: 'Approved Credentials Log', description: 'View and download authorized clearance certificates and identity records.', Icon: Award, theme: 'cyan' },
];

const demoCards = [
  { title: 'Sandbox Environment', description: 'Simulate citizen application submissions and verification test runs.', Icon: Play, theme: 'indigo' },
  { title: 'Cyber Crime Simulator', description: 'Test reporting pipelines, evidence uploads, and dummy incident alerts.', Icon: ShieldAlert, theme: 'rose' },
  { title: 'Prototype Portal Modules', description: 'Preview upcoming UI modules, dashboard enhancements, and beta features.', Icon: Layout, theme: 'blue' },
  { title: 'Officer Workflow Sandbox', description: 'Test approval stages, status flags, and badge issuance workflows.', Icon: UserCheck, theme: 'emerald' },
];

const genericActionCards = [
  { id: 'edit', title: 'Edit Content', description: 'Edit existing text, media, and details in this section.', Icon: Code, theme: 'rose' },
  { id: 'view', title: 'View Content', description: 'Preview how this section is presented to the end users.', Icon: Layout, theme: 'cyan' },
  { id: 'manage', title: 'Manage Content', description: 'Organize, reorder, or archive items in this section.', Icon: Settings, theme: 'blue' },
  { id: 'upload', title: 'Upload Content', description: 'Upload brochures, media files, and informational assets.', Icon: Cloud, theme: 'violet' }
];

const softwareProductContentActionCards = [
  { id: 'edit-content', title: 'Edit Content', description: 'Edit existing content, text, and details.', Icon: Code, theme: 'rose' },
  { id: 'view-content', title: 'View Content', description: 'Preview how this content is presented to end users.', Icon: Layout, theme: 'cyan' },
  { id: 'manage-content', title: 'Manage Content', description: 'Organize, reorder, or archive content items.', Icon: Settings, theme: 'blue' },
  { id: 'upload-content', title: 'Upload Content', description: 'Upload media files and informational assets.', Icon: Cloud, theme: 'violet' }
];

const softwareProductDataActionCards = [
  { id: 'add-data', title: 'Add Data', description: 'Add new data records and entries.', Icon: Code, theme: 'emerald' },
  { id: 'view-data', title: 'View Data', description: 'View and preview existing data entries.', Icon: Layout, theme: 'cyan' },
  { id: 'manage-data', title: 'Manage Data', description: 'Organize, modify, or archive data records.', Icon: Settings, theme: 'blue' },
  { id: 'upload-data', title: 'Upload Data', description: 'Bulk upload data using CSV or Excel files.', Icon: Cloud, theme: 'violet' }
];

const imageActionCards = [
  { id: 'edit-image', title: 'Edit Image', description: 'Edit existing image details.', Icon: Image, theme: 'rose' },
  { id: 'view-image', title: 'View Image', description: 'Preview how this image is presented.', Icon: Eye, theme: 'cyan' },
  { id: 'manage-image', title: 'Manage Image', description: 'Organize or delete image assets.', Icon: Settings, theme: 'blue' },
  { id: 'upload-image', title: 'Upload Image', description: 'Upload new image files.', Icon: Cloud, theme: 'violet' }
];

const eventActionCards = [
  { id: 'edit-event', title: 'Edit Event', description: 'Edit existing event details.', Icon: Code, theme: 'emerald' },
  { id: 'view-event', title: 'View Event', description: 'Preview how this event is presented.', Icon: Layout, theme: 'cyan' },
  { id: 'manage-event', title: 'Manage Event', description: 'Organize, modify, or archive event records.', Icon: Settings, theme: 'blue' },
  { id: 'upload-event', title: 'Upload Event', description: 'Bulk upload event data.', Icon: Cloud, theme: 'violet' }
];

const linkActionCards = [
  { id: 'edit-link', title: 'Edit Link', description: 'Edit existing link details.', Icon: Code, theme: 'rose' },
  { id: 'view-link', title: 'View Link', description: 'Preview how this link is presented.', Icon: Layout, theme: 'cyan' },
  { id: 'manage-link', title: 'Manage Link', description: 'Organize, modify, or archive links.', Icon: Settings, theme: 'blue' },
  { id: 'upload-link', title: 'Upload Link', description: 'Bulk upload links.', Icon: Cloud, theme: 'violet' }
];

const addressActionCards = [
  { id: 'edit-address', title: 'Edit Address', description: 'Edit existing address details.', Icon: Code, theme: 'emerald' },
  { id: 'view-address', title: 'View Address', description: 'Preview how this address is presented.', Icon: Layout, theme: 'cyan' },
  { id: 'manage-address', title: 'Manage Address', description: 'Organize, modify, or archive address records.', Icon: Settings, theme: 'blue' },
  { id: 'upload-address', title: 'Upload Address', description: 'Bulk upload address data.', Icon: Cloud, theme: 'violet' }
];

const developerActionCards = [
  { id: 'edit-developer', title: 'Edit Developer', description: 'Edit developer credits.', Icon: Code, theme: 'rose' },
  { id: 'view-developer', title: 'View Developer', description: 'Preview how developer credits are presented.', Icon: Layout, theme: 'cyan' },
  { id: 'manage-developer', title: 'Manage Developer', description: 'Organize or archive developer credits.', Icon: Settings, theme: 'blue' },
  { id: 'upload-developer', title: 'Upload Developer', description: 'Upload developer details.', Icon: Cloud, theme: 'violet' }
];

export default function ManagementControlsGrid() {
  const { currentView, navigateTo, goBack } = useScrollNavigation('main');
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  return (
    <div 
      className="w-full max-w-[1720px] mx-auto px-2.5 sm:px-6 lg:px-8 py-6 select-none"
      onCopy={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      onSelect={(e) => e.preventDefault()}
    >
      
      {currentView === 'home' && (
        <>
          <PageHeaderWithBack
            sectionNumber="01"
            title="Home Management Control"
            description="Configure hero slider banners, announcements, quick links, and featured portal widgets on the main home page. Manage all core sections including introduction, testimonials, programs, and our tech stack."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {homeCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => console.log(`Clicked ${card.title}`)} />
            ))}
          </div>
        </>
      )}

      {currentView === 'about-us' && (
        <>
          <PageHeaderWithBack
            sectionNumber="02"
            title="About Us Management Control"
            description="Manage the core identity, mission, and legal compliance documentation of the organization. Keep track of achievements, galleries, and core objectives that represent the organization's public-facing persona."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {aboutUsCards.map((card, idx) => (
              <PremiumCard 
                key={idx} 
                {...card} 
                onClick={() => {
                  if (card.title === 'Legal & Compliance') {
                    navigateTo('legal-compliance');
                  } else {
                    setActiveSubMenu({ parent: 'about-us', card });
                    navigateTo('action-menu');
                  }
                }} 
              />
            ))}
          </div>
        </>
      )}

      {currentView === 'legal-compliance' && (
        <>
          <PageHeaderWithBack
            sectionNumber="03"
            title="Legal & Compliance Control"
            description="Manage all cyber investigation compliance frameworks, legal rights, organizational capacities, and operational bounds. Ensure strict adherence to cyber laws, ethical standards, and operational responsibilities."
            onBack={() => goBack('about-us')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {legalComplianceCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => console.log(`Clicked ${card.title}`)} />
            ))}
          </div>
        </>
      )}

      {currentView === 'our-service' && (
        <>
          <PageHeaderWithBack
            sectionNumber="04"
            title="Our Service Management Control"
            description="Configure and manage all core services offered by the organization. Ensure service descriptions, legal support details, and cyber awareness programs are up to date and correctly presented to the public."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {ourServiceCards.map((card, idx) => (
              <PremiumCard 
                key={idx} 
                {...card} 
                onClick={() => {
                  setActiveSubMenu({ parent: 'our-service', card });
                  navigateTo('action-menu');
                }} 
              />
            ))}
          </div>
        </>
      )}

      {currentView === 'software-product' && (
        <>
          <PageHeaderWithBack
            sectionNumber="05"
            title="Software Product Management Control"
            description="Oversee the entire lifecycle of software solutions. Manage developed applications, ongoing projects, enterprise platforms, and specialized tools for cyber security, investigations, and educational technology."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {softwareProductCards.map((card, idx) => {
              const isContentCard = ['Enterprise Software Solutions', 'Software Product Overview', 'Cloud-Based Software Solutions', 'Cyber Security Software Solutions'].includes(card.title);
              const actionCards = isContentCard ? softwareProductContentActionCards : softwareProductDataActionCards;
              return (
                <PremiumCard 
                  key={idx} 
                  {...card} 
                  onClick={() => {
                    setActiveSubMenu({ parent: 'software-product', card, actionCards });
                    navigateTo('action-menu');
                  }} 
                />
              );
            })}
          </div>
        </>
      )}

      {currentView === 'skill-development' && (
        <>
          <PageHeaderWithBack
            sectionNumber="06"
            title="Skill Development Management Control"
            description="Manage educational programs, training courses, and comprehensive internship opportunities."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {skillDevelopmentCards.map((card, idx) => (
              <PremiumCard 
                key={idx} 
                {...card} 
                onClick={() => {
                  if (card.title === 'Internships') {
                    navigateTo('internships');
                  } else if (card.title === 'Training Programs') {
                    navigateTo('training-programs');
                  } else if (card.title === 'Courses') {
                    navigateTo('courses');
                  } else if (card.title === 'Workshops') {
                    navigateTo('workshops');
                  } else if (card.title === 'Awareness Programs') {
                    navigateTo('awareness');
                  } else if (card.title === 'Research Programs') {
                    navigateTo('research');
                  } else if (card.title === 'Mentorship Programs') {
                    navigateTo('mentorship');
                  } else if (card.title === 'Corporate Training') {
                    navigateTo('corporate');
                  } else if (card.title === 'Hackathons') {
                    navigateTo('hackathons');
                  } else {
                    setActiveSubMenu({ parent: 'skill-development', card, actionCards: softwareProductDataActionCards });
                    navigateTo('action-menu');
                  }
                }} 
              />
            ))}
          </div>
        </>
      )}

      {currentView === 'internships' && (
        <>
          <PageHeaderWithBack
            sectionNumber="07"
            title="Internships Program Control"
            description="Configure and manage 48 distinct internship programs spanning cybersecurity, software development, data science, law, and digital marketing."
            onBack={() => goBack('skill-development')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {internshipCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                setActiveSubMenu({ parent: 'internships', card, actionCards: softwareProductDataActionCards });
                navigateTo('action-menu');
              }} />
            ))}
          </div>
        </>
      )}

      {currentView === 'training-programs' && (
        <>
          <PageHeaderWithBack
            sectionNumber="08"
            title="Training Programs Control"
            description="Manage and configure 48 distinct training programs across varied domains including cybersecurity, machine learning, application development, marketing, and corporate law."
            onBack={() => goBack('skill-development')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {trainingProgramCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                setActiveSubMenu({ parent: 'training-programs', card, actionCards: softwareProductDataActionCards });
                navigateTo('action-menu');
              }} />
            ))}
          </div>
        </>
      )}

      {currentView === 'courses' && (
        <>
          <PageHeaderWithBack
            sectionNumber="09"
            title="Courses Management Control"
            description="Manage 48 varied courses covering cybersecurity, software development, design, and legal specializations."
            onBack={() => goBack('skill-development')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {courseCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                setActiveSubMenu({ parent: 'courses', card, actionCards: softwareProductDataActionCards });
                navigateTo('action-menu');
              }} />
            ))}
          </div>
        </>
      )}

      {currentView === 'workshops' && (
        <>
          <PageHeaderWithBack
            sectionNumber="10"
            title="Workshops Management Control"
            description="Manage 48 highly interactive and intensive workshops across all essential domains."
            onBack={() => goBack('skill-development')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {workshopCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                setActiveSubMenu({ parent: 'workshops', card, actionCards: softwareProductDataActionCards });
                navigateTo('action-menu');
              }} />
            ))}
          </div>
        </>
      )}

      {currentView === 'awareness' && (
        <>
          <PageHeaderWithBack
            sectionNumber="11"
            title="Awareness Programs Control"
            description="Manage 48 comprehensive public awareness campaigns covering cybersecurity, privacy, financial literacy, and digital rights."
            onBack={() => goBack('skill-development')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {awarenessCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                setActiveSubMenu({ parent: 'awareness', card, actionCards: softwareProductDataActionCards });
                navigateTo('action-menu');
              }} />
            ))}
          </div>
        </>
      )}

      {currentView === 'research' && (
        <>
          <PageHeaderWithBack
            sectionNumber="12"
            title="Research Programs Control"
            description="Manage 48 advanced academic and industrial research programs covering AI, forensics, cloud architecture, and organizational behavior."
            onBack={() => goBack('skill-development')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {researchCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                setActiveSubMenu({ parent: 'research', card, actionCards: softwareProductDataActionCards });
                navigateTo('action-menu');
              }} />
            ))}
          </div>
        </>
      )}

      {currentView === 'mentorship' && (
        <>
          <PageHeaderWithBack
            sectionNumber="13"
            title="Mentorship Programs Control"
            description="Manage 48 highly specialized mentorship programs designed to connect learners with industry experts in cybersecurity, finance, and software development."
            onBack={() => goBack('skill-development')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {mentorshipCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                setActiveSubMenu({ parent: 'mentorship', card, actionCards: softwareProductDataActionCards });
                navigateTo('action-menu');
              }} />
            ))}
          </div>
        </>
      )}

      {currentView === 'corporate' && (
        <>
          <PageHeaderWithBack
            sectionNumber="14"
            title="Corporate Training Control"
            description="Manage 48 professional corporate training programs, from executive leadership and business strategy to digital transformation and corporate law."
            onBack={() => goBack('skill-development')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {corporateCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                setActiveSubMenu({ parent: 'corporate', card, actionCards: softwareProductDataActionCards });
                navigateTo('action-menu');
              }} />
            ))}
          </div>
        </>
      )}

      {currentView === 'hackathons' && (
        <>
          <PageHeaderWithBack
            sectionNumber="15"
            title="Hackathons Control"
            description="Manage 48 highly competitive and engaging hackathons spanning cybersecurity, generative AI, cloud computing, and digital innovation."
            onBack={() => goBack('skill-development')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {hackathonCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                setActiveSubMenu({ parent: 'hackathons', card, actionCards: softwareProductDataActionCards });
                navigateTo('action-menu');
              }} />
            ))}
          </div>
        </>
      )}


      {currentView === 'careers' && (
        <>
          <PageHeaderWithBack
            sectionNumber="16"
            title="Careers Management Control"
            description="Publish cyber forensic job vacancies, internship drives, qualification guidelines, and applicant tracking."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {careersTopCards.map((card, idx) => (
              <PremiumCard 
                key={idx} 
                {...card} 
                onClick={() => {
                  if (card.title === 'Current Vacancy') {
                    navigateTo('careers-vacancy');
                  } else if (card.title === 'Recruitment Rules/Policies') {
                    navigateTo('careers-policies');
                  } else {
                    setActiveSubMenu({ parent: 'careers', card, actionCards: softwareProductDataActionCards });
                    navigateTo('action-menu');
                  }
                }} 
              />
            ))}
          </div>
        </>
      )}

      {currentView === 'careers-vacancy' && (
        <>
          <PageHeaderWithBack
            sectionNumber="17"
            title="Current Vacancy Control"
            description="Manage current job openings and vacancies."
            onBack={() => goBack('careers')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {vacancyCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                setActiveSubMenu({ parent: 'careers-vacancy', card, actionCards: softwareProductDataActionCards });
                navigateTo('action-menu');
              }} />
            ))}
          </div>
        </>
      )}

      {currentView === 'careers-policies' && (
        <>
          <PageHeaderWithBack
            sectionNumber="18"
            title="Recruitment Rules/Policies Control"
            description="Manage recruitment guidelines, employment overview, and organizational policies."
            onBack={() => goBack('careers')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {policyCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                setActiveSubMenu({ parent: 'careers-policies', card, actionCards: softwareProductDataActionCards });
                navigateTo('action-menu');
              }} />
            ))}
          </div>
        </>
      )}

      {currentView === 'contact' && (
        <>
          <PageHeaderWithBack
            sectionNumber="19"
            title="Contact Management Control"
            description="Manage internal and external contact directories, support help desks, AI chat integrations, and feedback channels."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {contactTopCards.map((card, idx) => (
              <PremiumCard 
                key={idx} 
                {...card} 
                onClick={() => {
                  if (card.title === 'Follow Apps') {
                    navigateTo('contact-follow-apps');
                  } else {
                    console.log(`Clicked ${card.title}`);
                  }
                }} 
              />
            ))}
          </div>
        </>
      )}

      {currentView === 'contact-follow-apps' && (
        <>
          <PageHeaderWithBack
            sectionNumber="20"
            title="Follow Apps Control"
            description="Add, view, manage, and bulk upload application links and social connections."
            onBack={() => goBack('contact')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {followAppsCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => console.log(`Clicked ${card.title}`)} />
            ))}
          </div>
        </>
      )}

      {currentView === 'report-crime' && (
        <>
          <PageHeaderWithBack
            sectionNumber="21"
            title="Report Crime Management Control"
            description="Manage cyber crime reporting portals, victim support pipelines, case tracking, and threat intelligence."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {reportCrimeTopCards.map((card, idx) => {
              const dataCardTitles = [
                'Report a Cyber Crime - Important Information',
                'How to Report a Cyber Crime',
                'Cyber Fraud Complaint Registration',
                'Track Your Case Status',
                'Types of Cyber Crime',
                'Report a Cyber Crime - Victim Support and Assistance',
                'Cyber Crime Prevention',
                'Case Status',
                'Success Case Stories',
                'Ongoing Investigation Cases',
                'Cyber Threat Intelligence',
                'Cyber Crime FAQs'
              ];
              const isDataCard = dataCardTitles.includes(card.title);
              const actionCards = isDataCard ? softwareProductDataActionCards : softwareProductContentActionCards;
              return (
                <PremiumCard 
                  key={idx} 
                  {...card} 
                  onClick={() => {
                    if (card.title === 'Report a Cyber Crime - Victim Rights & Support') {
                      navigateTo('victim-rights-support');
                    } else {
                      setActiveSubMenu({ parent: 'report-crime', card, actionCards });
                      navigateTo('action-menu');
                    }
                  }} 
                />
              );
            })}
          </div>
        </>
      )}

      {currentView === 'victim-rights-support' && (
        <>
          <PageHeaderWithBack
            sectionNumber="22"
            title="Victim Rights & Support Control"
            description="Manage comprehensive support, rights, and assistance programs for cybercrime victims."
            onBack={() => goBack('report-crime')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {victimRightsSupportCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                setActiveSubMenu({ parent: 'victim-rights-support', card, actionCards: softwareProductContentActionCards });
                navigateTo('action-menu');
              }} />
            ))}
          </div>
        </>
      )}

      {currentView === 'gallery' && (
        <>
          <PageHeaderWithBack
            sectionNumber="23"
            title="Gallery Management Control"
            description="Manage 20 distinct media galleries, from Journey and Event galleries to Student and Press interactions."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {galleryTopCards.map((card, idx) => (
              <PremiumCard 
                key={idx} 
                {...card} 
                onClick={() => navigateTo('gallery-actions')} 
              />
            ))}
          </div>
        </>
      )}

      {currentView === 'gallery-actions' && (
        <>
          <PageHeaderWithBack
            sectionNumber="24"
            title="Photo Actions"
            description="Add, view, manage, and bulk upload photos for the selected gallery."
            onBack={() => goBack('gallery')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {photoActionCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => console.log(`Clicked ${card.title}`)} />
            ))}
          </div>
        </>
      )}

      {currentView === 'header' && (
        <>
          <PageHeaderWithBack
            sectionNumber="25"
            title="Header Management Control"
            description="Manage website header configuration including logos, notifications, and events."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {headerCards.map((card, idx) => {
              let actionCards = softwareProductContentActionCards;
              if (card.title === 'Logo Control') {
                actionCards = imageActionCards;
              } else if (card.title === 'Upcoming Event Control') {
                actionCards = eventActionCards;
              } else if (card.title === 'Notification Control') {
                actionCards = softwareProductDataActionCards;
              }
              
              return (
                <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                  setActiveSubMenu({ parent: 'header', card, actionCards });
                  navigateTo('action-menu');
                }} />
              );
            })}
          </div>
        </>
      )}

      {currentView === 'footer' && (
        <>
          <PageHeaderWithBack
            sectionNumber="26"
            title="Footer Management Control"
            description="Manage website footer content, useful links, physical address, and developer credits."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {footerCards.map((card, idx) => {
              let actionCards = softwareProductContentActionCards;
              if (card.title === 'Footer Useful Links Control') {
                actionCards = linkActionCards;
              } else if (card.title === 'Footer Address Control') {
                actionCards = addressActionCards;
              } else if (card.title === 'Footer Developer Control') {
                actionCards = developerActionCards;
              }

              return (
                <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                  setActiveSubMenu({ parent: 'footer', card, actionCards });
                  navigateTo('action-menu');
                }} />
              );
            })}
          </div>
        </>
      )}

      {currentView === 'doc-verification' && (
        <>
          <PageHeaderWithBack
            sectionNumber="27"
            title="Document Verification Department"
            description="Verify credentials, certificates, digital identities, and physical materials."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {docVerificationCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                setActiveSubMenu({ parent: 'doc-verification', card, actionCards: softwareProductDataActionCards });
                navigateTo('action-menu');
              }} />
            ))}
          </div>
        </>
      )}

      {currentView === 'online-app' && (
        <>
          <PageHeaderWithBack
            sectionNumber="28"
            title="Online Application Portal"
            description="Manage 30 distinct online application forms ranging from certificates and memberships to events and support requests."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {onlineAppCards.map((card, idx) => (
              <PremiumCard key={idx} index={idx} {...card} onClick={() => {
                setActiveSubMenu({ parent: 'online-app', card, actionCards: softwareProductDataActionCards });
                navigateTo('action-menu');
              }} />
            ))}
          </div>
        </>
      )}


      
      {currentView === 'insights' && (
        <>
          <PageHeaderWithBack
            sectionNumber="30"
            title="Insights Management Control"
            description="Curate threat analysis bulletins, malware outbreak reports, whitepapers, vulnerability disclosures, and safety case studies."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {insightsCards.map((card, idx) => (
              <PremiumCard 
                key={idx} 
                index={idx} 
                {...card} 
                onClick={() => {
                  setActiveSubMenu({ parent: 'insights', card, actionCards: softwareProductDataActionCards });
                  navigateTo('action-menu');
                }} 
              />
            ))}
          </div>
        </>
      )}

      {currentView === 'app-status' && (
        <>
          <PageHeaderWithBack
            sectionNumber="31"
            title="Check Application Status Control"
            description="Track reference token statuses, dispatch SMS updates, resolve citizen inquiries, and audit verification progress across departments."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {appStatusCards.map((card, idx) => (
              <PremiumCard 
                key={idx} 
                index={idx} 
                {...card} 
                onClick={() => {
                  setActiveSubMenu({ parent: 'app-status', card, actionCards: softwareProductDataActionCards });
                  navigateTo('action-menu');
                }} 
              />
            ))}
          </div>
        </>
      )}

      {currentView === 'demo' && (
        <>
          <PageHeaderWithBack
            sectionNumber="32"
            title="Demo Management Control"
            description="Sandbox testing environment, simulation testing for incident handling, prototype modules, and portal verification previews."
            onBack={() => goBack('main')}
            backLabel="Back"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {demoCards.map((card, idx) => (
              <PremiumCard 
                key={idx} 
                index={idx} 
                {...card} 
                onClick={() => {
                  setActiveSubMenu({ parent: 'demo', card, actionCards: softwareProductDataActionCards });
                  navigateTo('action-menu');
                }} 
              />
            ))}
          </div>
        </>
      )}

      {currentView === 'action-menu' && activeSubMenu && (
        <>
          <PageHeaderWithBack
            sectionNumber="29"
            title={activeSubMenu.card.title}
            description={`Select an action below to manage the ${activeSubMenu.card.title} section.`}
            onBack={() => goBack(activeSubMenu.parent)}
            backLabel="Back to Category"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
            {(activeSubMenu.actionCards || genericActionCards).map((card, idx) => (
              <PremiumCard 
                key={idx} 
                {...card} 
                onClick={() => console.log(`Clicked ${card.title} for ${activeSubMenu.card.title}`)} 
              />
            ))}
          </div>
        </>
      )}

      {currentView === 'main' && (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 xl:gap-5">
          {mainDashboardCards.map((card) => (
            <PremiumCard 
              key={card.id} 
              title={card.title}
              description={card.description}
              Icon={card.Icon}
              theme={card.theme}
              onClick={() => navigateTo(card.id)} 
            />
          ))}
        </div>
      )}

    </div>
  );
}
