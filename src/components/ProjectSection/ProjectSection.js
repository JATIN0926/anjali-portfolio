"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectSection = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-16 w-screen max-w-full px-4 text-center text-white">
      {data && data.length > 0 ? (
        data.map((section, index) => (
          <motion.div
            key={index}
            className={`flex items-center ${
              section.left ? "justify-start" : "justify-end"
            } min-h-screen px-16 w-full`}
          >
            <motion.div
              className={`relative flex flex-col items-center justify-center gap-3 w-[40%] transition-all ${
                section.lock ? "hover:grayscale" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {section.lock ? (
                <button
                  className={`bg-[#D0D1D7] text-[#5D5D5D] font-bold p-5 px-8 rounded-full z-50 absolute top-[45%] -right-[9rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Under NDA
                </button>
              ) : (
                <Image
                  priority
                  width={30}
                  height={30}
                  className={`object-cover z-50 w-[5rem] h-[5rem] absolute top-1/2 -right-[5rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  src="/ArrowIcon.svg"
                  alt=""
                />
              )}

              <div
                className={`relative w-full cursor-pointer justify-self-start transition-all ${
                  section.left ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                {section.video ? (
                  <>
                    <video
                      src={section.video}
                      width="100%"
                      className={`object-cover aspect-square transition-opacity duration-500 ${
                        hoveredIndex === index ? "opacity-0" : "opacity-100"
                      }`}
                      autoPlay
                      loop
                      muted
                    ></video>
                    <Image
                      priority
                      fill
                      className={`object-cover transition-opacity duration-500 absolute inset-0 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                      src={section.image_src}
                      alt=""
                    />
                  </>
                ) : (
                  <Image
                    priority
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-100"
                    }`}
                    src={section.image_src}
                    alt=""
                  />
                )}
              </div>

              <div className="w-full flex items-center justify-between">
                <div className="flex flex-col items-start justify-center w-full">
                  <h1 className="text-lg font-semibold">{section.title}</h1>
                  <p className="text-[#FDC52C] text-base font-medium">
                    {section.description}
                  </p>
                </div>
                {section.lock ? (
                  <div
                    className={`transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      width={40}
                      height={40}
                      className="object-cover"
                      src="/LockKey.png"
                      alt=""
                    />
                  </div>
                ) : (
                  <></>
                )}
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
