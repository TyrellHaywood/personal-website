// components
import DistanceBox from "./DistanceBox";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

interface GridLinesMobileProps {
  index: number;
  isHovered: boolean;
  projects: Project[];
}

const GridLinesMobile = ({
  isHovered,
  index,
  projects,
}: GridLinesMobileProps) => {
  return (
    <>
      {/* bottom */}
      <div
        className={`${
          index !== projects.length - 1 && isHovered
            ? "w-[1px] h-16 absolute -bottom-16 left-1/2 flex items-center"
            : "hidden"
        }`}
      >
        {/* line */}
        <div className="w-full h-full bg-[--corange]"></div>
        {/* distance box */}
        <DistanceBox distance={64} position="" />
      </div>

      {/* top */}
      <div
        className={`${
          index != 0 && isHovered
            ? "w-[1px] h-16 absolute -top-16 left-1/2 flex items-center"
            : "hidden"
        }`}
      >
        {/* line */}
        <div className="w-full h-full bg-[--corange]"></div>
        {/* distance box */}
        <DistanceBox distance={64} position="" />
      </div>
    </>
  );
};

export default GridLinesMobile;
