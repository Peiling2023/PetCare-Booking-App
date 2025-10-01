import React, { useState } from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Booking from './pages/Booking/Booking';
import Contact from './pages/Contact/Contact';
import Privacy from './pages/Privacy/Privacy';
import ThemeSwitcher from './components/common/ThemeSwitcher/ThemeSwitcher'; 
import SubscribeModal from './components/features/Subscribe/SubscribeModal';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'booking':
        return <Booking />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      case 'privacy':
        return <Privacy />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      <ThemeSwitcher />
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <a href="#main-content" className="skiplink">Skip to main content</a>
      <SubscribeModal />
      <main id="main-content">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
