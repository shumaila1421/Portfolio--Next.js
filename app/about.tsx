"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[80vh] flex flex-col justify-start items-center text-center pt-16 px-6 bg-gray-900 text-gray-100"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-semibold mb-6 text-green-400"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-gray-300 text-lg sm:text-xl leading-relaxed mb-8"
      >
        I am a passionate Full Stack Developer with hands-on experience building
        scalable web applications using Next.js, React, Node.js, and MongoDB. I
        enjoy transforming complex problems into efficient solutions and
        continuously learning modern web technologies. My goal is to deliver
        clean, maintainable code while creating smooth user experiences.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {[
          "Next.js",
          "React",
          "Node.js",
          "MongoDB",
          "Tailwind CSS",
          "Framer Motion",
        ].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-green-700 text-green-100 rounded-full text-sm sm:text-base font-medium
                 hover:bg-green-500 hover:text-gray-900 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
