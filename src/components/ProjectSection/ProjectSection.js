"use client";
import Image from "next/image";
import "./style.css";
import { motion } from "framer-motion";
import ViewWork from "../Animations/ViewWork";
const ProjectSection = ({ data }) => {
  return (
    <>
      {data && data.length > 0 ? (
        data.map((section, index) => (
          <div
            key={index}
            className="w-screen max-w-full flex items-center justify-center p-6 px-12 text-white object-contain"
          >
            <motion.div
              initial={{
                opacity: 0, // Initially hidden
                transform: `translateX(35.1692px) translateY(35.1692px) scale(0.588308) rotateY(35.1692deg)`, // Initial transform for "from behind" effect
              }}
              whileInView={{
                opacity: 1, // Animate to full opacity when in view
                transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`, // Transform to normal state
              }}
              viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: 0.9 }} // Adjust duration and easing for desired animation
              // viewport={{ once: true }}
              className="h-[80vh] w-[90vw] flex items-center justify-center gap-6"
            >
              <div className="basis-1/2 h-[70%] w-full relative">
                <Image
                  fill
                  className=" object-cover"
                  src={section.image_src}
                  alt=""
                />
              </div>
              <div className="basis-1/2 h-[70%] w-full flex flex-col items-start justify-end gap-7 ">
                <h1 className="text-base font-medium">{section.title}</h1>
                <p className="text-xl">{section.description}</p>
                <a href={section.link} target="_blank">
                  {/* <motion.button
                    whileTap={{ scale: 0.8 }}
                    className="view_work uppercase tracking-wider border-white border-[1px] rounded-3xl px-4 p-2 flex items-center justify-center gap-2 relative transition-all"
                  >
                    <ViewWork text="VIEW WORK" />
                    <Image
                      width={27}
                      height={20}
                      className="object-contain arrow_btn_right "
                      src="/rightArrow.svg"
                      alt=""
                    />
                  </motion.button> */}
                  <ViewWork text="VIEW WORK" />
                </a>
              </div>
            </motion.div>
          </div>
        ))
      ) : (
        <p className="text-white">Loading data...</p> // Display loading message while data is fetched
      )}
    </>
  );
};

export default ProjectSection;
