"use client";
import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  const variants = {
    hidden: { opacity: 0, y: -100, scale: 1.2 },
    enter: { opacity: 1, y: 0, scale: 1 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      variants={variants}
      transition={{ type: "linear", delay: 0.1, duration: 1 }}
      className=" h-24 text-white flex items-center justify-around gap-48 w-screen max-w-full"
    >
      <h1 className="text-white font-sans text-base tbPortrait:text-lg tbMed:text-xl tbLandscape:text-2xl font-medium">
        Hi. I am Anjali
      </h1>
      <div className="flex items-center justify-between gap-16 text-xs laptop:text-sm tbPortrait:text-base tbMed:text-lg tbLandscape:text-xl">
        <h3>Objectives</h3>
        <h3>Projects</h3>
        <h3>Skills</h3>
        <h3>Contact</h3>
      </div>
    </motion.div>
  );
};

export default Navbar;
