export interface PersonalItem {
  id: number;
  title: string;
  image: string;
  logo: string;
  textArea: string | JSX.Element;
  year: number;
  description: string;
  link: string;
}

const personals: PersonalItem[] = [
  {
    id: 0,
    title: "Bass Guitar",
    image: "",
    logo: "",
    textArea: (
      <>
        I play bass! I mostly post on my{" "}
        <a
          href="https://www.instagram.com/stories/highlights/17851867422044298/"
          className="underline"
        >
          instagram
        </a>{" "}
        for now
      </>
    ),
    year: 0,
    description: "I play bass!",
    link: "",
  },
  // {
  //   id: 0,
  //   title: "",
  //   image: "",
  //   logo: "",
  //   textArea: "",
  //   year: 0,
  //   description: "",
  //   link: "",
  // },
];

export default personals;
