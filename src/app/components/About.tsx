"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-900 text-white"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-4"
      >
        About Me
      </motion.h2>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl text-gray-300 text-lg mb-8"
      >
        I’m a passionate full-stack developer with experience building modern web apps. building responsive, high-performance web applications with clean architecture and scalable components. My focus is on delivering optimized user experiences through efficient code, thoughtful UI design, and seamless integration across the frontend and backend.
      </motion.p>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {["Next.js", "React", "ReactNative", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript", "PHP", "Laravel","MySQL", "PostgreSQL"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-indigo-600 rounded-full text-white text-sm font-medium hover:bg-indigo-500 transition"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
