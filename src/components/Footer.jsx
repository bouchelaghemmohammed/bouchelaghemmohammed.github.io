import React from 'react';
import './Footer.css';

const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            BOUCHELAGHEM _ MOHAMMED <span className="dot">.</span>
          </div>
          <p className="footer-text">{t.footer.text}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
