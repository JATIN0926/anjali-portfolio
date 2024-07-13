import React, { useState, useEffect, useRef } from "react";
import Background from "./Background";
import Image from "next/image";

const designProcessData = [
  { imgSrc: "/dp_1.svg", text: "Discover" },
  { imgSrc: "/dp_2.svg", text: "Define" },
  { imgSrc: "/dp_3.svg", text: "Ideate" },
  { imgSrc: "/dp_4.svg", text: "Research" },
  { imgSrc: "/dp_5.svg", text: "Market analysis" },
  { imgSrc: "/dp_6.svg", text: "Wireframe" },
  { imgSrc: "/dp_7.svg", text: "Design" },
];

const DesignProcess = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 } // Adjust this value based on when you want to trigger the animation
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isInView) {
      interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % designProcessData.length
        );
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isInView]);

  return (
    <div
      ref={sectionRef}
      id="process"
      className="text-white px-9 my-32 mt-36 min-h-[200vh] w-screen max-w-full flex flex-col items-center justify-center gap-[8rem] p-6"
    >
      <div className="w-[95%] flex items-end justify-between">
        <h1 className="text-6xl font-medium leading-[4rem] w-[55%] uppercase">
          A Peek into My Design Process
        </h1>
        <p className="w-[35%]">
          Blend Innovation with Practicality to Create Effective and Aesthetic
          Designs. My Process Ensures Maximum Output with Minimum Effort.
        </p>
      </div>
      <Background>
        <div className="flex flex-col items-center justify-center gap-3">
          <Image
            src={designProcessData[currentIndex].imgSrc}
            height={20}
            width={20}
            alt="img"
            className="h-24 w-24"
          />
          <h1 className="text-lg font-semibold">
            {designProcessData[currentIndex].text}
          </h1>
        </div>
      </Background>
    </div>
  );
};

export default DesignProcess;
