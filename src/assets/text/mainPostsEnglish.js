import moment from 'moment/moment';

export const PortFolioEnglish = [
  {
    title: "Gachi++ - Task planner & Social Network",
    date: "Creation time 2 months",
    description: "",
    listItemList: [],
    image: `src/assets/images/gachiLogo.jpg`,
    imageLabel: "Image Text",
    onClickGoTo: "aboutme",
  },
];

export const mainFeaturedPostEnglish = {
  title: "Ambitious Full Stack Developer ",
  description:
    "Versed in React, Java and Sql, David Simard is looking forward to give its contribution to the success of your projects.",
  image: "https://source.unsplash.com/random?computer",
  imageText: "main image description",
  linkText: "Continue reading…",
};

export const featuredPostsEnglish = [
  {
    title: "Avaiable to Hire",
    date: `${new moment().format("MMM DD")} - Career Status`,
    description:
      "Looking for the next step! My employment contract will end in about month. Looking forward to new challenges.",
    image: "https://source.unsplash.com/random?free",
    imageLabel: "Image Text",
    onClickGoTo:'',
    type:'careerStatus'
  },
  {
    title: "Successful end of a project",
    date: "Nov 11",
    description:
      "My work with HanSung Enginering is close to an end. Warm thanks to my manager and collegues for this whole year of challenging and Enriching experience.",
    image: "https://source.unsplash.com/random?work",
    imageLabel: "Image Text",
    onClickGoTo:'Career'

  },
  {
    title: "Version 1.0 of this personal page is online",
    date: "Oct 16",
    description:
      "It is my pleasure to share with you my work and experience. I hope it brings you inspirations. Feel free to send me a mail or join my github",
    image: "https://source.unsplash.com/random?work2",
    imageLabel: "Image Text",
    onClickGoTo:'aboutme'

  },
];
