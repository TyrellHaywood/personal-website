interface Personal {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

const PersonalTab = ({ personal }: { personal: Personal }) => {
  return (
    <button className="w-full h-[25px] lg:h-[45px] flex items-center my-[10px]">
      <h3 className="flex-shrink-0 p-font font-light text-xl lg:text-3xl">
        {personal.title}
      </h3>
      <div className="flex-grow border-t lg:border-t-2 border-black border-dotted mx-1"></div>
      <h3 className="flex-shrink-0 p-font font-light text-xl lg:text-3xl">
        {personal.year}
      </h3>
    </button>
  );
};

export default PersonalTab;
