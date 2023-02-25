import React, { useContext } from "react";
import { MobileContext } from "../../Context/MobileContext";

export const Confirm = () => {
  const { confirm } = useContext(MobileContext);

  return (
    <div className={confirm ? "w-screen h-screen bg-red-600" : "hidden"}></div>
  );
};
