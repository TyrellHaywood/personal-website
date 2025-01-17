export interface CommunityItem {
  id: number;
  title: string;
  image: string;
  logo: string;
  textArea: string | JSX.Element;
  year: number;
  description: string;
  link: string;
}

const communities: CommunityItem[] = [
  {
    id: 0,
    title: "CUSEC",
    image: "/images/community/cusec-team.png",
    logo: "/images/logos/cusec2025.svg",
    textArea: (
      <>
        Growing CUSEC, Canada’s largest student-run software engineering
        conference (with an incredible team) &lt;3
        <br />
        <br />
        Current Director of Technology, responsible for building our 2025
        conference website. During the conference, I handled audio visuals,
        registration, and helped with speakers & sponsors.
      </>
    ),
    year: 2024,
    description:
      "Growing CUSEC, Canada’s largest student-run software engineering conference (with an incredible team) <3",
    link: "https://2025.cusec.net/",
  },
  {
    id: 1,
    title: "⍩ Synchronize",
    image: "/images/community/synchronize2.JPG",
    logo: "/images/logos/synchronize.png",
    textArea: (
      <>
        Inspiring makers in Ottawa by running weekly co-working sessions @
        Carleton University. A dedicated time to meet like-minded people and
        share ideas :D
        <br />
        <br />
        Learning how to build a community of passionate people making things
        they care about. Ottawa’s official{" "}
        <a href="https://www.socratica.info/" className="underline">
          Socratica
        </a>{" "}
        node
      </>
    ),
    year: 2024,
    description:
      "Inspiring makers in Ottawa by running weekly co-working sessions @ Carleton University",
    link: "https://www.instagram.com/synchronize.now/",
  },
];

export default communities;
