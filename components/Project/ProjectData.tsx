export interface ProjectItem {
  id: number;
  type: string;
  title: string;
  image: string;
  logo: string;
  textArea: string;
  year: number;
  description: string;
  link: string;
}

const projects: ProjectItem[] = [
  {
    id: 0,
    type: "",
    title: "",
    image: "",
    logo: "",
    textArea: "",
    year: 0,
    description: "",
    link: "",
  },
];

export default projects;
