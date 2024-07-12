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
      <motion.div variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}>
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FlipLink;