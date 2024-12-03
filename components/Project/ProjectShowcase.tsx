import Image from "next/image";
import { motion } from "framer-motion";

import TileCorners from "../TileCorners";

const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 80,
  duration: 0.5,
  delay: delay,
});

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

interface ProjectShowcaseProps {
  project: Project;
  index: number;
  projects: Project[];
  onClick: (id: number) => void;
  isHovered: boolean;
  uniHovered: boolean;
  setUniHovered: React.Dispatch<React.SetStateAction<boolean>>;
  setHoveredProjectId: React.Dispatch<React.SetStateAction<number | null>>;
}

const ProjectShowcase = ({
  project,
  index,
  projects,
  onClick,
  isHovered,
  uniHovered,
  setUniHovered,
  setHoveredProjectId,
}: ProjectShowcaseProps) => {
  return (
    <motion.button
      className="h-auto md:ml-[50px] mb-6"
      onClick={() => onClick(project.id)}
      transition={transitionConfig()}
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
      }}
      onHoverStart={() => {
        setHoveredProjectId(project.id);
        setUniHovered(true);
      }}
      onHoverEnd={() => {
        setHoveredProjectId(null);
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
      </div>
    </motion.button>
  );
};

export default ProjectShowcase;
