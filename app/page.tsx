"use client";

import { AnimatePresence, motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-screen flex-col items-center justify-between"
      >
        <Hero />
        <About />
        <Projects />
      </motion.main>
    </AnimatePresence>
  );
}
