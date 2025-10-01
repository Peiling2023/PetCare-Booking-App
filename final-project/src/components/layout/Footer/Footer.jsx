import React from 'react';
import './footer.css';

const Footer = ({ setCurrentPage }) => {
    return (
        <footer className="footer">
          <p>&copy; 2024 Pawfect Stay. All rights reserved.</p>
          <div className="footer-links">
            <button onClick={() => setCurrentPage('home')}>Home</button>
            <button onClick={() => setCurrentPage('privacy')}>Privacy</button>
          </div>
          <div className="social-media">
            <a
              href="https://www.xiaohongshu.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="XiaoHongShu"
            >
              XiaoHongShu
            </a>
            <a
              href="https://www.instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              Instagram
              </a>
      </div>
    </footer>
  );
};

export default Footer;
