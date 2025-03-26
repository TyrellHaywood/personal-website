"use client";

import { motion } from "framer-motion";

import SmoothLoadingSection from "@/components/SmoothLoadingElement";

const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 80,
  duration: 0.5,
  delay: delay,
});

const Homepage = () => {
  return (
    <div className="mt-[100px] w-full flex flex-col justify-center items-center z-[999999]">
      <SmoothLoadingSection delay={0}>
        <div className="mb-[25px] w-full">
          <h1 className="h-font text-6xl text-left">Hello,</h1>
          <h1 className="h-font text-6xl text-left">I'm Tyrell!</h1>
        </div>
      </SmoothLoadingSection>

      <div className=" w-full flex flex-col justify-center text-left">
        <SmoothLoadingSection delay={0.2}>
          <motion.p className="p-font text-sm md:text-base mb-[15px] md:w-2/3">
            I’m in my second year studying{" "}
            <motion.a
              className="relative inline-block"
              initial="initial"
              whileHover="hover"
              animate="initial"
              href="https://carleton.ca/scs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CS @ Carleton University
              <motion.span
                transition={transitionConfig(0)}
                variants={{
                  hover: { height: "80%" },
                  initial: { height: "2px" },
                }}
                className=" absolute bottom-1 left-0 right-0 highlight opacity-80 -z-10 rounded-sm"
              />
            </motion.a>
            . This year I’ve joined{" "}
            <motion.a
              className="relative inline-block"
              initial="initial"
              whileHover="hover"
              animate="initial"
              href="https://2025.cusec.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CUSEC
              <motion.span
                transition={transitionConfig(0)}
                variants={{
                  hover: { height: "80%" },
                  initial: { height: "2px" },
                }}
                className=" absolute bottom-1 left-0 right-0 highlight opacity-80 -z-10 rounded-sm"
              />
            </motion.a>{" "}
            as{" "}
            <motion.a
              className="relative inline-block"
              initial="initial"
              whileHover="hover"
              animate="initial"
              href="https://2025.cusec.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Director of Technology
              <motion.span
                transition={transitionConfig(0)}
                variants={{
                  hover: { height: "80%" },
                  initial: { height: "2px" },
                }}
                className=" absolute bottom-1 left-0 right-0 highlight opacity-80 -z-10 rounded-sm"
              />
            </motion.a>{" "}
            for our 2025 conference. Lately, I’m excited about creating digital
            experiences that incorporate audio visuals, GIS, and user
            interactions.
          </motion.p>
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.4}>
          <p className="p-font text-sm md:text-base mb-[15px] md:w-2/3">
            Currently raising{" "}
            <motion.a
              className="relative inline-block"
              initial="initial"
              whileHover="hover"
              animate="initial"
              href="https://lu.ma/synchronize"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⍩Synchronize
              <motion.span
                transition={transitionConfig(0)}
                variants={{
                  hover: { height: "80%" },
                  initial: { height: "2px" },
                }}
                className=" absolute bottom-1 left-0 right-0 highlight opacity-80 -z-10 rounded-sm"
              />
            </motion.a>
            , a gathering of artists, engineers, researchers, and makers where
            we work on & share our passion projects.
          </p>
        </SmoothLoadingSection>
        <SmoothLoadingSection delay={0.4}>
          <p className="p-font text-sm md:text-base mb-[15px] md:w-2/3">
            Right now I’m working at the{" "}
            <motion.a
              className="relative inline-block"
              initial="initial"
              whileHover="hover"
              animate="initial"
              href="https://cims.carleton.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Carleton Immersive Media Studio (CIMS)
              <motion.span
                transition={transitionConfig(0)}
                variants={{
                  hover: { height: "80%" },
                  initial: { height: "2px" },
                }}
                className=" absolute bottom-1 left-0 right-0 highlight opacity-80 -z-10 rounded-sm"
              />
            </motion.a>{" "}
            as a Software Developer, helping build{" "}
            <motion.a
              className="relative inline-block"
              initial="initial"
              whileHover="hover"
              animate="initial"
              href="https://www.buildingtransformations.org/submissions/canada-s-digital-twin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canada’s Digital Twin
              <motion.span
                transition={transitionConfig(0)}
                variants={{
                  hover: { height: "80%" },
                  initial: { height: "2px" },
                }}
                className=" absolute bottom-1 left-0 right-0 highlight opacity-80 -z-10 rounded-sm"
              />
            </motion.a>
            , a web-based platform for visualizing and interacting with
            multi-scale geospatial data, building informational models, and 3D
            media. I'm using technologies like React / Next.js, and open-source
            tools such as MapLibre and Three.js for GIS and 3D model rendering.
          </p>
        </SmoothLoadingSection>
      </div>
    </div>
  );
};

export default Homepage;
