import BtnPrimary from "../BtnPrimary/BtnPrimary";
import BtnSecondary from "../BtnSecondary/BtnSecondary";

const AuthBtn = () => {
  return (
    <div className="auth-btn">
      <BtnPrimary>Login</BtnPrimary>
      <BtnSecondary>Signup</BtnSecondary>
    </div>
  );
};

export default AuthBtn;
