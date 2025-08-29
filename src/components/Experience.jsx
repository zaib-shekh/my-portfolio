import React from "react";
import { motion } from "framer-motion";
import ExperienceData from "./ExperienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-16 overflow-hidden 
      bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      {/* funky gradient background blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 
          bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 
          text-transparent bg-clip-text drop-shadow-lg"
        >
          Experience
        </motion.h2>

        {/* Timeline Line */}
        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600 rounded-full"
          />

          {/* Timeline items */}
          {ExperienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-12 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              {/* Date */}
              <div className="order-1 w-5/12 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md"
                >
                  {experience.dateRange}
                </motion.div>
              </div>

              {/* Circle logo */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="z-20 flex items-center justify-center order-1 
                bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 
                shadow-xl w-14 h-14 rounded-full overflow-hidden"
              >
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-10 h-10 object-contain"
                />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="order-1 w-5/12 bg-white dark:bg-gray-800 border 
                border-pink-500/40 p-6 rounded-2xl shadow-lg shadow-pink-500/30 
                backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {experience.role}
                </h3>
                <p className="text-sm font-medium text-pink-500 mb-3">
                  {experience.company}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
