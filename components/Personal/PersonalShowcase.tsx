import Image from "next/image";
import { motion } from "framer-motion";

// components
import TileCorners from "../HoverStates/TileCorners";
import GridLinesDesktop from "../HoverStates/GridLinesDesktop";
import GridLinesMobile from "../HoverStates/GridLinesMobile";

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
      className="h-auto md:ml-[50px] mb-6"
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
          isHovered ? "border-[1px] border-[--cblue] opacity-75" : ""
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
        <div className="hidden md:block">
          <GridLinesDesktop
            index={index}
            isHovered={isHovered}
            sharedObjectType={personals}
          />
        </div>
        {/* mobile */}
        <div className="block md:hidden">
          <GridLinesMobile
            index={index}
            isHovered={isHovered}
            sharedObjectType={personals}
          />
        </div>
      </div>
    </motion.button>
  );
};

export default PersonalShowcase;
