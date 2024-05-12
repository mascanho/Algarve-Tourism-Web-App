import React from "react";
import { FaCrow } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const BuilderHeader = () => {
  return (
    <div className="h-20 mb-2  border bg-white w-full text-black justify-center flex items-center absolute top-0 ">
      <section>
        <span>POWERED BY AI</span>
      </section>
      <IoClose className="absolute right-10" />
    </div>
  );
};

export default BuilderHeader;
