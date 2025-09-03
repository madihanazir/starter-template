import { Fragment } from "react";
import StarIcon from "../assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible", // Fixed spelling
  "Secure",
  "Responsive", 
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "Interactive"
];

export const TapeSection = () => {
  return ( 
    <div className="py-16 lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left">
            {[...new Array(4)].fill(0).map((_, idx) => ( // Increased to 4 copies for smoother animation
              <Fragment key={idx}>
                {words.map(word => (
                  <div key={`${word}-${idx}`} className="inline-flex gap-4 items-center whitespace-nowrap"> 
                    <span className="text-gray-900 uppercase font-bold text-sm">{word}</span> 
                    <StarIcon className="size-6 text-gray-900 -rotate-12"/> 
                  </div>
                ))}
              </Fragment>
            ))}
          </div> 
        </div>
      </div>
    </div>
  );
};