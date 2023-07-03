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
    <section
      className="mt-44  smLaptop:w-10/12 smLaptop:mt-72 mdDesktop:max-w-6xl  "
      id="about"
    >
      <h2
        className={`${textColorPrimaryFunction(
          isActive
        )} text-3xl font-bold font-montserrat md:text-4xl smLaptop:text-5xl`}
      >
        About
      </h2>

      <div className="md:grid md:grid-cols-2 smLaptop:gap-x-10 ">
        <div
          className={`${textColorSecondaryFunction(isActive)} space-y-8 mt-10`}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="flex justify-center items-center mt-16  smLaptop:mt-0">
          <div className="w-9/12 relative smLaptop:w-8/12">
            <span
              className={`before:absolute before:top-[-1.5rem] before:left-5 before:w-full before:h-1.5 ${
                isActive ? "before:bg-darkPrimary" : "before:bg-whitePrimay"
              }`}
            ></span>
            <span
              className={`before:absolute before:right-[-1.5rem] before:bottom-6 before:w-1.5 before:h-full  ${
                isActive ? "before:bg-darkPrimary" : "before:bg-whitePrimay"
              }`}
            ></span>
            <img
              src={AboutImg}
              alt=""
              className="object-cover h-80 smLaptop:h-[21rem] grayscale w-full mdDesktop:h-96	hover:grayscale-0 ease-in-out duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
