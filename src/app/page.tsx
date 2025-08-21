import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
export default function Home() {
  return (
    <div  className="w-full min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <AboutSection />
    </div>
  );
}
