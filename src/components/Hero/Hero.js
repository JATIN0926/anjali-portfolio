"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Scroll_down from "../Scroll_down/Scroll_down";
import "./style.css";
import { Link } from "react-scroll";
const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
  };
  const variants_btn = {
    hidden: { opacity: 0, y: 30 },
    enter: { opacity: 1, y: 0 },
  };
  // const variants_btn_2 = {
  //   hidden: { opacity: 0, y: -300 },
  //   enter: { opacity: 1, y: 0 },
  // };
  return (
    <div className="h-[85vh] flex items-center py-10 tbMed:py-10 tbMed:pt-20 tbLandscape:py-12 justify-around w-screen max-w-full text-white font-sans">
      <motion.div
        whileTap={{ scale: 0.1 }}
        className="basis-12 self-end pb-4"
        initial="hidden"
        animate="enter"
        variants={variants_btn}
        transition={{ type: "linear", delay: 0.1, duration: 1.5 }}
      >
        <Link
          to="projects"
          spy={true}
          offset={-40}
          smooth={true}
          duration={500}
        >
          <Scroll_down>
            <span className=" w-4 h-4 mbMedium:w-8 mbMedium:h-8 tbPortrait:w-8 tbPortrait:h-8 inline-block relative">
              <Image
                fill
                className="object-contain"
                src="/ArrowDown.svg"
                alt=""
              />
            </span>
          </Scroll_down>
        </Link>
      </motion.div>

      <motion.div className="flex basis-6/12 flex-col items-end justify-start gap-4 self-start">
        <div className="flex test flex-col items-end justify-center gap-3 uppercase text-4xl mbSmall:text-5xl mbMedium:text-6xl laptop:text-7xl tbPortrait:text-8xl tbMed:text-[7rem] tbLandscape:text-[9.5rem] font-medium relative tracking-tighter">
          <motion.h1
            initial="hidden"
            animate="enter"
            variants={variants}
            transition={{ ease: "easeOut", delay: 0.1, duration: 1.2 }}
            whileHover={{ scale: 1.05, duration: 0.2 }}
          >
            Strategic
          </motion.h1>
          <motion.h1
            initial="hidden"
            animate="enter"
            transition={{ ease: "easeOut", delay: 0.4, duration: 1.2 }}
            variants={variants}
            whileHover={{ scale: 1.05, duration: 0.2, delay: 0 }}
          >
            Product
          </motion.h1>
          <motion.h1
            initial="hidden"
            animate="enter"
            transition={{ ease: "easeOut", delay: 0.6, duration: 1.2 }}
            variants={variants}
            whileHover={{ scale: 1.05, duration: 0.2 }}
          >
            Designer
          </motion.h1>
        </div>
        <motion.p
          initial="hidden"
          animate="enter"
          transition={{ ease: "easeOut", delay: 0.8, duration: 1.2 }}
          variants={variants}
          className="text-[0.6rem] text-white  leading-4 mbSmall:text-sm mbMedium:text-base laptop:text-lg tbPortrait:text-[1rem]  tbMed:text-lg tbLandscape:text-[1.7rem] font-medium"
        >
          Let’s make your Product visible
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
