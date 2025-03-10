import React from "react";
import { useToggleMode } from "@/store.js";
import { experience } from "../../constants/others";

import { motion } from "framer-motion";
import {
  textColorPrimaryFunction,
  textColorSecondaryFunction,
} from "@/utils/utils";
import { CaretRight } from "phosphor-react";

const Experience = () => {
  const { isActive } = useToggleMode();

  const carretColor = isActive ? "text-darkPrimary " : "text-whitePrimay ";
  const containerStyle = isActive
    ? "hover:drop-shadow-lg hover:bg-slate-800/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)"
    : "border hover:shadow-md ";

  return (
    <section
      className="mt-12  smLaptop:w-10/12 smLaptop:mt-[10rem] smLaptop:max-w-3xl  "
      id="experience"
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
        Experience
      </motion.h2>
      {/* group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8
      md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50

      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition
      motion-reduce:transition-none lg:-inset-x-6 lg:block
      lg:group-hover:bg-slate-800/50
      lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
      lg:group-hover:drop-shadow-lg" */}

      <div className="mt-8 w-full  space-y-5">
        {experience.map((item, index) => (
          <motion.div
            initial={{ x: 70, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className={`block w-full ${containerStyle} md:grid md:grid-cols-[150px_1fr] md:space-x-3 group rounded-lg  p-5 ease-linear duration-100 `}
            key={index}
          >
            <div className="w-full md:w-52">
              <p className="uppercase font-semibold text-sm text-gray-400">
                {item.from} - {item.to}
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-lg font-semibold">
                <span
                  className={`${
                    isActive
                      ? "text-[#c2cce2] group-hover:text-darkPrimary ease-in-out duration-150"
                      : "text-black "
                  }`}
                >
                  {" "}
                  {item.company}{" "}
                </span>
                <span> - </span>
                <span className="text-gray-400 text-base capitalize">
                  {item.position}
                </span>
              </p>
              <div className="text-sm space-y-2 w-full md:w-[90%] text-gray-500 ">
                {item.details.map((text, index) => {
                  if (text.includes("innque.com")) {
                    // Splitting the detail string to separate the URL
                    const [beforeUrl, afterUrl] = text.split("|");
                    return (
                      <p key={index} className="flex items-center space-x-4">
                        <span>
                          <CaretRight
                            size={10}
                            weight="fill"
                            className={`${carretColor}`}
                          />
                        </span>

                        <span>
                          {" "}
                          {beforeUrl.trim()} |{" "}
                          <a
                            href="https://innque.com/"
                            target="_thapa"
                            className="text-whitePrimay font-semibold"
                          >
                            {afterUrl}
                          </a>
                        </span>
                      </p>
                    );
                  } else {
                    return (
                      <p key={index} className="flex items-center space-x-4">
                        {" "}
                        <span>
                          <CaretRight
                            size={10}
                            weight="fill"
                            className={`${carretColor}`}
                          />
                        </span>
                        <span> {text}</span>
                      </p>
                    );
                  }
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
