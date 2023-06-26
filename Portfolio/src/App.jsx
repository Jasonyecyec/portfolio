import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@/App.css";
import { MainInfo } from "@/components";
import { useToggleMode } from "@/store.js";

function App() {
  const { isActive } = useToggleMode();

  return (
    <main
      className={`p-5 ${
        isActive ? "bg-dark" : "bg-white"
      } ease-in-out	duration-300`}
    >
      <MainInfo />
    </main>
  );
}

export default App;
