import React, { useEffect, useState } from "react";
import { useToggleMode } from "@/store.js";
import SideLinks from "../components/SideLinks";
import { FaArrowLeft } from "react-icons/fa6";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { textColorPrimaryFunction } from "../utils/utils";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Image } from "@nextui-org/image";
import { FMSProject } from "../constants";
import Footer from "../components/Footer";

const Fms = () => {
  const { isActive } = useToggleMode();
  const navigate = useNavigate();
  const [selected, setSelected] = useState("user");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log("selected :", selected);
  }, [selected]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const textPrimary = textColorPrimaryFunction();
  return (
    <main
      className={`p-6 ${
        isActive ? "bg-dark" : "bg-white"
      } ease-in-out	duration-300 flex flex-col items-center md:p-14 overflow-hidden h-full relative`}
    >
      <Navigation />
      <div className=" w-full  smLaptop:w-8/12 pt-20 smLaptop:pt-16">
        <div className="flex justify-start w-full ">
          <button onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </button>
        </div>

        <div className=" w-10/12 mt-8">
          <p className={` text-3xl font-bold ${textPrimary}`}>QCU FMS</p>
          <p>
            A comprehensive system designed to simplify issue reporting, event
            requests, and service management for Quezon City University.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <Tabs
            ria-label="Options"
            selectedKey={selected}
            onSelectionChange={setSelected}
            className="font-semibold"
          >
            <Tab key="user" title="User" className="w-32"></Tab>
            <Tab key="admin" title="Admin" className="w-32"></Tab>
          </Tabs>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10 ">
          {selected === "user" ? (
            <>
              {FMSProject.user.map((item, index) => (
                <div className="shadow rounded-md" key={index}>
                  <img alt={item.alt} src={item.image} className="rounded-md" />
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="h-[12rem]">t</div>
              <div className="h-[12rem]">t</div>
              <div className="h-[12rem]">t</div>
            </>
          )}
        </div>
      </div>

      <button
        onClick={handleScrollToTop}
        className="fixed bottom-10  right-5 smLaptop:right-20 bg-white rounded-full shadow-xl border p-5 z-30 hover:bg-gray-50 ease-in-out duration-150"
      >
        Up
      </button>
      <SideLinks isActive={isActive} isInView={false} />
      <Footer />
    </main>
  );
};

export default Fms;
