"use client";
import Description from "@/components/Description/Description";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import ProjectHeader from "@/components/ProjectHeader/ProjectHeader";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import data from "@/data/data.json";
export default function Home() {
  return (
    <div className="flex flex-col gap-8 max-w-[100vw]">
      <Navbar />
      <Hero />
      <Description />
      <ProjectHeader />
      <div>
        <ProjectSection data={data.data} />
      </div>
      <Footer />
    </div>
  );
}
