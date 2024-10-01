"use client";

import { useEffect, useState } from "react";
import ProjectTab from "@/components/ProjectTab";
import ProjectShowcase from "@/components/ProjectShowcase";
import CircleGreen from "@/components/CircleGreen";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-start my-[100px]">
      <div className="w-[90vw] md:w-2/5">
        <div className="flex flex-row space-x-[15px]">
          <CircleGreen />
          <CircleGreen />
        </div>
        <h2 className="h-font my-[25px] text-2xl lg:text-4x">Software</h2>
        <div className="w-full">
          {projects.map((project) => (
            <ProjectTab key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center md:justify-end items-center">
        <ProjectShowcase />
        <ProjectShowcase />
        <ProjectShowcase />
        <ProjectShowcase />
      </div>
    </div>
  );
};

export default Projects;
