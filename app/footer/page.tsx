import TypeWriter from "@/components/Typewriter";
import Socials from "@/components/Socials";

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-start mt-[100px]">
      <div className="w-full md:w-1/2">
        <TypeWriter />
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:items-end items-center my-4">
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
