"use client";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import { toast } from "react-hot-toast";
import { BsBookmarkHeart } from "react-icons/bs";
import { BsQrCodeScan } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import Link from "next/link";
import { BsShareFill } from "react-icons/bs";

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
    };
    addFav.addFavourite(data);
    toast.success(title + " added to " + "🧳");
  }

  console.log(tags, "From card ");

  return (
    <section className="border pb-2 mb-10 sm:pb-2 space-y-3 sm:space-y-2 text-left transition-all ease-in delay-75 rounded-md shadow-sm max-w-7xl w-[100%] mx-auto sm:w-full md:w-64 hover:border-sky hover:cursor-pointer hover:shadow-md">
      <div className="relative flex flex-col w-full h-[180px] sm:h-40 overflow-hidden rounded-t-md ">
        <Image src={`https:${image}`} fill alt="image" className="block" />
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
        <span className="text-sm text-gray-500"> $66.99</span>
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
          <BsBookmarkHeart />
          <BsQrCodeScan />
          <BiMap />
          <BsShareFill className="text-xs" />
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
