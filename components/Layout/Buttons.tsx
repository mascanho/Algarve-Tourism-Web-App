"use client";
import { usePathname, useRouter } from "next/navigation";
import { HiQrCode } from "react-icons/hi2";
import React, { useState } from "react";
import { BiMapPin } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { MdOutlineCardTravel } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";

const Buttons = ({ filteredData }: any) => {
  const [isCopied, setIsCopied] = useState(false);
  const pathname = usePathname();
  const addFavourites = useAddToFavourites();

  console.log(addFavourites.favourites);

  function addFav() {
    addFavourites.addFavourite({
      id: filteredData[0]?.sys?.id,
      title: filteredData[0]?.fields?.title,
      description: filteredData[0]?.fields?.description,
      image: filteredData[0]?.fields?.mainImage?.fields?.file?.url,
      slug: filteredData[0]?.fields?.slug,
      rating: filteredData[0]?.fields?.rating,
      city: filteredData[0]?.fields?.city,
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
  }

  return (
    <>
      <MdOutlineCardTravel
        data-tooltip-content="Add to favourites"
        className="w-6 h-6 sm:w-8 sm:h-8 outline-none fav p-1 border tooltip rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75"
        onClick={addFav}
      />
      <Tooltip anchorSelect=".fav" />
      <BiMapPin
        data-tooltip-content="Open in Google Maps"
        onClick={handleClickGps}
        className="w-6 h-6 sm:w-8 sm:h-8 p-1 tooltip border rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75"
      />
      <Tooltip anchorSelect=".tooltip" />
      <BiShareAlt
        data-tooltip-content="Share this page"
        onClick={handleCopyUrl}
        className="urlCopy w-6 h-6 sm:w-8 sm:h-8 p-1 border rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75"
      />
      <Tooltip anchorSelect=".urlCopy" />
      <HiQrCode className="urlCopy w-6 h-6 sm:w-8 sm:h-8 p-1 border rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75" />
    </>
  );
};

export default Buttons;
