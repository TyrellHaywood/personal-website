import React from "react";

const Homepage = () => {
  return (
    <div className="mt-[100px] w-[90%] flex flex-col justify-center items-center">
      <div className="mb-[25px]">
        <h1 className="h-font text-6xl text-left">Hello,</h1>
        <h1 className="h-font text-6xl">I'm Tyrell</h1>
      </div>
      <div className="bg-blue-300 w-full flex flex-col items-center text-left">
        <p className="p-font text-xl mb-[15px]">
          I’m in my second year studying CS @ Carleton University. This year
          I’ve joined CUSEC as Director of Technology for our 2025 conference.
          Lately, I’m excited about creating interactive digital experiences
          that incorporate live audio inputs, large datasets, and user
          interactions.
        </p>
        <p className="p-font text-xl mb-[15px]">
          Currently raising ⍩Synchronize, a gathering of artists, engineers,
          researchers, and makers where we work on & share our passion projects.
        </p>
        <p className="p-font text-xl mb-[15px]">
          Right now I’m working at the Carleton Immersive Media Studio (CIMS),
          helping build Canada’s Digital Twin, a web-based platform for
          visualizing and interacting with multi-scale geospatial data, building
          informational models, and 3D media. The platform uses technologies
          like React / Next.js, and open-source tools such as MapLibre and
          Three.js for GIS and 3D model rendering.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
