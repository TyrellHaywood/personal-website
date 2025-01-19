"use client";

// dependencies
import { useEffect, useState } from "react";
import projects from "@/components/Project/ProjectData";

/// components
import ProjectTab from "@/components/Project/ProjectTab";
import ProjectShowcase from "@/components/Project/ProjectShowcase";
import ProjectTargetShowcase from "@/components/Project/ProjectTarget";
import CircleGreen from "@/components/Shared/CircleGreen";
import SectionDescription from "@/components/Shared/SectionDescription";

// smooth loading element
import SmoothLoadingSection from "@/components/SmoothLoadingElement";

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const [uniHovered, setUniHovered] = useState(false);
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    setSelectedProjectId((currentId) => (currentId === id ? null : id));
  };

  // find the currently selected project
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-start my-[100px]">
      {/* left Column */}
      <div className="w-[90vw] md:w-1/4 md:sticky top-6 self-start">
        <SmoothLoadingSection delay={0}>
          <div className="flex flex-row space-x-[15px]">
            <CircleGreen />
            <CircleGreen />
          </div>
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.1}>
          <h2 className="h-font my-[25px] text-2xl lg:text-4x">Software</h2>
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.2}>
          <SectionDescription description="Things I like to create! Ideas, prototypes, and digital learning logs :3" />
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.3}>
          <div className="w-full mb-[25px] md:mb-0">
            {projects
              .slice()
              .reverse()
              .map((project, index, arr) => (
                <SmoothLoadingSection
                  delay={(arr.length - index - 1) * 0.1}
                  key={project.id}
                >
                  <ProjectTab
                    key={project.id}
                    project={project}
                    isSelected={project.id === selectedProjectId}
                    onClick={toggleProject}
                    isHovered={hoveredProjectId === project.id}
                    setHoveredProjectId={setHoveredProjectId}
                  />
                </SmoothLoadingSection>
              ))}
          </div>
        </SmoothLoadingSection>
      </div>

      {/* right Column */}
      <div className="w-full md:w-3/4 flex justify-center items-start">
        {selectedProject ? (
          <ProjectTargetShowcase
            project={selectedProject}
            isHovered={hoveredProjectId === selectedProject.id}
          />
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-14 md:ml-12">
            {projects
              .slice()
              .reverse()
              .map((project, index, arr) => (
                <SmoothLoadingSection
                  delay={(arr.length - index - 1) * 0.1}
                  key={project.id}
                >
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
