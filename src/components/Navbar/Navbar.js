"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";
import FlipLink from "../Animations/FlipLink";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const colorVariants = {
    animate: {
      color: ["#ffffff", "#D72365", "#8D47E7", "#2C6DD3", "#6BCDEC"],
      opacity: [1, 0.7, 0.7, 0.7, 0.7, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
  };

  return (
    <div className="relative">
      <Image
        src="/hero_hover_bg.svg"
        alt="img"
        width={20}
        height={20}
        className={`h-[200vh] transition-all w-[100vw] -z-10 absolute duration-300 top-0 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`rotate-12 absolute left-[5%] top-[30%] ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-50"
        } transition-all duration-300`}
      >
        <Image src="/dp_7.svg" alt="img" height={130} width={130} />
      </div>
      <button
        className={`rounded px-5 transition-all duration-300 -rotate-[10deg] absolute top-[200%] left-[5%] bg-white p-2 border-4 border-[#EAAA9E] ${
          isHovered ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <p className="text-xl font-bold font-Comic-Sans">👋 Hi. I am Anjali</p>
      </button>
      <motion.div
        id="nav"
        initial="hidden"
        animate="enter"
        variants={variants}
        transition={{ type: "linear", delay: 0.1, duration: 1 }}
        className="h-24 text-white flex items-center justify-between px-16 w-screen max-w-full"
      >
        <div
          className={`cursor-pointer z-40 flex items-center justify-center gap-3 font-sans text-base tbPortrait:text-lg tbMed:text-xl tbLandscape:text-2xl font-medium ${
            isHovered ? "opacity-0" : "opacity-100"
          } transition-all duration-300`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src="/dp_7.svg" alt="img" height={30} width={30} />
          <motion.span
            initial="initial"
            animate="animate"
            variants={colorVariants}
          >
            Hover me
          </motion.span>
        </div>
        <div className="flex items-center justify-between gap-16 text-xs laptop:text-sm tbPortrait:text-sm tbMed:text-base tbLandscape:text-lg">
          <Link to="desc" spy={true} smooth={true} duration={700}>
            <FlipLink>Objectives</FlipLink>
          </Link>
          <Link
            to="projects"
            spy={true}
            offset={-50}
            smooth={true}
            duration={700}
          >
            <FlipLink>Projects</FlipLink>
          </Link>
          <Link to="process" spy={true} smooth={true} duration={900}>
            <FlipLink>Process</FlipLink>
          </Link>
          <a href="/Resume.pdf" target="_blank">
            <FlipLink>Resume</FlipLink>
          </a>
          <a href="mailto:Anjali.productdesign@gmail.com">
            <FlipLink>Contact</FlipLink>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
