"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const roles = [
  "Shumaila Riaz",
  "a Full Stack Developer",
  "a Next.js Developer",
  "a MERN Stack Developer",
];

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          I am{" "}
          <span className="text-green-400">
            <Typewriter
              words={roles}
              loop
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          I build modern web applications using the MERN stack and Next.js,
          focusing on clean code and good user experience.
        </p>

        <div className="flex justify-center gap-6 mb-6 text-white">
          <a
            href="https://github.com/shumaila1421"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="hover:text-green-400 transition text-white" />
          </a>

          <a
            href="https://www.linkedin.com/in/shumaila-riaz-56ab30354/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="hover:text-green-400 transition text-white" />
          </a>

          <Mail className="hover:text-green-400 transition" />
        </div>

        <a
          href="/Shumaila_Resume.pdf"
          download
          className="px-6 py-3 bg-green-500 text-black rounded-lg font-medium hover:bg-green-400 transition"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
