import { motion } from "framer-motion";
import React from "react";
const FlipLink = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap cursor-pointer"
      //   href={href}
    >
      <motion.div
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FlipLink;
