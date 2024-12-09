"use client";

//dependencies
import { useEffect, useState } from "react";

//components
import PersonalTab from "@/components/Personal/PersonalTab";
import PersonalShowcase from "@/components/Personal/PersonalShowcase";
import PersonalTargetShowcase from "@/components/Personal/PersonalTarget";
import CircleGreen from "@/components/Shared/CircleGreen";
import CircleRed from "@/components/Shared/CircleRed";
import SectionDescription from "@/components/Shared/SectionDescription";

//smooth loading element
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
      {/* left Column */}
      <div className="w-[90vw] md:w-2/5 md:sticky top-6 self-start">
        <SmoothLoadingSection delay={0}>
          <div className="flex flex-row space-x-[15px]">
            <CircleRed />
            <CircleGreen />
          </div>
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.2}>
          <h2 className="h-font my-[25px] text-2xl lg:text-4x">Personal</h2>
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.4}>
          <SectionDescription description="something about why this section is meaningful or important... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros ligula, condimentum sit amet orci ut, egestas efficitur magna. " />
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.6}>
          <div className="w-full mb-[25px] md:mb-0">
            {personals.map((personal) => (
              <PersonalTab
                key={personal.id}
                personal={personal}
                isSelected={personal.id === selectedPersonalId}
                onClick={togglePersonal}
                isHovered={hoveredPersonalId === personal.id}
                setHoveredPersonalId={setHoveredPersonalId}
              />
            ))}
          </div>
        </SmoothLoadingSection>
      </div>

      {/* right Column */}
      <div className="w-full md:w-3/5 flex justify-center items-start">
        {selectedPersonal ? (
          <PersonalTargetShowcase
            personal={selectedPersonal}
            isHovered={hoveredPersonalId === selectedPersonal.id}
          />
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-14 md:ml-12">
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
