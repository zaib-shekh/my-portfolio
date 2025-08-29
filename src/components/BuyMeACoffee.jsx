import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const BuyMeACoffee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b1nxb79",
        "template_t1zu0fc",
        e.target,
        "ziqnqfhJpUlEDLlJk"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-gray-100 via-blue-100 to-purple-100 
                 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white flex items-center justify-center px-4 py-16"
    >
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
            Have a specific inquiry or want to collaborate? Drop me a message
            and I’ll get back to you!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start space-x-6 mt-6">
            <a
              href="mailto:zaib.shekh313@gmail.com"
              className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:scale-110 transition transform text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/zaib-shekh"
              className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:scale-110 transition transform text-gray-700 dark:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/nature_tales_oo/"
              className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:scale-110 transition transform text-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shekh-zaib"
              className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:scale-110 transition transform text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Right side - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-xl p-8 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-gray-700/60 border border-transparent 
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-gray-700/60 border border-transparent 
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-gray-700/60 border border-transparent 
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-gray-700/60 border border-transparent 
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 
                       hover:opacity-90 transition text-white shadow-md"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full text-center text-gray-500 dark:text-gray-400 text-sm">
        © 2025 Shekh Zaib. All rights reserved.
      </div>
    </section>
  );
};

export default BuyMeACoffee;
