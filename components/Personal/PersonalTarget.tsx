import Image from "next/image";

interface PersonalTarget {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

interface PersonalTargetShowcaseProps {
  personal: PersonalTarget;
}

const PersonalTargetShowcase = ({ personal }: PersonalTargetShowcaseProps) => {
  return (
    <div className="w-full md:ml-[50px]">
      <div className="w-full h-full overflow-hidden">
        <Image
          src="/images/placeholder.svg"
          width={600}
          height={400}
          alt={personal.title}
          layout="responsive"
          objectFit="contain"
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="flex-shrink-0 p-font text-xl lg:text-3xl font-light">
          {personal.title}
        </h1>
        <p className="p-font text-sm md:text-base lg:text-xl">
          {personal.description}
        </p>
      </div>
    </div>
  );
};

export default PersonalTargetShowcase;
