"use client";
import "./authBtn.css"
import BtnPrimary from "../BtnPrimary/BtnPrimary";
import BtnSecondary from "../BtnSecondary/BtnSecondary";

const clicked = () => {
  console.log("Clicked");
};

const AuthBtn = () => {
  return (
    <div className="auth-btn">
      <BtnPrimary onClick={clicked}>Login</BtnPrimary>
      <BtnSecondary onClick={clicked}>Signup</BtnSecondary>
    </div>
  );
};

export default AuthBtn;
