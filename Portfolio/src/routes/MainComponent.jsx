import { useEffect, useRef, useState } from "react";
import "@/App.css";
import { MainInfo } from "@/components";
import { useToggleMode } from "@/store.js";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import Experience from "../components/sections/Experience";
import { useInView } from "framer-motion";
import SideLinks from "../components/SideLinks";

const MainComponent = () => {
  const { isActive } = useToggleMode();
  const mainRef = useRef(null);
  const isInView = useInView(mainRef, { margin: "0px 0px 0px 0px" });

  return (
    <main
      // ref={mainRef}
      className={`p-6 ${
        isActive ? "bg-dark" : "bg-white"
      } ease-in-out	duration-300 flex flex-col items-center md:p-14 overflow-hidden h-full relative`}>
      {" "}
      <MainInfo viewObserver={mainRef} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <SideLinks isActive={isActive} isInView={isInView} />
    </main>
  );
};

export default MainComponent;
