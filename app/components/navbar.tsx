"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full  bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#hero-section" scroll>
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-800 hover:scale-105 transition-transform duration-100 cursor-pointer ">
            Shumaila <span className="text-blue-600">.</span>
          </h1>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        {/* Mobile Icon*/}

        <div className="md:hidden cursor-pointer">
          {isOpen ? (
            <X size={28} onClick={() => setIsOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium"
        >
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </motion.div>
      )}
    </nav>
  );
}
