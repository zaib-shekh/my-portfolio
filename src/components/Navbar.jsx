import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 transition-all duration-500 
      ${scrolled 
        ? darkMode
          ? 'backdrop-blur-lg bg-gradient-to-r from-blue-900/80 via-indigo-900/80 to-black/80 shadow-lg'
          : 'backdrop-blur-lg bg-white/80 shadow-lg'
        : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full border-2 border-blue-500 shadow-md" />
          <a
            href="/"
            className={`text-2xl font-extrabold tracking-wide 
              bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 
              bg-clip-text text-transparent`}
          >
            Shekh Zaib
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {[
            { name: 'Experience', href: '#experience' },
            { name: 'Skills', href: '#skills' },
            { name: 'Education', href: '#education' },
            { name: 'Projects', href: '#projects' },
            { name: 'Certifications', href: '#certifications' },
            { name: 'Contact', href: '#contact' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className={`relative text-base font-semibold transition duration-300
                ${darkMode ? 'text-white/90 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}
                after:content-[''] after:absolute after:w-0 after:h-[2px] 
                after:left-0 after:bottom-0 
                after:bg-gradient-to-r after:from-blue-400 after:to-purple-500
                after:transition-all after:duration-300 hover:after:w-full`}
            >
              {item.name}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full 
            bg-gradient-to-r from-blue-500 to-purple-600 
            text-white hover:scale-110 transition-transform duration-300 shadow-md"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className={`${darkMode ? 'text-white' : 'text-gray-800'} hover:text-blue-500 mr-4 transition duration-300`}
          >
            {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>
          <button
            onClick={toggleMenu}
            className={`${darkMode ? 'text-white' : 'text-gray-800'} hover:text-blue-500 transition duration-300`}
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`lg:hidden px-6 py-4 space-y-4 shadow-lg
            ${darkMode 
              ? 'bg-gradient-to-br from-blue-900 via-indigo-900 to-black' 
              : 'bg-white'}`
          }
        >
          {[
            { name: 'About', href: '#about' },
            { name: 'Experience', href: '#experience' },
            { name: 'Education', href: '#education' },
            { name: 'Projects', href: '#projects' },
            { name: 'Certifications', href: '#certifications' },
            { name: 'Contact', href: '#contact' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className={`block text-base font-medium transition duration-300
                ${darkMode ? 'text-white/90 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
