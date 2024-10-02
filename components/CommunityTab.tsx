interface Community {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

const CommunityTab = ({
  community,
  onClick,
}: {
  community: Community;
  onClick: (id: number) => void;
}) => {
  return (
    <button
      className="w-full h-[25px] lg:h-[45px] flex items-center my-[10px]"
      onClick={() => onClick(community.id)}
    >
      <h3 className="flex-shrink-0 p-font font-light text-xl lg:text-3xl">
        {community.title}
      </h3>
      <div className="flex-grow border-t lg:border-t-2 border-black border-dotted mx-1"></div>
      <h3 className="flex-shrink-0 p-font font-light text-xl lg:text-3xl">
        {community.year}
      </h3>
    </button>
  );
};

export default CommunityTab;
