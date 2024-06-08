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
import { Routes, Route, Link } from "react-router-dom";
import Main from "./routes/main";
import Fms from "./routes/Fms";

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
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/qcu-fms" element={<Fms />} />
      <Route path="/hr" element={<div>qcu-fms</div>} />
      <Route
        path="/*"
        element={
          <main className="w-screen h-screen flex justify-center items-center">
            {" "}
            <div>
              {" "}
              <p className="font-bold text-[2rem] text-gray-500 capitalize md:text-[3rem] smLaptop:text-[4rem]">
                Page not found{" "}
              </p>
              <p className="text-center hover:text-blue-500 font-semibold text-gray-500 ease-in-out duratin-150">
                <Link to="/">Go back to main</Link>
              </p>
            </div>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
