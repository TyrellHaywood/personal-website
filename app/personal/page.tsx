"use client";

import { useEffect, useState } from "react";

import PersonalTab from "@/components/Personal/PersonalTab";
import PersonalShowcase from "@/components/Personal/PersonalShowcase";
import PersonalTargetShowcase from "@/components/Personal/PersonalTarget";
import CircleGreen from "@/components/CircleGreen";
import CircleRed from "@/components/CircleRed";

interface Personal {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

const Personal = () => {
  const [personals, setPersonals] = useState<Personal[]>([]);
  const [currentPersonal, setCurrentPersonal] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const toggleProject = (id: number) => {
    setCurrentId(id);
    setCurrentPersonal((previousState) => !previousState);
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

  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-start my-[100px]">
      <div className="w-[90vw] md:w-2/5">
        <div className="flex flex-row space-x-[15px]">
          <CircleRed />
          <CircleGreen />
        </div>
        <h2 className="h-font my-[25px] text-2xl lg:text-4x">Personal</h2>
        <div className="w-full">
          {personals.map((personal) => (
            <PersonalTab
              key={personal.id}
              personal={personal}
              onClick={toggleProject}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center md:justify-end items-center">
        {!currentPersonal
          ? personals.map((personal) => (
              <PersonalShowcase key={personal.id} personal={personal} />
            ))
          : personals.map((personalTarget) => (
              <PersonalTargetShowcase
                key={personalTarget.id}
                personalTarget={personalTarget}
              />
            ))}
      </div>
    </div>
  );
};

export default Personal;
