import React, { ReactNode } from "react";

interface BtnPrimaryProps {
  children: ReactNode;
  onClick: () => void;
}

const BtnPrimary = ({ children, onClick }: BtnPrimaryProps) => {
  return (
    <button onClick={onClick} className="mx-3 p-2">
      {children}
    </button>
  );
};

export default BtnPrimary;
