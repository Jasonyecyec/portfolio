import React from "react";
import {
  textColorPrimaryFunction,
  textColorSecondaryFunction,
} from "@/utils/utils";
import { socials } from "@/constants";

import { useToggleMode } from "@/store.js";

const Footer = () => {
  const { isActive } = useToggleMode();

  return (
    <footer className="my-20 text-center space-y-3">
      <div className="flex justify-center">
        <ul className="flex justify-between w-6/12">
          {socials.map(({ url, Icon }) => (
            <li key={url}>
              <a href={url}>
                <Icon
                  className={`text-2xl ${
                    isActive ? "text-[#A1A3A4]" : "text-[#818384]"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`${textColorSecondaryFunction(isActive)} text-sm space-y-3`}
      >
        <p>Built with React.js and Tailwind CSS, deployed with Vercel.</p>
        <p>
          © 2023 <span className="font-semibold">Jason Yecyec</span> . All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
