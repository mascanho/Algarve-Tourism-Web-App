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
      id,
      price,
      shortDescription,
      type,
    };
    addFav.addFavourite(data);
  }

  // handle copying the url to share
  function handleCopyUrl() {
    const url = `https://markwarrior.dev/${type}/${slug}`;
    navigator.clipboard.writeText(url);
    toast.success("URL copied to clipboard");
  }

  return (
    <section className="border pb-2 mb-10 sm:pb-2 space-y-3 sm:space-y-2 text-left transition-all ease-in delay-75 rounded-md shadow-sm max-w-7xl w-[100%] mx-auto sm:w-full md:w-full  hover:border-sky  hover:shadow-md z-0">
      <div className="relative flex flex-col w-full h-48 sm:h-40 rounded-t-md ">
        <img
          src={`https://${mainImage?.fields?.file?.url}`}
          alt="image"
          className="block h-full z-0"
          loading="lazy"
        />
        <div className="absolute active:scale-90 w-8 h-8 flex items-center justify-center rounded-full p-1 bg-white top-2 right-2">
          <AiFillHeart
            onClick={addToFavourites}
            className="text-md  text-red-500"
          />
        </div>
        <div className="absolute bg-white rounded-tl-md p-1 bottom-0 right-0">
          <StarRating rating={rating} />
        </div>
        <span className="absolute left-0 py-1 pr-2 text-xs text-black bg-white rounded-r-full top-4 ">
          📍 {city}
        </span>
      </div>
      <div className="flex items-center justify-between w-full px-2 text-left">
        <h3 className="items-center w-full text-sm text-left text-black">
          {title}
        </h3>
      </div>
      <div className="w-full h-[1px] bg-gray-300" />
      <div className="flex w-full px-2 mt-20 py-2">
        <p className="line-clamp-3 text-xs text-gray-700">
          {shortDescription}{" "}
        </p>
        {/* <span className="flex-1 text-xs text-sky">Read more</span> */}
      </div>
      <div className="text-[9px] space-x-2 pb-2 px-2">
        {tags?.map((cat: any) => (
          <span
            key={cat}
            className="items-center justify-center px-2 py-1 my-auto align-middle border rounded-full item"
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="w-full h-[1px] bg-gray-300 px-2" />
      <section className="flex justify-between w-full items-center">
        <div className="flex items-center  w-full px-2  align-middl space-x-2">
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
        <div className="flex items-center justify-end text-sm w-full pr-2 ">
          <Link href={`/${type}/${slug}`}>
            <span className="flex text-xs text-sky cursor-pointer">
              Read More
            </span>
          </Link>
        </div>
      </section>
    </section>
  );
};
