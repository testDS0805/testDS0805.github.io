import moment from 'moment/moment';

export const PortFolioFrench = [
  {
    title: "Gachi++ - Planificateur de tâches & Réseau social",
    date: "Temps de création 2 mois",
    description: "",
    listItemList: [],
    image: `src/assets/images/gachiLogo.jpg`,
    imageLabel: "Texte de l'image",
    onClickGoTo: "aboutme",
  },
];

export const mainFeaturedPostFrench = {
  title: "Développeur Full Stack Ambitieux",
  description:
    "En maîtrisant React, Java et SQL, David Simard est impatient de contribuer au succès de vos projets.",
  image: "https://source.unsplash.com/random?computer",
  imageText: "Description de l'image principale",
  linkText: "Continuer la lecture...",
};

export const featuredPostsFrench = [
  {
    title: "Disponible à l'embauche",
    date: `${moment().format("MMM DD")} - Statut professionnel`,
    description:
      "À la recherche de la prochaine étape ! Mon contrat de travail se termine dans environ un mois. J'ai hâte de relever de nouveaux défis.",
    image: "https://source.unsplash.com/random?free",
    imageLabel: "Texte de l'image",
    onClickGoTo: '',
    type: 'careerStatus'
  },
  {
    title: "Fin réussie d'un projet",
    date: "Nov 11",
    description:
      "Mon travail avec HanSung Enginering touche à sa fin. Chaleureux remerciements à mon manager et à mes collègues pour cette année entière d'expérience stimulante et enrichissante.",
    image: "https://source.unsplash.com/random?work",
    imageLabel: "Texte de l'image",
    onClickGoTo: 'Carrière'
  },
  {
    title: "Version 1.0 de cette page personnelle est en ligne",
    date: "16 Oct",
    description:
      "C'est avec plaisir que je partage avec vous mon travail et mon expérience. J'espère que cela vous inspire. N'hésitez pas à m'envoyer un e-mail ou à rejoindre mon GitHub.",
    image: "https://source.unsplash.com/random?work2",
    imageLabel: "Texte de l'image",
    onClickGoTo: 'aboutme'
  },
];
