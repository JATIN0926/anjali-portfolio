"use client";
import React from "react";
import { motion } from "framer-motion";
const Description = () => {
  return (
    <div className="h-screen w-full p-20 px-16 flex items-end justify-start gap-4">
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ ease: "easeOut", duration: 1.2 }}
        className="w-14 h-[80%] bg-white"
      ></motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ ease: "easeOut", duration: 1.2 }}
        className=" font-sans text-white w-[40%] text-lg"
      >
        <p className=" tbMed:text-xl">
          My objective is to elevate your project above passing trends. While
          minimalism may dominate today and brutalism tomorrow, what really
          counts is giving your project a lasting impact and making it
          appealing.
        </p>
      </motion.div>
    </div>
  );
};

export default Description;
