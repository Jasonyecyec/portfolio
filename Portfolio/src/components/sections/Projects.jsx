import React from "react";

import { useToggleMode } from "@/store.js";
import {
  textColorPrimaryFunction,
  textColorSecondaryFunction,
} from "@/utils/utils";

import { projects } from "@/constants";

const Projects = () => {
  const { isActive } = useToggleMode();
  return (
    <section className="mt-24 mb-24">
      <h2
        className={`${textColorPrimaryFunction(
          isActive
        )} text-3xl font-bold font-montserrat`}
      >
        Projects
      </h2>

      <div className="space-y-10 mt-10">
        <div className={`${textColorSecondaryFunction(isActive)} space-y-5`}>
          {/* {projects.map((item, index) => (
        ))} */}
          <div className="space-y-3">
            <p
              className={`${
                isActive ? "text-[#FFFFFF]" : "text-[#121212]"
              } font-semibold text-xl`}
            >
              OtakuFlix
            </p>
            <p>
              Githhub <span>Link</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-wrap gap-3">
              <p className="bg-[#1B3B41] py-1 px-2 text-sm  rounded-full shadow-lg">
                React.js
              </p>
              <p className="bg-[#1B3B41] py-1 px-2 text-sm  rounded-full shadow-lg">
                Tailwind CSS
              </p>
              <p className="bg-[#1B3B41] py-1 px-2 text-sm  rounded-full shadow-lg">
                Spring Boot
              </p>
              <p className="bg-[#1B3B41] py-1 px-2 text-sm  rounded-full shadow-lg">
                Java
              </p>
              <p className="bg-[#1B3B41] py-1 px-2 text-sm  rounded-full shadow-lg">
                Gogoanime API
              </p>
              <p className="bg-[#1B3B41] py-1 px-2 text-sm  rounded-full shadow-lg">
                Firebase
              </p>
            </div>
          </div>

          <div className="bg-slate-300 h-44 w-11/12	 rounded-md ">sd</div>
        </div>

        <div className={`${textColorSecondaryFunction(isActive)} space-y-5 `}>
          {/* {projects.map((item, index) => (
        ))} */}
          <div className="space-y-3">
            <p
              className={`${
                isActive ? "text-[#FFFFFF]" : "text-[#121212]"
              } font-semibold text-xl`}
            >
              OtakuFlix
            </p>
            <p>
              Githhub <span>Link</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-wrap gap-3">
              <p className="bg-[#1B3B41] py-1 px-2 text-sm  rounded-full shadow-lg">
                React.js
              </p>
              <p className="bg-[#1B3B41] py-1 px-2 text-sm  rounded-full shadow-lg">
                Tailwind CSS
              </p>
              <p className="bg-[#1B3B41] py-1 px-2 text-sm  rounded-full shadow-lg">
                Spring Boot
              </p>
              <p className="bg-[#1B3B41] py-1 px-2 text-sm  rounded-full shadow-lg">
                Java
              </p>
              <p className="bg-[#1B3B41] py-1 px-2 text-sm  rounded-full shadow-lg">
                Gogoanime API
              </p>
              <p className="bg-[#1B3B41] py-1 px-2 text-sm  rounded-full shadow-lg">
                Firebase
              </p>
            </div>
          </div>

          <div className="bg-slate-300 h-44 w-11/12	 rounded-md ">sd</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
