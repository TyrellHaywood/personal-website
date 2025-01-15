"use client";

// dependencies
import { useEffect, useState } from "react";
import communities from "@/components/Community/CommunityData";

// components
import CommunityTab from "@/components/Community/CommunityTab";
import CommunityShowcase from "@/components/Community/CommunityShowcase";
import CommunityTargetShowcase from "@/components/Community/CommunityTarget";
import CircleGreen from "@/components/Shared/CircleGreen";
import CircleRed from "@/components/Shared/CircleRed";
import SectionDescription from "@/components/Shared/SectionDescription";

// smooth loading element
import SmoothLoadingSection from "@/components/SmoothLoadingElement";

const Community = () => {
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

  // find the currently selected community
  const selectedCommunity = communities.find(
    (community) => community.id === selectedCommunityId
  );

  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-start my-[100px]">
      {/* left Column */}
      <div className="w-[90vw] md:w-1/4 md:sticky top-6 self-start">
        <SmoothLoadingSection delay={0}>
          <div className="flex flex-row space-x-[15px]">
            <CircleGreen />
            <CircleRed />
          </div>
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.1}>
          <h2 className="h-font my-[25px] text-2xl lg:text-4x">Community</h2>
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.2}>
          <SectionDescription description="I love working with, learning from, and inspiring action in others. I’m most excited when surrounded by people who inspire me!!" />
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.3}>
          <div className="w-full mb-[25px] md:mb-0">
            {communities.map((community) => (
              <CommunityTab
                key={community.id}
                community={community}
                isSelected={community.id === selectedCommunityId}
                onClick={toggleCommunity}
                isHovered={hoveredCommunityId === community.id}
                setHoveredCommunityId={setHoveredCommunityId}
              />
            ))}
          </div>
        </SmoothLoadingSection>
      </div>

      {/* right Column */}
      <div className="w-full md:w-3/4 flex justify-center items-start">
        {selectedCommunity ? (
          <CommunityTargetShowcase
            community={selectedCommunity}
            isHovered={hoveredCommunityId === selectedCommunity.id}
          />
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-14 md:ml-12">
            {communities.map((community, index) => (
              <SmoothLoadingSection delay={0.4}>
                <CommunityShowcase
                  key={community.id}
                  community={community}
                  index={index}
                  communities={communities}
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
