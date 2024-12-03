interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

interface GridLinesProps {
  index: number;
  isHovered: boolean;
  projects: Project[];
}

const GridLines = ({ isHovered, index, projects }: GridLinesProps) => {
  return (
    <>
      {/* right */}
      <div
        className={`${
          index % 2 == 0 &&
          index != projects.length - 1 &&
          projects.length >= 2 &&
          isHovered // and index isnt last even element (bottom left of grid)
            ? "w-[66px] h-[1px] bg-[--corange] absolute -right-[66px] top-1/2"
            : "hidden"
        } `}
      ></div>
      {/* bottom */}
      <div
        className={`${
          index !== projects.length - 2 &&
          index !== projects.length - 1 &&
          isHovered
            ? "w-[1px] h-10 bg-[--corange] absolute -bottom-10 left-1/2"
            : "hidden"
        }`}
      ></div>
      {/* left */}
      <div
        className={`${
          index % 2 == 1 && projects.length >= 2 && isHovered
            ? "w-[66px] h-[1px] bg-[--corange] absolute -left-[66px] top-1/2"
            : "hidden"
        } `}
      ></div>
      {/* top */}
      <div
        className={`${
          index != 0 && index != 1 && isHovered
            ? "w-[1px] h-10 bg-[--corange] absolute -top-10 left-1/2"
            : "hidden"
        }`}
      ></div>
    </>
  );
};

export default GridLines;
