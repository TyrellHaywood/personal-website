export interface CommunityItem {
  id: number;
  title: string;
  image: string;
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
    textArea: "",
    year: 0,
    description: "",
    link: "",
  },
];

export default communities;
