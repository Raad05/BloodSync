"use client";

import React from "react";
import styles from "./landingPage.module.css";
import Image from "next/image";
import BtnPrimary from "../components/BtnPrimary/BtnPrimary";
import BtnSecondary from "../components/BtnSecondary/BtnSecondary";

const LandingPage = () => {
  const clicked = () => {
    console.log("Clicked");
  };

  return (
    <div className="landing-page container mx-auto flex justify-center items-center my-20">
      <div className="flex-1">
        <div className="w-1/2 relative h-40">
          <h4 className="primary-text font-bold text-6xl">+</h4>
          <h3 className="text-6xl font-bold absolute left-5 top-10">
            <span className="secondary-text">Courage</span> Flows in your Veins
          </h3>
        </div>
        <div className="text-3xl my-5">
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
