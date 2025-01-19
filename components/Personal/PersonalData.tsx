export interface PersonalItem {
  id: number;
  title: string;
  image: string;
  logo: string;
  textArea: string | JSX.Element;
  year: number | string;
  description: string;
  link: string;
}

const personals: PersonalItem[] = [
  {
    id: 0,
    title: "Reading",
    image: "/images/personal/nature.png",
    logo: "",
    textArea:
      "Whether it’s the most recent fantasy novel I’ve acquired or consuming strangers thoughts on the internet. Send me something good to read!!",
    year: "<3",
    description:
      "Whether it’s the most recent fantasy novel I’ve acquired or consuming strangers thoughts on the internet. Send me something good to read!!",
    link: "",
  },
  {
    id: 1,
    title: "Bass Guitar",
    image: "/images/personal/bass.gif",
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
    year: 2022,
    description: "I play bass!",
    link: "",
  },
  {
    id: 2,
    title: "Cooking",
    image: "/images/personal/bagels.png",
    logo: "",
    textArea: "I like to make foods, especially breads :D",
    year: 2023,
    description: "I like to make foods, especially breads :D",
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
