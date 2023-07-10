import React from "react";
import Navigation from "./Navigation";
import { useToggleMode } from "@/store.js";
import {
  textColorPrimaryFunction,
  textColorSecondaryFunction,
} from "@/utils/utils";
import { motion } from "framer-motion";

import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import MainSocials from "./MainSocials";
import { Link } from "react-scroll";
import Resume from "@/assets/myResume.pdf";

const CTAButton = styled.button`
  position: relative;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#121212")};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: ${(props) => (props.isActive ? "#00D1C7" : "#646AFF")};
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }

  span {
    position: relative;
  }

  svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #234567;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  &:hover {
    color: ${(props) => (props.isActive ? "#FFFFFF" : "#FFFFFF")};
  }
  &:hover::before {
    width: 100%;
    background: ${(props) => (props.isActive ? "#00D1C7" : "#646AFF")};
  }

  &:hover svg {
    transform: translateX(0);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

const MainInfo = () => {
  const { isActive } = useToggleMode();

  const textColorClassPrimary = () => {
    return isActive ? "text-darkPrimary" : "text-whitePrimay";
  };

  return (
    <section
      className="md:grid grid-cols-2 mt-24  smLaptop:w-10/12 smLaptop:mt-28 smLaptop:gap-x-14 mdDesktop:max-w-6xl mdDesktop:mt-36
     lgDesktop:mt-48"
    >
      <Navigation />

      <div className="">
        <div className="space-y-4 smLaptop:space-y-6 mdDesktop:space-y-7 ">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`${textColorSecondaryFunction(
              isActive
            )} text-xl font-semibold mdDesktop:text-2xl`}
          >
            Hi there, I'm
          </motion.p>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className={`${textColorPrimaryFunction(
              isActive
            )} font-montserrat text-4xl font-extrabold smLaptop:text-6xl mdDesktop:text-7xl`}
          >
            Jason Yecyec
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className={`${textColorSecondaryFunction(
              isActive
            )} text-xl smLaptop:text-2xl md:font-medium`}
          >
            An aspiring <span className="font-bold"> Software Engineer</span>
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className={`${textColorSecondaryFunction(
              isActive
            )} mb-36  text-base mdDesktop:text-lg font-lato`}
          >
            I have a passion for building exceptional websites that captivate
            users and deliver outstanding experiences. I am constantly seeking
            to learn and master the latest web technologies and frameworks.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex mt-10 space-x-7"
        >
          <CTAButton isActive={isActive}>
            <span
              className={` font-montserrat font-semibold flex items-center  space-x-5`}
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About me
              </Link>
              <BsArrowRight className="text-white" />
            </span>
          </CTAButton>

          <CTAButton isActive={isActive}>
            <span
              className={`font-montserrat font-semibold flex items-center  space-x-5`}
            >
              <a href={Resume} target="_thapa">
                Resume
              </a>
              <BsArrowRight
                className={`${textColorSecondaryFunction(
                  isActive
                )} text-red-400`}
              />
            </span>
          </CTAButton>
        </motion.div>
      </div>

      <MainSocials />
    </section>
  );
};

export default MainInfo;
