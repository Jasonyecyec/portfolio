import React from "react";
import { useToggleMode } from "@/store.js";
import {
  textColorPrimaryFunction,
  textColorSecondaryFunction,
} from "@/utils/utils";

const Contact = () => {
  const { isActive } = useToggleMode();

  return (
    <section
      className="mt-24 md:grid md:grid-cols-2 md:gap-x-5 smLaptop:w-10/12 smLaptop:gap-x-12 "
      id="contact"
    >
      <div className="md:mt-20">
        <h2
          className={`${textColorPrimaryFunction(
            isActive
          )} text-3xl font-bold font-montserrat  smLaptop:text-5xl`}
        >
          Let's get in touch
        </h2>
        <p className={`${textColorSecondaryFunction(isActive)} mt-2`}>
          Do you fancy saying hi to me or you want to get started with your
          project and you need my help? Feel free to contact me.
        </p>
      </div>

      <div className="mt-10">
        <form action="">
          <div className="flex flex-col space-y-5 items-start text-base ">
            <input
              type="text"
              className="w-8/12 rounded p-1.5 outline-none font-lato border-2 "
              placeholder="Name"
              required
            />
            <input
              type="text"
              className="w-8/12 rounded p-1.5 outline-none font-lato border-2 "
              placeholder="Email"
              required
            />
            <textarea
              name=""
              id=""
              cols="1"
              rows="6"
              className="w-full rounded-md p-1.5 outline-none font-lato border-2 "
              placeholder="Message"
              required
            ></textarea>
            <button
              className={`${textColorPrimaryFunction(isActive)} ${
                isActive ? "border-darkPrimary" : "border-whitePrimay"
              }  border-2 rounded-md px-2.5 py-1.5 font-montserrat ${
                isActive ? "hover:bg-darkPrimary" : "hover:bg-whitePrimay "
              } hover:text-white duration-300`}
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
