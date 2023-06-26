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
    <section>
      <Navigation />

      <div className="mt-20 space-y-5">
        <p className={`${textColorSecondaryFunction(isActive)}`}>
          Hi there, I'm
        </p>
        <h1
          className={`${textColorPrimaryFunction(
            isActive
          )} font-montserrat text-4xl font-extrabold`}
        >
          Jason Yecyec
        </h1>
        <p className={`${textColorSecondaryFunction(isActive)}`}>
          An aspiring <span className="font-bold"> Software Engineer</span>
        </p>
        <p className={`${textColorSecondaryFunction(isActive)} mb-36`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      <div className="flex mt-10 space-x-7">
        <CTAButton isActive={isActive}>
          <span className={` font-montserrat font-semibold`}>About me</span>
        </CTAButton>

        <CTAButton isActive={isActive}>
          <span className={`font-montserrat font-semibold`}>Resume</span>
        </CTAButton>
      </div>

      <MainSocials />
    </section>
  );
};

export default MainInfo;
