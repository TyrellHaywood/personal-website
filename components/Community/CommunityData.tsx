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
    title: "Carleton Food Collective",
    image: "/images/community/cfc.png",
    logo: "/images/logos/cfc.png",
    textArea:
      "A student-run nonprofit organization rescuing food, offering free meals for the community to fight food insecurity",
    year: 2023,
    description:
      "A student-run nonprofit organization rescuing food, offering free meals for the community",
    link: "",
  },
  {
    id: 2,
    title: "⍩ Synchronize",
    image: "/images/community/synchronize3.jpg",
    logo: "/images/logos/synchronize.png",
    textArea: (
      <>
        Co-Founder and Host at Synchronize. Inspiring makers in Ottawa by
        running weekly co-working sessions @ Carleton University. A dedicated
        time to meet like-minded people and share ideas :D
        <br />
        <br />
        Learning how to build a community of passionate people making things
        they care about. Ottawa’s official{" "}
        <a
          href="https://www.socratica.info/"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Socratica
        </a>{" "}
        node.
        <br />
        <br />
        Check out our events{" "}
        <a
          href="https://lu.ma/calendar/manage/cal-W2eSnhNARlYQWqD"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        {""}!
      </>
    ),
    year: 2024,
    description:
      "Inspiring makers in Ottawa by running weekly co-working sessions @ Carleton University",
    link: "https://lu.ma/synchronize",
  },
  {
    id: 3,
    title: "Notion",
    image: "/images/community/notion_cl.jpeg",
    logo: "/images/logos/notion.png",
    textArea: (
      <>
        Notion Campus Leader @ Carleton University
      </>
    ),
    year: 2025,
    description:
      "Notion Campus Leader @ Carleton University",
    link: "/",
  },
  {
    id: 1,
    title: "CUSEC",
    image: "/images/community/cusec-team.png",
    logo: "/images/logos/cusec27.png",
    textArea: (
      <>
        Growing CUSEC, Canada’s largest student-run software engineering
        conference (with an incredible team) &lt;3
        <br />
        <br />
        Currently serving as the Director of Sponsors for our 2027 conference, helping to bring in sponsors to support our conference and provide opportunities for students to launch their careers.
        <br />
        <br />
        Previous Director of Speakers (2026), bringing meaningful, diverse perspectives from industry professionals, researchers, and tech leaders to speak at our 2026 conference.
        <br />
        <br />
        Previous Director of Technology (2025), responsible for building our 2025
        conference website. During the conference, I handled audio visuals,
        registration, and helped with speakers & sponsors.
      </>
    ),
    year: 2026,
    description:
      "Growing CUSEC, Canada’s largest student-run software engineering conference (with an incredible team) <3",
    link: "https://cusec.net/",
  },
];

export default communities;
