"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoClose } from "react-icons/io5";

export const BuilderHeader = () => {
  const pathname = usePathname();

  return (
    <section>
      <div className="h-16 mb-2 overflow-hidden  border bg-white w-full z-20  text-black justify-center flex items-center fixed top-0 ">
        <section className="flex items-center">
          {pathname === "/builder" && (
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl font-bold">Builder</h1>
              <span className="mt-2 text-key/40">
                Select days, activities and more
              </span>
            </div>
          )}
          {pathname?.includes("/trip") && (
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl font-bold">Builder</h1>
              <span className="mt-2 text-key/40">select cities to visit</span>
            </div>
          )}
        </section>
        <Link className="absolute right-10" href="/">
          <IoClose />
        </Link>
      </div>
      {/* <div className="mt-16 w-1/2 h-[5px] bg-black" /> */}
    </section>
  );
};

export default BuilderHeader;
