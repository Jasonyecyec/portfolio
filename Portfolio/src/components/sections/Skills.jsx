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
    <section className="mt-24 mb-24 ease-in-out ">
      <h2
        className={`${textColorPrimaryFunction(
          isActive
        )} text-3xl font-bold font-montserrat`}
      >
        Skills <span className="text-[#A1A3A4]">&</span>{" "}
        <span className="block">Technologies</span>
      </h2>

      <div className="flex items-center justify-center flex-wrap gap-5  mt-10 ">
        {technologies.map(({ Icon, name }) => (
          <div className="group rounded border-2 border-[#A1A3A4] p-2 hover:border-darkPrimary duration-300">
            <p
              className={`${textColorSecondaryFunction(
                isActive
              )} flex  flex-col items-center justify-center text-base`}
            >
              <Icon
                className={`text-white text-2xl group-hover:text-darkPrimary`}
              />
              <span className="mt-1"> {name}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
