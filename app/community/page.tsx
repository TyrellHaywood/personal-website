"use client";

import { useEffect, useState } from "react";

import CommunityTab from "@/components/Community/CommunityTab";
import CommunityShowcase from "@/components/Community/CommunityShowcase";
import CommunityTargetShowcase from "@/components/Community/CommunityTarget";
import CircleGreen from "@/components/CircleGreen";
import CircleRed from "@/components/CircleRed";

import SmoothLoadingSection from "@/components/SmoothLoadingElement";

interface Community {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

const Community = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [selectedCommunityId, setSelectedCommunityId] = useState<number | null>(
    null
  );
  const [uniHovered, setUniHovered] = useState(false);
  const [hoveredCommunityId, setHoveredCommunityId] = useState<number | null>(
    null
  );

  const toggleCommunity = (id: number) => {
    setSelectedCommunityId((currentId) => (currentId === id ? null : id));
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

  // find the currently selected community
  const selectedCommunity = communities.find(
    (community) => community.id === selectedCommunityId
  );

  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-start my-[100px]">
      <div className="w-[90vw] md:w-2/5">
        <SmoothLoadingSection delay={0}>
          <div className="flex flex-row space-x-[15px]">
            <CircleGreen />
            <CircleRed />
          </div>
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.2}>
          <h2 className="h-font my-[25px] text-2xl lg:text-4x">Community</h2>
        </SmoothLoadingSection>

        <div className="w-full">
          {communities.map((community) => (
            <SmoothLoadingSection delay={0.4}>
              <CommunityTab
                key={community.id}
                community={community}
                isSelected={community.id === selectedCommunityId}
                onClick={toggleCommunity}
                isHovered={hoveredCommunityId === community.id}
                setHoveredCommunityId={setHoveredCommunityId}
              />
            </SmoothLoadingSection>
          ))}
        </div>
      </div>
      <div className="w-full md:w-3/5 flex justify-center items-start">
        {selectedCommunity ? (
          <CommunityTargetShowcase community={selectedCommunity} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communities.map((community) => (
              <SmoothLoadingSection delay={0.2}>
                <CommunityShowcase
                  key={community.id}
                  community={community}
                  onClick={toggleCommunity}
                  isHovered={hoveredCommunityId === community.id}
                  uniHovered={uniHovered}
                  setUniHovered={setUniHovered}
                  setHoveredCommunityId={setHoveredCommunityId}
                />
              </SmoothLoadingSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;
