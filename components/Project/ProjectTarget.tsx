import Image from "next/image";

interface ProjectTarget {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

interface ProjectTargetShowcaseProps {
  project: ProjectTarget;
}

const ProjectTargetShowcase = ({ project }: ProjectTargetShowcaseProps) => {
  return (
    <div className="w-full md:ml-[50px]">
      <div className="w-full overflow-hidden">
        <Image
          src="/images/placeholder.svg"
          width={600}
          height={400}
          alt={project.title}
          layout="responsive"
          objectFit="contain"
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="flex-shrink-0 p-font text-xl lg:text-3xl font-light">
          {project.title}
        </h1>
        <p className="p-font text-sm md:text-base lg:text-xl">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectTargetShowcase;
