import { getDateString } from "../lib/utilities";

const projectsData = [
  {
    id: 1,
    title: "Slideshow (Carousel) Component",
    description:
      "A carousel/slideshow is used to cycle through image elements. It's usecase is mostly used in E-Commerce websites to display ad campaigns.",
    date: getDateString(2, 1, 2022),
    route: "/slideshow",
  },
  {
    id: 2,
    title: "Accordian",
    description:
      "Accordions are useful when you want to toggle between hiding and showing large amount of content:",
    date: getDateString(3, 1, 2022),
    route: "/accordion",
  },
];

export default projectsData;
