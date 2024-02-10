import React, { ReactNode } from "react";

interface BtnPrimaryProps {
  children: ReactNode;
}

const BtnPrimary = ({ children }: BtnPrimaryProps) => {
  return <button className="mx-3 p-2">{children}</button>;
};

export default BtnPrimary;
