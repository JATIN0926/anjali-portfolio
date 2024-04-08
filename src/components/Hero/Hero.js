"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Scroll_down from "../Scroll_down/Scroll_down";
import "./style.css";
const Hero = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: 1250,
      behavior: "smooth",
    });
  };
  const variants = {
    hidden: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
  };
  const variants_btn = {
    hidden: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 },
  };
  // const variants_btn_2 = {
  //   hidden: { opacity: 0, y: -300 },
  //   enter: { opacity: 1, y: 0 },
  // };
  return (
    <div className="h-[75vh] flex items-center py-9 tbMed:py-10 tbLandscape:py-12 justify-around w-screen max-w-full text-white font-sans">
      <motion.div
        whileTap={{ scale: 0.1 }}
        className="basis-12 self-end"
        initial="hidden"
        animate="enter"
        variants={variants_btn}
        transition={{ type: "linear", delay: 0.1, duration: 1.5 }}
        onClick={scrollDown}
      >
        <Scroll_down>
          <motion.span
            // initial="hidden"
            // animate="enter"
            // variants={variants_btn_2}
            // transition={{ type: "linear", delay: 1.7, duration: 2.5 }}
            className=" w-6 h-6 mbMedium:w-8 mbMedium:h-8 tbPortrait:w-10 tbPortrait:h-10 inline-block relative arrow_bounce transition-transform"
          >
            <Image fill className="object-contain" src="/ArrowUp.svg" alt="" />
          </motion.span>
        </Scroll_down>
      </motion.div>

      <motion.div className="flex basis-6/12 flex-col items-end justify-start gap-4 self-start">
        <div className="flex test flex-col items-end justify-center gap-3 uppercase text-4xl mbSmall:text-5xl mbMedium:text-6xl laptop:text-7xl tbPortrait:text-8xl tbLandscape:text-9xl font-medium relative">
          <motion.h1
            initial="hidden"
            animate="enter"
            variants={variants}
            transition={{ type: "linear", delay: 0.1, duration: 1 }}
          >
            Strategic
          </motion.h1>
          <motion.h1
            initial="hidden"
            animate="enter"
            transition={{ type: "linear", delay: 0.4, duration: 1 }}
            variants={variants}
          >
            Product
          </motion.h1>
          <motion.h1
            initial="hidden"
            animate="enter"
            transition={{ type: "linear", delay: 0.6, duration: 1 }}
            variants={variants}
          >
            Designer
          </motion.h1>
        </div>
        <motion.p
          initial="hidden"
          animate="enter"
          transition={{ type: "linear", delay: 0.8, duration: 1 }}
          variants={variants}
          className="text-[0.6rem] leading-4 mbSmall:text-sm mbMedium:text-base laptop:text-lg tbPortrait:text-xl  tbMed:text-2xl tbLandscape:text-[1.7rem] font-medium"
        >
          Let’s make your Product visible
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
