interface TileCornersProps {
  isHovered: boolean;
}

const TileCorners = ({ isHovered }: TileCornersProps) => {
  return (
    <>
      {/* top left */}
      <div
        className={`${
          isHovered
            ? "w-[10px] h-[10px] bg-white border-[1px] border-[--cblue] absolute -top-[5px] -left-[5px]"
            : ""
        }`}
      ></div>
      {/* top right */}
      <div
        className={`${
          isHovered
            ? "w-[10px] h-[10px] bg-white border-[1px] border-[--cblue] absolute -top-[5px] -right-[5px]"
            : ""
        }`}
      ></div>
      {/* bottom left */}
      <div
        className={`${
          isHovered
            ? "w-[10px] h-[10px] bg-white border-[1px] border-[--cblue] absolute -bottom-[5px] -left-[5px]"
            : ""
        }`}
      ></div>
      {/* bottom right */}
      <div
        className={`${
          isHovered
            ? "w-[10px] h-[10px] bg-white border-[1px] border-[--cblue] absolute -bottom-[5px] -right-[5px]"
            : ""
        }`}
      ></div>
    </>
  );
};

export default TileCorners;
