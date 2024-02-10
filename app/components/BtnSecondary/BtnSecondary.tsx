import React, { ReactNode } from "react";

interface BtnSecondaryProps {
  children: ReactNode;
}

const BtnSecondary = ({ children }: BtnSecondaryProps) => {
  return <button className="mx-3 p-2">{children}</button>;
};

export default BtnSecondary;
