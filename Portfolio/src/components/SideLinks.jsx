import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";

const SideLinksStyle = styled(motion.div)`
  position: fixed;
  // background: red;
  bottom: 0px;
  ${(props) =>
    props.position === "left"
      ? `left: ${props.align};`
      : `right:  ${props.align};`};
  display: none;
  flex-direction: column;
  height: 18rem;
  // width: 10rem;
  // padding: 12px 18px;
  // width: 10rem;
  // text-align: center;
  // transition: all 0.2s ease;
  // border: none;
  // border-radius: 8px;
  // background: ${(props) => (props.isActive ? "#00D1C7" : "#646AFF")};
  // color: ${(props) => (props.isActive ? "#FFFFFF" : "#121212")};

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    border-radius: 8px;
    background: ${(props) => (props.isActive ? "#00D1C7" : "#646AFF")};
    // border: ${(props) => (props.isActive ? "#00D1C7" : "#646AFF")};
    width: 3px;
    text-align: center;
    height: 40%;
    transition: all 0.3s ease;
  }

  button {
    color: gray;
    cursor: pointer;
    transition: 250ms ease-in-out;
    fontsize: 5rem;
  }

  button:hover {
    transform: translateY(-3px);
    color: ${(props) =>
      props.isActive
        ? "#00D1C7"
        : "#646AFF"}; /* Change icon color based on isActive prop */
  }

  @media (min-width: 1366px) {
    display: flex;
  }
`;
const SideLinks = ({ isInView, isActive }) => {
  return (
    <>
      <SideLinksStyle
        className="space-y-5 "
        initial={{ y: 50, opacity: 0 }}
        animate={!isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
        isActive={isActive}
        position={"left"}
        align={"4.3rem"}
      >
        {/* <p>asdas</p> */}
        <button>
          <a href="https://github.com/Jasonyecyec" target="_thapa">
            <FiGithub className="text-xl" />
          </a>
        </button>

        <button>
          <a
            href="https://www.linkedin.com/in/jason-yecyec-74545a201/"
            target="_thapa"
          >
            <FiLinkedin className="text-xl" />
          </a>
        </button>
        <button>
          <a
            href="https://www.linkedin.com/in/jason-yecyec-74545a201/"
            target="_thapa"
          >
            <FiFacebook className="text-xl" />
          </a>
        </button>

        <button>
          <a
            href="https://www.instagram.com/jason.yecyec?igsh=MW1scXR4bDU5cWI3YQ%3D%3D&utm_source=qr"
            target="_thapa"
          >
            <FaInstagram className="text-xl" />
          </a>
        </button>
      </SideLinksStyle>
      <SideLinksStyle
        className="pt-10 "
        initial={{ y: 50, opacity: 0 }}
        animate={!isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
        isActive={isActive}
        position={"right"}
        align={"-30px"}
      >
        <a
          href="mailto:jason.yecyec023@gmail.com"
          className={`${
            isActive ? "hover:text-darkPrimary" : "hover:text-whitePrimay"
          } rotate-90 text-sm  flex justify-center items-center cursor-pointer font-semibold text-gray-500 hover:translate-y-[-3px] ease-in-out duration-150`}
        >
          jason.yecyec023@gmail.com
        </a>
      </SideLinksStyle>
    </>
  );
};

export default SideLinks;
