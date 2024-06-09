"use client";
import Image from "next/image";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import { toast } from "react-hot-toast";
import { BsBookmarkHeart, BsGlobe } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import Link from "next/link";
import { BsShareFill } from "react-icons/bs";
// import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import GenericButton from "./Layout/GenericButton";

const Card = ({ slug, type, mapShare, categories }: any) => {
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
    navigator?.clipboard.writeText(url);
    toast.success("URL copied to clipboard");
  }

  return (
    <main ref={ref}>
      <section className="sm:grid mx-auto hidden  items-start sm:w-11/12 sm:grid-cols-2 sm:gap-x-10 md:gap-x-4 lg:gap-x-8 md:grid-cols-3 sm:pt-10 lg:grid-cols-3 xl:grid-cols-4 sm:gap-y-2 place-items-center max-w-7xl ">
        {categories?.slice(0, 7).map((cat: any) => {
          return (
            <div
              key={cat?.title}
              className="pb-2 group sm:pb-2 mb-5 space-y-3 p-4 sm:space-y-1 text-left transition-all ease-in delay-75 rounded-xl max-w-7xl w-11/12  mx-auto sm:w-full"
            >
              <div className="relative flex flex-col w-full px-1  h-[200px] sm:h-40 md:h-36 xl:h-44 rounded-t-md ">
                <Image
                  fill
                  loading="lazy"
                  src={`https:${cat?.fields?.images[0]?.fields?.file?.url}`}
                  alt="image"
                  className="block h-full px-1 w-full object-cover rounded-xl "
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
                  className="absolute active:scale-90 w-8 h-8 flex items-center justify-center rounded-full  bg-key top-3 right-3 cursor-pointer"
                >
                  <FaRegHeart className="text-xl group-hover:scale-110 transition-all ease-in-out  text-red-500 hover:pt-[2px] pt-[1px]" />
                </div>
                <span className="absolute left-1 py-1 pr-2 pl-1 text-xs text-highlight bg-key rounded-r-full top-4 ">
                  📍 {cat?.fields?.city}
                </span>
              </div>
              <div className="flex px-2 pt-2 items-center justify-between w-full  text-left">
                <h3 className="items-center w-full text-sm text-left font-semibold text-black">
                  {" "}
                  {cat?.fields?.title}
                </h3>
                <div className="flex ">
                  <IoIosStar className="text-sm text-key" />
                  <span className="text-xs text-key ml-1">
                    {cat?.fields?.rating}
                  </span>
                </div>
              </div>
              {/* <div className="w-full h-[1px] bg-gray-300" /> */}
              <div className="flex w-full   pb-2 ">
                <p className="line-clamp-3 textarea-xs text-gray-700">
                  {cat?.fields?.shortDescription}
                </p>
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
              {/* <div className="w-full h-[1px] bg-gray-300 px-2 " /> */}
              <section className="flex justify-between bg-key shadow-md rounded-b-lg w-full py-2 items-center">
                <div className="flex items-center  w-full px-2 align-middl space-x-3">
                  {/* <BsQrCodeScan className="hover:scale-110 cursor-pointer" /> */}
                  <a
                    href={mapShare}
                    aria-label={`View on map`}
                    // target="_blank"
                  >
                    <BiMap className="hover:scale-110 cursor-pointer" />
                  </a>
                  <BsShareFill
                    onClick={handleCopyUrl}
                    className="text-xs hover:scale-110 cursor-pointer"
                  />
                  <a
                    href={`/${cat.fields.type}/${cat?.fields?.slug}`}
                    aria-label={`View on website in new tab`}
                    // target="_blank"
                  >
                    <BsGlobe className="text-xs hover:scale-110 cursor-pointer" />
                  </a>
                </div>
                <div className="flex items-center justify-end text-sm w-full pr-2 ">
                  <Link
                    aria-label={`Discover the best of ${cat?.fields?.title}`}
                    href={`/${cat?.fields?.type}/${cat?.fields?.slug}`}
                  >
                    <span className="flex text-xs text-highlight mr-2">
                      View place
                    </span>
                  </Link>
                </div>
              </section>
            </div>
          );
        })}
        <div className=" border border-dashed rounded-md h-[300px] sm:h-[350px] md:w-[220px] md:h-[330px] lg:h-[360px] lg:w-[260px] mt-3 max-h-[fit] w-64 flex flex-wrap flex-col  justify-center items-center shadow-sm">
          <span className="text-xs text-gray-700">We saved a spot for you</span>
          <Link href="/submit">
            <button
              className="px-3 py-1 bg-key text-white mt-4 rounded-full text-xs"
              type="button"
            >
              Upload a place
            </button>
          </Link>
        </div>
      </section>
      <div className="w-fit mx-auto flex justify-center sm:mb-14 sm:mt-5 hidden sm:flex">
        <GenericButton title="View all places" url="/beaches" />
      </div>
    </main>
  );
};

export default Card;
