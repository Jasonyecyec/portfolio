import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@/App.css";
import { MainInfo } from "@/components";
import { useToggleMode } from "@/store.js";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "./components/Footer";
import Experience from "./components/sections/Experience";
import { useInView } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const SideLinks = styled(motion.div)`
  position: fixed;
  // background: red;
  bottom: 0px;
  ${(props) =>
    props.position === "left"
      ? `left: ${props.align};`
      : `right:  ${props.align};`};
  display: none;
  flex-direction: column;
  height: 18rem;
  // width: 10rem;
  // padding: 12px 18px;
  // width: 10rem;
  // text-align: center;
  // transition: all 0.2s ease;
  // border: none;
  // border-radius: 8px;
  // background: ${(props) => (props.isActive ? "#00D1C7" : "#646AFF")};
  // color: ${(props) => (props.isActive ? "#FFFFFF" : "#121212")};

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    border-radius: 8px;
    background: ${(props) => (props.isActive ? "#00D1C7" : "#646AFF")};
    // border: ${(props) => (props.isActive ? "#00D1C7" : "#646AFF")};
    width: 3px;
    text-align: center;
    height: 40%;
    transition: all 0.3s ease;
  }

  button {
    color: gray;
    cursor: pointer;
    transition: 250ms ease-in-out;
    fontsize: 5rem;
  }

  button:hover {
    transform: translateY(-3px);
    color: ${(props) =>
      props.isActive
        ? "#00D1C7"
        : "#646AFF"}; /* Change icon color based on isActive prop */
  }

  @media (min-width: 1366px) {
    display: flex;
  }
`;

function App() {
  const { isActive } = useToggleMode();
  const mainRef = useRef(null);
  const isInView = useInView(mainRef, { margin: "0px 0px 0px 0px" });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <main
      // ref={mainRef}
      className={`p-6 ${
        isActive ? "bg-dark" : "bg-white"
      } ease-in-out	duration-300 flex flex-col items-center md:p-14 overflow-hidden h-full relative`}
    >
      {" "}
      <MainInfo viewObserver={mainRef} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <SideLinks
        className="space-y-5 "
        initial={{ y: 50, opacity: 0 }}
        animate={!isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
        isActive={isActive}
        position={"left"}
        align={"4.3rem"}
      >
        {/* <p>asdas</p> */}
        <button>
          <a href="https://github.com/Jasonyecyec" target="_thapa">
            <FiGithub className="text-xl" />
          </a>
        </button>

        <button>
          <a
            href="https://www.linkedin.com/in/jason-yecyec-74545a201/"
            target="_thapa"
          >
            <FiLinkedin className="text-xl" />
          </a>
        </button>
        <button>
          <a
            href="https://www.linkedin.com/in/jason-yecyec-74545a201/"
            target="_thapa"
          >
            <FiFacebook className="text-xl" />
          </a>
        </button>

        <button>
          <a
            href="https://www.instagram.com/jason.yecyec?igsh=MW1scXR4bDU5cWI3YQ%3D%3D&utm_source=qr"
            target="_thapa"
          >
            <FaInstagram className="text-xl" />
          </a>
        </button>
      </SideLinks>
      <SideLinks
        className="pt-10 "
        initial={{ y: 50, opacity: 0 }}
        animate={!isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
        isActive={isActive}
        position={"right"}
        align={"-30px"}
      >
        <a
          href="mailto:jason.yecyec023@gmail.com"
          className={`${
            isActive ? "hover:text-darkPrimary" : "hover:text-whitePrimay"
          } rotate-90 text-sm  flex justify-center items-center cursor-pointer font-semibold text-gray-500 hover:translate-y-[-3px] ease-in-out duration-150`}
        >
          jason.yecyec023@gmail.com
        </a>
      </SideLinks>
    </main>
  );
}

export default App;
