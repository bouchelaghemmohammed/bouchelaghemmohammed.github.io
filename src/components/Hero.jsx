import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';
import profileImg from '../assets/profile.png';

const Hero = ({ t }) => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="greeting">{t.hero.greeting}</h2>
          <h1 className="role glow-text">{t.hero.role}</h1>
          <p className="description">{t.hero.description}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              {t.hero.cta} <ArrowRight size={20} />
            </a>
            <div className="social-links">
              <a href="https://github.com/bouchelaghemmohammed" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/bouchelaghemmoh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="image-wrapper">
            <img src={profileImg} alt="Mohammed" className="profile-img" />
            <div className="glow-ring"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
