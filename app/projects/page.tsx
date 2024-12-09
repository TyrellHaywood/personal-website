"use client";

// dependencies
import { useEffect, useState } from "react";

/// components
import ProjectTab from "@/components/Project/ProjectTab";
import ProjectShowcase from "@/components/Project/ProjectShowcase";
import ProjectTargetShowcase from "@/components/Project/ProjectTarget";
import CircleGreen from "@/components/Shared/CircleGreen";
import SectionDescription from "@/components/Shared/SectionDescription";

// smooth loading element
import SmoothLoadingSection from "@/components/SmoothLoadingElement";

interface Project {
  id: number;
  title: string;
  image: string;
  textArea: string;
  year: number;
  description: string;
  link: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const [uniHovered, setUniHovered] = useState(false);
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

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
      {/* left Column */}
      <div className="w-[90vw] md:w-2/5 md:sticky top-6 self-start">
        <SmoothLoadingSection delay={0}>
          <div className="flex flex-row space-x-[15px]">
            <CircleGreen />
            <CircleGreen />
          </div>
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.2}>
          <h2 className="h-font my-[25px] text-2xl lg:text-4x">Software</h2>
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.4}>
          <SectionDescription description="something about why this section is meaningful or important... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros ligula, condimentum sit amet orci ut, egestas efficitur magna. " />
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.6}>
          <div className="w-full mb-[25px] md:mb-0">
            {projects.map((project) => (
              <ProjectTab
                key={project.id}
                project={project}
                isSelected={project.id === selectedProjectId}
                onClick={toggleProject}
                isHovered={hoveredProjectId === project.id}
                setHoveredProjectId={setHoveredProjectId}
              />
            ))}
          </div>
        </SmoothLoadingSection>
      </div>

      {/* right Column */}
      <div className="w-full md:w-3/5 flex justify-center items-start">
        {selectedProject ? (
          <ProjectTargetShowcase
            project={selectedProject}
            isHovered={hoveredProjectId === selectedProject.id}
          />
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-14 md:ml-12">
            {projects.map((project, index) => (
              <SmoothLoadingSection delay={0.2} key={project.id}>
                <ProjectShowcase
                  project={project}
                  index={index}
                  projects={projects}
                  onClick={toggleProject}
                  isHovered={hoveredProjectId === project.id}
                  uniHovered={uniHovered}
                  setUniHovered={setUniHovered}
                  setHoveredProjectId={setHoveredProjectId}
                />
              </SmoothLoadingSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
