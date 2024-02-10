import React, { ReactNode } from "react";

interface BtnPrimaryProps {
  children: ReactNode;
  onClick: () => void;
}

const BtnPrimary = ({ children, onClick }: BtnPrimaryProps) => {
  return (
    <button
      onClick={onClick}
      className="mx-1 px-3 py-2 bg-red-700 text-white rounded font-bold"
    >
      {children}
    </button>
  );
};

export default BtnPrimary;
