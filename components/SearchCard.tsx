"use client";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";

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
}: any) => {
  const router = useRouter();

  return (
    <section
      onClick={() => router.push(`/${type}/${slug}`)}
      className="pb-2 space-y-2 text-left transition-all ease-in delay-75 rounded-md shadow-sm max-w-7xl md:w-64 hover:scale-105 sm:mt-10 hover:cursor-pointer"
    >
      <div className="relative flex flex-col w-full h-40 overflow-hidden rounded-t-md ">
        <Image
          src="https://th.bing.com/th/id/OIG.XUrUyoz7q_uPku3p7E.0?pid=ImgGn"
          fill
          alt="image"
          className="block"
        />
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
      <div className="flex w-full px-2 mt-20">
        <p className="line-clamp-3">{shortDescription} </p>
        {/* <span className="flex-1 text-xs text-sky">Read more</span> */}
      </div>
      <div className="text-[9px] space-x-2 pb-2 px-2">
        {["📸 Photo Tour"].map((cat) => (
          <span
            key={cat}
            className="items-center justify-center px-2 py-1 my-auto align-middle border rounded-full item"
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="w-full h-[1px] bg-gray-300 px-2" />
      <div className="flex items-center justify-between w-full px-2 align-middle">
        <div className="flex items-center px-3 mt-1 mb-2 space-x-2 text-sm text-white rounded-full bg-sky w-fit ">
          <AiFillHeart className="text-xs text-red-500" />
          <span className="text-[10px]">Add to dream</span>
        </div>
        <span className="text-sm text-sky">Read More</span>
      </div>
    </section>
  );
};
