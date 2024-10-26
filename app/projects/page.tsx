"use client";

import { useEffect, useState } from "react";
import ProjectTab from "@/components/Project/ProjectTab";
import ProjectShowcase from "@/components/Project/ProjectShowcase";
import ProjectTargetShowcase from "@/components/Project/ProjectTarget";
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
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  const toggleProject = (id: number) => {
    setSelectedProjectId((currentId) => (currentId === id ? null : id));
  };

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

  // find the currently selected project
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

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
            <ProjectTab
              key={project.id}
              project={project}
              isSelected={project.id === selectedProjectId}
              onClick={toggleProject}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-3/5 flex justify-center items-start">
        {selectedProject ? (
          <ProjectTargetShowcase project={selectedProject} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <ProjectShowcase key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
