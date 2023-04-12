"use client";
import { catArr } from "@/Data/Categories";
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SidePanel() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="border-r-2 pr-4  hidden sm:block mb-40">
      <div className="w-40 space-y-4 cursor-pointer  px-2 rounded-md transition-all ease-in delay-75  ">
        {catArr.map((item) => (
          <div
            onClick={() => router.push(`${item.route}`)}
            key={item.id}
            className={`
            border 
            p-2 
            rounded-md 
            hover:bg-sky 
            hover:text-white 
            transition-all 
            ease-in 
            delay-75  
            ${pathname === item.route ? "bg-sky text-white border-black" : ""}
            `}
          >
            <span className="cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
