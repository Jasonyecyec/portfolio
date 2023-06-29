import React from "react";
import { socials } from "@/constants";
import { useToggleMode } from "@/store.js";

const MainSocials = () => {
  const { isActive } = useToggleMode();

  return (
    <div className="mt-24  flex justify-center">
      <ul className="flex  justify-between w-9/12">
        {socials.map(({ url, Icon }) => (
          <li key={url}>
            <a href={url}>
              <button
                className={`rounded-full ${
                  isActive ? "bg-[#1B3B41]" : "bg-[#BBBEFF]"
                } w-12 h-12 flex justify-center items-center shadow-lg`}
              >
                <Icon
                  className={`${
                    isActive ? "text-white" : "text-black"
                  } text-2xl`}
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
