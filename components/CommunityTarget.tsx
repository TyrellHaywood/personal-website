import Image from "next/image";

interface CommunityTarget {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

const CommunityTargetShowcase = ({
  communityTarget,
}: {
  communityTarget: CommunityTarget;
}) => {
  return (
    <button className="h-auto md:ml-[50px] mb-6">
      <div className="w-full h-full overflow-hidden">
        <Image
          src="/images/placeholder.svg"
          width={600}
          height={400}
          alt="Community Target"
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </button>
  );
};

export default CommunityTargetShowcase;
