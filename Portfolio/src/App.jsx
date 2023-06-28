import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@/App.css";
import { MainInfo } from "@/components";
import { useToggleMode } from "@/store.js";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "./components/sections/Projects";

function App() {
  const { isActive } = useToggleMode();

  return (
    <main
      className={`p-5 ${
        isActive ? "bg-dark" : "bg-white"
      } ease-in-out	duration-300`}
    >
      <MainInfo />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
