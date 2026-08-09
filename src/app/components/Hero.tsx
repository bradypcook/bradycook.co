"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8"
    >
      <div className="max-w-6xl w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#ef8450] font-semibold mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-7xl font-bold"
        >
          Brady Cook
        </motion.h1>

        <motion.h2
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: .1 }}
          className="text-4xl text-zinc-400 mt-4"
        >
          Aspiring Cybersecurity Professional
        </motion.h2>

        <p className="mt-8 max-w-2xl text-lg text-zinc-500">
          Virginia Tech Cybersecurity Management &
          Analytics student building secure
          infrastructure, modern web applications,
          and data-driven systems.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-lg bg-[#ef8450]"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/bradypcook"
            className="px-6 py-3 rounded-lg border border-zinc-700"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}