import React from "react";
import { useToggleMode } from "@/store.js";
import {
  textColorPrimaryFunction,
  textColorSecondaryFunction,
} from "@/utils/utils";

import { technologies } from "@/constants";

const Skills = () => {
  const { isActive } = useToggleMode();

  return (
    <section className="mt-24 smLaptop:w-10/12 ease-in-out " id="skills">
      <h2
        className={`${textColorPrimaryFunction(
          isActive
        )} text-3xl font-bold font-montserrat md:text-4xl smLaptop:text-center smLaptop:text-5xl`}
      >
        Skills <span className="text-[#A1A3A4]">&</span>
        <span className="block smLaptop:inline-block smLaptop:ml-3 ">
          Technologies
        </span>
      </h2>

      <div className="smLaptop:w-full  smLaptop:flex smLaptop: justify-center">
        <div className="flex flex-wrap items-center justify-center  gap-5  mt-10  smLaptop:max-w-xl ">
          {technologies.map(({ Icon, name, img }) => (
            <div
              className={`group rounded  ${
                isActive
                  ? "border-2 border-[#1B3B41] shadow-md bg-[#1B3B41]"
                  : "shadow-md"
              } p-2  hover:border-darkPrimary  duration-300 min-w-[5rem]`}
              key={name}
            >
              <p
                className={`${
                  isActive ? "text-[#A1A3A4]" : "text-[#6A6A6A]"
                } flex flex-col items-center justify-center text-base`}
              >
                {isActive ? (
                  <Icon
                    className={`text-white text-2xl group-hover:text-darkPrimary`}
                  />
                ) : (
                  <img src={img} alt="" className="text-2xl " />
                )}

                <span className="mt-1">{name}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
