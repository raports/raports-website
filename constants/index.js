import {
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoTelegram,
  BiLogoGmail,
} from "react-icons/bi";

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
    text: "@ramis_raports",
  },
];

export const services = [
  {
    id: 1,
    title: "BI Analytics",
    image: "/images/aboutBi.png",
    description:
      "Crafting data-driven narratives is my forte. As a BI Analyst and Developer, I wield the power of Power BI, Tableau, and Superset to transform raw data into actionable insights. From dynamic dashboards that captivate to robust analytics solutions, I specialize in elevating businesses through the art of intelligent data visualization.",
  },
  {
    id: 2,
    title: "Data Engeneering",
    image: "/images/aboutData.png",
    description:
      "Mastering the orchestration of data flows, I wield proficiency in Apache Airflow and Apache NiFi to architect robust, automated pipelines. My database prowess spans across Postgres, SQL Server, Clickhouse, and Greenplum, ensuring seamless integration and optimization at every data touchpoint.",
  },
  {
    id: 3,
    title: "Full-stack development",
    image: "/images/aboutFullstack.png",
    description:
      "Mastering Python frameworks, I specialize in crafting dynamic applications and microservices using Django and FastAPI. On the front end, my expertise extends to React and Next.js, allowing me to seamlessly create full-stack applications that blend functionality with an exceptional user experience.",
  },
];

export const skills = [
  { id: 1, title: "Power BI", level: 5.0, image: "/images/skills/powerbi.png" },
  { id: 2, title: "Tableau", level: 4.5, image: "/images/skills/tableau.png" },
  {
    id: 3,
    title: "Superset",
    level: 4.0,
    image: "/images/skills/superset.png",
  },
  { id: 4, title: "Python", level: 4.5, image: "/images/skills/python.png" },
  { id: 5, title: "Django", level: 4.0, image: "/images/skills/django.png" },
  { id: 6, title: "FastAPI", level: 4.0, image: "/images/skills/fastapi.png" },
  { id: 7, title: "React", level: 4.0, image: "/images/skills/react.png" },
  { id: 8, title: "Next.js", level: 4.0, image: "/images/skills/nextjs.png" },
  {
    id: 9,
    title: "Postgres",
    level: 4.5,
    image: "/images/skills/postgres.png",
  },
  {
    id: 10,
    title: "SQL Server",
    level: 5.0,
    image: "/images/skills/sqlserver.png",
  },
  {
    id: 11,
    title: "Clickhouse",
    level: 4.0,
    image: "/images/skills/clickhouse.png",
  },
  {
    id: 12,
    title: "Greenplum",
    level: 3.5,
    image: "/images/skills/greenplum.png",
  },
  { id: 13, title: "Airflow", level: 4.5, image: "/images/skills/airflow.png" },
  { id: 14, title: "NiFi", level: 4.5, image: "/images/skills/nifi.png" },
  { id: 15, title: "Spark", level: 3.5, image: "/images/skills/spark.png" },
  { id: 16, title: "Docker", level: 4.5, image: "/images/skills/docker.png" },
  {
    id: 17,
    title: "Kubernetes",
    level: 3.5,
    image: "/images/skills/kubernetes.png",
  },
  { id: 21, title: "HTML", level: 4.5, image: "/images/skills/html.png" },
  { id: 22, title: "CSS", level: 4.0, image: "/images/skills/css.png" },
  {
    id: 23,
    title: "Java Script",
    level: 4.0,
    image: "/images/skills/javascript.png",
  },
  { id: 24, title: "Kafka", level: 4.0, image: "/images/skills/kafka.png" },
  { id: 25, title: "Figma", level: 4.0, image: "/images/skills/figma.png" },
  { id: 26, title: "MongoDB", level: 4.0, image: "/images/skills/mongodb.png" },
  { id: 27, title: "Git", level: 4.5, image: "/images/skills/git.png" },
];

export const timeline = [
  {
    id: 1,
    title: "Team Lead BI & Data services at Uralchem",
    duration: "2020 - Present",
    description:
      "Building Enterprise DWH from ground up and providing all business units with centralized analytics and data services",
  },
  {
    id: 2,
    title: "Data Analyst at Renaissance Insurance",
    duration: "2019 - 2020",
    description: "Analysis of HR processes and reporting automation.",
  },
  {
    id: 3,
    title: "Data Analyst at Lamoda",
    duration: "2016 - 2019",
    description:
      "Analysis of HR, Finance and Operations processes. Reporting automation project management",
  },
  {
    id: 4,
    title: "Junior Analyst at Yandex",
    duration: "2016",
    description:
      "Compiling and preparing comprehensive reports for the Finance and HR departments",
  },
  {
    id: 5,
    title: "Degree in Applied Social Psychology at HSE",
    duration: "2008 - 2014",
    description:
      "Studied designing and conducting surveys and experiments with emphasis on data processing and analysis of research findings.",
  },
];

export const works = [
  {
    id: 1,
    title: "Flowers App Metrics",
    image: "/images/works/flowersapp.png",
    description:
      "Overview of imaginary Flower App Metrics - Traffic, Conversion, Cohort Analysis",
    url: "https://public.tableau.com/views/FlowersAppMetrics/sheet15?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
  },
];
