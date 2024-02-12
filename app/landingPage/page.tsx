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
      <div className="w-1/2">
        <h4 className="landing-plus">+</h4>
        <h1 className="landing-page-title-first">
          <span className="title-courage">Courage</span> flows in
        </h1>
        <h1 className="landing-page-title-second">your veins</h1>
        <div className="text-3xl ml-20">
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
