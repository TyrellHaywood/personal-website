"use client";

import { useEffect, useState } from "react";

import PersonalTab from "@/components/Personal/PersonalTab";
import PersonalShowcase from "@/components/Personal/PersonalShowcase";
import PersonalTargetShowcase from "@/components/Personal/PersonalTarget";
import CircleGreen from "@/components/CircleGreen";
import CircleRed from "@/components/CircleRed";

import SmoothLoadingSection from "@/components/SmoothLoadingElement";

interface Personal {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

const Personal = () => {
  const [personals, setPersonals] = useState<Personal[]>([]);
  const [selectedPersonalId, setSelectedPersonalId] = useState<number | null>(
    null
  );

  const [uniHovered, setUniHovered] = useState(false);
  const [hoveredPersonalId, setHoveredPersonalId] = useState<number | null>(
    null
  );

  const togglePersonal = (id: number) => {
    setSelectedPersonalId((currentId) => (currentId === id ? null : id));
  };

  useEffect(() => {
    const fetchPersonals = async () => {
      try {
        const response = await fetch("/api/personal");
        const data = await response.json();
        setPersonals(data);
      } catch (error) {
        console.error("Failed to fetch communities:", error);
      }
    };

    fetchPersonals();
  }, []);

  // find the currently selected personal
  const selectedPersonal = personals.find(
    (personal) => personal.id === selectedPersonalId
  );

  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-start my-[100px]">
      <div className="w-[90vw] md:w-2/5">
        <SmoothLoadingSection delay={0}>
          <div className="flex flex-row space-x-[15px]">
            <CircleRed />
            <CircleGreen />
          </div>
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.2}>
          <h2 className="h-font my-[25px] text-2xl lg:text-4x">Personal</h2>
        </SmoothLoadingSection>
        <div className="w-full mb-[25px] md:mb-0">
          {personals.map((personal) => (
            <SmoothLoadingSection delay={0.4}>
              <PersonalTab
                key={personal.id}
                personal={personal}
                isSelected={personal.id === selectedPersonalId}
                onClick={togglePersonal}
                isHovered={hoveredPersonalId === personal.id}
                setHoveredPersonalId={setHoveredPersonalId}
              />
            </SmoothLoadingSection>
          ))}
        </div>
      </div>
      <div className="w-full md:w-3/5 flex justify-center items-start">
        {selectedPersonal ? (
          <PersonalTargetShowcase personal={selectedPersonal} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {personals.map((personal, index) => (
              <SmoothLoadingSection delay={0.2}>
                <PersonalShowcase
                  key={personal.id}
                  personal={personal}
                  index={index}
                  personals={personals}
                  onClick={togglePersonal}
                  isHovered={hoveredPersonalId === personal.id}
                  uniHovered={uniHovered}
                  setUniHovered={setUniHovered}
                  setHoveredPersonalId={setHoveredPersonalId}
                />
              </SmoothLoadingSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Personal;
