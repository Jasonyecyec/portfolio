import React from "react";
import { useToggleMode } from "@/store.js";
import {
  textColorPrimaryFunction,
  textColorSecondaryFunction,
} from "@/utils/utils";
import { motion } from "framer-motion";
import { CaretRight } from "phosphor-react";

import GradPic from "@/assets/grad_pic.jpg";

const About = () => {
  const { isActive } = useToggleMode();

  // const carretColor = () => {
  //   return isActive ? "text-darkPrimary " : "text-whitePrimay ";
  // };

  const carretColor = isActive ? "text-darkPrimary " : "text-whitePrimay ";

  return (
    <section
      className="mt-12  smLaptop:w-10/12 smLaptop:mt-72 mdDesktop:max-w-6xl  "
      id="about"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`${textColorPrimaryFunction(
          isActive
        )} text-3xl font-bold font-montserrat md:text-4xl smLaptop:text-5xl`}
      >
        About
      </motion.h2>

      <div className="md:grid md:grid-cols-2 smLaptop:gap-x-10 ">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className={`${textColorSecondaryFunction(
            isActive
          )} space-y-5 mt-10 smLaptop:text-lg`}
        >
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            A dedicated full-stack developer from the Philippines with expertise
            in <span className="font-semibold"> React JS </span> and{" "}
            <span className="font-semibold"> Laravel </span> . I have a proven
            ability to lead development projects and collaborate effectively
            within a team. Eager to contribute and grow in a dynamic
            environment, I am continuously learning and mastering new
            technologies.
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Here are a few technologies I’ve been learning with recently:
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className=""
          >
            <ul className="w-full grid grid-cols-2 text-base font-semibold gap-2">
              <li className="flex items-center space-x-2">
                <span>
                  {" "}
                  <CaretRight
                    size={15}
                    weight="fill"
                    className={`${carretColor}`}
                  />{" "}
                </span>{" "}
                <span> Docker</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>
                  {" "}
                  <CaretRight
                    size={15}
                    weight="fill"
                    className={`${carretColor}`}
                  />{" "}
                </span>{" "}
                <span> Next.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>
                  {" "}
                  <CaretRight
                    size={15}
                    weight="fill"
                    className={`${carretColor}`}
                  />{" "}
                </span>{" "}
                <span> AWS</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>
                  {" "}
                  <CaretRight
                    size={15}
                    weight="fill"
                    className={`${carretColor}`}
                  />{" "}
                </span>{" "}
                <span> React Native/Expo</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>
                  {" "}
                  <CaretRight
                    size={15}
                    weight="fill"
                    className={`${carretColor}`}
                  />{" "}
                </span>{" "}
                <span> Typescript</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="flex justify-center items-center mt-16   smLaptop:mt-0">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-9/12 relative smLaptop:w-8/12"
          >
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
              src={GradPic}
              alt=""
              className="object-cover object-top	 h-80 smLaptop:h-[21rem] grayscale w-full mdDesktop:h-96	hover:grayscale-0 ease-in-out duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
