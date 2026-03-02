"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-blue-50 via-white to-purple-50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <p className="text-gray-700 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Shumaila Riaz. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl md:text-xl">
          <a
            href="https://github.com/shumaila1421"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black hover:scale-110 transition-all duration-300"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/shumaila-riaz-56ab30354/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 hover:text-blue-800 hover:scale-110 transition-all duration-300"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:shumailariaz215@gmail.com"
            className="text-red-500 hover:text-red-600 hover:scale-110 transition-all duration-300"
          >
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}
