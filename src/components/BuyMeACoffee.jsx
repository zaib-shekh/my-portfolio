import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const BuyMeACoffee = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_b1nxb79', 'template_t1zu0fc', e.target, 'ziqnqfhJpUlEDLlJk')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message.');
      });
  };

  return (
    <section id='contact'>
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-50 font-[sans-serif] lg:h-screen">
      <div className="grid lg:grid-cols-3 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
        <div className="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">Get In Touch</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Have a specific inquiry or looking to explore more about me.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] dark:bg-gray-700 text-sm outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] dark:bg-gray-700 text-sm outline-none"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] dark:bg-gray-700 text-sm outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md px-6 bg-[#f0f1f2] dark:bg-gray-700 text-sm pt-3 outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition duration-300 mt-4 w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="z-10 relative lg:col-span-2">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
                <a href="#experience" className="text-base leading-6 text-gray-500 dark:hover:text-gray-200 hover:text-gray-900">
                    Experience
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#skills" className="text-base leading-6 text-gray-500 dark:hover:text-gray-200 hover:text-gray-900">
                    Skills
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#education" className="text-base leading-6 text-gray-500 dark:hover:text-gray-200 hover:text-gray-900">
                    Education
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#projects" className="text-base leading-6 text-gray-500 dark:hover:text-gray-200 hover:text-gray-900">
                    Projects
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#certifications" className="text-base leading-6 text-gray-500 dark:hover:text-gray-200 hover:text-gray-900">
                  Certifications
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#contact" className="text-base leading-6 text-gray-500 dark:hover:text-gray-200 hover:text-gray-900">
                    Contact
                </a>
            </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
      <a href="mailto:zaib.shekh313@gmail.com" className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
        <FiMail className="w-6 h-6"/>
      </a>
      <a href="https://github.com/zaib-shekh" className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
        <FiGithub className="w-6 h-6"/>
      </a>
      <a href="https://www.instagram.com/nature_tales_oo/" className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
        <FiInstagram className="w-6 h-6" />
      </a>
      <a href="https://www.linkedin.com/in/shekh-zaib" className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
        <FiLinkedin className="w-6 h-6" />
      </a>
    </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2025 Shekh Zaib. All rights reserved.
        </p>
    </div>

        </div>
      </div>
    </div>
    </section>
  );
};

export default BuyMeACoffee;
