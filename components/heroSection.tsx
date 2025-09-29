"use client";

import { useEffect, useState } from "react";
import LeadForm from "./leadForm";
import heroBanner from "../public/hero-banner.jpg";

export default function Herosection() {
  const [openLeadForm, setOpenLeadForm] = useState(false);

  const openModal = () => {
    setOpenLeadForm(true);
  };

  const closeModal = () => {
    setOpenLeadForm(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenLeadForm(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className=" relative w-full h-[90vh] flex flex-col justify-center items-center text-4xl font-bold"
      style={{
        backgroundImage: `url(${heroBanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" absolute inset-0 bg-[#063154]/40 w-full h-full"/>
      <div className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl drop-shadow-2xl text-[#F7F6F2] text-center">
        <h1
          className=""
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          Compassionate Care.
        </h1>
        <h1
          className="text-center"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          A Home with Heart.
        </h1>
      </div>

      <button
        onClick={openModal}
        className="z-10 mt-8 bg-[#2F9D94] text-[#F7F6F2] px-6 py-3 rounded-full text-lg font-semibold cursor-pointer transition duration-300"
      >
        Meet Our Doctors
      </button>

      {/* Modal overlay */}
      {openLeadForm && (
        <div className="fixed inset-0 z-50">
          <LeadForm setOpenLeadForm={setOpenLeadForm} />
        </div>
      )}
    </div>
  );
}

