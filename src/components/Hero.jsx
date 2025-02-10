import {useState} from 'react';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaKaggle } from 'react-icons/fa';
import profile from '../assets/profile.png';
import {Link} from 'react-scroll'
import { Typewriter } from 'react-simple-typewriter';
import ResumeModal from './ResumeModel';

const Hero = ({ darkMode}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-6 lg:px-36">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 relative">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-0 top-0 h-48.5 pt-3.5 transform -translate-x-1/2">
          <div className="h-4/5 w-1 bg-blue-500 dark:bg-blue-500"></div>
        </div>
        {/* Left-hand side */}
        <div className="md:w-1/2 mb-6 md:mb-0 relative">
          <h1 className="text-4xl font-bold mb-4 text-blue-500">Hello there I am</h1>
          <h2 className="text-6xl font-bold mb-4">Shekh Zaib</h2>
          <p className="text-2xl font-medium mb-4 text-blue-500">
            <span className='text-gray-900 dark:text-white'>I'm a</span> 
            <Typewriter
              words = {[" Data Scientist", " Full-Stack Developer",]}
              loop = {true}
              cursor = {true}
              cursorStyle = {'_'}
              typeSpeed = {100}
              deleteSpeed = {50}
              delaySpeed = {1000}
            />
            
            </p>
          <div className="flex space-x-4 mt-4">
            <a href="mailto:zaib.shekh313@gmail.com" className="relative group p-2 border-2 border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300">
              <FiMail size={24} />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Email
              </span>
            </a>
            <a href="https://github.com/zaib-shekh" target="_blank" rel="noopener noreferrer" className="relative group p-2 border-2 border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300">
              <FiGithub size={24} />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GitHub
              </span>
            </a>
            <a href="https://www.kaggle.com/sheikhzaib" target="_blank" rel="noopener noreferrer" className="relative group p-2 border-2 border-blue-500 rounded-full text-blue-500 hover:bg-blue-400 hover:text-white transition-colors duration-300">
              <FaKaggle size={24} />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Kaggle
              </span>
            </a>
            <a href="https://www.linkedin.com/in/shekh-zaib/" target="_blank" rel="noopener noreferrer" className="relative group p-2 border-2 border-blue-500 rounded-full text-blue-500 hover:bg-blue-400 hover:text-white transition-colors duration-300">
              <FiLinkedin size={24} />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                LinkedIn
              </span>
            </a>
          </div>
          <Link to="about" smooth={true} duration={500}>
          <button
            onClick={openModal}
            className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition duration-300 mt-4"
          >
            View Resume
          </button>          </Link>
        </div>
        {/* Right-hand side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-72 h-72 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 float-right">
            <img
              src={profile}
              alt="Shekh Zaib"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {modalOpen && <ResumeModal closeModal={closeModal} />}

    </section>
  );
};

export default Hero;
