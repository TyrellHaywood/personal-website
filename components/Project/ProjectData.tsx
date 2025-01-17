export interface ProjectItem {
  id: number;
  type: string;
  title: string;
  image: string;
  logo: string;
  textArea: string | JSX.Element;
  year: number;
  description: string;
  link: string;
}

const projects: ProjectItem[] = [
  {
    id: 0,
    type: "",
    title: "Type Racer",
    image: "/images/projects/typeRacer.png",
    logo: "",
    textArea:
      "A simple type racer to work on your epic typing skills while listening to bossa nova",
    year: 2023,
    description:
      "A simple type racer to work on your epic typing skills while listening to bossa nova",
    link: "https://tyrellhaywood.github.io/typeRacer/",
  },
  {
    id: 1,
    type: "",
    title: "Hue Control",
    image: "/images/projects/HueControl.png",
    logo: "",
    textArea: (
      <>
        Hue Control started as an app to teach myself React JS. It features
        real-time fetching and updating of lights, using the{" "}
        <a
          href="https://developers.meethue.com/develop/get-started-2/"
          className="underline"
        >
          hue dev docs
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/benknight/hue-python-rgb-converter"
          className="underline"
        >
          this
        </a>{" "}
        as a guide for color conversions.
      </>
    ),
    year: 2023,
    description:
      "Philips Hue web app prototype to control lights and scenes. Used React, TS, and the Philips Hue API.",
    link: "https://github.com/TyrellHaywood/philips-hue-app",
  },
  {
    id: 3,
    type: "",
    title: "CUSEC 2025",
    image: "/images/projects/cusec2025.gif",
    logo: "/images/logos/cusec2025.svg",
    textArea:
      "The official website for the 2025 edition of the Canadian University Software Engineering Conference (CUSEC)",
    year: 2024,
    description:
      "The official website for the 2025 edition of the Canadian University Software Engineering Conference (CUSEC)",
    link: "https://2025.cusec.net/",
  },
  {
    id: 4,
    type: "",
    title: "Perlin Noise AV",
    image: "/images/projects/PerlinNoiseAVPrototypeG.gif",
    logo: "",
    textArea: (
      <>
        A web-based audio visualizer using p5.js. This is a learning log for
        working with the{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"
          className="underline"
        >
          Web Audio API
        </a>{" "}
        to gain audioContext from live instruments using an audio interface (my
        Focusrite Scarlette Solo), and creating dynamic noise Visuals in p5.js.
        <br />
        <br />
        <a
          href="https://en.wikipedia.org/wiki/Perlin_noise#:~:text=Perlin%20noise%20is%20a%20type,the%20creation%20of%20image%20textures."
          className="underline"
        >
          Perlin Noise
        </a>{" "}
        is a procedural generation algorithm invented by Ken Perlin in 1983. It
        can be used to generate things like terrain and textures procedurally,
        meaning without being made manually.
      </>
    ),
    year: 2024,
    description: "A web-based audio visualizer using p5.js",
    link: "https://github.com/TyrellHaywood/audio-visual-v1",
  },
  // {
  //   id: 0,
  //   type: "",
  //   title: "",
  //   image: "/images/projects/",
  //   logo: "",
  //   textArea:
  //     "",
  //   year: 0,
  //   description:
  //     "",
  //   link: "",
  // },
];

export default projects;
