import React, { useState } from 'react';
import './header.css';

const Header = ({ currentPage, setCurrentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMenuOpen(false); 
  };

  return (
    <header className="header">
      {/* Skiplink */}
      <a href="#main-content" className="skiplink">
        Skip to main content
      </a>
      {/* Logo */}
      <div className="header-brand">
        <img
          src="images/logo.png" 
          alt="Pawfect Stay Logo"
          className="logo"
        />
        <h1>Pawfect Stay</h1>
      </div>

      {/* Hamburger Menu */}
      <div
        className="hamburger-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation for Large Screens */}
      <nav className="header-nav large-screen" aria-label="Main Navigation">
        <button
          className={currentPage === 'home' ? 'active' : ''}
          onClick={() => handleNavClick('home')}
        >
          Home
        </button>
        <div className="dropdown">
          <button>Services</button>
          <div className="dropdown-content">
            <button onClick={() => handleNavClick('services')}>Services</button>
            <button onClick={() => handleNavClick('booking')}>Booking</button>
          </div>
        </div>
        <div className="dropdown">
          <button>Information</button>
          <div className="dropdown-content">
            <button onClick={() => handleNavClick('about')}>About</button>
            <button onClick={() => handleNavClick('contact')}>Contact</button>
            <button onClick={() => handleNavClick('privacy')}>Privacy</button>
          </div>
        </div>
      </nav>

       {/* Navigation for Small Screens */}
      <nav className={`header-nav small-screen ${menuOpen ? 'show' : ''}`} aria-label="Main Navigation">
        <button onClick={() => handleNavClick('home')}>Home</button>
        <button onClick={() => handleNavClick('services')}>Services</button>
        <button onClick={() => handleNavClick('booking')}>Booking</button>
        <button onClick={() => handleNavClick('about')}>About</button>
        <button onClick={() => handleNavClick('contact')}>Contact</button>
        <button onClick={() => handleNavClick('privacy')}>Privacy</button>
      </nav>
    </header>
  );
};

export default Header;
