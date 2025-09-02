"use client";
import { useRef } from "react"; 
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "../components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PythonIcon from "@/assets/icons/Python-logo-notext.svg";
import GolangIcon from "@/assets/icons/cdnlogo.com_golang.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-beautiful-girl-woman-white-.png";
import { CardHeader } from "@/components/CardHeader";
import { Toolboxitems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";

const toolboxItems = [
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Python", iconType: PythonIcon },
  { title: "Github", iconType: GithubIcon },
  { title: "Golang", iconType: GolangIcon },
];

const hobbies = [
  { title: "Painting", emoji: "🎨", left: "5%", top: "5%" },
  { title: "Filming", emoji: "📷", left: "50%", top: "5%" },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "35%" },
  { title: "Music", emoji: "🎶", left: "70%", top: "45%" },
  { title: "Fitness", emoji: "🧘🏻‍♀️", left: "5%", top: "65%" },
  { title: "Reading", emoji: "📚", left: "45%", top: "70%" },
  { title: "Hiking", emoji: "🍃⛰️", left: "35%", top: "40%" },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section id="about" className="py-20 lg:py-28" ref={constraintRef}>
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />

        <div className="mt-20 flex flex-col gap-8">
          {/* Top grid (Books + Toolbox) */}
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            {/* My Reads */}
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Reads"
                description="Explore the books that have shaped my journey"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>

            {/* My Toolbox */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools"
              />
              <Toolboxitems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left"
              />
              <Toolboxitems
                items={toolboxItems}
                className="mt-4"
                itemsWrapperClassName="animate-move-right"
              />
            </Card>
          </div>

          {/* Bottom grid (Beyond the code + Map) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Beyond the code */}
            <Card className="h-[320px] w-full p-0 flex flex-col">
              <CardHeader
                title="Beyond the code"
                description="Explore my interests and hobbies beyond the digital realm"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Map */}
            <Card className="h-[320px] p-0 relative">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10" />
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
