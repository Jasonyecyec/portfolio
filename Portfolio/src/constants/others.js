import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoJava } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiSpringboot, SiSpring } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { BsGit } from "react-icons/bs";
import { AiFillApi } from "react-icons/ai";
import { BiLogoFigma } from "react-icons/bi";
import { SiCsharp } from "react-icons/si";
import SpringBoot from "@/assets/spring_boot.png";
import Java from "@/assets/java.png";
import Javascript from "@/assets/javascript.png";
import ReactJS from "@/assets/react.js.png";
import Spring from "@/assets/spring.png";
import Tailwind from "@/assets/tailwind.png";
import PHP from "@/assets/php.png";
import RestAPI from "@/assets/apilogo.png";
import GitLogo from "@/assets/gitlogo.png";
import MySQL from "@/assets/mysql.png";
import Bootstrap from "@/assets/bootstrap.png";
import Figma from "@/assets/figma.png";
import Csharp from "@/assets/csharp.png";
import Github from "@/assets/github_logo.png";

export const socials = [
  {
    position: 1,
    url: "https://www.linkedin.com/in/jason-yecyec-74545a201/",
    Icon: AiFillLinkedin,
  },
  {
    position: 2,
    url: "https://github.com/Jasonyecyec",
    Icon: AiFillGithub,
  },
  {
    position: 3,
    url: "https://mail.google.com/mail/u/0/#inbox",
    Icon: BiLogoGmail,
  },

  {
    position: 4,
    url: "https://www.facebook.com/jason.yecyec.5",
    Icon: BsFacebook,
  },
];

export const navigation = [
  {
    name: "About",
    url: "about",
  },
  {
    name: "Skills",
    url: "skills",
  },
  {
    name: "Projects",
    url: "projects",
  },
  {
    name: "Contact",
    url: "contact",
  },
];

export const technologies = [
  {
    Icon: IoLogoJavascript,
    name: "Javascript",
    img: Javascript,
    position: 1,
  },
  {
    Icon: BiLogoJava,
    name: "Java",
    img: Java,
    position: 2,
  },
  {
    Icon: FaReact,
    name: "React.js",
    img: ReactJS,
    position: 3,
  },
  {
    Icon: SiSpringboot,
    name: "Spring Boot",
    img: SpringBoot,
    position: 4,
  },
  {
    Icon: SiSpring,
    name: "Spring",
    img: Spring,
    position: 5,
  },
  {
    Icon: BiLogoTailwindCss,
    name: "Tailwind CSS",
    img: Tailwind,
    position: 6,
  },
  {
    Icon: SiPhp,
    name: "PHP",
    img: PHP,
    position: 7,
  },
  {
    Icon: SiMysql,
    name: "MySQL",
    img: MySQL,
    position: 8,
  },
  {
    Icon: BsFillBootstrapFill,
    name: "Bootstrap",
    img: Bootstrap,
    position: 9,
  },
  {
    Icon: BsGit,
    name: "Git",
    img: GitLogo,
    position: 10,
  },
  {
    Icon: AiFillGithub,
    name: "Github",
    img: Github,
    position: 11,
  },
  {
    Icon: AiFillApi,
    name: "REST API",
    img: RestAPI,
    position: 12,
  },
  {
    Icon: BiLogoFigma,
    name: "Figma",
    img: Figma,
    position: 13,
  },

  {
    Icon: SiCsharp,
    name: "C#",
    img: Csharp,
    position: 14,
  },
];
