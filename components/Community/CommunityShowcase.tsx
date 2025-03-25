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

interface Community {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

interface CommunityShowcaseProps {
  community: Community;
  index: number;
  communities: Community[];
  onClick: (id: number) => void;
  isHovered: boolean;
  uniHovered: boolean;
  setUniHovered: React.Dispatch<React.SetStateAction<boolean>>;
  setHoveredCommunityId: React.Dispatch<React.SetStateAction<number | null>>;
}

const CommunityShowcase = ({
  community,
  index,
  communities,
  onClick,
  isHovered,
  uniHovered,
  setUniHovered,
  setHoveredCommunityId,
}: CommunityShowcaseProps) => {
  return (
    <motion.button
      className="h-auto"
      onClick={() => onClick(community.id)}
      transition={transitionConfig()}
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
      }}
      onHoverStart={() => {
        setHoveredCommunityId(community.id);
        setUniHovered(true);
      }}
      onHoverEnd={() => {
        setHoveredCommunityId(null);
        setUniHovered(false);
      }}
    >
      <div
        className={`w-full max-w-[500px] h-full relative ${
          isHovered ? "border-[1px] border-[--cblue] opacity-85 shadow-lg" : ""
        }`}
      >
        <Image
          src={community.image}
          width={600}
          height={400}
          alt="Project Showcase"
          style={{ objectFit: "contain" }}
        />

        {/* corners */}
        <TileCorners isHovered={isHovered} />

        {/* grid lines */}
        {/* desktop */}
        <div className="">
          <GridLinesDesktop isHovered={isHovered} />
        </div>
      </div>

      {/* text */}
      <div className="text-left">
        <h3
          className={`mt-4 mb-2 flex-shrink-0 p-font text-xl text-left font-light inline-block ${
            isHovered
              ? "border-[1px] border-[--corange] underline decoration-[--cblue] decoration-1"
              : ""
          }`}
        >
          {community.title}
        </h3>
        <p
          className={`flex-shrink-0 p-font text-sm md:text-base text-left font-light
          `}
        >
          {community.description}
        </p>
      </div>
    </motion.button>
  );
};

export default CommunityShowcase;
