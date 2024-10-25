"use client";

import { motion } from "framer-motion";

const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 80,
  duration: 0.5,
  delay: delay,
});

interface Personal {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

const PersonalTab = ({
  personal,
  onClick,
}: {
  personal: Personal;
  onClick: (id: number) => void;
}) => {
  return (
    <motion.button
      className="w-full h-[25px] lg:h-[45px] flex items-center my-[10px]"
      onClick={() => onClick(personal.id)}
      transition={transitionConfig()}
      initial={{ backgroundColor: "transparent" }}
      animate={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
      whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      <h3 className="flex-shrink-0 p-font font-light text-xl lg:text-3xl">
        {personal.title}
      </h3>
      <motion.div
        className="flex-grow border-t lg:border-t-2 border-black border-dotted mx-1 rounded-md"
        initial={{ borderColor: "black" }}
        whileHover={{ borderColor: "green" }}
      ></motion.div>{" "}
      <h3 className="flex-shrink-0 p-font font-light text-xl lg:text-3xl">
        {personal.year}
      </h3>
    </motion.button>
  );
};

export default PersonalTab;
