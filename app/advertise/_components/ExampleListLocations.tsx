"use client";
import Link from "next/link";
import { BiMap } from "react-icons/bi";
import { BsGlobe, BsShareFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

function ExampleListLocations() {
  const cat = [
    {
      id: 1,
      title: "Your Restaurant Name",
      slug: "slug",
      date: "2022-01-01",
      mainImage: "main image",
      city: "Albufeira",
      image:
        "https://a.cdn-hotels.com/gdcs/production111/d1405/e28c4d66-c002-43e3-b50a-7ddf87650135.jpg",
      tags: ["Ocean view", "Seafood", "Private Parking"],
      description: "description",
      hiddenGem: "hiddenGem",
      rating: "5",
      embededMap: "embededMap",
      mapShare: "mapShare",
      price: "price",
      shortDescription:
        "Welcome to [Restaurant Name], where culinary art meets comfort. Nestled in the heart of [City], our restaurant offers a delightful dining experience that tantalizes the taste buds and warms the soul.",
      type: "type",
      pathname: "pathname",
    },
  ];


  function card() {
    return (
      <div className="pb-2 group sm:pb-2 mb-5 space-y-3 p-4 sm:space-y-1 text-left transition-all ease-in delay-75 rounded-xl max-w-7xl w-11/12  mx-auto sm:w-full">
        <div className="relative flex flex-col w-full px-1  h-[200px] sm:h-44 md:h-44 xl:h-44 rounded-t-md ">
          <img
            loading="lazy"
            src={`${cat[0].image}`}
            alt="image"
            className="block h-full px-1 w-full object-cover rounded-xl "
          />
          <div className="absolute active:scale-90 w-8 h-8 flex items-center justify-center rounded-full  bg-key top-3 right-4 cursor-pointer">
            <FaRegHeart className="text-xl group-hover:scale-110 transition-all ease-in-out  text-red-500 hover:pt-[2px] pt-[1px]" />
          </div>
          <span className="absolute left-2 py-1 pr-2 pl-1 text-xs text-highlight bg-key rounded-r-full top-4 ">
            📍 {cat[0].city}
          </span>
        </div>
        <div className="flex px-2 pt-2 items-center justify-between w-full  text-left">
          <h3 className="items-center w-full text-sm text-left font-semibold text-black">
            {" "}
            {cat[0].title}
          </h3>
          <div className="flex ">
            <IoIosStar className="text-sm text-key" />
            <span className="text-xs text-key ml-1">{cat[0].rating}</span>
          </div>
        </div>
        {/* <div className="w-full h-[1px] bg-gray-300" /> */}
        <div className="flex w-full   pb-2 ">
          <p className="line-clamp-3 textarea-xs text-gray-700">
            {cat[0].shortDescription}
          </p>
        </div>
        <div className="text-[9px] space-x-2 space-y-3 pb-4 px-2">
          {cat[0]?.tags?.map((cat: any) => (
            <span
              key={cat}
              className="items-center justify-center px-2 py-1 my-auto align-middle border rounded-full item"
            >
              {cat}
            </span>
          ))}
        </div>
        {/* <div className="w-full h-[1px] bg-gray-300 px-2 " /> */}
        <section className="flex justify-between bg-key shadow-md rounded-b-lg w-full py-2 items-center">
          <div className="flex items-center  w-full px-2 align-middl space-x-3">
            {/* <BsQrCodeScan className="hover:scale-110 cursor-pointer" /> */}
            <a
              // href={mapShare}
              aria-label={`View on map`}
              // target="_blank"
            >
              <BiMap className="hover:scale-110 cursor-pointer" />
            </a>
            <BsShareFill
              // onClick={handleCopyUrl}
              className="text-xs hover:scale-110 cursor-pointer"
            />
            <a
              // href={`/${cat.fields.type}/${cat?.fields?.slug}`}
              aria-label={`View on website in new tab`}
              // target="_blank"
            >
              <BsGlobe className="text-xs hover:scale-110 cursor-pointer" />
            </a>
          </div>
          <div className="flex items-center justify-end text-sm w-full pr-2 ">
            <Link aria-label={`Discover the best of ${cat[0].title}`} href={``}>
              <span className="flex text-xs text-highlight mr-2">
                View place
              </span>
            </Link>
          </div>
        </section>
      </div>
    );
  }
  return card();
}

export default ExampleListLocations;
