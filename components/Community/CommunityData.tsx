export interface CommunityItem {
  id: number;
  title: string;
  image: string;
  logo: string;
  textArea: string;
  year: number;
  description: string;
  link: string;
}

const communities: CommunityItem[] = [
  {
    id: 0,
    title: "",
    image: "",
    logo: "",
    textArea: "",
    year: 0,
    description: "",
    link: "",
  },
];

export default communities;
