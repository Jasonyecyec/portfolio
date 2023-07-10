import React, { useState, useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useToggleMode } from "@/store.js";
import { animate, motion } from "framer-motion";

const MobileMenu = ({ isActive, isShow, toggleActive, navigation }) => {
  const { toggleShow } = useToggleMode();
  const [initialPosition, setInitialPosition] = useState({ y: 0 });
  const [targetPosition, setTargetPosition] = useState({ y: -350 });

  useEffect(() => {
    setInitialPosition({ y: isShow ? -350 : 0 });
    setTargetPosition({ y: isShow ? 0 : -350 });
  }, [isShow]);

  return (
    <>
      <motion.ul
        id="menu"
        animate={targetPosition}
        initial={initialPosition}
        transition={{ duration: 0.25 }}
        className={`flex flex-col items-center space-y-5 p-5 drop-shadow-md z-10 w-[87%] top-[4rem] font-semibold absolute 
        text-base font-montserrat rounded ${
          isActive
            ? "bg-[#1B3B41] text-[#B7B4B4]"
            : "bg-[#E6E6E6] text-[##121212]"
        }
         smLaptop:hidden`}
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
            offset={-100}
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
      </motion.ul>
    </>
  );
};

export default MobileMenu;
