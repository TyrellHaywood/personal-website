"use client";

import Homepage from "./homepage/page";
import Projects from "./projects/page";
import Community from "./community/page";
import Personal from "./personal/page";
import Footer from "./footer/page";

import SmoothLoadingSection from "@/components/SmoothLoadingElement";

export default function Home() {
  return (
    <div className="w-[90%] m-auto flex flex-col justify-center items-center">
      <SmoothLoadingSection delay={0}>
        <Homepage />
      </SmoothLoadingSection>

      <SmoothLoadingSection delay={0}>
        <Projects />
      </SmoothLoadingSection>

      <SmoothLoadingSection delay={0}>
        <Community />
      </SmoothLoadingSection>

      <SmoothLoadingSection delay={0}>
        <Personal />
      </SmoothLoadingSection>

      <SmoothLoadingSection delay={0}>
        <Footer />
      </SmoothLoadingSection>
    </div>
  );
}
