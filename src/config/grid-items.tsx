import { useTheme } from "next-themes";

export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType = "social" | "project" | "experience" | "skill";

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
}

export const gridItems: GridItemInterface[] = [
  {
    layout: "1x2",
    type: "social",
    title: "GitHub",
    icon: "/icons/github-dark.png",
    username: "NimBuzz01",
    color: "#24292e",
    buttonTitle: "Visit Profile",
    buttonLink: "https://github.com/NimBuzz01",
  },
  {
    layout: "1x2",
    type: "social",
    title: "LinkedIn",
    icon: "/icons/linkedin.png",
    username: "niamatm",
    color: "#0077b5",
    buttonTitle: "Connect",
    buttonLink: "https://www.linkedin.com/in/niamatm/",
  },
  {
    layout: "2x2",
    type: "social",
    title: "WSO2",
    icon: "/icons/wso2.png",
    description:
      "Software Engineer Intern 2022-2023. Worked on various web development projects.",
    color: "#28a745",
  },
  {
    layout: "2x4",
    type: "skill",
    title: "React",
    icon: "/icons/github-white.png",
    description: "Proficient in React development.",
    color: "#61dafb",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Maps",
    icon: "/icons/github-dark.png",
    username: "jane_doe",
    color: "#0e76a8",
    buttonTitle: "Connect",
    buttonLink: "https://linkedin.com/in/jane_doe",
  },
  {
    layout: "1x2",
    type: "project",
    title: "Button",
    icon: "/icons/github-dark.png",
    color: "#ff9800",
    buttonTitle: "Shop Now",
    buttonLink: "https://example.com/shop",
  },
  {
    layout: "2x1",
    type: "project",
    title: "open-healthcare-sandbox-v3",
    icon: "/icons/github-dark.png",
    buttonLink: "https://github.com/NimBuzz01/open-healthcare-sandbox-v3",
  },
  {
    layout: "2x1",
    type: "project",
    title: "cds-hooks-sandbox-2.0",
    icon: "/icons/github-dark.png",
    buttonLink: "https://github.com/NimBuzz01/cds-hooks-sandbox-2.0",
  },
  {
    layout: "2x2",
    type: "project",
    title: "ZRI Adventures",
    icon: "/icons/zri.png",
    description:
      "Worked on both frontend and backend development using Next.js and Strapi CMS",
    buttonLink: "https://zriadventures.com",
    buttonTitle: "Visit Website",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Shoe-Store-Website",
    icon: "/icons/github-dark.png",
    buttonLink: "https://github.com/NimBuzz01/Shoe-Store-Website",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Grama-Check-Front-End-2.0",
    icon: "/icons/github-dark.png",
    buttonLink: "https://github.com/NimBuzz01/Grama-Check-Front-End-2.0",
  },
];
