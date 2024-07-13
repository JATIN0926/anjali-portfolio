"use client";
import Image from "next/image";
import { Link } from "react-scroll";
import FlipLink from "../Animations/FlipLink";
const Footer = () => {
  return (
    <div
      className="h-[55vh] w-full bg-white py-10 flex items-center justify-end"
      id="contact"
    >
      <div className="flex flex-col items-center justify-between h-[75%] w-[60%] mt-12">
        <div className="flex items-center justify-between w-full font-medium">
          <h1 className="uppercase text-xl cursor-pointer">
            <FlipLink>LinkedIn</FlipLink>
          </h1>
          <h1 className="uppercase text-lg  cursor-pointer">
          <a href="mailto:anjalikum116@gmail.com">
            <FlipLink>Email</FlipLink>
          </a>
          </h1>
          <h1 className="uppercase text-lg  cursor-pointer">
            <FlipLink>Behance</FlipLink>
          </h1>
          <h1 className="text-lg cursor-pointer">
            <FlipLink>INSTAGRAM</FlipLink>
          </h1>
        </div>
        <div className="flex items-center justify-center w-full">
          <h1 className="text-base font-medium">
            Crafted with Care to Highlight Creative Solutions and Collaborative
            Efforts
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 self-end w-[20%] h-[14%]">
        <Link to="nav" spy={true} smooth={true} duration={900}>
          <h1 className="uppercase cursor-pointer">Back To Top</h1>
        </Link>
        <span className=" w-3 h-3 mbMedium:w-8 mbMedium:h-8 tbPortrait:w-5 tbPortrait:h-5 inline-block relative">
          <Image
            fill
            className="object-contain "
            src="/FooterArrow.png"
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

export default Footer;
