import React from "react";
import { socials } from "@/constants";
import { useToggleMode } from "@/store.js";

const MainSocials = () => {
  const { isActive } = useToggleMode();

  const getPositionClass = (position) => {
    if (position === 1) return "top-20 left-14";
    if (position === 2) return "top-5 right-10";
    if (position === 3) return "bottom-0 left-14";
    if (position === 4) return "bottom-24 right-32";
  };

  return (
    <div className="flex justify-center ">
      <ul className="flex  justify-between w-9/12 mt-24  md:relative md:w-full smLaptop:mt-0">
        {socials.map(({ url, Icon, position }) => (
          <li
            key={url}
            className={`md:absolute  ${getPositionClass(position)}`}
          >
            <a href={url}>
              <button
                className={`rounded-full ${
                  isActive ? "bg-[#1B3B41]" : "bg-[#BBBEFF]"
                } w-12 h-12 md:w-14 md:h-14 smLaptop:w-16 smLaptop:h-16 flex justify-center items-center shadow-lg `}
              >
                <Icon
                  className={`${
                    isActive ? "text-white" : "text-black"
                  } text-2xl md:text-3xl smLaptop:text-4xl`}
                />
              </button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainSocials;
