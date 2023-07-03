import React from "react";
import Navigation from "./Navigation";
import { useToggleMode } from "@/store.js";
import {
  textColorPrimaryFunction,
  textColorSecondaryFunction,
} from "@/utils/utils";

import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import MainSocials from "./MainSocials";
import { Link } from "react-scroll";

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
          <p
            className={`${textColorSecondaryFunction(
              isActive
            )} text-xl font-semibold mdDesktop:text-2xl`}
          >
            Hi there, I'm
          </p>
          <h1
            className={`${textColorPrimaryFunction(
              isActive
            )} font-montserrat text-4xl font-extrabold smLaptop:text-6xl mdDesktop:text-7xl`}
          >
            Jason Yecyec
          </h1>
          <p
            className={`${textColorSecondaryFunction(
              isActive
            )} text-xl smLaptop:text-2xl`}
          >
            An aspiring <span className="font-bold"> Software Engineer</span>
          </p>
          <p
            className={`${textColorSecondaryFunction(
              isActive
            )} mb-36  text-base mdDesktop:text-lg font-lato`}
          >
            I have a passion for building exceptional websites that captivate
            users and deliver outstanding experiences. I am constantly seeking
            to learn and master the latest web technologies and frameworks.
          </p>
        </div>

        <div className="flex mt-10 space-x-7">
          <CTAButton isActive={isActive}>
            <span className={` font-montserrat font-semibold`}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About me
              </Link>
            </span>
          </CTAButton>

          <CTAButton isActive={isActive}>
            <span className={`font-montserrat font-semibold`}>Resume</span>
          </CTAButton>
        </div>
      </div>

      <MainSocials />
    </section>
  );
};

export default MainInfo;
