"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsQrCodeScan } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { Menu } from "@mantine/core";
import JsonLd from "@/libs/JsonLd";

interface Category {
  id: number;
  fields: {
    title: string;
    slug: string;
    mainImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    city: string;
    price: string;
    shortDescription: string;
    tags: string[];
    mapShare: string;
    rating: string;
  };
}

interface CategoryCardProps {
  category: Category[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  session,
}: any) => {
  const pathname = usePathname();
  const addFav = useAddToFavourites();

  function addToFavourites(item: any) {
    addFav.addFavourite(item);
  }

  // useEffect(() => {
  //   window?.scrollTo(0, 0);
  // }, [pathname]);

  // Handle when category is empty []
  if (category.length === 0) {
    return (
      <p className="w-full min-h-screen m-auto flex justify-center items-center">
        Coming Soon
      </p>
    );
  }

  return (
    <>
      <div className="overflow-hidden mt-20 sm:mt-0 w-full min-h-screen">
        {/* <Selection /> */}
        <section className="max-w-7xl transition-all ease-in delay-75 mx-auto w-11/12 sm:w-full  sm:px-6  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  md:ml-auto gap-y-4 md:gap-x-6  mb-20">
          {category.map((cat: any) => (
            <section
              key={cat?.title}
              className="space-y-1 text-left p-2 group lg:w-full pb-2 transition-all ease-in delay-75"
            >
              <div className="w-full h-48 sm:h-56 md:h-48 xl:h-36 flex px-1   overflow-hidden relative">
                <img
                  src={
                    cat?.fields?.mainImage?.fields?.file?.url
                      ? `https://${cat?.fields?.mainImage?.fields?.file?.url}`
                      : "/placeholder.jpg"
                  }
                  alt="image"
                  className="block h-full w-full object-cover rounded-lg"
                />
                <div
                  onClick={() =>
                    addToFavourites({
                      id: cat?.fields?.title,
                      title: cat?.fields?.title,
                      slug: cat?.fields?.slug,
                      mainImage:
                        "https:" + cat?.fields?.mainImage?.fields?.file?.url,
                      city: cat?.fields?.city,
                      image: cat?.fields?.mainImage?.fields?.file?.url,
                      tags: cat?.fields?.tags,
                      hiddenGem: cat?.fields?.hiddenGem,
                      rating: cat?.fields?.rating,
                      mapShare: cat?.fields?.mapShare,
                      embededMap: cat?.fields?.embededMap,
                      description: cat?.fields?.description,
                      shortDescription: cat?.fields?.shortDescription,
                      type: cat?.fields?.type,
                      price: cat?.fields?.price,
                      pathname: window?.location?.href,
                    })
                  }
                  className="absolute cursor-pointer active:scale-90 w-8 h-8 flex items-center justify-center rounded-full  bg-key top-3 right-3"
                >
                  <FaRegHeart className="text-lg group-hover:scale-110 pt-[1px]  text-red-500" />
                </div>
                <span className="absolute left-1 top-4 pr-2 py-1 rounded-r-full text-xs text-highlight bg-key  ">
                  📍 {cat?.fields?.city}
                </span>
              </div>
              <div className="flex w-full text-left justify-between px-2 pt-2 items-center">
                <h3 className="w-full text-left text-black text-sm items-center font-semibold">
                  {" "}
                  {cat.fields.title}
                </h3>
                <div className="flex items-center">
                  <IoIosStar className="text-key" />
                  <span className="text-xs ml-1 pt-[1px] sm:pt-[2px] text-key">
                    {cat?.fields?.rating}
                  </span>
                </div>
              </div>

              <div className="mt-20 flex w-full px-2 pt-2 pb-3">
                <p className="line-clamp-3 text-xs text-gray-700">
                  {cat?.fields?.shortDescription}
                </p>
              </div>

              <div className="text-[9px] space-x-2 pb-4  px-2 ">
                {cat?.fields?.tags?.map((tag: any) => (
                  <span
                    key={tag}
                    className="border px-2 items-center align-middle justify-center my-auto  py-1 rounded-full item"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between pl-1  text-right py-2 bg-key rounded-b-xl sm:py-1  w-full pr-4 ">
                <Menu className="ml-3 bg-key">
                  <Menu.Target>
                    <span className="cursor-pointer -mt-1">...</span>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <div className="flex items-center  px-2 align-middle space-x-2 bg-white text-key p-2">
                      <BsQrCodeScan className=" cursor-pointer" />
                      <a href={cat?.fields?.mapShare} target="_blank">
                        <BiMap className="cursor-pointer" />
                      </a>
                      <BsShareFill className="text-xs  cursor-pointer" />
                    </div>
                  </Menu.Dropdown>
                </Menu>
                <Link
                  className="pb-[2px]"
                  href={`${pathname}/${cat.fields.slug}`}
                >
                  <span className="text-xs cursor-pointer text-highlight  h-full">
                    Read More
                  </span>
                </Link>
              </div>
            </section>
          ))}
        </section>
      </div>
    </>
  );
};
export default CategoryCard;
