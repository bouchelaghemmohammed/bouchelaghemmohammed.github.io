import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'fr' : 'en');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo">
          BOUCHELAGHEM  MOHAMMED<span className="dot">.</span>
        </a>
        <div className="nav-links">
          <a href="#services">{t.nav.services}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="https://www.linkedin.com/in/bouchelaghemmoh" target="_blank" rel="noopener noreferrer" className="nav-social" aria-label="LinkedIn">
            <FaLinkedin size={22} />
          </a>
          <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle Language">
            <Globe size={20} />
            <span>{lang.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
