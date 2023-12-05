import {
  FaLink,
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt 
} from "react-icons/fa";

// import {
//   SiLinktree
// } from "react-icons/si";

export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/PritomPaul99",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://www.linkedin.com/in/pritom-paul-92baa81aa/",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Contact me via email <pritompaul1920.4@gmail.com>",
    href: "mailto:pritompaul1920.4@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    index: 3,
    title: "Call me: +880 1718 382009",
    href: "tel:+8801718382009",
    icon: <FaPhoneAlt />,
  },
  {
    index: 4,
    title: "Find me on Linktree",
    href: "https://linktr.ee/Pritom_paul1920",
    icon: <FaLink />,
  },
  {
    index: 5,
    title: "Find me on Youtube",
    href: "https://www.youtube.com/channel/UCB-sghdcF0_aSq2gnlQdDYQ",
    icon: <FaYoutube />,
  },
];
