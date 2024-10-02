"use client";

import { useEffect, useState } from "react";

import CommunityTab from "@/components/CommunityTab";
import CommunityShowcase from "@/components/CommunityShowcase";
import CommunityTargetShowcase from "@/components/CommunityTarget";
import CircleGreen from "@/components/CircleGreen";
import CircleRed from "@/components/CircleRed";

interface Community {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

const Community = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [currentCommunity, setCurrentCommunity] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const toggleProject = (id: number) => {
    setCurrentId(id);
    setCurrentCommunity((previousState) => !previousState);
  };

  useEffect(() => {
    const fetchCommunties = async () => {
      try {
        const response = await fetch("/api/community");
        const data = await response.json();
        setCommunities(data);
      } catch (error) {
        console.error("Failed to fetch communities:", error);
      }
    };

    fetchCommunties();
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-start my-[100px]">
      <div className="w-[90vw] md:w-2/5">
        <div className="flex flex-row space-x-[15px]">
          <CircleGreen />
          <CircleRed />
        </div>
        <h2 className="h-font my-[25px] text-2xl lg:text-4x">Community</h2>
        <div className="w-full">
          {communities.map((community) => (
            <CommunityTab
              key={community.id}
              community={community}
              onClick={toggleProject}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center md:justify-end items-center">
        {!currentCommunity
          ? communities.map((community) => (
              <CommunityShowcase key={community.id} community={community} />
            ))
          : communities.map((communityTarget) => (
              <CommunityTargetShowcase
                key={communityTarget.id}
                communityTarget={communityTarget}
              />
            ))}
      </div>
    </div>
  );
};

export default Community;
