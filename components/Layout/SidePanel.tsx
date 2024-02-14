"use client";
import { catArr } from "@/Data/Categories";
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SidePanel() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="hidden sm:block bg-white mb-40 h-[460px] relative shadow-md hiddenRow border border-key rounded-xl p-1">
      <div className="w-32 space-y-4 cursor-pointer sm:mt-1  h-full sticky bottom-4  transition-all ease-in delay-75 overflow-hidden  ">
        {catArr.map((item) => (
          <div
            onClick={() => router.push(`${item.route}`)}
            key={item.id}
            className={`
            p-2 
            rounded-md 
            hover:bg-key 
            hover:text-white 
            transition-all 
            ease-in-out 
            delay-100  
            ${
              pathname?.includes(item?.route)
                ? "bg-key text-white border-gray-400 transition-all"
                : "text-black transition-all"
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
