import React, { useState, useEffect } from "react";
import { useToggleMode } from "@/store.js";
import {
  textColorPrimaryFunction,
  textColorSecondaryFunction,
} from "@/utils/utils";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const ProgressBar = styled.div`
  .Toastify__progress-bar {
    background-color: ${(props) => (props.isActive ? "#00D1C7" : "#646AFF")}};
  }
`;

const Contact = () => {
  const notify = () =>
    toast.success("Message sent!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const { isActive } = useToggleMode();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if ([name, email, message].includes("")) return;
      const result = await axios.post(
        "https://jasonyecyec.vercel.app/api/sendEmail",
        {
          name,
          email,
          message,
        }
      );

      if (result.status === 200) {
        notify();
      }
    } catch (error) {
      console.log(error);
      alert("Error", error.message);
    }
  };

  return (
    <section
      className="mt-24 md:grid md:grid-cols-2 md:gap-x-5 smLaptop:w-10/12 smLaptop:gap-x-12 mdDesktop:max-w-6xl "
      id="contact"
    >
      <div className="md:mt-20 space-y-2 md:space-y-3 smLaptop:space-y-6 mdDesktop:space-y-8">
        <h2
          className={`${textColorPrimaryFunction(
            isActive
          )} text-3xl font-bold font-montserrat  smLaptop:text-5xl`}
        >
          Let's get in touch
        </h2>
        <p className={`${textColorSecondaryFunction(isActive)}  md:w-11/12`}>
          Do you fancy saying hi to me or you want to get started with your
          project and you need my help? Feel free to contact me.
        </p>
      </div>

      <div className="mt-10">
        <form action="#">
          <div className="flex flex-col space-y-5 items-start text-base ">
            <input
              type="text"
              className="w-8/12 rounded p-1.5 outline-none font-lato border-2 "
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              className="w-8/12 rounded p-1.5 outline-none font-lato border-2 "
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name=""
              id=""
              cols="1"
              rows="6"
              className="w-full rounded-md p-1.5 outline-none font-lato border-2 "
              placeholder="Message"
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              onClick={handleSubmit}
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

      <ProgressBar isActive={isActive}>
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ProgressBar>
    </section>
  );
};

export default Contact;
