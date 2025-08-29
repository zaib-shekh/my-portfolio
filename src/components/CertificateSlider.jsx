import { useEffect, useState } from 'react';
import cnpython from '../assets/cnpython.jpg';
import dataanalysis from '../assets/dataanalysis.jpg';
import dataanalysis1 from '../assets/dataanalysis1.jpg';
import dataanalysis2 from '../assets/dataanalysis2.jpg';
import gcp from '../assets/GCP certificate.jpg';
import incubation from '../assets/incubation.jpg';
import javac from '../assets/java certificate.png';
import javafull from '../assets/javafull.jpg';
import postgreSQL from '../assets/postgreSQL.jpg';
import pythonds from '../assets/Pythonds.jpg';
import pythongl from '../assets/pythonGL.jpg';
import pythonml from '../assets/pythonml.jpg';
import pythonskillup from '../assets/pythonskillup.jpg';
import ai1 from '../assets/AI1.jpg';
import ai2 from '../assets/AI2.jpg';
import ociAi from '../assets/ociAi.jpg'
import { motion, useMotionValue } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const certificates = [
  { image: cnpython, title: 'Python for Networking' },
  { image: dataanalysis, title: 'Data Analysis' },
  { image: dataanalysis1, title: 'Advanced Data Analysis' },
  { image: ociAi, title: 'Oracle Cloud AI' },
  { image: dataanalysis2, title: 'Data Analysis with Python' },
  { image: gcp, title: 'Google Cloud Platform' },
  { image: incubation, title: 'Incubation Program' },
  { image: javac, title: 'Java Programming' },
  { image: javafull, title: 'Full-Stack Java' },
  { image: postgreSQL, title: 'PostgreSQL' },
  { image: pythonds, title: 'Python Data Structures' },
  { image: pythonml, title: 'Python for Machine Learning' },
  { image: pythongl, title: 'Python Great Learning' },
  { image: pythonskillup, title: 'Python SkillUp' },
  { image: ai1, title: 'AI Foundations' },
  { image: ai2, title: 'Advanced AI' }
  // Add more certificates as needed
];

const DRAG_BUFFER = 50;
const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds

/**
 * A 3D cover flow style carousel for showcasing certificates.
 * Built with Framer Motion and Tailwind CSS.
 */
const CertificateSlider = () => {
    const [activeIndex, setActiveIndex] = useState(Math.floor(certificates.length / 2));
    const [isDragging, setIsDragging] = useState(false);
    const dragX = useMotionValue(0);

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDragging) {
                // Go to the next slide, wrapping around
                setActiveIndex((prev) => (prev + 1) % certificates.length);
            }
        }, AUTO_SLIDE_INTERVAL);
        return () => clearInterval(interval);
    }, [isDragging]);

    const onDragStart = () => {
        setIsDragging(true);
    };

    const onDragEnd = () => {
        setIsDragging(false);
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && activeIndex < certificates.length - 1) {
            setActiveIndex((prev) => prev + 1);
        } else if (x >= DRAG_BUFFER && activeIndex > 0) {
            setActiveIndex((prev) => prev - 1);
        }
    };

    const handleNavClick = (direction) => {
        if (direction === 'next' && activeIndex < certificates.length - 1) {
            setActiveIndex(activeIndex + 1);
        } else if (direction === 'prev' && activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    return (
        <section id="certifications" className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden font-sans">
            <div className="w-full max-w-5xl flex flex-col items-center">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
                    My Certifications & Achievements
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl">
                    A collection of my professional certifications. Drag, swipe, or use the arrows to navigate.
                </p>

                {/* Carousel Container */}
                <div className="relative w-full h-[400px] md:h-[500px]" style={{ perspective: '1200px' }}>
                    <motion.div
                        className="absolute w-full h-full cursor-grab"
                        style={{ x: dragX, transformStyle: 'preserve-3d' }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                    >
                        {certificates.map((cert, index) => {
                            const offset = index - activeIndex;
                            const isVisible = Math.abs(offset) <= 2; // Only render a few slides for performance

                            return isVisible ? (
                                <motion.div
                                    key={index}
                                    className="absolute w-4/5 md:w-3/5 h-full top-0 left-0 right-0 mx-auto rounded-xl overflow-hidden shadow-2xl"
                                    style={{
                                        transformOrigin: 'center center',
                                        backfaceVisibility: 'hidden',
                                    }}
                                    animate={{
                                        scale: offset === 0 ? 1 : 0.85,
                                        x: `${offset * 35}%`, // Spacing between cards
                                        rotateY: offset * -25, // 3D rotation
                                        z: -Math.abs(offset) * 150, // Depth
                                        opacity: Math.abs(offset) > 1 ? 0 : 1,
                                        zIndex: certificates.length - Math.abs(offset),
                                    }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                >
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover pointer-events-none"
                                    />
                                </motion.div>
                            ) : null;
                        })}
                    </motion.div>
                </div>

                {/* Navigation and Title */}
                <div className="mt-12 flex items-center justify-between w-full max-w-lg">
                    <button
                        onClick={() => handleNavClick('prev')}
                        disabled={activeIndex === 0}
                        className="p-3 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <IoIosArrowBack className="h-6 w-6" />
                    </button>
                    <h3 className="text-xl md:text-2xl font-semibold text-center text-cyan-600 dark:text-cyan-400 w-full px-4">
                        {certificates[activeIndex].title}
                    </h3>
                    <button
                        onClick={() => handleNavClick('next')}
                        disabled={activeIndex === certificates.length - 1}
                        className="p-3 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <IoIosArrowForward className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CertificateSlider;