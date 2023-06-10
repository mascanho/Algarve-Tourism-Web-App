"use client";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import { toast } from "react-hot-toast";
import { BsBookmarkHeart, BsGlobe } from "react-icons/bs";
import { BsQrCodeScan } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import Link from "next/link";
import { BsShareFill } from "react-icons/bs";
import StarRating from "./Layout/StarRating";

export const Card = ({
  category,
  title,
  slug,
  date,
  mainImage,
  city,
  image,
  tags,
  description,
  type,
  hiddenGem,
  rating,
  embededMap,
  mapShare,
  price,
}: any) => {
  const router = useRouter();
  const addFav = useAddToFavourites();

  function addToFavourites(e: any) {
    e.stopPropagation();
    const data = {
      category,
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
      id: slug,
      price,
    };
    addFav.addFavourite(data);
    toast.success(title + " added to " + "🧳");
  }

  return (
    <section className="border pb-2 mb-10 sm:pb-2 space-y-3 sm:space-y-2 text-left transition-all ease-in delay-75 rounded-md shadow-sm max-w-7xl w-[100%] mx-auto sm:w-full md:w-full  hover:border-sky  hover:shadow-md">
      <div className="relative flex flex-col w-full h-[180px] sm:h-40 overflow-hidden rounded-t-md ">
        <img src={`https:${image}`} alt="image" className="block h-full" />
        <div className="absolute active:scale-90 w-5 h-5 flex items-center justify-center rounded-full p-1 bg-white top-2 right-2">
          <AiFillHeart
            onClick={addToFavourites}
            className="text-md  text-red-500"
          />
        </div>
        <span className="absolute left-0 py-1 pr-2 text-xs text-black bg-white rounded-r-full top-4 ">
          📍 {city}
        </span>
      </div>
      <div className="flex items-center justify-between w-full px-2 text-left">
        <h3 className="items-center w-full text-sm text-left text-black">
          {" "}
          {title}
        </h3>
        <span className="text-sm text-gray-500">
          <StarRating rating={rating} />
        </span>
      </div>
      <div className="w-full h-[1px] bg-gray-300" />
      <div className="flex w-full  mt-20 py-2 overflow-hidden">
        <p className="line-clamp-3 textarea-xs">{description}</p>
        {/* <span className="flex-1 text-xs text-sky">Read more</span> */}
      </div>
      <div className="text-[9px] space-x-2 space-y-3 pb-4 px-2">
        {tags.map((cat: any) => (
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
        <div className="flex items-center  w-full px-2 align-middl space-x-2">
          <BsBookmarkHeart
            onClick={addToFavourites}
            className="hover:scale-110 cursor-pointer "
          />
          <BsQrCodeScan className="hover:scale-110 cursor-pointer" />
          <a href={mapShare} target="_blank">
            <BiMap className="hover:scale-110 cursor-pointer" />
          </a>
          <BsShareFill className="text-xs hover:scale-110 cursor-pointer" />
          <BsGlobe className="text-xs hover:scale-110 cursor-pointer" />
        </div>
        <div className="flex items-center justify-end text-sm w-full pr-2 ">
          <Link href={`/${type}/${slug}`}>
            <span className="flex text-xs text-sky">Read More</span>
          </Link>
        </div>
      </section>
    </section>
  );
};
