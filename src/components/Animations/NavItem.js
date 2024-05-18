import React, { useState } from "react";
import { motion } from "framer-motion";

const NavItem = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="cursor-pointer relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.h3
        initial={{ opacity: 1 }}
        animate={{
          opacity: isHovered ? 0 : 1,
          y: isHovered ? -8 : 0,
          color: isHovered ? "black" : "white",
        }}
        transition={{ duration: 0.5 }}
        style={{ zIndex: isHovered ? 0 : 1 }}
      >
        {text}
      </motion.h3>
      {isHovered && (
        <motion.h3
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{ duration: 0.5 }}
          style={{ position: "relative", zIndex: 1 }}
        >
          {text}
        </motion.h3>
      )}
    </motion.div>
  );
};

export default NavItem;
