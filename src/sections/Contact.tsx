import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      {/* Full-width gradient banner */}
      <div className="relative bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-4 md:px-10 rounded-none md:rounded-3xl overflow-hidden z-0">
        
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-5 -z-10"
          style={{ backgroundImage: `url(${grainImage.src})`,  backgroundRepeat: "repeat",   // tile it instead of stretch
            backgroundSize: "200px 200px"  }}
        />

        {/* Centered content wrapper (matches other cards) */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Click to connect and discuss
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
