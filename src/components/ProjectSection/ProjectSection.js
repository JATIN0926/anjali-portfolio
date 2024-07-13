"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const ProjectSection = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredArrowIndex, setHoveredArrowIndex] = useState(null);

  const handleCardMouseEnter = (index) => {
    setHoveredIndex(index);
    setHoveredArrowIndex(null); // Reset arrow hover state
  };

  const handleCardMouseLeave = () => {
    setHoveredIndex(null);
    setHoveredArrowIndex(null); // Reset arrow hover state
  };

  const handleArrowMouseEnter = (index) => {
    setHoveredArrowIndex(index);
  };

  const handleArrowMouseLeave = () => {
    setHoveredArrowIndex(null);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-16 w-screen max-w-full px-36 pr-[11rem] text-center text-white">
      {data && data.length > 0 ? (
        data.map((section, index) => {
          const isCardHovered = hoveredIndex === index;
          const isArrowHovered = hoveredArrowIndex === index;

          const Content = (
            <motion.div
              className={`relative flex flex-col items-center justify-center gap-3 transition-all ${
                section.lock ? "hover:grayscale" : ""
              }`}
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
            >
              {section.lock ? (
                <button
                  className={`bg-[#D0D1D7] text-[#5D5D5D] font-bold p-5 px-8 rounded-full z-50 absolute top-[45%] -right-[15rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-opacity duration-500 ${
                    isCardHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {section.lock_text}
                </button>
              ) : (
                <div className="relative">
                  {isCardHovered && !isArrowHovered ? (
                    <Image
                      priority
                      width={40}
                      height={40}
                      className={`object-cover z-50 w-[6rem] h-[6rem] absolute top-1/2 ${
                        section.left ? "-right-[10rem]" : "-right-[13rem]"
                      } -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-opacity duration-500`}
                      src="/ArrowIcon.svg"
                      alt=""
                    />
                  ) : (
                    <Image
                      priority
                      width={40}
                      height={40}
                      className={`object-cover z-50 w-[6rem] h-[6rem] absolute top-1/2 ${
                        section.left ? "-right-[10rem]" : "-right-[13rem]"
                      } -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-opacity duration-500 ${
                        isArrowHovered ? "opacity-0" : "opacity-100"
                      }`}
                      src="/ArrowIconYellow.svg"
                      alt=""
                    />
                  )}
                </div>
              )}

              <div
                className={`relative ${
                  section.left ? "w-[150%]" : "w-[185%]"
                } cursor-pointer justify-self-start transition-all ${
                  section.left ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                {section.video ? (
                  <>
                    <video
                      src={section.video}
                      width="100%"
                      className={`object-cover aspect-[3/4] transition-opacity duration-200 ${
                        isCardHovered ? "opacity-0" : "opacity-100"
                      }`}
                      autoPlay
                      loop
                      muted
                    ></video>
                    <Image
                      priority
                      fill
                      className={`object-cover transition-opacity duration-200 absolute inset-0 ${
                        isCardHovered ? "opacity-100" : "opacity-0"
                      }`}
                      src={section.image_src}
                      alt=""
                    />
                  </>
                ) : (
                  <Image
                    priority
                    fill
                    className={`object-cover transition-opacity duration-200 ${
                      isCardHovered ? "opacity-100" : "opacity-100"
                    }`}
                    src={section.image_src}
                    alt=""
                  />
                )}
              </div>

              <div
                className={`${
                  section.left ? "w-[150%]" : "w-[185%]"
                } flex items-center justify-between`}
              >
                <div className="flex flex-col items-start justify-center w-full">
                  <h1 className="text-lg font-semibold">{section.title}</h1>
                  <p className="text-[#FDC52C] text-base font-semibold">
                    {section.description}
                  </p>
                </div>
                {section.lock ? (
                  <div
                    className={`transition-opacity duration-500 ${
                      isCardHovered ? "opacity-100" : "opacity-0"
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
          );

          return (
            <motion.div
              key={index}
              className={`flex items-center ${
                section.left ? "justify-start" : "justify-end"
              } min-h-[50vh] px-16 w-full`}
            >
              {section.link ? (
                <Link
                  href={section.link}
                  target="_blank"
                  className="block w-[30%]"
                >
                  {Content}
                </Link>
              ) : (
                <div className="block w-[30%]">{Content}</div>
              )}
            </motion.div>
          );
        })
      ) : (
        <p className="text-white">Loading data...</p>
      )}
    </div>
  );
};

export default ProjectSection;
