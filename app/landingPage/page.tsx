import React from "react";
import "./landingpage.css"
import Image from "next/image";
import AuthBtn from "../components/AuthBtn/AuthBtn";

const LandingPage = () => {
  return (
    <div className="landing-page grid grid-cols-2 gap-4">
      <div className="landing-page-text-container">
        <h4 className="landing-plus">+</h4>
        <h1 className="landing-page-title-first">
          <span className="title-courage">Courage</span> flows in
        </h1>
        <h1 className="landing-page-title-second">your veins</h1>
        <div className="nav-button">
        <AuthBtn></AuthBtn>
        </div>
      </div>
      <div className="landing-page-image-container relative h-[500px] w-full"> {/* Adjust the height as needed */}
        <Image 
          src="/blood_donation.jpg" 
          alt="Blood Donation" 
          layout="fill" 
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default LandingPage;
