interface SectionDescriptionProps {
  description: string;
}

const SectionDescription = ({ description }: SectionDescriptionProps) => {
  return (
    <div className="w-full h-auto py-8 px-3 mb-8 bg-black bg-opacity-5">
      <p
        className={`flex-shrink-0 p-font text-sm md:text-base lg:text-xl text-left font-light
          `}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionDescription;
