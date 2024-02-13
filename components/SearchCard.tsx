"use client";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import { BsBookmarkHeart, BsGlobe } from "react-icons/bs";
import { BsQrCodeScan } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import Link from "next/link";
import { BsShareFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import StarRating from "./Layout/StarRating";
import { usePathname } from "next/navigation";
import { IoIosStar } from "react-icons/io";
import { Menu } from "@mantine/core";
import { MenuDropdown } from "@mantine/core/lib/Menu/MenuDropdown/MenuDropdown";
import { FaRegHeart } from "react-icons/fa";

export const SearchCard = (item: any) => {
  const {
    title,
    slug,
    date,
    mainImage,
    city,
    image,
    tags,
    description,
    hiddenGem,
    rating,
    embededMap,
    mapShare,
    id,
    price,
    shortDescription,
    type,
  } = item.fields;

  const addFav = useAddToFavourites();

  function addToFavourites(e: any) {
    const data = {
      // category,
      title,
      slug,
      date,
      mainImage,
      city,
      image: mainImage?.fields?.file?.url,
      tags,
      description,
      hiddenGem,
      rating,
      embededMap,
      mapShare,
      id: title,
      price,
      shortDescription,
      type,
    };
    console.log(data);
    addFav.addFavourite(data);
  }

  // handle copying the url to share
  function handleCopyUrl() {
    const url = `https://markwarrior.dev/${type}/${slug}`;
    navigator.clipboard.writeText(url);
    toast.success("URL copied to clipboard");
  }

  return (
    <section className="pb-2  mb-10 sm:pb-2  text-left transition-all p-3 ease-in delay-75 rounded-md max-w-7xl w-[100%] mx-auto sm:w-full md:w-full  z-0">
      <div className="relative overflow-hidden flex flex-col  h-52 sm:h-40 rounded-t-md ">
        <img
          src={`https://${mainImage?.fields?.file?.url}`}
          alt="image"
          className="block h-52 z-0 rounded-xl object-cover"
          loading="lazy"
        />
        <div className="absolute active:scale-90 w-7 h-7 flex items-center justify-center rounded-full p-1 bg-key top-2 right-2">
          <FaRegHeart
            onClick={addToFavourites}
            className="text-md pt-[1px] text-red-500 "
          />
        </div>
        <span className="absolute  py-1 pr-2 text-xs text-white bg-key rounded-r-full top-4 ">
          📍 {city}
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-between w-full px-1 mt-2 text-left">
        <h3 className="items-center font-semibold text-sm text-left text-black">
          {title}
        </h3>

        <div className="flex flex-wrap items-center justify-center">
          <IoIosStar className="m-auto text-key" />
          <span className="m-auto text-key text-xs mt-[1px] ml-1">
            {rating}
          </span>
        </div>
      </div>
      <p className="line-clamp-3 my-2 px-1 text-xs text-gray-700">
        {shortDescription}{" "}
      </p>
      <div className="text-[9px]  mt-4  h-8">
        {tags?.map((cat: any) => (
          <span
            key={cat}
            className="items-center justify-center px-2 mr-1 py-1 my-auto align-middle border rounded-full item"
          >
            {cat}
          </span>
        ))}
      </div>
      <section className="flex justify-between bg-key rounded-b-xl text-highlight p-2 w-full items-center">
        <Menu>
          <Menu.Target className="ml-1 h-4 flex justify-start items-end cursor-pointer">
            <span className="m-auto">...</span>
          </Menu.Target>

          <Menu.Dropdown className="rounded-lg">
            <div className="flex items-center p-2 rounded-lg  text-key  w-full  space-x-2">
              <BsBookmarkHeart className="hover:scale-110 cursor-pointer" />
              {/* <BsQrCodeScan className="hover:scale-110 cursor-pointer" /> */}
              <a href={mapShare} target="_blank">
                <BiMap className="hover:scale-110 cursor-pointer" />
              </a>
              <BsShareFill
                onClick={handleCopyUrl}
                className="text-xs hover:scale-110 cursor-pointer"
              />
              <BsGlobe className="text-xs hover:scale-110 cursor-pointer" />
            </div>
          </Menu.Dropdown>
        </Menu>
        <div className="flex items-center justify-end text-sm py-1 w-full pr-2 ">
          <Link href={`/${type}/${slug}`}>
            <span className="flex text-xs text-highlight cursor-pointer">
              Read More
            </span>
          </Link>
        </div>
      </section>
    </section>
  );
};
