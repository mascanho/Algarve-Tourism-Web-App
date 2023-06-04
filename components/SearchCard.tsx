"use client";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import { BsBookmarkHeart } from "react-icons/bs";
import { BsQrCodeScan } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import Link from "next/link";
import { BsShareFill } from "react-icons/bs";
import { toast } from "react-hot-toast";

export const SearchCard = ({
  category,
  title,
  slug,
  date,
  mainImage,
  city,
  tags,
  hiddenGem,
  type,
  description,
  shortDescription,
  mapShare,
  embededMap,
  image,
  rating,
}: any) => {
  const router = useRouter();
  const addFav = useAddToFavourites();

  function addToFavourites(e: any) {
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
    };
    addFav.addFavourite(data);
    console.log(data, "added to favourites");

    toast.success(title + " added to " + "🧳");
  }

  return (
    <section className="min-h-max pb-2 space-y-2 text-left transition-all ease-in delay-75 rounded-md shadow-sm max-w-7xl md:w-64 border hover:shadow-md sm:mt-10 hover:cursor-pointer hover:border-sky ">
      <div className="relative flex flex-col w-full h-40 overflow-hidden rounded-t-md ">
        <Image
          src={`https://${mainImage?.fields?.file?.url}`}
          fill
          alt="image"
          className="block"
        />
        <div className="absolute active:scale-90 w-5 h-5 flex items-center justify-center rounded-full p-1 bg-white top-2 right-2">
          <AiFillHeart
            onClick={() => console.log("clicked")}
            className="text-md  text-red-500"
          />
        </div>
        <div className="absolute active:scale-90 w-5 h-5 flex items-center justify-center rounded-full p-1 bg-white top-2 right-2">
          <AiFillHeart
            // onClick={addToFavourites}
            className="text-md  text-red-500"
          />
        </div>
        <span className="absolute left-0 py-1 pr-2 text-xs text-black bg-white rounded-r-full top-4 ">
          📍 {city}
        </span>
      </div>
      <div className="flex items-center justify-between w-full px-2 text-left">
        <h3 className="items-center w-full text-sm text-left text-black">
          {title}
        </h3>
        <span className="text-sm text-gray-500"> $66.99</span>
      </div>
      <div className="w-full h-[1px] bg-gray-300" />
      <div className="flex w-full px-2 mt-20 py-2">
        <p className="line-clamp-3 text-xs">{shortDescription} </p>
        {/* <span className="flex-1 text-xs text-sky">Read more</span> */}
      </div>
      <div className="text-[9px] space-x-2 pb-2 px-2">
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
          <BsBookmarkHeart className="hover:scale-110" />
          <BsQrCodeScan className="hover:scale-110" />
          <a href={mapShare} target="_blank">
            <BiMap className="hover:scale-110" />
          </a>
          <BsShareFill className="text-xs hover:scale-110" />
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
