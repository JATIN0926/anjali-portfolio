"use client";
import Image from "next/image";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ProjectSection = ({ data }) => {
  const controls = useAnimationControls();
  const controls2 = useAnimationControls();
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0.15, once: true });

  useEffect(() => {
    if (isInView) {
      const animate = async () => {
        await controls.start("transformY");
        await controls2.start("scale");
      };
      animate();
    }
  }, [isInView, controls, controls2]);

  const variants = {
    transformY: {
      y: -85,
      transition: { duration: 1.5, ease: [0.25, 1, 0.7, 1], delay: 0 },
    },
    scale: {
      scale: 1,
      transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <div
      className="flex flex-col items-center justify-center gap-16 w-full max-w-full px-4 text-center text-white"
      ref={ref}
    >
      {data && data.length > 0 ? (
        data.map((section, index) => (
          <motion.div
            initial={{ scale: 0.9, y: 500 }}
            animate={controls}
            variants={{ transformY: variants.transformY }}
            key={index}
            className="flex items-center justify-center w-full"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={controls2}
              variants={{ scale: variants.scale }}
              className="flex flex-col items-center justify-center gap-1 h-[50vh] w-[30vw] transition-all"
            >
              <div className="flex flex-col items-start justify-end w-full gap-2">
                <h1 className="text-base font-medium uppercase">
                  {section.title}
                </h1>
              </div>
              <div className="relative w-full h-full">
                <Image
                  priority
                  fill
                  className="object-cover"
                  src={section.image_src}
                  alt=""
                />
              </div>
            </motion.div>
          </motion.div>
        ))
      ) : (
        <p className="text-white">Loading data...</p>
      )}
    </div>
  );
};

export default ProjectSection;
