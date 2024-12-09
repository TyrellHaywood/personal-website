// components
import DistanceBox from "./DistanceBox";

interface SharedObject {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

interface GridLinesProps {
  isHovered: boolean;
}

const GridLines = ({ isHovered }: GridLinesProps) => {
  return (
    <>
      {/* bottom */}
      <div
        className={`${
          isHovered
            ? "w-[1px] h-[18px] absolute -bottom-[18px] left-1/2 flex items-center"
            : "hidden"
        }`}
      >
        {/* line */}
        <div className="w-full h-full bg-[--corange]"></div>
        {/* distance box */}
        <DistanceBox distance={18} position="" />
      </div>

      {/* left (dashed)*/}
      <div
        className={`${
          isHovered
            ? "w-1/2 h-[1px] absolute -bottom-[18px] right-1/2 flex justify-center"
            : "hidden"
        } `}
      >
        {/* line */}
        <div className="w-full h-full bg-[--corange]"></div>
      </div>
    </>
  );
};

export default GridLines;
