"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

import React from "react";

export default function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <section
          id="hero-section"
          className="min-h-screen flex flex-col items-center justify-center text-center   bg-linear-to-br from-blue-50 via-white to-purple-50 px-4 "
        >
          {/* Hero-section */}
          <h1
            className="text-5xl sm:text-6xl font-extrabold mb-4 bg-linear-to-r from-blue-600 to-purple-600 
                bg-clip-text text-transparent"
          >
            Hi, I am Shumaila Riaz
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Full Stack Developer || Next.js
          </p>
          <p className="text-gray-500 mb-6">
            I design and develop modern web applications with performance and
            user experience in mind.
          </p>

          {/* Social-links */}
          <div className="flex gap-6 justify-center mb-6">
            <a
              className="text-gray-800 hover:text-black hover:scale-110 transition-all duration-300 cursor-pointer"
              href="https://github.com/shumaila1421"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/shumaila-riaz-56ab30354/"
              className="text-blue-700 hover:text-blue-800 hover:scale-110 transition-all duration-300 cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shumailariaz215@gmail.com&su=Portfolio Inquiry"
              className="text-red-500 hover:text-red-600 hover:scale-110 transition-all duration-300 cursor-pointer"
              target="blank"
              rel="noreferrer"
            >
              <Mail size={28} />
            </a>
          </div>
          <a
            href="/Shumaila_Resume.pdf"
            download
            className="inline-flex items-center gap-2 mt-2 bg-linear-to-r from-blue-600 to-purple-600 
            text-white px-6 py-3 rounded-lg font-medium 
              hover:scale-105 hover:shadow-xl 
              transition-all duration-300"
          >
            Download Resume
          </a>
        </section>
      </motion.div>

      {/* About */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="about"
        className="py-20 bg-white px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900"> About Me</h2>
          <div
            className="h-1 w-20 mx-auto bg-linear-to-r 
              from-blue-500 to-purple-500 rounded-full my-4"
          ></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            I build web applications that are not just functional, but
            thoughtfully crafted. As a Full Stack Developer working with the
            MERN stack and Next.js, I focus on writing clean code, designing
            smooth user experiences, and turning ideas into scalable digital
            products.
          </p>
        </div>
      </motion.section>
      {/* Skills */}

      <section id="skills" className="py-20 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Skills</h2>
          <div
            className="h-1 w-20 mx-auto bg-linear-to-r 
            from-blue-500 to-purple-500 rounded-full my-4"
          ></div>
          {/* Skills Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "MongoDB",
              "Tailwind CSS",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white shadow-md rounded-xl py-6 hover:shadow-xl hover:-translate-y-2 
                  transition-all duration-300 cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
