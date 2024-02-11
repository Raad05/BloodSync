import React, { ReactNode } from "react";

interface BtnSecondaryProps {
  children: ReactNode;
  onClick: () => void;
}

const BtnSecondary = ({ children, onClick }: BtnSecondaryProps) => {
  return (
    <button
      onClick={onClick}
      className="mx-1 px-3 py-2 border border-red-700 bg-white text-red-700 rounded font-bold"
    >
      {children}
    </button>
  );
};

export default BtnSecondary;
