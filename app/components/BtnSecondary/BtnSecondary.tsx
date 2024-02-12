import React, { ReactNode } from "react";
import "../../globals.css";

interface BtnSecondaryProps {
  children: ReactNode;
  onClick: () => void;
}

const BtnSecondary = ({ children, onClick }: BtnSecondaryProps) => {
  return (
    <button
      onClick={onClick}
      className="mx-1 px-3 py-2 secondary-btn rounded font-bold"
    >
      {children}
    </button>
  );
};

export default BtnSecondary;
