interface DistanceBoxProps {
  distance: number;
  position: string;
}

// distance: distance between elements, x-distance is different from y-distance
// position: position of distance box, either above grid line (top) or beside grid line (right)

const DistanceBox = ({ distance, position }: DistanceBoxProps) => {
  return (
    <div
      className={`absolute w-[20px] h-[20px] rounded-[2px] bg-[--corange] flex justify-center items-center ${
        position == "top" ? "mt-1" : "ml-1"
      }`}
    >
      <p className="p-font text-white text-xs">{distance}</p>
    </div>
  );
};

export default DistanceBox;
