import React, { ReactNode } from "react";

interface BtnSecondaryProps {
  children: ReactNode;
  onClick: () => void;
}

const BtnSecondary = ({ children, onClick }: BtnSecondaryProps) => {
  return (
    <button onClick={onClick} className="mx-3 p-2">
      {children}
    </button>
  );
};

export default BtnSecondary;
