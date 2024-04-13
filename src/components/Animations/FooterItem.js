"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
const FooterItem = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="cursor-pointer relative"
      style={{ height: "40px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.h3
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -8 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ zIndex: isHovered ? 0 : 1 }}
      >
        {text}
      </motion.h3>
      {isHovered && (
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: -30 }}
          transition={{ duration: 0.3 }}
          style={{ position: "relative", zIndex: 1 }}
        >
          {text}
        </motion.h3>
      )}
    </motion.div>
  );
};

export default FooterItem;
