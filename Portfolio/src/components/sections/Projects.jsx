import React from "react";

import { useToggleMode } from "@/store.js";
import {
  textColorPrimaryFunction,
  textColorSecondaryFunction,
} from "@/utils/utils";
import { motion } from "framer-motion";

import { projects } from "@/constants";
import TechStacks from "@/components/TechStacks";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Projects = () => {
  const { isActive } = useToggleMode();
  const navigate = useNavigate();
  return (
    <section
      className="mt-24 smLaptop:w-8/12 smLaptop:mt-[5rem] mdDesktop:max-w-6xl "
      id="projects"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className={`${textColorPrimaryFunction(
          isActive
        )} text-3xl font-bold font-montserrat md:text-4xl smLaptop:text-5xl`}
      >
        Projects
      </motion.h2>

      <div className="space-y-12 mt-10 smLaptop:space-y-20">
        {projects.map((item, index) => (
          <div
            className={`${textColorSecondaryFunction(
              isActive
            )} space-y-5  md:flex md:gap-x-5 smLaptop:gap-x-12 smLaptop:space-y-0 ${
              index == 1 || index == 3 || index == 5
                ? "md:flex-row-reverse"
                : ""
            }  `}
            key={index}
          >
            <motion.div
              initial={{ x: index == 1 || index == 3 ? 50 : -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true }}
              className={`space-y-3 md:w-1/2  `}
            >
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

                {item.links.url !== "" && (
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
                )}
              </div>

              <TechStacks list={item.technologies} isActive={isActive} />

              <p className="rounded  ">
                {item.info}
                <span className="ml-1 font-semibold">
                  {item.name == "OtakuFlix" && "(Under development 🔧)"}
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ x: index == 1 || index == 3 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="h-44 w-full rounded-md flex items-center md:justify-center   smLaptop:justify-center  md:w-1/2 smLaptop:h-60 mdDesktop:h-64 group  relative overflow-hidden"
            >
              {item.view !== "" && (
                <div className="absolute left-0  top-0 group-hover:flex justify-center items-center w-full h-full cursor-pointer  group-hover:bg-[rgba(0,0,0,0.40)] rounded-md transition ease-in-out duration-300">
                  {/* <Link to={item.view}> */}{" "}
                  <button
                    onClick={() => navigate(item.view)}
                    className="p-2 px-4 hover:shadow-md hover:translate-y-[-1.5px] text-sm rounded-full bg-whitePrimay text-white hidden group-hover:block transition ease-in-out duration-300"
                  >
                    View details
                  </button>
                  {/* </Link> */}
                </div>
              )}

              <img
                src={item.projectImage}
                className="rounded-md h-full w-11/12 smLaptop:max-w-md  bg-slate-200  w-full"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
