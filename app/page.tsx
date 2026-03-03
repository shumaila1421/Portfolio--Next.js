"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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
          className="min-h-screen flex flex-col items-center justify-center text-center bg-linear-to-br from-blue-50 via-white to-purple-50 px-4 "
        >
          {/* Hero-section */}
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
            <span className="text-gray-900">I am </span>
            <span
              className="bg-linear-to-r from-blue-600 to-purple-600 
                  bg-clip-text text-transparent"
            >
              <Typewriter
                words={[
                  "Shumaila Riaz",
                  "a Full Stack Developer",
                  "a Next.js Developer",
                  "a MERN Stack Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>
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
              target="_blank"
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
        className="py-24 px-6 bg-linear-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900"> About Me</h2>
          <div
            className="h-1 w-25 mx-auto bg-linear-to-r 
              from-blue-500 to-purple-500 rounded-full my-5"
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

      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-linear-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Skills</h2>
          <div className="h-1 w-20 mx-auto bg-linear-to-r from-blue-500 to-purple-500 rounded-full mb-12"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { name: "HTML", icon: "🌐" },
              { name: "CSS", icon: "🎨" },
              { name: "JavaScript", icon: "⚡" },
              { name: "React", icon: "⚛️" },
              { name: "Next.js", icon: "▲" },
              { name: "Node.js", icon: "🟢" },
              { name: "MongoDB", icon: "🍃" },
              { name: "Tailwind CSS", icon: "💨" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-md rounded-xl py-6 px-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <div className="font-medium text-gray-800">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-linear-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <div className="h-1 w-20 mx-auto bg-linear-to-r from-blue-500 to-purple-500 rounded-full mt-2 mb-10"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              className="bg-white shadow-md rounded-xl p-6 text-left hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Sales Inventory Management System
              </h3>
              <p className="text-gray-700 mb-2">
                Team-based full-stack application built with Next.js, Node.js,
                Express, and MongoDB. Features authentication, role-based
                access, and real-time inventory management.
              </p>
              <span className="text-gray-500 text-sm">
                Tech: Next.js, Node.js, Express, MongoDB, Axios, Authentication,
                Role-based Authorization
              </span>
              <div className="mt-2 text-sm text-blue-600">
                Frontend:{" "}
                <a
                  href="https://github.com/beingharisali/full-stack-sims-next"
                  target="_blank"
                  className="underline"
                >
                  Next.js Repo
                </a>{" "}
                | Backend:{" "}
                <a
                  href="https://github.com/beingharisali/full-stack-sims-node"
                  target="_blank"
                  className="underline"
                >
                  Node.js Repo
                </a>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="bg-white shadow-md rounded-xl p-6 text-left hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Grocery Store Management System
              </h3>
              <p className="text-gray-700 mb-2">
                Ongoing team project using Next.js, Tailwind CSS, Node.js, and
                MongoDB. Includes authentication, role-based authorization, and
                store management features.
              </p>
              <span className="text-gray-500 text-sm">
                Tech: Next.js, Tailwind CSS, Node.js, MongoDB, Authentication,
                Role-based Authorization
              </span>
              <div className="mt-2 text-sm text-blue-600">
                Frontend:{" "}
                <a
                  href="https://github.com/shahzaib-dev79/grocery-store-management-system-next"
                  target="_blank"
                  className="underline"
                >
                  Next.js Repository
                </a>{" "}
                | Backend:{" "}
                <a
                  href="https://github.com/shahzaib-dev79/grocery-store-management-system-node"
                  target="_blank"
                  className="underline"
                >
                  Node.js Repository
                </a>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              className="bg-white shadow-md rounded-xl p-6 text-left hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Calculator
              </h3>
              <p className="text-gray-700 mb-2">
                A basic calculator built using HTML, CSS, and JavaScript.
                Implements arithmetic operations with responsive design.
              </p>
              <span className="text-gray-500 text-sm">
                Tech: HTML, CSS, JavaScript
              </span>
              <div className="mt-2 text-sm text-blue-600">
                GitHub:{" "}
                <a
                  href="https://github.com/shumaila1421/Calculator"
                  target="_blank"
                  className="underline"
                >
                  Repo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-linear-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
          <div className="h-1 w-24 mx-auto bg-linear-to-r from-blue-500 to-purple-500 rounded-full mb-5 mt-2"></div>

          <p className="text-gray-700 text-lg mb-6">
            Feel free to reach out for collaborations, projects, or just to say
            hi!
          </p>

          {/* Social / Email Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/shumaila1421"
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 hover:text-black hover:scale-110 transition-all duration-300"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/shumaila-riaz-56ab30354/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:text-blue-800 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:shumailariaz215@gmail.com"
              className="text-red-500 hover:text-red-600 hover:scale-110 transition-all duration-300"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Optional Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! I'll get back to you soon");
            }}
            className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
