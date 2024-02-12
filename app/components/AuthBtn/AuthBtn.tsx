"use client";

import BtnPrimary from "../BtnPrimary/BtnPrimary";

const clicked = () => {
  console.log("Clicked");
};

const AuthBtn = () => {
  return (
    <div className="auth-btn">
      <BtnPrimary onClick={clicked}>Login</BtnPrimary>
      <BtnPrimary onClick={clicked}>Signup</BtnPrimary>
    </div>
  );
};

export default AuthBtn;
