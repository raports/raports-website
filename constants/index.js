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

export const aboutPoints = [
  {
    id: 1,
    title: "BI Dashboards & Analytics",
    image: "/images/aboutBi.png",
    description: "Crafting data-driven narratives is my forte. As a BI Analyst and Developer, I wield the power of Power BI, Tableau, and Superset to transform raw data into actionable insights. From dynamic dashboards that captivate to robust analytics solutions, I specialize in elevating businesses through the art of intelligent data visualization."
  },
  {
    id: 2,
    title: "Data Engeneering",
    image: "/images/aboutData.png",
    description: "Mastering the orchestration of data flows, I wield proficiency in Apache Airflow and Apache NiFi to architect robust, automated pipelines. My database prowess spans across Postgres, SQL Server, Clickhouse, and Greenplum, ensuring seamless integration and optimization at every data touchpoint."
  },
  {
    id: 3,
    title: "Full-stack development",
    image: "/images/aboutFullstack.png",
    description: "Mastering Python frameworks, I specialize in crafting dynamic applications and microservices using Django and FastAPI. On the front end, my expertise extends to React and Next.js, allowing me to seamlessly create full-stack applications that blend functionality with an exceptional user experience."
  }
];
