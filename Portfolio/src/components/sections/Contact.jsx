import React, { useState, useEffect, useRef } from "react";
import { useToggleMode } from "@/store.js";
import { textColorPrimaryFunction, textColorSecondaryFunction } from "@/utils/utils";
import axios from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const Contact = () => {
  const { isActive } = useToggleMode();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_GMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      if (result.status === 200) {
        toast.success("Message sent!");

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      toast.error("Error sending message!");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      className="mt-24 md:grid md:grid-cols-2 md:gap-x-5 smLaptop:w-10/12 smLaptop:gap-x-12 mdDesktop:max-w-6xl "
      id="contact">
      <div className="md:mt-20 space-y-2 md:space-y-3 smLaptop:space-y-6 mdDesktop:space-y-8">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`${textColorPrimaryFunction(isActive)} text-3xl font-bold font-montserrat  smLaptop:text-5xl`}>
          Let's get in touch
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className={`${textColorSecondaryFunction(isActive)}  md:w-11/12`}>
          Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to
          contact me.
        </motion.p>
      </div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-10">
        <Toaster position="top-right" richColors />

        <form ref={form} onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-5 items-start text-base ">
            <input
              type="text"
              className="w-8/12 rounded p-1.5 outline-none font-lato border-2 "
              placeholder="Name"
              name="user_name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <input
              type="text"
              className="w-8/12 rounded p-1.5 outline-none font-lato border-2 "
              placeholder="Email"
              required
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              id=""
              cols="1"
              rows="6"
              className="w-full rounded-md p-1.5 outline-none font-lato border-2 "
              placeholder="Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}></textarea>
            <button
              disabled={sending}
              type="submit"
              className={`${textColorPrimaryFunction(isActive)} ${
                isActive ? "border-darkPrimary" : "border-whitePrimay"
              }  border-2 rounded-md px-2.5 py-1.5 font-montserrat ${
                isActive ? "hover:bg-darkPrimary" : "hover:bg-whitePrimay "
              } hover:text-white duration-300`}>
              Send message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
