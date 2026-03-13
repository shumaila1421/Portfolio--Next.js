"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© {new Date().getFullYear()} Shumaila Riaz. All rights reserved.</p>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <span className="text-gray-400">shumailariaz215@gmail.com</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/shumaila1421"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shumaila-riaz-56ab30354/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
