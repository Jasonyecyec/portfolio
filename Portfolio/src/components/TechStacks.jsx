import React from "react";

const TechStacks = ({ list, isActive }) => {
  return (
    <div className="">
      <ul className="flex flex-wrap gap-3">
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
