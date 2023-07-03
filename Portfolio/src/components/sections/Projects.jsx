import React from "react";

import { useToggleMode } from "@/store.js";
import {
  textColorPrimaryFunction,
  textColorSecondaryFunction,
} from "@/utils/utils";

import { projects } from "@/constants";
import TechStacks from "@/components/TechStacks";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

const Projects = () => {
  const { isActive } = useToggleMode();
  return (
    <section
      className="mt-24 smLaptop:w-10/12 mdDesktop:max-w-6xl "
      id="projects"
    >
      <h2
        className={`${textColorPrimaryFunction(
          isActive
        )} text-3xl font-bold font-montserrat md:text-4xl smLaptop:text-5xl`}
      >
        Projects
      </h2>

      <div className="space-y-12 mt-10 smLaptop:space-y-20">
        {projects.map((item, index) => (
          <div
            className={`${textColorSecondaryFunction(
              isActive
            )} space-y-5  md:flex md:gap-x-5 smLaptop:gap-x-12 smLaptop:space-y-0 ${
              index == 1 || index == 3 ? "md:flex-row-reverse" : ""
            } `}
            key={index}
          >
            <div className={`space-y-3 md:w-1/2  `}>
              <p
                className={`${
                  isActive ? "text-[#FFFFFF]" : "text-[#121212]"
                } font-semibold text-xl smLaptop:text-2xl `}
              >
                {item.name}
              </p>

              <div className={`flex space-x-4 `}>
                <a
                  href={item.links.github}
                  className={`flex items-center ${
                    isActive ? "hover:text-[#FFFFFF]" : "hover:text-[#121212]"
                  } ease-in-out duration-300`}
                >
                  Github
                  <span className="ml-1">
                    <AiFillGithub />
                  </span>
                </a>
                {item.links.url !== "" ? (
                  <a
                    href={item.links.url}
                    className={`flex items-center ${
                      isActive ? "hover:text-[#FFFFFF]" : "hover:text-[#121212]"
                    } ease-in-out duration-300`}
                  >
                    Link
                    <span className="ml-1">
                      <BsArrowUpRight />
                    </span>
                  </a>
                ) : (
                  <p>Link not available</p>
                )}
              </div>

              <p>{item.info}</p>
              <TechStacks list={item.technologies} isActive={isActive} />
            </div>

            <div className="h-44 w-full rounded-md flex items-center md:justify-center smLaptop:justify-start  md:w-1/2 smLaptop:h-60 mdDesktop:h-64">
              <img
                src={item.projectImage}
                alt=""
                className="rounded-md h-full w-11/12 smLaptop:max-w-md  shadow-md "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
