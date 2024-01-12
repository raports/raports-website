import { BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoGithub, BiLogoTelegram, BiLogoGmail } from "react-icons/bi";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contacts", label: "Contacts" },
];

export const socialLinks = [
  {
    id: 1,
    label: "Facebook",
    icon: BiLogoFacebookCircle,
    url: "https://www.facebook.com/ramis.khasianov",
  },
  {
    id: 2,
    label: "Linkedin",
    icon: BiLogoLinkedinSquare,
    url: "https://linkedin.com/in/ramis-khasianov-a254aa60",
  },
  {
    id: 3,
    label: "Github",
    icon: BiLogoGithub,
    url: "https://github.com/raports",
  },
];
export const contactDetails = [
  {
    id: 1,
    icon: BiLogoGmail,
    text: "ramis.khasianov@raports.net",
  },
  {
    id: 2,
    icon: BiLogoTelegram,
    text: "@raports",
  },
];
