import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import CertificateSlider from './components/CertificateSlider';
import BuyMeACoffee from './components/BuyMeACoffee';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Hero darkMode={darkMode} />
      <Experience/>
      <Skills/>
      <Education/>
      <Projects/>
      <CertificateSlider/>
      <BuyMeACoffee/>
    </>
  );
};

export default App;
