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
            I’m in my third year studying{" "}
            <motion.a
              className="relative inline-block"
              initial="initial"
              whileHover="hover"
              animate="initial"
              href="https://carleton.ca/scs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Computer Science @ Carleton University
              <motion.span
                transition={transitionConfig(0)}
                variants={{
                  hover: { height: "80%" },
                  initial: { height: "2px" },
                }}
                className=" absolute bottom-1 left-0 right-0 highlight opacity-80 -z-10 rounded-sm"
              />
            </motion.a>
            . This year I’ve returned to{" "}
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
              Director of Speakers
              <motion.span
                transition={transitionConfig(0)}
                variants={{
                  hover: { height: "80%" },
                  initial: { height: "2px" },
                }}
                className=" absolute bottom-1 left-0 right-0 highlight opacity-80 -z-10 rounded-sm"
              />
            </motion.a>{" "}
            for our 2026 conference. Lately, I'm excited about creating digital experiences that focus on thoughtful user interfaces, audio experiences, machine learning, and creative coding.
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
            I've recently joined{" "}
            <motion.a
              className="relative inline-block"
              initial="initial"
              whileHover="hover"
              animate="initial"
              href="https://fellowship.mlh.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Major League Hacking (MLH)
              <motion.span
                transition={transitionConfig(0)}
                variants={{
                  hover: { height: "80%" },
                  initial: { height: "2px" },
                }}
                className=" absolute bottom-1 left-0 right-0 highlight opacity-80 -z-10 rounded-sm"
              />
            </motion.a>{" "}
            as a Software Engineering Fellow, working on the{" "}
            <motion.a
              className="relative inline-block"
              initial="initial"
              whileHover="hover"
              animate="initial"
              href="https://github.com/apache/airflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apache Airflow
              <motion.span
                transition={transitionConfig(0)}
                variants={{
                  hover: { height: "80%" },
                  initial: { height: "2px" },
                }}
                className=" absolute bottom-1 left-0 right-0 highlight opacity-80 -z-10 rounded-sm"
              />
            </motion.a>{" "}
            Platform. 
            {" "}
            {" "}
            I’m also working at the{" "}
            <motion.a
              className="relative inline-block"
              initial="initial"
              whileHover="hover"
              animate="initial"
              href="https://cims.carleton.ca/project/Digital_Twin_Prototype"
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
            as a fullstack Software Developer Intern, helping build{" "}
            <motion.a
              className="relative inline-block"
              initial="initial"
              whileHover="hover"
              animate="initial"
              href="https://collabdt.org/home"
              
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
            .
          </p>
        </SmoothLoadingSection>
      </div>
    </div>
  );
};

export default Homepage;
