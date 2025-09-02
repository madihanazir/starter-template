import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration,
  shouldSpin = false,
  spinDuration
}: PropsWithChildren<{ 
  size: number; 
  rotation: number; 
  shouldOrbit?: boolean; 
  spinDuration?: string; 
  shouldSpin?: boolean; 
  orbitDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div 
        className={twMerge(shouldOrbit === true && "animate-spin")} 
        style={{
          animationDuration: orbitDuration,
        }}
      >
        {/* Orbit container */}
        <div
          className="flex items-center justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `min(${size}px, )`,
            width: `min(${size}px, )`,
          }}
        >
          {/* Position star on the right edge of orbit */}
          <div 
            className={twMerge(shouldSpin === true && "animate-spin")} 
            style={{
              animationDuration: spinDuration,
            }}
          >
            <div
              className="inline flex"
              style={{
                transform: `rotate(${-rotation}deg)`, // counter-rotate to keep upright
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};