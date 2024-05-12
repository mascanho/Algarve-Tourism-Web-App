"use client";
import { useEffect, useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { usePathname } from "next/navigation";
import { FaShield } from "react-icons/fa6";

function StepperEl() {
  const [index, setIndex] = useState(1);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/builder") {
      setIndex(1);
    } else if (pathname === "/builder/trip") {
      setIndex(2);
    }
  }, [pathname]);

  return (
    <section className="w-full px-20">
      <div
        className={`fixed top-0 left-0 mt-16 w-1/4 ${index > 1 ? "w-2/3" : ""} h-[5px] bg-black`}
      />
      <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100 sm:min-w-[450px]">
        <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
          <li className="flex items-center gap-2 bg-white p-2">
            <span
              className={`${index > 0 ? "bg-key text-white" : "bg-gray-100"}  size-6 rounded-full text-center text-[10px]/6 font-bold`}
            >
              {" "}
              1{" "}
            </span>

            <span className="hidden sm:block"> Details </span>
          </li>

          <li className="flex items-center gap-2 bg-white p-2">
            <span
              className={`${index > 1 ? "bg-key text-white" : "bg-gray-100"}  size-6 rounded-full text-center text-[10px]/6 font-bold`}
            >
              2
            </span>

            <span className="hidden sm:block"> Address </span>
          </li>

          <li className="flex items-center gap-2 bg-white p-2">
            <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
              {" "}
              3{" "}
            </span>

            <span className="hidden sm:block"> Payment </span>
          </li>
        </ol>
      </div>
    </section>
  );
}
export default StepperEl;
