import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Widgets from './components/Widgets';
import Projects from './components/Projects';
import Footer from './components/Footer';

import en from './locales/en.json';
import fr from './locales/fr.json';

function App() {
  const [lang, setLang] = useState('en');
  const [t, setT] = useState(en);

  useEffect(() => {
    setT(lang === 'en' ? en : fr);
  }, [lang]);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
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
