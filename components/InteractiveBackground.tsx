"use client";
import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

export default function InteractiveBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 100, // lower = more delay
    damping: 20, // higher = smoother
  });

  const springY = useSpring(mouseY, {
    stiffness: 100, // lower = more delay
    damping: 20, // higher = smoother
  });

  const maskImage = useMotionTemplate`radial-gradient(circle 400px at ${springX}px ${springY}px, black 30%, transparent 70%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    // pointer-events-none to prevent interference with other interactions
    <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-none isolate">
      {/* default background */}
      <div className="absolute inset-0 background" />

      {/* halftone background */}
      <motion.div
        className="absolute inset-0 bg-[--cred] bg-repeat opacity-15"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      />
    </div>
  );
}
