import react from '../assets/react.svg';
import next from '../assets/nextjs.svg';
import js from '../assets/javascript.svg';
import html from '../assets/html.svg';
import css from '../assets/CSS.svg';
import node from '../assets/nodejs.svg';
import tailwind from '../assets/tailwind.svg';
import bootstrap from '../assets/bootstrap.svg';
import postgresql from '../assets/postgresql.svg';
import mysql from '../assets/mysql.svg';
import gcp from '../assets/gcp.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import firebase from '../assets/firebase.svg';
import python from '../assets/python.svg';
import cpp from '../assets/cpp.svg';
import tensorflow from '../assets/tensorflow.svg';
import keras from '../assets/keras.svg';
import pandas from '../assets/pandas.svg';
import numpy from '../assets/numpy.svg';
import pytorch from '../assets/pytorch.svg';
import vscode from '../assets/vscode.svg';
import jupyter from '../assets/jupyter.svg';
import colab from '../assets/colab.svg';
import netlify from '../assets/netlify.svg';
import vite from '../assets/vitejs.svg';
import matplotlib from '../assets/matplotlib.svg';
import seaborn from '../assets/seaborn.svg';
import scikit from '../assets/scikit.svg';
import google from '../assets/google.svg';
import langchain from '../assets/langchain.svg';
import chatgpt from '../assets/chatgpt.svg';
import nlp from '../assets/nlp.svg';



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
  'C++': cpp, 
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
  return (
    <section id="skills">
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl m-auto p-4 pt-8 sm:pt-20 px-2 text-center" id="skills">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

        <div className="py-6 pt-10 grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {/* Skill Category Component */}
          {[
            {
              title: "Frontend",
              skills: ["ReactJS", "NextJS", "JavaScript", "HTML", "CSS", "Tailwind", "Bootstrap",],
            },
            {
              title: "Backend",
              skills: ["NodeJS", "Python", "C++", "MySQL", "PostgreSQL", "Firebase"],
            },
            {
              title: "DevOps",
              skills: ["GCP", "Git", "GitHub",],
            },
            {
              title: "Machine Learning",
              skills: ["TensorFlow", "Keras", "Scikit-Learn", "Pandas", "Numpy", "Matplotlib", "Seaborn",]
            },
            {
              title: "Deep Learning",
              skills:["PyTorch", "NLP", "LangChain", "Transformers", "BERT"]
            },
            {
              title: "Tools",
              skills: ["VSCode", "Jupyter", "Colab", "Netlify","Vite", "ChatGPT", ]
            }
          ].map((category, index) => (
            <div
              key={index}
              className="border border-blue-900 bg-white dark:bg-slate-900 p-4 rounded hover:bg-gray-100 dark:hover:bg-slate-800 relative shadow-lg shadow-slate-500/50"
              title={category.title}
            >
              <b className="text-white text-sm bg-blue-500 py-1 px-2 rounded absolute left-3 -top-2 hover:bg-blue-400 hover:text-white">
                {category.title}
              </b>
              <div className="flex flex-wrap md:space-x-4 md:space-y-4 place-content-center">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="mt-4 ml-2 border border-cyan-100 p-2 sm:w-auto rounded-lg relative flex items-center shadow-lg shadow-slate-500/50 hover:bg-gray-200 dark:hover:bg-slate-900"
                  >
                    {skillIcons[skill] && (
                      <img src={skillIcons[skill]} alt={skill} className="w-6 h-6 mr-2" />
                    )}
                    <span className="ml-2 text-black dark:text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}