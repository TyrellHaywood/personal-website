import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 80,
  duration: 0.6,
  ease: "easeOut",
  delay,
});

export default function SmoothLoadingSection({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: transitionConfig(delay),
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
