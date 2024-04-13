"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const ViewWork = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="cursor-pointer relative view_work uppercase tracking-wider border-white border-[1px] rounded-3xl px-4 p-2 flex items-center justify-center gap-2 transition-all"
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.h3>
      )}
      <Image
        width={27}
        height={20}
        className="object-contain arrow_btn_right "
        src="/rightArrow.svg"
        alt=""
      />
    </motion.button>
  );
};

export default ViewWork;
