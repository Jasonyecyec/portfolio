import React from "react";
import { useToggleMode } from "@/store.js";
import {
  textColorPrimaryFunction,
  textColorSecondaryFunction,
} from "@/utils/utils";

import AboutImg from "@/assets/about_pic.jpg";

const About = () => {
  const { isActive } = useToggleMode();

  return (
    <section className="mt-44 mb-44">
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
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
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
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
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
          <img src={AboutImg} alt="" className="object-bottom " />
        </div>
      </div>
    </section>
  );
};

export default About;
