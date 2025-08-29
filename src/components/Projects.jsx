import { motion } from "framer-motion";
import ProjectData from "./ProjectData";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects">
      <div className="relative bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-20 overflow-hidden">
        {/* floating gradient blobs in background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-bounce"></div>
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
            Projects
          </motion.h2>

          {/* projects grid */}
          <div className="flex flex-wrap justify-center gap-12">
            {ProjectData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="max-w-sm flex flex-col rounded-2xl overflow-hidden
                  bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg
                  border border-purple-500/20 shadow-xl shadow-purple-500/10
                  hover:shadow-purple-500/40 hover:shadow-2xl
                  transition-all duration-300"
              >
                {/* image with overlay */}
                <div className="relative">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img
                      className="rounded-t-2xl w-full h-48 object-cover"
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition duration-300 rounded-t-2xl flex items-end justify-center p-4">
                      <span className="text-white text-sm font-semibold">
                        View Project →
                      </span>
                    </div>
                  </a>
                </div>

                {/* card body */}
                <div className="p-6 flex-1 flex flex-col">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-purple-500 transition-colors">
                      {project.title}
                    </h5>
                  </a>
                  <p className="mb-4 font-normal text-gray-700 dark:text-gray-400 flex-1">
                    {project.description}
                  </p>

                  {/* tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-600 dark:to-blue-600 
                          rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-white shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* github button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold 
                      text-blue-500 border border-blue-500 rounded-lg overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                      <FaGithub /> View Code
                    </span>
                    <span className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out rounded-lg"></span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
