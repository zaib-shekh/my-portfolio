import React, { useEffect, useRef, useState } from 'react';
import ResumeModal from './ResumeModel';

const AboutSection = () => {
  const aboutRef = useRef(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Function to handle scroll and trigger animation
  const handleScroll = () => {
    const aboutSection = aboutRef.current;
    if (aboutSection && !animationTriggered) {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.5) {
        setAnimationTriggered(true);
      }
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Clean up the listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationTriggered]);

  useEffect(() => {
    // Trigger animation on page load
    handleScroll();
  }, []);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  return (
    <section
      ref={aboutRef}
      id="about"
      className={`min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 sm:px-6 lg:px-36 py-12 ${animationTriggered ? 'animate-about' : ''}`}
    >
      <div className="container mx-auto flex flex-col items-start space-y-6 md:space-y-0">
        <h2 className="text-4xl font-bold mb-10 text-center w-full">About Me</h2>
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Left-hand side */}
          <div className="md:w-1/2 mb-6 md:mb-0 animate-left">
            <p className="text-lg mb-4 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left dark:first-letter:text-white first-letter:text-gray-900">
              Hi, I'm Shekh Zaib, a passionate Data Scientist and Web Development with a strong background in Computer Science. 
              I have a deep love for coding and enjoy working on challenging projects that push the limits of my knowledge and skills. 
              My journey in tech started with a curiosity about how things work, which quickly grew into a lifelong passion for problem-solving 
              and innovation. I believe in continuous learning and strive to stay updated with the latest trends and technologies in the field.
            </p>
            <p className="text-lg mb-4">
              Throughout my career, I've had the opportunity to work on a variety of projects, ranging from web development to data analysis. 
              I take pride in writing clean, efficient, and maintainable code. When I'm not coding, you can find me reading tech blogs, experimenting 
              with new programming languages, or contributing to open-source projects.
            </p>
            <div className="flex space-x-4 mt-4">
            <button
            onClick={openModal}
            className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition duration-300"
          >
            View Resume
          </button>
              <a
                href="https://drive.google.com/file/d/1dF6-6n0dVim_l1VNU6oc-fKeLXGvYOmx/view?usp=drive_link"
                download="ShekhZaib_Resume.pdf"
                className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          {/* Right-hand side */}
          <div className="md:w-1/2 animate-right">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="space-y-4">
              {[
                { skill: 'Python', level: 90 },
                { skill: 'Machine Learning', level: 65 },
                { skill: 'Data Analysis', level: 75 },
                { skill: 'Data Scraping', level: 85 },
                { skill: 'Numpy, Pandas, Matplotlib, Seaborn', level: 90 },
                { skill: 'Power BI, MS Excel', level: 70 },
                { skill: 'JavaScript', level: 85 },
                { skill: 'React.js', level: 80 },
                { skill: 'Node.js', level: 60 },
                { skill: 'MySQL, PostgreSQL', level: 75 },
                { skill: 'Google Cloud', level: 50 },
              ].map(({ skill, level }) => (
                <div key={skill}>
                  <div className="flex justify-between mb-1">
                    <span className="text-lg font-medium">{skill}</span>
                    <span className="text-lg font-medium">{level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Render the modal if modalOpen is true */}
      {modalOpen && <ResumeModal closeModal={closeModal} />}

    </section>
  );
};

export default AboutSection;
