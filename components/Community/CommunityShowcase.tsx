import Image from "next/image";
import { motion } from "framer-motion";

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
  isHovered: boolean;
  uniHovered: boolean;
  setUniHovered: React.Dispatch<React.SetStateAction<boolean>>;
  setHoveredCommunityId: React.Dispatch<React.SetStateAction<number | null>>;
}

const CommunityShowcase = ({
  community,
  isHovered,
  uniHovered,
  setUniHovered,
  setHoveredCommunityId,
}: CommunityShowcaseProps) => {
  return (
    <motion.button
      className="h-auto md:ml-[50px] mb-6"
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
        <div
          className={`${
            isHovered
              ? "w-[10px] h-[10px] bg-white border-[1px] border-[--cblue] absolute -top-[5px] -left-[5px]"
              : ""
          }`}
        ></div>
        <div
          className={`${
            isHovered
              ? "w-[10px] h-[10px] bg-white border-[1px] border-[--cblue] absolute -top-[5px] -right-[5px]"
              : ""
          }`}
        ></div>
        <div
          className={`${
            isHovered
              ? "w-[10px] h-[10px] bg-white border-[1px] border-[--cblue] absolute -bottom-[5px] -left-[5px]"
              : ""
          }`}
        ></div>
        <div
          className={`${
            isHovered
              ? "w-[10px] h-[10px] bg-white border-[1px] border-[--cblue] absolute -bottom-[5px] -right-[5px]"
              : ""
          }`}
        ></div>
      </div>
    </motion.button>
  );
};

export default CommunityShowcase;
