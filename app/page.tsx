import { Github, Linkedin, Mail } from "lucide-react";

import React from "react";

export default function Home() {
  return (
    <div>
      <section
        id="hero-section"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-4 "
      >
        {/* Hero-section */}
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-900">
          Hi, I am Shumaila Riaz
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Full Stack Developer || Next.js{" "}
        </p>

        {/* Social-links */}
        <div className="flex gap-6 justify-center mb-6">
          <a
            className="text-gray-800 hover:text-black transition cursor-pointer"
            href="https://github.com/shumaila1421"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/shumaila-riaz-56ab30354/"
            className="text-blue-700 hover:text-blue-800 transition cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shumailariaz215@gmail.com&su=Portfolio Inquiry"
            className="text-red-500 hover:text-red-600 transition cursor-pointer"
            target="blank"
            rel="noreferrer"
          >
            <Mail size={28} />
          </a>
        </div>
        <a
          href="/Shumaila_Resume.pdf"
          download
          className="inline-flex items-center gap-2 mt-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md hover:scale-105"
        >
          Download Resume
        </a>
      </section>

      {/* About */}

      <section id="about" className="y-20 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900"> About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I build web applications that are not just functional, but
            thoughtfully crafted. As a Full Stack Developer working with the
            MERN stack and Next.js, I focus on writing clean code, designing
            smooth user experiences, and turning ideas into scalable digital
            products.
          </p>
        </div>
      </section>
    </div>
  );
}
