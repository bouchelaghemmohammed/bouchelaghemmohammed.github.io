import { useState, useEffect } from 'react';
import { Globe, Sun, Moon, Menu, X } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ lang, setLang, t, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-full">BOUCHELAGHEM MOHAMMED</span>
          <span className="logo-short">B.M</span>
          <span className="dot">.</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#services" onClick={closeMenu}>{t.nav.services}</a>
          <a href="#skills" onClick={closeMenu}>{t.nav.skills}</a>
          <a href="#projects" onClick={closeMenu}>{t.nav.projects}</a>
          <a href="https://www.linkedin.com/in/bouchelaghemmoh" target="_blank" rel="noopener noreferrer" className="nav-social" aria-label="LinkedIn" onClick={closeMenu}>
            <FaLinkedin size={22} />
          </a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle Language">
            <Globe size={20} />
            <span>{lang.toUpperCase()}</span>
          </button>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
