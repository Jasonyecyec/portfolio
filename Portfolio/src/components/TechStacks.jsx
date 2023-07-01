import React from "react";

const TechStacks = ({ list, isActive, index }) => {
  return (
    <div className="">
      <ul
        className={`flex flex-wrap gap-3  ${
          index == 0 || index == 2 || index == 4 ? "md:justify-end" : ""
        }`}
      >
        {list.map((item, index) => (
          <li
            className={`${
              isActive ? "bg-[#1B3B41]" : "bg-[#BBBEFF] text-[#626262]"
            } py-1 px-2 text-sm  rounded-full shadow-lg font-semibold`}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStacks;
