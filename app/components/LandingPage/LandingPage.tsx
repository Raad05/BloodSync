"use client";

import React from "react";
import Image from "next/image";
import BtnPrimary from "../BtnPrimary/BtnPrimary";
import BtnSecondary from "../BtnSecondary/BtnSecondary";
import { Vollkorn } from "next/font/google";

// Import Vollkorn with desired weights and styles
const vollkorn = Vollkorn({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

const LandingPage = () => {
  const clicked = () => {
    console.log("Clicked");
  };

  return (
    <div
      className={`landing-page ${vollkorn.className} container mx-auto flex justify-center items-center my-20`}
    >
      <div className="flex-1 w-1/2">
        <div className="relative">
          <h4 className="primary-text text-6xl" style={{ fontWeight: 900 }}>
            +
          </h4>
          <h3
            className="text-6xl absolute left-5 top-10 mr-80 primary-text"
            style={{ fontWeight: 800 }}
          >
            <span className="secondary-text">Courage</span> flows in your Veins
          </h3>
        </div>
        <p className="text-xl mt-28 ml-5 mr-40">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          temporibus accusantium porro obcaecati doloremque magni, facere ad
          placeat? Nisi similique explicabo architecto rem? Rerum non iusto
          assumenda, expedita eligendi nobis?
        </p>
        <div className="text-3xl ml-4 my-5">
          <BtnPrimary onClick={clicked}>Donate Blood</BtnPrimary>
          <BtnSecondary onClick={clicked}>Request Blood</BtnSecondary>
        </div>
      </div>
      <Image
        className="rounded-full"
        width={600}
        height={600}
        src="/blood_donation.jpg"
        alt="Blood Donation"
        objectFit="cover"
      />
    </div>
  );
};

export default LandingPage;
