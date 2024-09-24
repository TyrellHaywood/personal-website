import ProjectTab from "@/components/ProjectTab";
import CircleGreen from "@/components/CircleGreen";

const Projects = () => {
  return (
    <div className="flex flex-row flex-wrap my-[100px]">
      <div>
        <div className="flex flex-row space-x-[15px]">
          <CircleGreen />
          <CircleGreen />
        </div>
        <h2 className="h-font my-[25px] text-2xl">Software</h2>
        <ProjectTab />
        <ProjectTab />
        <ProjectTab />
        <ProjectTab />
      </div>
      <div></div>
    </div>
  );
};

export default Projects;
