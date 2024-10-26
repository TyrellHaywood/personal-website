import Image from "next/image";

interface CommunityTarget {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

interface CommunityTargetShowcaseProps {
  community: CommunityTarget;
}

const CommunityTargetShowcase = ({
  community,
}: CommunityTargetShowcaseProps) => {
  return (
    <div className="w-full md:ml-[50px]">
      <div className="w-full h-full overflow-hidden">
        <Image
          src="/images/placeholder.svg"
          width={600}
          height={400}
          alt={community.title}
          layout="responsive"
          objectFit="contain"
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="flex-shrink-0 p-font text-xl lg:text-3xl font-light">
          {community.title}
        </h1>
        <p className="p-font text-sm md:text-base lg:text-xl">
          {community.description}
        </p>
      </div>
    </div>
  );
};

export default CommunityTargetShowcase;
