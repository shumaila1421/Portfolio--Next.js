import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <div>
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-4 ">
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
      </section>
    </div>
  );
}
