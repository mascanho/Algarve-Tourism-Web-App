"use client";
import Link from "next/link";
import React from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Pagination = ({ categories }: any) => {
  return (
    <div className="sm:mt-10 mt-10 flex justify-center  items-center space-x-3">
      {/* <button className="border px-3 py-2 rounded-full items-center text-xs sm:text-sm"> */}
      {/*   <GrLinkPrevious className="text-gray-300" /> */}
      {/* </button> */}

      <div className="bg-white space-x-2">
        {/* {[1, 2, 3, 4, 5, 6].map((page) => ( */}
        {/*   <span */}
        {/*     key={page} */}
        {/*     onClick={() => console.log(page)} */}
        {/*     className="rounded-full border px-2 py-2 w-24 h-24 text-xs sm:text-sm" */}
        {/*   > */}
        {/*     {page} */}
        {/*   </span> */}
        {/* ))} */}
        <Link href={"/beaches"}>
          <button className="border px-8 py-2 rounded-md hover:bg-sky hover:border-white hover:text-white transition-all ease-in delay-75 ">
            View More
          </button>
        </Link>
      </div>
      {/* <button className="border px-3 py-2 rounded-full items-center flex text-xs sm:text-sm"> */}
      {/*   <GrLinkNext className="text-red-400" /> */}
      {/* </button> */}
    </div>
  );
};

export default Pagination;
