"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Selection from "@/components/Selection";
import { AiFillHeart } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { toast } from "react-hot-toast";
import { BsBookmarkHeart } from "react-icons/bs";
import { BsQrCodeScan } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";

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
  };
}

interface CategoryCardProps {
  category: Category[];
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
}: any) => {
  const pathname = usePathname();
  const addFav = useAddToFavourites();

  function addToFavourites(item: any) {
    addFav.addFavourite(item);
    console.log(item, "added to favs");
  }

  return (
    <>
      <div>
        <div className="sm:hidden mx-auto flex justify-center w-full mb-8 overflow-x-hidden">
          <Selection text="Filter your adventure" />
        </div>
        <section className="max-w-7xl mx-auto w-11/12 sm:w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  sm:ml-6 gap-y-8  mb-20">
          {category.map((cat: any) => (
            <section
              key={cat?.id}
              className="max-w-7xl space-y-2 text-left md:w-64 shadow-sm rounded-md pb-2 border"
            >
              <div className="w-full h-40 flex  rounded-t-md overflow-hidden relative">
                <Image
                  src={
                    cat?.fields?.mainImage?.fields?.file?.url
                      ? `https://${cat?.fields?.mainImage?.fields?.file?.url}`
                      : "/placeholder-image.png"
                  }
                  alt="image"
                  className="block"
                  width={640}
                  height={360}
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
                      image:
                        "https:" + cat?.fields?.mainImage?.fields?.file?.url,
                      tags: cat?.fields?.tags,
                      hiddenGem: cat?.fields?.hiddenGem,
                      rating: cat?.fields?.rating,
                      mapShare: cat?.fields?.mapShare,
                      embededMap: cat?.fields?.embededMap,
                      description: cat?.fields?.description,
                      shortDescription: cat?.fields?.shortDescription,
                    })
                  }
                  className="absolute cursor-pointer active:scale-90 w-5 h-5 flex items-center justify-center rounded-full p-1 bg-white top-2 right-2"
                >
                  <AiFillHeart className="text-md  text-red-500" />
                </div>
                <span className="absolute left-0 top-4 pr-2 py-1 rounded-r-full text-xs text-black bg-white  ">
                  📍 {cat?.fields?.city}
                </span>
              </div>
              <div className="flex w-full  text-left justify-between px-2 items-center">
                <h3 className="w-full text-left text-black text-sm items-center">
                  {" "}
                  {cat.fields.title}
                </h3>
                <span className="text-gray-500 text-sm">
                  {cat?.fields?.price}
                </span>
              </div>
              <div className="w-full h-[1px] bg-gray-300" />
              <div className="mt-20 flex w-full px-2 py-2">
                <p className="line-clamp-3 text-xs">
                  {cat?.fields?.shortDescription}
                </p>
              </div>
              <div className="text-[9px] space-x-2 pb-3 px-2 my-2">
                {cat?.fields?.tags?.map((tag: any) => (
                  <span
                    key={tag}
                    className="border px-2 items-center align-middle justify-center my-auto  py-1 rounded-full item"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="w-full h-[1px] bg-gray-300 px-2" />
              <div className="flex justify-between  text-right w-full px-2">
                <div className="flex items-center  px-2 align-middl space-x-2">
                  <BsBookmarkHeart className="hover:scale-110" />
                  <BsQrCodeScan className="hover:scale-110" />
                  <a href={cat?.fields?.mapShare} target="_blank">
                    <BiMap className="hover:scale-110" />
                  </a>
                  <BsShareFill className="text-xs hover:scale-110" />
                </div>
                <Link href={`${pathname}/${cat.fields.slug}`}>
                  <span className="text-xs text-sky">Read More</span>
                </Link>
              </div>
            </section>
          ))}
        </section>
      </div>
    </>
  );
};
