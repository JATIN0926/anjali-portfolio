import React from "react";
import { motion } from "framer-motion";
const ProjectHeader = () => {
  return (
    <div
      id="projects"
      className="w-full h-[65vh] flex flex-col justify-center items-start gap-4 p-8 font-medium text-white"
    >
      <motion.h2
        className="text-7xl w-[50%]"
        initial={{
          opacity: 0,
          y: 15,
          // scaleX: 0,
        }}
        transition={{ ease: "easeOut", delay: 0.1, duration: 0.3 }}
        whileInView={{
          opacity: 1,
          y: 0, // Animate to full opacity when in view
        }}
        viewport={{ once: true }}
      >
        GOOD DESIGN
      </motion.h2>
      <motion.h2
        className="text-7xl w-[50%]"
        initial={{
          opacity: 0,
          y: 15,
          // scaleX: 0,
        }}
        transition={{ ease: "easeOut", delay: 0.2, duration: 0.3 }}
        whileInView={{
          opacity: 1,
          y: 0, // Animate to full opacity when in view
        }}
        viewport={{ once: true }}
      >
        IS INVISIBLE
      </motion.h2>
      <motion.p
        initial={{
          opacity: 0,
          y: 15,
          // scaleX: 0,
        }}
        transition={{ ease: "easeOut", delay: 0.5, duration: 0.3 }}
        whileInView={{
          opacity: 1,
          y: 0, // Animate to full opacity when in view
        }}
        viewport={{ once: true }}
      >
        Explore my Featured Projects
      </motion.p>
    </div>
  );
};

export default ProjectHeader;
