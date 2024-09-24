import Image from "next/image";

const CommunityShowcase = () => {
  return (
    <button className="h-auto md:ml-[50px] mb-6">
      <div className="w-full h-full overflow-hidden">
        <Image
          src="/images/placeholder.svg"
          width={600}
          height={400}
          alt="Project Showcase"
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </button>
  );
};

export default CommunityShowcase;
