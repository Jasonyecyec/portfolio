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
    <section className="mt-24 mb-24" id="projects">
      <h2
        className={`${textColorPrimaryFunction(
          isActive
        )} text-3xl font-bold font-montserrat`}
      >
        Projects
      </h2>

      <div className="space-y-12 mt-10">
        {projects.map((item, index) => (
          <div
            className={`${textColorSecondaryFunction(isActive)} space-y-5`}
            key={index}
          >
            <div className="space-y-3">
              <p
                className={`${
                  isActive ? "text-[#FFFFFF]" : "text-[#121212]"
                } font-semibold text-xl`}
              >
                {item.name}
              </p>

              <div className="flex space-x-4">
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

            <div className="bg-slate-300 h-44 w-11/12	shadow-md rounded-md">
              <img src={item.projectImage} alt="" className="rounded-md " />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
