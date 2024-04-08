import Description from "@/components/Description/Description";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import data from "@/data/data.json";
export default function Home() {
  return (
    <div className="flex flex-col gap-8 max-w-[100vw]">
      <Navbar />
      <Hero />
      <Description />
      <ProjectSection data={data.data} />
    </div>
  );
}
