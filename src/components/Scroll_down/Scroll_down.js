import React, { children } from "react";
import Image from "next/image";
import "./style.css";
const Scroll_down = ({ children }) => {
  return (
    <button className=" w-20 h-20 mbMedium:w-24 mbMedium:h-24  tbPortrait:w-28 tbPortrait:h-28 inline-block relative p-7">
      <Image
        fill
        className=" scroll_down_btn object-contain flex items-center justify-center transition-transform"
        src="/scrollDown.svg"
        alt=""
      ></Image>
      {children}
    </button>
  );
};

export default Scroll_down;
