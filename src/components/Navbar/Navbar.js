"use client";
import React from "react";
import { motion } from "framer-motion";
import NavItem from "../Animations/NavItem";
import { Link } from "react-scroll";
const Navbar = () => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
  };
  return (
    <motion.div
      id="nav"
      initial="hidden"
      animate="enter"
      variants={variants}
      transition={{ type: "linear", delay: 0.1, duration: 1 }}
      className=" h-24 text-white flex items-center justify-around gap-48 w-screen max-w-full"
    >
      <h1 className="text-white font-sans text-base tbPortrait:text-lg tbMed:text-xl tbLandscape:text-2xl font-medium">
        Hi. I am Anjali
      </h1>
      <div className="flex items-center justify-between gap-16 text-xs laptop:text-sm tbPortrait:text-sm tbMed:text-base tbLandscape:text-lg">
        <Link to="desc" spy={true} smooth={true} duration={700}>
          <NavItem text="Objectives" />
        </Link>
        <Link
          to="projects"
          spy={true}
          offset={-50}
          smooth={true}
          duration={700}
        >
          <NavItem text="Projects" />
        </Link>
        <a href="/Resume.pdf" target="_blank">
          <NavItem text="Resume" />
        </a>

        <Link to="contact" spy={true} smooth={true} duration={900}>
          <NavItem text="Contact" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
