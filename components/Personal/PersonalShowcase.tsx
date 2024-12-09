import Image from "next/image";
import { motion } from "framer-motion";

// components
import TileCorners from "../HoverStates/TileCorners";
import GridLinesDesktop from "../HoverStates/GridLines";

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

interface PersonalShowcaseProps {
  personal: Personal;
  index: number;
  personals: Personal[];
  onClick: (id: number) => void;
  isHovered: boolean;
  uniHovered: boolean;
  setUniHovered: React.Dispatch<React.SetStateAction<boolean>>;
  setHoveredPersonalId: React.Dispatch<React.SetStateAction<number | null>>;
}

const PersonalShowcase = ({
  personal,
  index,
  personals,
  onClick,
  isHovered,
  uniHovered,
  setUniHovered,
  setHoveredPersonalId,
}: PersonalShowcaseProps) => {
  return (
    <motion.button
      className="h-auto"
      onClick={() => onClick(personal.id)}
      transition={transitionConfig()}
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
      }}
      onHoverStart={() => {
        setHoveredPersonalId(personal.id);
        setUniHovered(true);
      }}
      onHoverEnd={() => {
        setHoveredPersonalId(null);
        setUniHovered(false);
      }}
    >
      <div
        className={`w-full h-full relative ${
          isHovered ? "border-[1px] border-[--cblue] opacity-85 shadow-lg" : ""
        }`}
      >
        <Image
          src="/images/placeholder.svg"
          width={600}
          height={400}
          alt="Project Showcase"
          layout="responsive"
          objectFit="contain"
        />

        {/* corners */}
        <TileCorners isHovered={isHovered} />

        {/* grid lines */}
        {/* desktop */}
        <div className="">
          <GridLinesDesktop
            index={index}
            isHovered={isHovered}
            sharedObjectType={personals}
          />
        </div>
      </div>

      {/* text */}
      <div className="text-left">
        <h3
          className={`mt-4 mb-2 flex-shrink-0 p-font text-xl lg:text-3xl text-left font-light inline-block ${
            isHovered
              ? "border-[1px] border-[--corange] underline decoration-[--cblue] decoration-1"
              : ""
          }`}
        >
          {personal.title}
        </h3>
        <p
          className={`flex-shrink-0 p-font text-sm md:text-base lg:text-xl text-left font-light
          `}
        >
          {personal.description}
        </p>
      </div>
    </motion.button>
  );
};

export default PersonalShowcase;
