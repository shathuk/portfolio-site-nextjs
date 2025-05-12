"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 to-black text-white">
      
      {/* Floating Avatar */}
      <motion.img
        src="/avatar.png"
        alt="Profile"
        className="w-32 h-32 rounded-full mb-6 border-4 border-indigo-500 shadow-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold"
      >
        Hey, I'm <span className="text-indigo-400">SHATHU</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-4 text-lg md:text-xl max-w-xl text-gray-300"
      >
        A creative Full-Stack Developer crafting beautiful and functional websites.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6"
      > <a
  href="https://drive.google.com/file/d/1dkzoyPkA4f54ZhfYK1z1NoA82bZ3zU9t/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
        <button id="projects" className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium">
          View Resume
        </button> </a>
      </motion.div>
    </section>
  );
}
