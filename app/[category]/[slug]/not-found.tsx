import React from "react";
import { catArr } from "@/Data/Categories";
import Link from "next/link";

function NotFound() {
  return (
    <div className="h-screen text-key flex space-y-3 flex-col items-center justify-center bg-darkwhite">
      <section className=" backdrop-blur-sm rounded-xl text-text white  px-10 py-5">
        <h2 className="text-8xl font-bold">404</h2>
        <h3>Oh dear... seems like you are lost</h3>
        <h4>Here... we will point you the way. Check below</h4>
        <div className="pt-4">
          {/* <Link aria-label="Go to categories" href="/adventure/"> */}
          <button className="border border-dashed border-key px-4 rounded-xl cursor-pointer py-1 hover:bg-key hover:text-highlight ">
            View categories
          </button>
          {/* </Link> */}
        </div>
      </section>
    </div>
  );
}

export default NotFound;
