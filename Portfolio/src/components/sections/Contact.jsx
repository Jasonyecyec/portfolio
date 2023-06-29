import React from "react";
import { useToggleMode } from "@/store.js";
import {
  textColorPrimaryFunction,
  textColorSecondaryFunction,
} from "@/utils/utils";

const Contact = () => {
  const { isActive } = useToggleMode();

  return (
    <section className="mt-24 mb-24">
      <h2
        className={`${textColorPrimaryFunction(
          isActive
        )} text-3xl font-bold font-montserrat`}
      >
        Let's get in touch
      </h2>
      <p className={`${textColorSecondaryFunction(isActive)}`}>
        Do you fancy saying hi to me or you want to get started with your
        project and you need my help? Feel free to contact me.
      </p>

      <div className="mt-10">
        <form action="">
          <div className="flex flex-col space-y-5 items-start ">
            <input
              type="text"
              className="w-8/12 rounded p-1.5 "
              placeholder="Name"
              required
            />
            <input
              type="text"
              className="w-8/12 rounded p-1.5 "
              placeholder="Email"
              required
            />
            <textarea
              name=""
              id=""
              cols="20"
              rows="8"
              className="w-full rounded-md p-1.5"
              placeholder="Message"
              required
            ></textarea>
            <button
              className={`${textColorPrimaryFunction(isActive)} ${
                isActive ? "border-darkPrimary" : "border-whitePrimay"
              }  border-2 rounded-md px-5 py-2`}
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
