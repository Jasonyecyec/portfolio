import React from "react";

const TechStacks = ({ list, isActive }) => {
  return (
    <div className="">
      <ul className={`flex flex-wrap gap-2 `}>
        {list.map((item, index) => (
          <li
            className={`${
              isActive ? "bg-[#1B3B41]" : " text-whitePrimay border "
            } py-1 px-2 text-xs  rounded-full  font-semibold`}
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
