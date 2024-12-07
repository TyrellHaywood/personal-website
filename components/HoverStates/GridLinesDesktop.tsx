// components
import DistanceBox from "./DistanceBox";

interface SharedObject {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

interface GridLinesDesktopProps {
  index: number;
  isHovered: boolean;
  sharedObjectType: SharedObject[];
}

const GridLinesDesktop = ({
  isHovered,
  index,
  sharedObjectType,
}: GridLinesDesktopProps) => {
  return (
    <>
      {/* right */}
      <div
        className={`${
          index % 2 == 0 &&
          index != sharedObjectType.length - 1 &&
          sharedObjectType.length >= 2 &&
          isHovered // and index isnt last even element (bottom left of grid)
            ? "w-[58px] h-[1px] absolute -right-[58px] top-1/2 flex justify-center"
            : "hidden"
        } `}
      >
        {/* line */}
        <div className="w-full h-full bg-[--corange]"></div>
        {/* distance box */}
        <DistanceBox distance={58} position="top" />
      </div>

      {/* bottom */}
      <div
        className={`${
          index !== sharedObjectType.length - 2 &&
          index !== sharedObjectType.length - 1 &&
          isHovered
            ? "w-[1px] h-16 absolute -bottom-16 left-1/2 flex items-center"
            : "hidden"
        }`}
      >
        {/* line */}
        <div className="w-full h-full bg-[--corange]"></div>
        {/* distance box */}
        <DistanceBox distance={64} position="" />
      </div>

      {/* left */}
      <div
        className={`${
          index % 2 == 1 && sharedObjectType.length >= 2 && isHovered
            ? "w-[58px] h-[1px] absolute -left-[58px] top-1/2 flex justify-center"
            : "hidden"
        } `}
      >
        {/* line */}
        <div className="w-full h-full bg-[--corange]"></div>
        {/* distance box */}
        <DistanceBox distance={58} position="top" />
      </div>

      {/* top */}
      <div
        className={`${
          index != 0 && index != 1 && isHovered
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

export default GridLinesDesktop;
