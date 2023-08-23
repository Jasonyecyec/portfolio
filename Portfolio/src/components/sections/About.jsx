import React from "react";
import { useToggleMode } from "@/store.js";
import {
  textColorPrimaryFunction,
  textColorSecondaryFunction,
} from "@/utils/utils";
import { motion } from "framer-motion";

import AboutImg from "@/assets/about_img.jpg";

const About = () => {
  const { isActive } = useToggleMode();

  return (
    <section
      className="mt-44  smLaptop:w-10/12 smLaptop:mt-72 mdDesktop:max-w-6xl  "
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
          )} space-y-8 mt-10 smLaptop:text-lg`}
        >
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            I am passionate about developing systems, which is why I chose
            software engineering as my career path. Throughout my college years,
            I have dedicated myself to honing my{" "}
            <span className="font-semibold"> problem-solving skills </span> and
            acquiring a solid foundation in{" "}
            <span className="font-semibold"> Java </span>through platforms like
            mooc.fi. Simultaneously, I have been mastering front-end development
            by
            <span className="font-semibold">
              {" "}
              watching online courses
            </span> and{" "}
            <span className="font-semibold">building projects </span> .
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Currently, I am a fourth-year college student studying Information
            Technology. My main focus is to master{" "}
            <span className="font-semibold"> React.js </span> and the{" "}
            <span className="font-semibold"> Spring Boot </span> framework while
            creating personal projects. I am open to learning other web
            technologies and eagerly looking forward to exploring mobile
            development.
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            In my spare time, I enjoy playing games, watching movies, hanging
            out with loved ones (including my dogs), and occasionally reading
            books.
          </motion.p>
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
              src={AboutImg}
              alt=""
              className="object-cover h-80 smLaptop:h-[21rem] grayscale w-full mdDesktop:h-96	hover:grayscale-0 ease-in-out duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
