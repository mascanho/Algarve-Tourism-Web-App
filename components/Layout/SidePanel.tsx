"use client";
import { catArr } from "@/Data/Categories";
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SidePanel() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="hidden sm:block mb-40 relative">
      <div className="w-40 space-y-4 cursor-pointer pr-6 border-r-[1.5px] border-gray-100 h-full sticky bottom-4  transition-all ease-in delay-75 overflow-hidden  ">
        {catArr.map((item) => (
          <div
            onClick={() => router.push(`${item.route}`)}
            key={item.id}
            className={`
            border 
border-gray-300
            p-2 
            rounded-md 
            hover:bg-black 
            hover:text-white 
            transition-all 
            ease-in 
            delay-75  
            ${
              pathname?.includes(item?.route)
                ? "bg-black text-white border-gray-400"
                : "text-black"
            }
            `}
          >
            <span className="cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
