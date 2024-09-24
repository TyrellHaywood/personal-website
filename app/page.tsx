import Homepage from "./homepage/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div className="w-[90%] m-auto flex flex-col justify-center items-center">
      <Homepage />
      <Projects />
    </div>
  );
}
