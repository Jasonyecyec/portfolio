import React from "react";
import { useToggleMode } from "@/store.js";
import { navigation } from "@/constants";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
  const { toggleActive, isActive } = useToggleMode();

  return (
    <div className="flex justify-between ">
      <div>
        <p
          className={`${
            isActive ? "text-darkPrimary" : "text-whitePrimay"
          } text-3xl font-extrabold font-lato ease-in-out	duration-300`}
        >
          J<span className="pr-[20px] ">Y</span>
        </p>
      </div>

      <div>
        <button className="text-darkPrimary" onClick={toggleActive}>
          <GiHamburgerMenu className="text-3xl" />
        </button>
      </div>
      <ul className="flex text-darkSecondary hidden">
        {navigation.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
