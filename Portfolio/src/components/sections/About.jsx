import React from "react";
import { useToggleMode } from "@/store.js";
import {
  textColorPrimaryFunction,
  textColorSecondaryFunction,
} from "@/utils/utils";

import AboutImg from "@/assets/about.jpg";

const About = () => {
  const { isActive } = useToggleMode();

  return (
    <section className="mt-44 " id="about">
      <h2
        className={`${textColorPrimaryFunction(
          isActive
        )} text-3xl font-bold font-montserrat`}
      >
        {" "}
        About
      </h2>

      <div
        className={`${textColorSecondaryFunction(isActive)} space-y-8 mt-10 `}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="flex justify-center mt-16">
        <div className="w-9/12 relative">
          <span
            className={`before:absolute before:top-[-1.5rem] before:left-5 before:w-full before:h-1.5 ${
              isActive ? "before:bg-darkPrimary" : "before:bg-whitePrimay"
            }`}
          ></span>
          <span
            className={`before:absolute before:right-[-1.5rem] before:bottom-6 before:w-1.5 before:h-full ${
              isActive ? "before:bg-darkPrimary" : "before:bg-whitePrimay"
            }`}
          ></span>
          <img
            src={AboutImg}
            alt=""
            className="object-bottom grayscale w-full	hover:grayscale-0 ease-in-out duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
