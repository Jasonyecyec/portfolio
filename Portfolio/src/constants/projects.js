import ReactBank from "@/assets/react_bank.png";
import Ribrary from "@/assets/Ribrary.png";
import Patient from "@/assets/patient.jpg";
import QCUFMS from "@/assets/qcu-fms/preview.png";

//USER SCREENSHOT
import StudentHome from "@/assets/qcu-fms/user/student-home.jpg";
import AvailableFacility from "@/assets/qcu-fms/user/available-facility.jpg";
import Login from "@/assets/qcu-fms/user/login.jpg";
import Register from "@/assets/qcu-fms/user/register.jpg";
import ForgotPass from "@/assets/qcu-fms/user/forgot-pass.jpg";
import CreateAcc from "@/assets/qcu-fms/user/create-acc.jpg";
import OTP from "@/assets/qcu-fms/user/otp.jpg";
import Scan from "@/assets/qcu-fms/user/scan.jpg";
import Report from "@/assets/qcu-fms/user/report.jpg";
import SubmitReport from "@/assets/qcu-fms/user/submit-report.jpg";

export const projects = [
  {
    name: "QCU-FMS",
    info: "A comprehensive system designed to simplify issue reporting, event requests, and service management for Quezon City University. ",
    projectImage: QCUFMS,
    technologies: ["React.js", "Laravel", "Tailwind CSS", "MySQL", "Open AI"],
    links: {
      github: "https://github.com/Jasonyecyec/IRRIS_mobile",
      url: "https://irris-mobile.vercel.app/",
    },
    view: "/qcu-fms",
  },
  {
    name: "HR Management System",
    info: "A system designed to streamline and automate various human resource processes",
    projectImage: "",
    technologies: ["Bootstrap", "Jquery", "PHP", "MySQL", "Javascript"],
    links: {
      github: "https://github.com/Jasonyecyec/HR_DEPT",
      url: "",
    },
    view: "hr",
  },

  {
    name: "OtakuFlix",
    info: "OtakuFlix is the perfect online platform for all anime lovers! Stream your favorite anime, read manga and manhwa, and enjoy an unforgettable otaku experience.",
    projectImage: "",
    technologies: [
      "Java",
      "React.js",
      "Firebase",
      "Tailwind CSS",
      "Spring Boot",
      "Gogoanime API",

      "Javascript",
    ],
    links: {
      github: "https://github.com/Jasonyecyec/OtakuFlix",
      url: "https://otaku-flix.vercel.app/",
    },
    view: "",
  },

  {
    name: "Ribrary",
    info: "Ribray is a digital library and online social reading platform. It provides users with various copies of e-books, audiobooks, magazines, research documents, and podcasts. Users can also upload their own content and receive feedback from other users.",
    projectImage: Ribrary,
    technologies: [
      "Bootstrap",
      "PHP",
      "Jquery",
      "MySQL",
      "Javascript",
      "Googlebooks API",
    ],
    links: {
      github: "https://github.com/Jasonyecyec/Ribrary",
      url: "",
    },
    view: "",
  },
  {
    name: "Patient Appointment Management System",
    info: "This system  allow patients to easily make appointments online. It can manage patient records, track appointment history, and handle doctors' availability. Additionally, it notifies patients through email regarding their scheduled appointments.",
    projectImage: Patient,
    technologies: ["Bootstrap", "ASP.NET MVC", "MySQL", "C#"],
    links: {
      github: "https://github.com/Jasonyecyec/patient_appointment",
      url: "",
    },
    view: "",
  },

  {
    name: "React Bank Design",
    info: "This project serves as a means for me to enhance and familiarize myself with React.js and Tailwind CSS. It involved following a tutorial provided by the JavaScript Mastery channel, which guided me through the entire development process.",
    projectImage: ReactBank,
    technologies: ["React.js", "Tailwind CSS", "Javascript"],
    links: {
      github: "https://github.com/Jasonyecyec/React-Bank-Design",
      url: "https://react-bank-design.netlify.app/",
    },
    view: "",
  },
];

export const FMSProject = {
  user: [
    {
      image: Login,
      alt: "login",
      description: "",
    },
    {
      image: ForgotPass,
      alt: "forgot-pass",
      description: "",
    },
    {
      image: CreateAcc,
      alt: "create-acc",
      description: "",
    },
    {
      image: Register,
      alt: "register",
      description: "",
    },
    {
      image: OTP,
      alt: "otp",
      description: "",
    },
    {
      image: StudentHome,
      alt: "student-home",
      description: "",
    },
    {
      image: Report,
      alt: "report",
      description: "",
    },
    {
      image: SubmitReport,
      alt: "submit-report",
      description: "",
    },
    {
      image: AvailableFacility,
      alt: "available-facility",
      description: "",
    },
  ],
  admin: [],
};
