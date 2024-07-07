"use client";
import React from "react";
import { motion } from "framer-motion";

const Description = () => {
  const paragraphWords = [
    "My objective is to elevate your project above passing trends.",
    "While minimalism may dominate today and brutalism tomorrow,",
    "what really counts is giving your project a lasting impact",
    "and making it appealing.",
  ];

  // console.log(paragraphWords);
  return (
    <div
      className="h-screen w-full p-20 px-16 flex items-end justify-start gap-4"
      id="desc"
    >
      <motion.div
        initial={{
          opacity: 0,
          width: 10,
          // scaleX: 0,
        }}
        whileInView={{
          opacity: 1,
          width: 50,
          // scaleX: 1,
        }}
        transition={{ ease: "easeOut", duration: 2, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-14 h-[80%] bg-white"
      ></motion.div>
      <div className=" font-sans text-white w-[50%] text-lg">
        {paragraphWords.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="tbMed:text-xl inline-block"
          >
            {word + ""}
            {"   "}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Description;
