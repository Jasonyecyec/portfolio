import React from "react";
import { useToggleMode } from "@/store.js";
import { navigation } from "@/constants";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";

const MenuToggle = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
`;

const MenuInput = styled.input`
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;

  &:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: ${(props) => (props.isActive ? "#00D1C7" : "#646aff")};
  }

  &:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  &:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
`;

const MenuSpan = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: ${(props) => (props.isActive ? "#00D1C7" : "#646aff")};
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
`;

const Menu = styled.ul`
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
  background-color: ${({ isActive }) => (isActive ? "#1B3B41" : "#E6E6E6")};
  color: ${({ isActive }) => (isActive ? "#B7B4B4" : "#121212")};
  transform: ${({ isShow }) => (isShow ? "" : "translateY(-100%)")};
  opacity: ${({ isShow }) => (isShow ? "1" : "0")};
  transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
  list-style-type: none;
  margin: 0;
  border-radius: 0.25rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Navigation = () => {
  const { toggleActive, isActive, isShow, toggleShow } = useToggleMode();

  return (
    <div className="flex justify-between items-center relative">
      <div>
        <p
          className={`${
            isActive ? "text-darkPrimary" : "text-whitePrimay"
          } text-3xl font-extrabold font-lato ease-in-out	duration-300`}
        >
          J<span className="pr-[20px] ">Y</span>
        </p>
      </div>

      {/* <nav role="navigation"> */}

      <MenuToggle id="menuToggle" onClick={toggleShow}>
        <MenuInput type="checkbox" isActive={isActive} />

        <MenuSpan isActive={isActive}></MenuSpan>
        <MenuSpan isActive={isActive}></MenuSpan>
        <MenuSpan isActive={isActive}></MenuSpan>
        <p></p>
      </MenuToggle>

      {/* </nav> */}
      <Menu
        id="menu"
        isActive={isActive}
        isShow={isShow}
        className="flex flex-col items-center space-y-5 p-5  "
      >
        {isActive ? (
          <FiSun
            className="absolute top-4 right-4 text-2xl hover:text-whitePrimay cursor-pointer"
            onClick={toggleActive}
          />
        ) : (
          <MdOutlineDarkMode
            className="absolute top-4 right-4 text-2xl hover:text-darkPrimary cursor-pointer"
            onClick={toggleActive}
          />
        )}

        {navigation.map((item, index) => (
          <a
            href={item.url}
            className={`${
              isActive ? "hover:bg-[#06242A]" : "hover:bg-[#CCCCCC]"
            } w-full text-center p-1 rounded ease-in-out  duration-300`}
            key={index}
          >
            <li>{item.name}</li>
          </a>
        ))}
      </Menu>

      <ul className="flex text-darkSecondary hidden">
        {navigation.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
