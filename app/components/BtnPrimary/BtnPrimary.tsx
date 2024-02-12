import React, { ReactNode } from "react";
import "../../globals.css";

interface BtnPrimaryProps {
  children: ReactNode;
  onClick: () => void;
}

const BtnPrimary = ({ children, onClick }: BtnPrimaryProps) => {
  return (
    <button
      onClick={onClick}
      className="mx-1 px-3 py-2 primary-btn text-white rounded font-bold"
    >
      {children}
    </button>
  );
};

export default BtnPrimary;
