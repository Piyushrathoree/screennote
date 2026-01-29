import React from "react";
import { cn } from "@/lib/utils";

interface SphereProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | string;
}

export function Sphere({
  className,
  size = "300px",
  style,
  ...props
}: SphereProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full shadow-xl overflow-hidden shadow-orange-900 ",
        className,
      )}
      style={{
        width: size,
        height: size,
        backgroundColor: "oklch(50.5% 0.213 27.518)", // Very light orange/white background
        boxShadow:
          "inset -10px -20px 40px rgba(234, 88, 12, 0.2), inset 0 0 20px rgba(251, 146, 60, 0.2), 0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 80px -10px rgba(251, 146, 60, 0.5)",
        ...style,
      }}
      {...props}
    >
      {/* Animated Lava Layer */}
      <div
        className="absolute inset-[-50%] w-[200%] h-[200%] animate-lava opacity-90 blur-lg"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, #3e1800 0deg,  oklch(64.6% 0.222 41.116) 120deg, #ff9a44 180deg, #d35400 240deg, #3e1800 360deg)",
        }}
      />

      {/* Secondary movement layer for complexity */}
      <div
        className="absolute inset-[-20%] w-[140%] h-[140%] animate-lava opacity-60 mix-blend-color-dodge"
        style={{
          animationDuration: "15s",
          animationDirection: "reverse",
          background:
            "radial-gradient(circle at 60% 40%, transparent 40%, rgba(255, 154, 68, 0.6) 60%, transparent 80%)",
        }}
      />

      {/* Highlights - Warm tinted glow instead of white */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow:
            "inset -10px -20px 60px rgba(194, 65, 12, 0.15), inset 10px 10px 40px rgba(255, 237, 213, 0.9)",
        }}
      />
    </div>
  );
}
