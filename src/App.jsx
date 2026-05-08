import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Widgets from './components/Widgets';
import Projects from './components/Projects';
import Footer from './components/Footer';
import NetworkBackground from './components/NetworkBackground';

import en from './locales/en.json';
import fr from './locales/fr.json';

function App() {
  const [lang, setLang] = useState('en');
  const [t, setT] = useState(en);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setT(lang === 'en' ? en : fr);
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <NetworkBackground theme={theme} />
      <Navbar lang={lang} setLang={setLang} t={t} theme={theme} toggleTheme={toggleTheme} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero t={t} />
        <Services t={t} />
        <Widgets t={t} />
        <Projects t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}

export default App;
