"use client";
import { useEffect, useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { usePathname } from "next/navigation";
import { FaShield } from "react-icons/fa6";

function StepperEl() {
  const [index, setIndex] = useState(1);
  const pathname = usePathname();

  return (
    <section className="w-full px-20">
      <div
        className={`fixed top-0 left-0 mt-16 ${
          pathname === "/builder" && "w-1/5"
        } 
        ${pathname === "/builder/trip" && "w-2/4"}
        ${pathname === "/builder/summary" && "w-10/12"}
h-[5px] bg-black
        
`}
      />
    </section>
  );
}
export default StepperEl;
