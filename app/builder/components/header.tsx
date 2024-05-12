import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";

export const BuilderHeader = () => {
  return (
    <section>
      <div className="h-16 mb-2 overflow-hidden  border bg-white w-full z-20  text-black justify-center flex items-center fixed top-0 ">
        <section>GENERATED AI</section>
        <Link className="absolute right-10" href="/">
          <IoClose />
        </Link>
      </div>
      {/* <div className="mt-16 w-1/2 h-[5px] bg-black" /> */}
    </section>
  );
};

export default BuilderHeader;
