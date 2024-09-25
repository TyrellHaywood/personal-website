import Homepage from "./homepage/page";
import Projects from "./projects/page";
import Community from "./community/page";
import Personal from "./personal/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div className="w-[90%] m-auto flex flex-col justify-center items-center">
      <Homepage />
      <Projects />
      <Community />
      <Personal />
      <Footer />
    </div>
  );
}
