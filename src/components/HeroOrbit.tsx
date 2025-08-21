import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Orbit container */}
      <div
        className="flex items-center justify-start"
        style={{
          transform: `rotate(${rotation}deg)`,
          height: `min(${size}px, 90vw)`, // ✅ fix here
          width: `min(${size}px, 90vw)`,  // ✅ fix here
        }}
      >
        {/* Position star on the right edge of orbit */}
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
  );
};
