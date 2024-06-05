import React from "react";
import { socials } from "@/constants";
import { useToggleMode } from "@/store.js";
import { motion } from "framer-motion";

const MainSocials = () => {
  const { isActive } = useToggleMode();

  const getPositionClass = (position) => {
    if (position === 1)
      return "top-10 left-10 smLaptop:top-20 smLaptop:left-14";
    if (position === 2) return "top-0 right-0 smLaptop:top-5 smLaptop:right-10";
    if (position === 3)
      return "bottom-0 left-10 smLaptop:bottom-0 smLaptop:left-14";
    if (position === 4)
      return "bottom-16 right-16 smLaptop:bottom-24 smLaptop:right-32";
  };
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <div className="flex justify-center">
      <ul className="flex justify-between w-9/12 mt-24 md:relative md:w-full smLaptop:mt-0 ">
        {socials.map(({ url, Icon, position }) => (
          <motion.li
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 1,
              delay: 1.1 + position * 0.2,
            }}
            key={url}
            className={`md:absolute  ${getPositionClass(position)}`}
          >
            <a
              href={position === 3 ? "mailto:jason.yecyec023@gmail.com" : url}
              target="_thapa"
            >
              <motion.button
                animate={{
                  translateY: ["0%", "-20%", "0%"],
                }}
                transition={{
                  duration: 4,
                  delay: 1.1 + position * 0.3,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                whileHover={{ scale: 1.1 }}
                className={`rounded-full ${
                  isActive ? "bg-[#1B3B41]" : "bg-[#BBBEFF]"
                } w-12 h-12 md:w-14 md:h-14 smLaptop:w-16 smLaptop:h-16 mdDesktop:w-20 mdDesktop:h-20 flex justify-center items-center shadow-md `}
              >
                <Icon
                  className={`${
                    isActive ? "text-white" : "text-black"
                  } text-2xl md:text-3xl smLaptop:text-4xl mdDesktop:text-[2.5rem]`}
                />
              </motion.button>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default MainSocials;
