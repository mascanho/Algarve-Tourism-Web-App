"use client";
import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { GiBeachBucket, GiWoodCabin } from "react-icons/gi";
import { FaHiking, FaUtensils } from "react-icons/fa";
import {
  MdBusinessCenter,
  MdEvent,
  MdOutlineMuseum,
  MdSportsHandball,
} from "react-icons/md";
import { PiMountainsFill } from "react-icons/pi";
import { catArr } from "@/Data/Categories";
import { cityArr } from "@/Data/Cities";
import { Select } from "@mantine/core";
import { CiRedo } from "react-icons/ci";

export default function SidePanel() {
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef();

  const categoryIcons: any = {
    Beaches: <GiBeachBucket />,
    Restaurants: <FaUtensils />,
    Culture: <MdOutlineMuseum />,
    Events: <MdEvent />,
    Adventure: <PiMountainsFill />,
    Business: <MdBusinessCenter />,
    Hiking: <FaHiking />,
    Sports: <MdSportsHandball />,
    Stays: <GiWoodCabin />,
  };

  const handleSelection = (city: string) => {
    // router.push(`/${city}`);
    console.log(city);
    router.push(`${pathname}/?city=${city}`);
  };

  return (
    <div className="hiddenRow sticky top-24 mb-40 hidden h-[440px] rounded-xl border border-key bg-white p-1 shadow-md sm:block">
      <div className="sticky bottom-4 h-full w-32 cursor-pointer space-y-2 overflow-hidden transition-all delay-75 ease-in sm:mt-1">
        {catArr.map((item: any) => (
          <div
            onClick={() => router.push(`${item.route}`)}
            key={item.id}
            className={`
              rounded-md 
              p-2 
              transition-all 
              delay-100 
              ease-in-out 
              hover:bg-key 
              hover:text-white  
              ${
                pathname?.includes(item?.route)
                  ? "bg-key text-white border-gray-400 transition-all"
                  : "text-black transition-all"
              }
            `}
          >
            <span className="flex cursor-pointer items-center space-x-2">
              {categoryIcons[item.name]} {/* Render icon */}
              <span>{item.name}</span> {/* Render category name */}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex w-32 flex-col rounded-xl border border-key bg-white py-2 pl-2 shadow-md">
        <div className="flex flex-wrap text-black mb-1 items-center justify-between">
          <h3>Select city</h3>
          <CiRedo
            className="mr-[10px]"
            onClick={() => {
              router.push(`https://www.algarvewonders.com/${pathname}`);
              // window?.history?.back();
            }}
          />
        </div>
        <Select
          ref={ref}
          className="w-full text-sm text-black"
          comboboxProps={{
            transitionProps: { transition: "pop", duration: 200 },
          }}
          placeholder="All"
          data={cityArr.map((c: any) => ({
            value: c.route,
            label: c.name,
          }))}
          onChange={(city) => {
            handleSelection(city);
          }}
        />{" "}
      </div>
    </div>
  );
}
