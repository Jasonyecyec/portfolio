import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useToggleMode } from "@/store.js";

const Menu = styled.ul`
  position: absolute;
  top: 4rem;
  background-color: ${({ isActive }) => (isActive ? "#1B3B41" : "#E6E6E6")};
  color: ${({ isActive }) => (isActive ? "#B7B4B4" : "#121212")};
  transform: ${({ isShow }) => (isShow ? "" : "translateY(-120%)")};
  opacity: ${({ isShow }) => (isShow ? "1" : "0")};
  transition: transform 350ms ease-in-out, opacity 350ms ease-in-out;
  list-style-type: none;
  margin: 0;
  border-radius: 0.25rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const MobileMenu = ({ isActive, isShow, toggleActive, navigation }) => {
  const { toggleShow } = useToggleMode();

  return (
    <>
      <Menu
        id="menu"
        isActive={isActive}
        isShow={isShow}
        className="flex flex-col items-center space-y-5 p-5  z-10 w-[87%] "
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
          <Link
            to={item.url}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${
              isActive ? "hover:bg-[#06242A]" : "hover:bg-[#CCCCCC]"
            } w-full text-center p-1 rounded ease-in-out  duration-300`}
            key={index}
            onClick={toggleShow}
          >
            <li>{item.name}</li>
          </Link>
        ))}
      </Menu>
    </>
  );
};

export default MobileMenu;
