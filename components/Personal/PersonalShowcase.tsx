import Image from "next/image";

interface Personal {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

const PersonalShowcase = ({ personal }: { personal: Personal }) => {
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

export default PersonalShowcase;
