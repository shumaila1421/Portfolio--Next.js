"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const roles = [
  "Shumaila Riaz",
  "a Full Stack Developer",
  "a Next.js Developer",
  "a MERN Stack Developer",
];

const socialLinks = [
  {
    icon: Github,
    link: "https://github.com/shumaila1421",
    style: "text-gray-800 hover:text-black",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/shumaila-riaz-56ab30354/",
    style: "text-blue-700 hover:text-blue-800",
  },
  {
    icon: Mail,
    link: "mailto:shumailariaz215@gmail.com",
    style: "text-red-500 hover:text-red-600",
  },
];

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Tailwind CSS", icon: "💨" },
];

const projects = [
  {
    title: "Sales Inventory Management System",
    description:
      "Full stack inventory management system with authentication and role based access control.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB"],
    frontend: "https://github.com/beingharisali/full-stack-sims-next",
    backend: "https://github.com/beingharisali/full-stack-sims-node",
  },
  {
    title: "Grocery Store Management System",
    description:
      "Team based grocery store management system with authentication and store operations.",
    tech: ["Next.js", "Tailwind", "Node.js", "MongoDB"],
    frontend:
      "https://github.com/shahzaib-dev79/grocery-store-management-system-next",
    backend:
      "https://github.com/shahzaib-dev79/grocery-store-management-system-node",
  },
  {
    title: "Calculator",
    description:
      "Simple responsive calculator implementing basic arithmetic operations.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/shumaila1421/Calculator",
  },
];

const education = [
  {
    year: "2024 – 2025",
    degree: "Full Stack Web Development (MERN Stack)",
    institute: "Ideoversity Training Institute, Arfa Tower Lahore",
    icon: "💻",
  },
  {
    year: "2022 – 2024",
    degree: "MPhil Zoology",
    institute: "Government College University, Lahore",
    icon: "🔬",
  },
  {
    year: "2018 – 2022",
    degree: "BS Zoology",
    institute: "Government College University, Lahore",
    icon: "🎓",
  },
];

export default function Home() {
  return (
    <div>
      <motion.section
        id="hero-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center text-center bg-linear-to-br from-blue-50 via-white to-purple-50 px-4"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
          <span className="text-gray-900">I am </span>

          <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            <Typewriter
              words={roles}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <p className="text-gray-500 mb-6 max-w-xl">
          I design and develop modern web applications with performance and user
          experience in mind.
        </p>

        <div className="flex gap-6 mb-6">
          {socialLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`${item.style} hover:scale-110 transition`}
              >
                <Icon size={28} />
              </a>
            );
          })}
        </div>

        <a
          href="/Shumaila_Resume.pdf"
          download
          className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 hover:shadow-xl transition"
        >
          Download Resume
        </a>
      </motion.section>

      <motion.section
        id="about"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-linear-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>

          <div className="h-1 w-24 mx-auto bg-linear-to-r from-blue-500 to-purple-500 rounded-full my-6"></div>

          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            I build web applications that are not just functional but carefully
            crafted. As a Full Stack Developer working with the MERN stack and
            Next.js, I focus on writing clean code, designing smooth user
            experiences, and building scalable digital products.
          </p>

          <h3 className="text-2xl font-bold mb-6">Education</h3>

          <div className="flex flex-col gap-4 text-left">
            {education.map((edu) => (
              <div
                key={edu.year}
                className="bg-white shadow-sm rounded-xl px-6 py-4 flex items-start gap-4 hover:shadow-md transition"
              >
                <span className="text-2xl">{edu.icon}</span>

                <div>
                  <p className="text-xs text-gray-400">{edu.year}</p>
                  <p className="text-gray-900 font-semibold">{edu.degree}</p>
                  <p className="text-gray-500 text-sm">{edu.institute}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-linear-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black text-gray-900">Skills</h2>

          <div className="h-1 w-20 mx-auto bg-linear-to-r from-blue-500 to-purple-500 rounded-full mb-12 mt-2"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-md rounded-xl py-6 px-4 hover:shadow-xl hover:-translate-y-2 transition"
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
        viewport={{ once: true }}
        className="py-24 px-6 bg-linear-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>

          <div className="h-1 w-20 mx-auto bg-linear-to-r from-blue-500 to-purple-500 rounded-full mt-2 mb-10"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -6 }}
                className="bg-white shadow-md rounded-xl p-6 text-left hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-600 text-sm mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-sm text-blue-600 flex gap-4">
                  {project.frontend && (
                    <a href={project.frontend} target="_blank">
                      Frontend
                    </a>
                  )}

                  {project.backend && (
                    <a href={project.backend} target="_blank">
                      Backend
                    </a>
                  )}

                  {project.repo && (
                    <a href={project.repo} target="_blank">
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-linear-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>

          <div className="h-1 w-24 mx-auto bg-linear-to-r from-blue-500 to-purple-500 rounded-full mt-2 mb-6"></div>

          <p className="text-gray-700 mb-8">
            Feel free to reach out for collaborations or projects.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!");
            }}
            className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 px-4 py-2 border rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 px-4 py-2 border rounded-lg"
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full mb-4 px-4 py-2 border rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
