"use client";
import { usePathname } from "next/navigation";
import { HiQrCode } from "react-icons/hi2";
import React, { useState } from "react";
import { BiMapPin } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import { toast } from "react-hot-toast";
import { BsFillSuitHeartFill, BsGlobe } from "react-icons/bs";
import { FiPrinter } from "react-icons/fi";
import Link from "next/link";

const Buttons = ({ filteredData }: any) => {
  const [isCopied, setIsCopied] = useState(false);
  const pathname = usePathname();
  const addFavourites = useAddToFavourites();

  function addFav() {
    addFavourites.addFavourite({
      id: filteredData[0]?.sys?.title,
      title: filteredData[0]?.fields?.title,
      description: filteredData[0]?.fields?.description,
      image: filteredData[0]?.fields?.mainImage?.fields?.file?.url,
      slug: filteredData[0]?.fields?.slug,
      rating: filteredData[0]?.fields?.rating,
      city: filteredData[0]?.fields?.city,
      type: filteredData[0]?.fields?.type,
    });
  }

  // handle the GPS to open on a new tab
  function handleClickGps() {
    const GPS = JSON.stringify(filteredData[0]?.fields?.locationGps);

    const latitude: any = filteredData[0]?.fields?.locationGps?.lat;
    const longitude: any = filteredData[0]?.fields?.locationGps?.lon;

    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    navigator.clipboard.writeText(url);
    window.open(url, "_blank");
  }

  // handle copying the url to share
  function handleCopyUrl() {
    const url = `https://markwarrior.dev${pathname}`;
    navigator.clipboard.writeText(url);
    toast.success("URL copied to clipboard");
  }

  return (
    <section className="text-gray-500 flex space-x-2">
      <BsFillSuitHeartFill
        className="w-8 h-8 outline-none fav p-[6px] border tooltip rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75 text-xs"
        onClick={addFav}
      />
      <Link href={filteredData[0].fields.website} target="_blank">
        <BsGlobe className="w-8 h-8 p-[6px] border rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75  " />
      </Link>
      <BiMapPin
        onClick={handleClickGps}
        className="w-8 h-8 p-1 tooltip border rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75"
      />
      <BiShareAlt
        data-tooltip-content="Share this page"
        onClick={handleCopyUrl}
        className="urlCopy w-8 h-8 p-1 border rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75"
      />
      {/* <HiQrCode className="urlCopy w-6 h-6 sm:w-8 sm:h-8 p-1 border rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75" /> */}
      <FiPrinter
        onClick={() => window.print()}
        className="urlCopy w-8 h-8 p-1 border rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75"
      />
    </section>
  );
};

export default Buttons;
