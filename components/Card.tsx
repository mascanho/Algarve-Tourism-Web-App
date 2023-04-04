"use client";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

export const Card: React.FC<{}> = () => {
  return (
    <section className="max-w-7xl space-y-2 text-left md:w-72 mx-auto">
      <div className="w-full h-40 flex flex-col rounded-t-md overflow-hidden relative">
        <Image
          src="https://th.bing.com/th/id/OIG.XUrUyoz7q_uPku3p7E.0?pid=ImgGn"
          fill
          alt="image"
          className="block"
        />
        <span className="absolute left-0 top-4 pr-2 py-1 rounded-r-full text-xs text-black bg-white  ">
          📍 Albufeira
        </span>
      </div>
      <div className="flex w-full  text-left justify-between">
        <h3 className="w-full text-left text-black text-sm">
          {" "}
          🚣‍♀️ Riatclo Bridge, Italy
        </h3>
        <span className="text-gray-500 text-sm"> $66.99</span>
      </div>
      <div className="w-full h-[1px] bg-gray-300" />
      <div className="mt-20 flex w-full">
        <p className="line-clamp-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea neque
          dicta minus laboriosam illum. Placeat, harum sint! Hic, suscipit
          nobis!
        </p>
        {/* <span className="flex-1 text-sky text-xs">Read more</span> */}
      </div>
      <div className="text-xs space-x-2 pb-2">
        {["📸 Photo Tour"].map((cat) => (
          <span
            key={cat}
            className="border px-2 items-center align-middle justify-center my-auto  py-1 rounded-full item"
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="w-full h-[1px] bg-gray-300" />
      <div className="flex justify-between items-center align-middle w-full">
        <div className="mt-1 text-sm flex items-center space-x-2 mb-2 bg-sky text-white rounded-full w-32 px-2 py-1">
          <AiFillHeart className="text-red-500" />
          <span className="">Add to dream</span>
        </div>
        <span className="text-sm text-sky">Read More</span>
      </div>
    </section>
  );
};
