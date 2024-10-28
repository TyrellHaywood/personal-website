"use client";

import { motion } from "framer-motion";

const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 80,
  duration: 0.5,
  delay: delay,
});

const Homepage = () => {
  return (
    <div className="mt-[100px] w-full flex flex-col justify-center items-center z-[999999]">
      <div className="mb-[25px] w-full">
        <h1 className="h-font text-6xl lg:text-8xl text-left">Hello,</h1>
        <h1 className="h-font text-6xl lg:text-8xl text-left">I'm Tyrell!</h1>
      </div>
      <div className=" w-full flex flex-col justify-center text-left">
        <motion.p className="p-font text-sm md:text-base lg:text-xl mb-[15px] md:w-2/3">
          I’m in my{" "}
          <motion.span
            className="relative inline-block"
            initial="initial"
            whileHover="hover"
            animate="initial"
          >
            second year
            <motion.span
              transition={transitionConfig(0)}
              variants={{
                hover: { height: "80%" },
                initial: { height: "2px" },
              }}
              className=" absolute bottom-1 left-0 right-0 highlight opacity-80 -z-10 rounded-sm"
            />
          </motion.span>{" "}
          studying{" "}
          <motion.span
            className="relative inline-block"
            initial="initial"
            whileHover="hover"
            animate="initial"
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
          </motion.span>
          . This year I’ve joined{" "}
          <motion.span
            className="relative inline-block"
            initial="initial"
            whileHover="hover"
            animate="initial"
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
          </motion.span>{" "}
          as{" "}
          <motion.span
            className="relative inline-block"
            initial="initial"
            whileHover="hover"
            animate="initial"
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
          </motion.span>{" "}
          for our 2025 conference. Lately, I’m excited about creating
          interactive digital experiences that incorporate live audio inputs,
          large datasets, and user interactions.
        </motion.p>
        <p className="p-font text-sm md:text-base lg:text-xl mb-[15px] md:w-2/3">
          Currently raising{" "}
          <motion.span
            className="relative inline-block"
            initial="initial"
            whileHover="hover"
            animate="initial"
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
          </motion.span>
          , a gathering of artists, engineers, researchers, and makers where we
          work on & share our passion projects.
        </p>
        <p className="p-font text-sm md:text-base lg:text-xl mb-[15px] md:w-2/3">
          Right now I’m working at the{" "}
          <motion.span
            className="relative inline-block"
            initial="initial"
            whileHover="hover"
            animate="initial"
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
          </motion.span>
          , helping build{" "}
          <motion.span
            className="relative inline-block"
            initial="initial"
            whileHover="hover"
            animate="initial"
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
          </motion.span>
          , a web-based platform for visualizing and interacting with
          multi-scale geospatial data, building informational models, and 3D
          media. I'm using technologies like React / Next.js, and open-source
          tools such as MapLibre and Three.js for GIS and 3D model rendering.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
