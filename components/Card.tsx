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
import { usePathname } from "next/navigation";
import "aos/dist/aos.css";
import { useEffect, Suspense } from "react";
import { useInView } from "react-intersection-observer";

const Card = ({
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
  shortDescription,
  id,
  categories,
}: any) => {
  const addFav = useAddToFavourites();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "20px 0px",
  });

  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }),
  //   [];

  function addToFavourites(e: any) {
    e.stopPropagation();

    const data = {
      // category,
      title: e?.categories?.fields?.title,
      slug: categories?.fields?.slug,
      date: categories?.fields?.date,
      mainImage: categories?.fields?.mainImage?.fields?.file?.url,
      city: categories?.fields?.city,
      image: categories?.fields?.mainImage?.fields?.file?.url,
      tags: categories?.fields?.tags,
      description: categories?.fields?.description,
      hiddenGem: categories?.fields?.hiddenGem,
      rating: categories?.fields?.rating,
      embededMap: categories?.fields?.embededMap,
      mapShare: categories?.fields?.mapShare,
      id: categories?.fields?.title,
      price: categories?.fields?.price,
      shortDescription: categories?.fields?.shortDescription,
      type: categories?.fields?.type,
      pathname: window?.location?.href,
    };
    addFav.addFavourite(data);
    // toast.success(title + " added to " + "🧳");
  }

  // handle copying the url to share
  function handleCopyUrl() {
    const url = `https://www.algarvewonders.com/${type}/${slug}`;
    navigator.clipboard.writeText(url);
    toast.success("URL copied to clipboard");
  }

  return (
    <main ref={ref}>
      <section className="sm:grid mx-auto hidden  items-start sm:w-11/12 sm:grid-cols-2 sm:gap-x-10 md:gap-x-4 lg:gap-x-8 md:grid-cols-3 sm:pt-10 lg:grid-cols-3 xl:grid-cols-4 sm:gap-y-2 place-items-center max-w-7xl ">
        {categories?.slice(0, 7).map((cat: any) => {
          return (
            <div className="border pb-2 sm:pb-2 mb-5 space-y-3 sm:space-y-2 text-left transition-all ease-in delay-75 rounded-md shadow-sm max-w-7xl w-11/12  mx-auto sm:w-full   hover:border-sky  hover:shadow-md">
              <div className="relative flex flex-col w-full h-[200px] sm:h-40 md:h-52 xl:h-44 rounded-t-md ">
                <Image
                  fill
                  loading="lazy"
                  src={`https:${cat?.fields?.images[0]?.fields?.file?.url}`}
                  alt="image"
                  className="block h-full w-full object-cover rounded-t-md"
                />
                <div
                  onClick={(e) => {
                    const data = {
                      title: cat?.fields?.title,
                      slug: cat?.fields?.slug,
                      date: cat?.fields?.date,
                      mainImage: cat?.fields?.mainImage?.fields?.file?.url,
                      city: cat?.fields?.city,
                      image: cat?.fields?.mainImage?.fields?.file?.url,
                      tags: cat?.fields?.tags,
                      description: cat?.fields?.description,
                      hiddenGem: cat?.fields?.hiddenGem,
                      rating: cat?.fields?.rating,
                      embededMap: cat?.fields?.embededMap,
                      mapShare: cat?.fields?.mapShare,
                      id: cat?.fields?.title,
                      price: cat?.fields?.price,
                      shortDescription: cat?.fields?.shortDescription,
                      type: cat?.fields?.type,
                      pathname: window?.location?.href,
                    };
                    addFav.addFavourite(data);
                  }}
                  className="absolute active:scale-90 w-8 h-8 flex items-center justify-center rounded-full  bg-white top-3 right-3 cursor-pointer"
                >
                  <AiFillHeart className="text-xl  text-red-500 pt-[1px]" />
                </div>
                <span className="absolute left-0 py-1 pr-2 text-xs text-black bg-white rounded-r-full top-4 ">
                  📍 {cat?.fields?.city}
                </span>
                <div className="absolute bottom-0 right-0 bg-white px-2 py-1 rounded-tl-md">
                  <span className="text-sm text-gray-500">
                    <StarRating rating={cat?.fields?.rating} />
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between w-full px-2 text-left">
                <h3 className="items-center w-full text-sm text-left font-semibold text-black">
                  {" "}
                  {cat?.fields?.title}
                </h3>
              </div>
              <div className="w-full h-[1px] bg-gray-300" />
              <div className="flex w-full  mt-20 py-2">
                <p className="line-clamp-3 textarea-xs text-gray-700">
                  {cat?.fields?.shortDescription}
                </p>
                {/* <span className="flex-1 text-xs text-sky">Read more</span> */}
              </div>
              <div className="text-[9px] space-x-2 space-y-3 pb-4 px-2">
                {cat?.fields?.tags?.map((cat: any) => (
                  <span
                    key={cat}
                    className="items-center justify-center px-2 py-1 my-auto align-middle border rounded-full item"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <div className="w-full h-[1px] bg-gray-300 px-2 " />
              <section className="flex justify-between w-full py-2 items-center">
                <div className="flex items-center  w-full px-2 align-middl space-x-3">
                  {/* <BsQrCodeScan className="hover:scale-110 cursor-pointer" /> */}
                  <a href={mapShare} target="_blank">
                    <BiMap className="hover:scale-110 cursor-pointer" />
                  </a>
                  <BsShareFill
                    onClick={handleCopyUrl}
                    className="text-xs hover:scale-110 cursor-pointer"
                  />
                  <a
                    target="_blank"
                    href={`/${cat.fields.type}/${cat?.fields?.slug}`}
                  >
                    <BsGlobe className="text-xs hover:scale-110 cursor-pointer" />
                  </a>
                </div>
                <div className="flex items-center justify-end text-sm w-full pr-2 ">
                  <Link href={`/${cat?.fields?.type}/${cat?.fields?.slug}`}>
                    <span className="flex text-xs text-sky mr-2">
                      Read More
                    </span>
                  </Link>
                </div>
              </section>
            </div>
          );
        })}
        <div className=" border border-dashed rounded-md  sm:h-96 md:h-[430px] lg:h-[400px] xl:[]  max-h-[fit] w-full flex flex-wrap flex-col  justify-center items-center shadow-sm">
          <span className="text-xs text-gray-700">We saved a spot for you</span>
          <Link href="/submit">
            <button
              className="px-3 py-1 bg-black text-white mt-4 rounded-full text-xs"
              type="button"
            >
              Upload a place
            </button>
          </Link>
        </div>
      </section>
      <div className="w-fit mx-auto flex justify-center">
        <Link href={"/beaches"}>
          <button
            className="border text-gray-700 mt-10 rounded-md active:bg-sky active:text-white transition-all hidden ease-in px-5 py-2 mx-auto sm:flex justify-center text-center"
            type="button"
          >
            View more
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Card;
