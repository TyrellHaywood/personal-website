interface TileCornersProps {
  isHovered: boolean;
}

const TileCorners = ({ isHovered }: TileCornersProps) => {
  return (
    <>
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
    </>
  );
};

export default TileCorners;
