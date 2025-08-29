import { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaKaggle } from 'react-icons/fa';
import profile from '../assets/profile.png';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import ResumeModal from './ResumeModel';

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center 
      bg-gray-100 dark:bg-gray-900 
      text-gray-900 dark:text-white 
      px-6 sm:px-10 lg:px-36 relative"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center flex-1 space-y-10 md:space-y-0 md:space-x-12">
        
        {/* Left-hand side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-3">
            Hey 👋 I’m
          </h1>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">
            Shekh Zaib
          </h2>
          <p className="text-xl sm:text-2xl font-medium mb-6 text-gray-700 dark:text-gray-300">
            <span className="text-blue-500">I’m a</span>{' '}
            <Typewriter
              words={['Data Scientist 🚀', 'Full-Stack Developer 💻', 'AI Enthusiast 🤖']}
              loop={true}
              cursor
              cursorStyle={'_'}
              typeSpeed={90}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </p>

          {/* Social icons - clean hover */}
          <div className="flex justify-center md:justify-start space-x-5 mt-6">
            {[
              { href: "mailto:zaib.shekh313@gmail.com", icon: <FiMail size={24} />, label: "Email" },
              { href: "https://github.com/zaib-shekh", icon: <FiGithub size={24} />, label: "GitHub" },
              { href: "https://www.kaggle.com/sheikhzaib", icon: <FaKaggle size={24} />, label: "Kaggle" },
              { href: "https://www.linkedin.com/in/shekh-zaib/", icon: <FiLinkedin size={24} />, label: "LinkedIn" }
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-400 dark:border-gray-600 rounded-full 
                text-gray-600 dark:text-gray-300 
                hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Clean CTA Button */}
          <Link to="about" smooth={true} duration={500}>
            <button
              onClick={openModal}
              className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md 
              hover:bg-blue-700 hover:shadow-lg transition duration-300"
            >
              View Resume
            </button>
          </Link>
        </div>

        {/* Right-hand side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-md hover:scale-105 transition-transform duration-300">
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
