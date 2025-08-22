import memojiImage from "@/assets/images/memoji-beautiful-girl-woman-white-background-emoji_826801-6882-removebg-preview.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <section className="relative z-0 flex flex-col items-center justify-center min-h-screen overflow-hidden w-full max-w-full">
      {/* Background with grain + rings */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        {/* Grain texture */}
        <div
          className="absolute inset-0 -z-30 opacity-10"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />

        {/* Concentric rings */}
        <div className="absolute flex items-center justify-center w-full h-full">
          <div className="size-[min(620px,90vw)] hero-ring" />
          <div className="size-[min(820px,90vw)] hero-ring" />
          <div className="size-[min(1020px,90vw)] hero-ring" />
          <div className="size-[min(1220px,90vw)] hero-ring" />
        </div>

        {/* Orbits */}
        <HeroOrbit size={800} rotation={135}>
          <StarIcon className="absolute -top-10 -left-10 w-10 h-10 text-teal-400" />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={-500}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-35}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={80}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={350}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={178}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={20}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>

      {/* Foreground content */}
      <div className="relative flex flex-col items-center">
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto px-4">
          {/* Profile image */}
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking"
          />
          <StarIcon className="absolute -top-6 -left-6 w-10 h-10 text-teal-400" />
        </div>

        {/* Availability badge */}
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4 relative">
          {/* Green dot with ping */}
          <div className="relative">
            <div className="bg-green-500 size-2.5 rounded-full relative z-10" />
            <div className="absolute inset-0 w-full h-full rounded-full bg-green-500/50 animate-ping"></div>
          </div>
          {/* Text */}
          <div className="text-sm font-medium">
            Available for hiring as an SDE
          </div>
        </div>

        {/* Headline + Paragraph */}
        <div className="max-w-lg mx-auto mt-8 text-center">
          <h1 className="font-serif text-2xl md:text-4xl tracking-wide">
            Building exceptional solutions for user experiences
          </h1>
          <p className="mt-4 text-white/60 md:text-lg">
            I specialize in transforming ideas and designs into robust architectures and
            high-performing applications. With hands-on experience in backend systems,
            real-time pipelines, and AI-driven solutions, I'm ready to bring problem
            solving with clean code to your team. Let's connect and see what you need
            built!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};
