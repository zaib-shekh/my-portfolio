import { useState } from "react";
import { motion } from "framer-motion";
import EducationData from "./EducationData";
import EducationModal from "./EducationModal";

const Education = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState(null);

  const openModal = (certificationLink) => {
    setSelectedCertification(certificationLink);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCertification(null);
  };

  return (
    <section id="education">
      <div className="relative bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-20 overflow-hidden">
        {/* background gradient blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4">
          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-16 text-center
              bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500
              text-transparent bg-clip-text drop-shadow-lg"
          >
            Education
          </motion.h2>

          {/* education cards */}
          <div className="flex flex-wrap justify-center gap-12">
            {EducationData.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative w-72 flex flex-col justify-between rounded-2xl 
                bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg 
                border border-purple-500/30 shadow-lg shadow-purple-500/20 
                overflow-hidden"
              >
                {/* logo section */}
                <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-6">
                  <img
                    src={education.logo}
                    alt={`${education.institution} logo`}
                    className="w-16 h-16 rounded-full border-2 border-purple-400 shadow-md"
                  />
                </div>

                {/* content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-2">{education.degree}</h3>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    {education.institution}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {education.dateRange}
                  </p>
                </div>

                {/* button */}
                <div className="px-4 pb-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openModal(education.certificationLink)}
                    className="relative w-full py-2 px-4 rounded-lg font-semibold 
                      border border-blue-500 text-blue-500 
                      overflow-hidden group transition-all duration-300"
                  >
                    <span className="relative z-10 group-hover:text-white">
                      View Certification
                    </span>
                    <span className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 
                      origin-left transition-transform duration-300 ease-out rounded-lg"></span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {modalOpen && (
          <EducationModal
            closeModal={closeModal}
            certificationLink={selectedCertification}
            darkMode={document.documentElement.classList.contains("dark")}
          />
        )}
      </div>
    </section>
  );
};

export default Education;
