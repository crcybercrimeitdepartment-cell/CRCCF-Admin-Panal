import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cloudinary from './constants/Cloudinary';
import { Header as GlobalHeader } from './components/CrccfAdminPage';
import Footer from './components/Footer';
import ManagementControlsGrid from './components/management_controls/ManagementControlsGrid';
import SuperadminControl from './components/super_admin_control/SuperadminControl';
import MailControl from './components/mail_control/MailControl';
import SoftwareControl from './components/software_control/SoftwareControl';
import UserControl from './components/user_control/UserControl';
import DashboardControl from './components/dashboard_control/DashboardControl';
import LoginPage from './components/LoginPage';
import { useScrollNavigation } from './components/common/useScrollNavigation';
import SecurityLayer from './components/Security and Protection/SecurityLayer';

import JourneyGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Journey Gallery/JourneyGalleryPage';
import CourseGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Course Gallery/CourseGalleryPage';
import StudyGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Study Gallery/StudyGalleryPage';
import IntensiveGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Intensive Gallery/IntensiveGalleryPage';
import PhotoProjectGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Photo Project Gallery/PhotoProjectGalleryPage';
import EventGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Event Gallery/EventGalleryPage';
import EmployeeGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Employee Gallery/EmployeeGalleryPage';
import AnnualCelebrationGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Annual Celebration Gallery/AnnualCelebrationGalleryPage';
import AchievementGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Achievement Gallery/AchievementGalleryPage';
import WorkHighlightGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Work Highlight Gallery/WorkHighlightGalleryPage';
import SuccessStoryGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Success Story Gallery/SuccessStoryGalleryPage';
import WorkplaceGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Workplace Gallery/WorkplaceGalleryPage';
import SeminarWorkshopGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Seminar & Workshop Gallery/SeminarWorkshopGalleryPage';
import CyberAwarenessGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Cyber Awareness Gallery/CyberAwarenessGalleryPage';
import OfficeCultureGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Office Culture Gallery/OfficeCultureGalleryPage';
import AwardRecognitionGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Award & Recognition Gallery/AwardRecognitionGalleryPage';
import ProductLaunchGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Product Launch Gallery/ProductLaunchGalleryPage';
import TeamMomentGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Team Moment Gallery/TeamMomentGalleryPage';
import MediaPressReleasePage from './components/management_controls/gallery_management_control/Gallery Management Control/Media & Press Release/MediaPressReleasePage';
import StudentActivitiesGalleryPage from './components/management_controls/gallery_management_control/Gallery Management Control/Student Activities Gallery/StudentActivitiesGalleryPage';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Fresh visit / page refresh ALWAYS starts with hasAccess = false (Login page required on reload)
  const [hasAccess, setHasAccess] = useState(false);

  const {
    currentView: selectedPage,
    navigateTo: navigatePage,
    goBack: goBackPage,
  } = useScrollNavigation('Login', { scope: 'app' });

  const handlePageSelect = (page) => {
    if (page === selectedPage) return;
    if (page === 'Demo1') {
      goBackPage('Demo1');
    } else {
      navigatePage(page);
    }
  };

  // Called when user clicks "Skip to Homepage" or successfully logs in
  const handleEnterHomepage = React.useCallback(() => {
    try {
      sessionStorage.setItem('hasSkipped', 'true');
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('crccf_nav_app', 'Demo1');
      window.history.replaceState({ app: 'Demo1' }, '', '/');
    } catch {
      // ignore
    }
    setHasAccess(true);
    navigatePage('Demo1');
    if (location.pathname === '/login' || location.pathname === '/officer-login') {
      navigate('/', { replace: true });
    }
  }, [navigatePage, location.pathname, navigate]);

  // Called when clicking "Home" in the Header while already inside the dashboard
  const handleHomeClick = () => {
    if (hasAccess) {
      goBackPage('Demo1');
    } else {
      handleLogout();
    }
  };

  const handleLogout = React.useCallback(() => {
    try {
      sessionStorage.removeItem('isAuthenticated');
      sessionStorage.removeItem('hasSkipped');
      sessionStorage.removeItem('currentUser');
      sessionStorage.removeItem('officerInfo');
      sessionStorage.setItem('crccf_nav_app', 'Login');
      window.history.replaceState({ app: 'Login' }, '', '/');
    } catch {
      // ignore
    }
    setHasAccess(false);
    navigatePage('Login');
  }, [navigatePage]);

  // Synchronize internal navigation events
  useEffect(() => {
    const handleInternalNav = (e) => {
      const detail = e.detail;
      if (detail && detail.scope === 'app') {
        if (detail.view === 'Login') {
          handleLogout();
        } else if (detail.view === 'Demo1') {
          handleEnterHomepage();
        }
      }
    };
    window.addEventListener('crccf-internal-navigate', handleInternalNav);
    return () => window.removeEventListener('crccf-internal-navigate', handleInternalNav);
  }, [handleLogout, handleEnterHomepage]);

  const isLoginPage = 
    !hasAccess ||
    selectedPage === 'Login' || 
    location.pathname === '/login' || 
    location.pathname === '/officer-login' ||
    (typeof window !== 'undefined' && (
      window.location.pathname === '/login' || 
      window.location.pathname === '/officer-login' ||
      window.location.hash === '#login' || 
      (window.location.search && window.location.search.toLowerCase().includes('login'))
    ));

  if (isLoginPage) {
    return (
      <SecurityLayer>
        <LoginPage 
          onSkip={handleEnterHomepage} 
          onHomeClick={handleEnterHomepage}
          onLoginSuccess={handleEnterHomepage} 
        />
      </SecurityLayer>
    );
  }

  const handleBackToMain = () => handlePageSelect('Demo1');

  return (
    <SecurityLayer>
      <div className="min-h-screen flex flex-col font-sans selection:bg-slate-900 selection:text-white bg-[#f0f6ff] w-full max-w-full relative overflow-x-hidden">
      {/* Background Watermark */}
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

      <div className="relative z-10 flex flex-col min-h-screen w-full overflow-x-hidden">
        {/* Header */}
        <GlobalHeader 
          selectedPage={selectedPage} 
          onHeaderIconClick={(page) => {
            if (page === 'Logout') {
              handleLogout();
            } else {
              handlePageSelect(page);
            }
          }} 
          onHomeClick={handleHomeClick}
        />
        
        {/* Main Content Area */}
        <main className="flex-1 w-full flex flex-col">
          <Routes>
            <Route path="/admin/gallery-management/journey" element={<JourneyGalleryPage standalone />} />
            <Route path="/admin/gallery-management/course" element={<CourseGalleryPage standalone />} />
            <Route path="/admin/gallery-management/study" element={<StudyGalleryPage standalone />} />
            <Route path="/admin/gallery-management/intensive" element={<IntensiveGalleryPage standalone />} />
            <Route path="/admin/gallery-management/photo-project" element={<PhotoProjectGalleryPage standalone />} />
            <Route path="/admin/gallery-management/event" element={<EventGalleryPage standalone />} />
            <Route path="/admin/gallery-management/employee" element={<EmployeeGalleryPage standalone />} />
            <Route path="/admin/gallery-management/annual-celebration" element={<AnnualCelebrationGalleryPage standalone />} />
            <Route path="/admin/gallery-management/achievement" element={<AchievementGalleryPage standalone />} />
            <Route path="/admin/gallery-management/work-highlight" element={<WorkHighlightGalleryPage standalone />} />
            <Route path="/admin/gallery-management/success-story" element={<SuccessStoryGalleryPage standalone />} />
            <Route path="/admin/gallery-management/workplace" element={<WorkplaceGalleryPage standalone />} />
            <Route path="/admin/gallery-management/seminar-workshop" element={<SeminarWorkshopGalleryPage standalone />} />
            <Route path="/admin/gallery-management/cyber-awareness" element={<CyberAwarenessGalleryPage standalone />} />
            <Route path="/admin/gallery-management/office-culture" element={<OfficeCultureGalleryPage standalone />} />
            <Route path="/admin/gallery-management/award-recognition" element={<AwardRecognitionGalleryPage standalone />} />
            <Route path="/admin/gallery-management/product-launch" element={<ProductLaunchGalleryPage standalone />} />
            <Route path="/admin/gallery-management/team-moment" element={<TeamMomentGalleryPage standalone />} />
            <Route path="/admin/gallery-management/media-press-release" element={<MediaPressReleasePage standalone />} />
            <Route path="/admin/gallery-management/student-activities" element={<StudentActivitiesGalleryPage standalone />} />
            <Route path="*" element={
              <>
                {selectedPage === 'SuperAdminControl' && <SuperadminControl onBack={handleBackToMain} />}
                {selectedPage === 'MailControl' && <MailControl onBack={handleBackToMain} />}
                {selectedPage === 'SoftwareControl' && <SoftwareControl onBack={handleBackToMain} />}
                {selectedPage === 'UserControl' && <UserControl onBack={handleBackToMain} />}
                {selectedPage === 'DashboardControl' && <DashboardControl onBack={handleBackToMain} />}
                {selectedPage !== 'SuperAdminControl' && selectedPage !== 'MailControl' && selectedPage !== 'SoftwareControl' && selectedPage !== 'UserControl' && selectedPage !== 'DashboardControl' && <ManagementControlsGrid />}
              </>
            } />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
    </SecurityLayer>
  );
}
