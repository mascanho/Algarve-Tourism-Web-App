"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { GiBeachBucket, GiWoodCabin } from "react-icons/gi";
import { FaHiking, FaUtensils } from "react-icons/fa";
import { MdBusinessCenter, MdEvent, MdSportsHandball } from "react-icons/md";
import { PiMountainsFill } from "react-icons/pi";
import { catArr } from "@/Data/Categories";

export default function SidePanel() {
  const router = useRouter();
  const pathname = usePathname();

  const categoryIcons: any = {
    Beaches: <GiBeachBucket />,
    Restaurants: <FaUtensils />,
    Events: <MdEvent />,
    Adventure: <PiMountainsFill />,
    Business: <MdBusinessCenter />,
    Hiking: <FaHiking />,
    Sports: <MdSportsHandball />,
    Stays: <GiWoodCabin />,
  };

  return (
    <div className="hidden sm:block bg-white mb-40 h-[460px] sticky top-24 shadow-md hiddenRow border border-key rounded-xl p-1">
      <div className="w-32 space-y-4 cursor-pointer sm:mt-1 h-full sticky bottom-4 transition-all ease-in delay-75 overflow-hidden">
        {catArr.map((item: any) => (
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
            <span className="flex items-center space-x-2 cursor-pointer">
              {categoryIcons[item.name]} {/* Render icon */}
              <span>{item.name}</span> {/* Render category name */}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
