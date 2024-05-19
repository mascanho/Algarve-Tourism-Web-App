"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export const BuilderHeader = () => {
  const pathname = usePathname();
  const [percentage, setPerecentage] = useState(1);

  return (
    <section className="relative">
      <div className="h-16 overflow-hidden  border bg-white w-full z-20  text-black justify-center flex items-center fixed top-0 ">
        <section className="flex items-center">
          {pathname === "/builder" && (
            <div className="flex items-center space-x-4 ">
              <h1 className="text-3xl font-bold">Builder</h1>
              <span className="mt-1 text-xs  text-key/40">
                Select days, activities and more
              </span>
            </div>
          )}
          {pathname?.includes("/cities") && (
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold">Builder</h1>
              <span className="mt-1 text-xs text-key/40">
                select cities to visit
              </span>
            </div>
          )}
          {pathname?.includes("/summary") && (
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold">Builder</h1>
              <span className="mt-1 text-xs text-key/40">summary</span>
            </div>
          )}
        </section>
        <Link className="absolute right-10" href="/">
          <IoClose />
        </Link>
      </div>
      <div
      // className={`mt-16 w-${percentage}/4 ${pathname === "/planner" && "w-full"} h-[5px] bg-black absolute top-0 z-10`}
      />

      <div
        className={` bg-black h-[5px] z-20 fixed top-16 ${
          (pathname === "/builder" && "w-32") ||
          (pathname === "/builder/cities" && "w-2/4") ||
          (pathname === "/builder/summary" && "w-4/5")
        } `}
      />
    </section>
  );
};

export default BuilderHeader;
