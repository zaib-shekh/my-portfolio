import { motion } from "framer-motion";
import react from "../assets/react.svg";
import next from "../assets/nextjs.svg";
import js from "../assets/javascript.svg";
import html from "../assets/html.svg";
import css from "../assets/CSS.svg";
import node from "../assets/nodejs.svg";
import tailwind from "../assets/tailwind.svg";
import bootstrap from "../assets/bootstrap.svg";
import postgresql from "../assets/postgresql.svg";
import mysql from "../assets/mysql.svg";
import gcp from "../assets/gcp.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import firebase from "../assets/firebase.svg";
import python from "../assets/python.svg";
import cpp from "../assets/cpp.svg";
import tensorflow from "../assets/tensorflow.svg";
import keras from "../assets/keras.svg";
import pandas from "../assets/pandas.svg";
import numpy from "../assets/numpy.svg";
import pytorch from "../assets/pytorch.svg";
import vscode from "../assets/vscode.svg";
import jupyter from "../assets/jupyter.svg";
import colab from "../assets/colab.svg";
import netlify from "../assets/netlify.svg";
import vite from "../assets/vitejs.svg";
import matplotlib from "../assets/matplotlib.svg";
import seaborn from "../assets/seaborn.svg";
import scikit from "../assets/scikit.svg";
import google from "../assets/google.svg";
import langchain from "../assets/langchain.svg";
import chatgpt from "../assets/chatgpt.svg";
import nlp from "../assets/nlp.svg";

const skillIcons = {
  ReactJS: react,
  NextJS: next,
  JavaScript: js,
  HTML: html,
  CSS: css,
  NodeJS: node,
  Git: git,
  GitHub: github,
  GCP: gcp,
  Firebase: firebase,
  Tailwind: tailwind,
  Bootstrap: bootstrap,
  PostgreSQL: postgresql,
  MySQL: mysql,
  Python: python,
  "C++": cpp,
  TensorFlow: tensorflow,
  Keras: keras,
  Pandas: pandas,
  Numpy: numpy,
  PyTorch: pytorch,
  VSCode: vscode,
  Jupyter: jupyter,
  Colab: colab,
  Netlify: netlify,
  Vite: vite,
  Matplotlib: matplotlib,
  Seaborn: seaborn,
  "Scikit-Learn": scikit,
  BERT: google,
  Transformers: google,
  LangChain: langchain,
  NLP: nlp,
  ChatGPT: chatgpt,
};

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: ["ReactJS", "NextJS", "JavaScript", "HTML", "CSS", "Tailwind", "Bootstrap"],
    },
    {
      title: "Backend",
      skills: ["NodeJS", "Python", "C++", "MySQL", "PostgreSQL", "Firebase"],
    },
    {
      title: "DevOps",
      skills: ["GCP", "Git", "GitHub"],
    },
    {
      title: "Machine Learning",
      skills: ["TensorFlow", "Keras", "Scikit-Learn", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    },
    {
      title: "Deep Learning",
      skills: ["PyTorch", "NLP", "LangChain", "Transformers", "BERT"],
    },
    {
      title: "Tools",
      skills: ["VSCode", "Jupyter", "Colab", "Netlify", "Vite", "ChatGPT"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-20 overflow-hidden"
    >
      {/* floating gradient blobs for funkiness */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-bounce"></div>
      </div>

      <div className="max-w-6xl m-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-16 
          bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 
          text-transparent bg-clip-text drop-shadow-lg"
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative border border-pink-500/40 
              bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg 
              rounded-2xl shadow-xl shadow-pink-500/20 p-6"
            >
              {/* Category title badge */}
              <span className="absolute -top-3 left-4 px-3 py-1 text-sm font-semibold rounded-full 
                bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 
                text-white shadow-md">
                {category.title}
              </span>

              {/* Skill list */}
              <div className="flex flex-wrap justify-center mt-4 gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="flex items-center px-3 py-2 border border-gray-200 dark:border-gray-700 
                    rounded-lg shadow-md bg-gray-50 dark:bg-gray-900/70 
                    hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    {skillIcons[skill] && (
                      <img
                        src={skillIcons[skill]}
                        alt={skill}
                        className="w-6 h-6 mr-2"
                      />
                    )}
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
