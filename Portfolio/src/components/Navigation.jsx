import React, { useRef, useEffect, useState } from "react";
import { useToggleMode } from "@/store.js";
import { navigation } from "@/constants";
import styled from "styled-components";
import { Link } from "react-scroll";

import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";

import MobileMenu from "./MobileMenu";

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

const Navigation = () => {
  const { toggleActive, isActive, isShow, toggleShow } = useToggleMode();
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isHidden, setIsHidden] = useState(true);

  const menuToggle = useRef(null);

  useEffect(() => {
    menuToggle.current.checked = isShow;
  }, [isShow]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrollingDown(currentScrollPos > prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    let timeoutId;

    if (!isScrollingDown) {
      timeoutId = setTimeout(() => {
        setIsHidden(false);
      }, 300);
    } else {
      setIsHidden(true);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isScrollingDown]);

  return (
    <div
      className={` flex justify-between items-center fixed top-0 left-0 px-6 py-6 w-[100%] ${
        isActive ? "bg-dark" : "bg-white"
      } z-10 ease-in-out duration-300 ${
        isHidden ? "hidden" : ""
      } md:px-14 smLaptop:px-24 smLaptop:py-8 mdDesktop:px-40 lgDesktop:px-64 `}
    >
      <div>
        <p
          className={`${
            isActive ? "text-darkPrimary" : "text-whitePrimay"
          } text-3xl font-extrabold font-lato ease-in-out	duration-300`}
        >
          J<span className="pr-[20px] ">Y</span>
        </p>
      </div>

      <div className=" hidden smLaptop:block">
        <ul
          className={`flex space-x-16  ${
            isActive ? "text-[#999999]" : "text-[#818384]"
          } text-sm items-center  font-montserrat font-semibold `}
        >
          {navigation.map((item, index) => (
            <Link
              to={item.url}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              key={index}
            >
              <li
                className={`${
                  isActive ? "hover:text-darkPrimary" : "hover:text-whitePrimay"
                } w-full text-center  ease-in-out  duration-300 cursor-pointer`}
              >
                {item.name}
              </li>
            </Link>
          ))}

          {isActive ? (
            <li>
              <FiSun
                className="text-2xl hover:text-darkPrimary cursor-pointer z-10"
                onClick={toggleActive}
              />
            </li>
          ) : (
            <li>
              {" "}
              <MdOutlineDarkMode
                className="text-2xl  hover:text-whitePrimay cursor-pointer"
                onClick={toggleActive}
              />{" "}
            </li>
          )}
        </ul>
      </div>

      <div className="smLaptop:hidden">
        <MenuToggle id="menuToggle" onClick={toggleShow}>
          <MenuInput type="checkbox" isActive={isActive} ref={menuToggle} />

          <MenuSpan isActive={isActive}></MenuSpan>
          <MenuSpan isActive={isActive}></MenuSpan>
          <MenuSpan isActive={isActive}></MenuSpan>
          <p></p>
        </MenuToggle>
      </div>

      <MobileMenu
        isActive={isActive}
        isShow={isShow}
        toggleActive={toggleActive}
        navigation={navigation}
      />
    </div>
  );
};

export default Navigation;
