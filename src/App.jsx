import React from 'react';
import Cloudinary from './constants/Cloudinary';
import { Header as GlobalHeader } from './components/CrccfAdminPage';
import Footer from './components/Footer';
import ManagementControlsGrid from './components/management_controls/ManagementControlsGrid';
import SuperadminControl from './components/super_admin_control/SuperadminControl';
import MailControl from './components/mail_control/MailControl';
import SoftwareControl from './components/software_control/SoftwareControl';
import UserControl from './components/user_control/UserControl';
import DashboardControl from './components/dashboard_control/DashboardControl';
import { useScrollNavigation } from './components/common/useScrollNavigation';

export default function App() {
  const {
    currentView: selectedPage,
    navigateTo: navigatePage,
    goBack: goBackPage,
  } = useScrollNavigation('Demo1');

  const handlePageSelect = (page) => {
    if (page === selectedPage) return;
    if (page === 'Demo1') {
      goBackPage('Demo1');
    } else {
      navigatePage(page);
    }
  };

  const handleBackToMain = () => {
    goBackPage('Demo1');
  };

  return (
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
          onHeaderIconClick={handlePageSelect} 
          onHomeClick={handleBackToMain}
        />
        
        {/* Main Content Area */}
        <main className="flex-1 w-full flex flex-col">
          {selectedPage === 'SuperAdminControl' && <SuperadminControl onBack={handleBackToMain} />}
          {selectedPage === 'MailControl' && <MailControl onBack={handleBackToMain} />}
          {selectedPage === 'SoftwareControl' && <SoftwareControl onBack={handleBackToMain} />}
          {selectedPage === 'UserControl' && <UserControl onBack={handleBackToMain} />}
          {selectedPage === 'DashboardControl' && <DashboardControl onBack={handleBackToMain} />}
          {selectedPage !== 'SuperAdminControl' && selectedPage !== 'MailControl' && selectedPage !== 'SoftwareControl' && selectedPage !== 'UserControl' && selectedPage !== 'DashboardControl' && <ManagementControlsGrid />}
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
