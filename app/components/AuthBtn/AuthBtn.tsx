"use client";

const AuthBtn = () => {
  const clicked = () => {
    console.log("Clicked");
  };

  return (
    <div className="auth-btn">
      <button onClick={clicked} className="mx-3 p-2">
        Login
      </button>
      <button onClick={clicked} className="mx-3 p-2">
        Signup
      </button>
    </div>
  );
};

export default AuthBtn;
