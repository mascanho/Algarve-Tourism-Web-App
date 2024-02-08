import type { Metadata } from "next";
import { LeadGrid } from "@/components/Layout/GridLayout";
import { FaDog, FaRegAddressBook, FaRegGem } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import TabsRow from "@/components/Layout/Tabs";
import { createClient } from "contentful";
import Buttons from "@/components/Layout/Buttons";
import StarRating from "@/components/Layout/StarRating";
import getReviews from "@/app/libs/getReviews";
import {
  IoArrowBack,
  IoCalendarNumberOutline,
  IoFastFoodOutline,
  IoRestaurant,
} from "react-icons/io5";
import Link from "next/link";
import Suggestions from "./_components/Suggestions";
import Categorydrawer from "./_components/CategoryDrawer";
import { MdBeachAccess, MdVerifiedUser } from "react-icons/md";
import MobileRating from "./_components/MobileRating";
import MobileBottomCategoryBanner from "./_components/MobileBottomCategoryBanner";
import MobileButtons from "./_components/MobileButtons";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import dynamic from "next/dynamic";
import { BiCar, BiFoodMenu, BiHealth } from "react-icons/bi";
import DailyMenusDrawer from "./_components/DailyMenusDrawer";
import { GrOverview } from "react-icons/gr";
import { IoIosLeaf } from "react-icons/io";
import BookingDrawer from "./_components/BookingDrawer";

const Reviews = dynamic(() => import("../../../components/Layout/Reviews"), {});

// TODO: Check this stuff
export async function generateMetadata({ params, searchParams }: any) {
  const getDATA = async () => {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    try {
      const res = await client.getEntries({
        content_type: params?.category,
        limit: 10,
        include: 1,
        skip: 0,
        "fields.slug": params?.slug,
        select: "fields.shortDescription",
      });

      return res?.items[0]?.fields?.shortDescription;
    } catch (error) {
      // Handle potential errors when fetching data
      console.error("Error fetching data from Contentful:", error);
      return null;
    }
  };

  try {
    const description = await getDATA();

    return {
      // Remove the "-" from the title, separate words with spaces and uppercase the first letter
      title: params.slug
        .split("-")
        .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),

      description: description || "", // Use the retrieved description or an empty string
    };
  } catch (error) {
    // Handle errors that might occur during metadata generation

    return {
      description: "",
    };
  }
}

export default async function Home(props: any, req: any) {
  const { category, slug } = props.params;

  async function getAllCategories() {
    const client: any = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
    const res = await client.getEntries({ content_type: category });

    return await res.items;
  }

  const data = await getAllCategories();
  const reviewsArr = await getReviews();

  const filteredData: any = data.filter((obj: any) => obj.fields.slug === slug);
  const recomended: any = data.filter((obj: any) => obj.fields.slug !== slug);

  return (
    <>
      <section className="overflow-hidden mt-16 sm:mt-0 bg-transparent rounded-lg text-left pb-16 sm:px-4 md:w-full md:px-6 lg:px-6 xl:pr-0 space-y-4  md:max-w-4xl lg:max-w-7xl lg:pl-6  mb-2 text-black">
        <section className="w-full">
          <LeadGrid filteredData={filteredData} />
        </section>
        <div className="space-y-1 w-11/12 sm:w-full mx-auto">
          <div className="hidden sm:flex items-centert space-x-2">
            {filteredData[0]?.fields?.hiddenGem ? (
              <div className="flex items-center space-x-1 bg-gray-200 w-fit px-2 rounded-md text-green-500 text-xs py-1">
                <div className="flex items-center space-x-2">
                  <FaRegGem />
                  <span className="text-xs">Hidden Gem</span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between  sm:space-y-2 w-full sm:pt-4  items-end ">
            <div className="sm:flex md:block lg:flex items-center sm:mt-0">
              <div>
                <h1 className="text-2xl sm:text-4xl w-auto font-semibold min-w-fit sm:mr-4 text-black">
                  {filteredData[0]?.fields?.title}
                </h1>
              </div>
              <div className="hidden sm:flex md:my-2 ">
                <StarRating rating={filteredData[0]?.fields?.rating} />
              </div>
            </div>

            <div className="flex  justify-between items-center ">
              <div className="sm:pr-4 space-x-2 items-center hidden sm:flex  ">
                <Buttons filteredData={filteredData} data={data} />
              </div>
            </div>
          </div>
          <span className="flex items-center text-gray-400 text-sm text-left">
            <FaMapMarkerAlt />
            <span className="ml-1">{filteredData[0]?.fields?.city}</span>
          </span>
          <div className="flex">
            <div className="flex-1 sm:pt-2">
              <div className="space-x-2 mt-4 sm:mt-0 hidden sm:inline">
                {filteredData[0]?.fields?.tags.map((item: any) => (
                  <span
                    key={item.id}
                    className="bg-gray-200 rounded-md px-2 text-xs sm:text-xs py-1 items-center m-auto "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE SECTION */}

        <main className="w-full m-0 sm:hidden">
          <section className="border rounded-lg items-center text-sm sm:hidden  mx-auto px-2 py-2 flex w-11/12  justify-around">
            <div className="w-14 flex flex-col items-center text-center">
              {filteredData[0]?.fields?.type[0] === "restaurants" && (
                <>
                  <IoRestaurant />
                  <span className="text-xs">Restaurant</span>
                </>
              )}
              {filteredData[0]?.fields?.type[0] === "beaches" && (
                <>
                  <FaDog />
                  <span className="text-xs">Friendly</span>
                </>
              )}

              {filteredData[0]?.fields?.type[0] === "hiking" && (
                <>
                  <GrOverview />
                  <span className="text-xs">Sightseeing</span>
                </>
              )}
              {filteredData[0]?.fields?.type[0] === "sports" && (
                <>
                  <BiHealth />
                  <span className="text-xs">Healthy</span>
                </>
              )}
              {filteredData[0]?.fields?.type[0] === "stays" && (
                <>
                  <MdBeachAccess />
                  <span className="text-xs">Sea view</span>
                </>
              )}
              {filteredData[0]?.fields?.type[0] === "events" && (
                <>
                  <IoCalendarNumberOutline />
                  <span className="text-xs">Seasonal</span>
                </>
              )}
              {filteredData[0]?.fields?.type[0] === "business" && (
                <>
                  <IoIosLeaf className="text-green-800" />
                  <span className="text-xs">Sustainable</span>
                </>
              )}
              {filteredData[0]?.fields?.type[0] === "adventure" && (
                <>
                  <IoIosLeaf className="text-green-800" />
                  <span className="text-xs">Outdoors</span>
                </>
              )}
            </div>
            <div className="border-r border-l px-8 text-center flex  flex-col items-center">
              {filteredData[0]?.fields?.hiddenGem ? (
                <>
                  <FaRegGem className="text-2xl text-green-400" />
                  <span className="mt-1 text-xs text-gray-500">Hidden Gem</span>
                </>
              ) : (
                <div className="flex flex-col text-2xl text-key items-center justify-center">
                  <MdVerifiedUser />
                  <span className="text-gray-500 mt-1 text-xs">
                    Verified location
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col w-14 text-xs items-center justify-center  text-center">
              <RiMoneyEuroCircleLine className="text-lg" />
              <span className="text-xs">{filteredData[0]?.fields?.price}</span>
            </div>
          </section>

          <section className="border-b mt-4 pb-4 w-11/12 mx-auto">
            <div className=" flex  flex-wrap justify-between items-center line-clamp-4">
              <div className="inline w-full">
                <span className="text-xs leading-snug  ">
                  {filteredData[0]?.fields?.shortDescription}
                </span>
                <Categorydrawer {...filteredData} />
              </div>
            </div>
          </section>

          <section className="border-b mt-4 pb-4 w-11/12 mx-auto">
            <div>
              <h5 className="text-sm mb-2">Rating</h5>
              <div className="flex w-full">
                <MobileRating value={filteredData[0]?.fields?.rating} />
              </div>
            </div>
          </section>

          <section className="mx-auto w-11/12 border-b my-2 pb-3">
            <MobileButtons {...filteredData} />
          </section>

          {/* <section className="border-b w-11/12 mx-auto"></section> */}

          {/* Handles the bookings in the UI */}

          {filteredData[0]?.fields.booking &&
            !filteredData[0]?.fields?.bookingUrl && (
              <section className="w-11/12 border-b pb-5 mx-auto">
                <h5 className="text-sm">Bookings</h5>

                <section className="flex space-x-4">
                  {filteredData[0]?.fields?.type[0] === "restaurants" &&
                    filteredData[0]?.fields?.type[0] === "adventure" && (
                      <div className="w-2/5 mt-2 rounded-md flex flex-col space-y-2 border p-4">
                        <IoFastFoodOutline className="text-2xl" />
                        <div className="flex space-y-1 flex-col">
                          <DailyMenusDrawer />
                          <span className="text-xs text-gray-500">
                            Menu Availalbe
                          </span>
                        </div>
                      </div>
                    )}

                  <div className="w-2/5 mt-2 rounded-md flex flex-col space-y-2 border p-4">
                    <FaRegAddressBook className="text-2xl" />
                    <div className="flex space-y-1 flex-col">
                      {filteredData[0]?.fields?.bookingUrl ? (
                        <a
                          href={filteredData[0]?.fields?.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-sm"
                        >
                          Book now
                        </a>
                      ) : (
                        <BookingDrawer
                          title="Book Now"
                          url={filteredData[0]?.fields?.booking}
                        />
                      )}
                      <span className="text-xs text-gray-500">
                        Don&apos;t miss it
                      </span>
                    </div>
                  </div>
                </section>
              </section>
            )}
          {filteredData[0]?.fields?.type[0] === "restaurants" &&
            !filteredData[0]?.fields.booking && (
              <section className="w-11/12 border-b pb-5 mx-auto">
                <h5 className="text-sm">Eat in</h5>
                <div className="w-2/5 mt-2 rounded-md flex flex-col space-y-2 border p-4">
                  <IoFastFoodOutline className="text-2xl" />
                  <div className="flex space-y-1 flex-col">
                    <DailyMenusDrawer />
                    <span className="text-xs text-gray-500">
                      Menu Availalbe
                    </span>
                  </div>
                </div>
              </section>
            )}
          <section className="border-b mt-4 pb-4 w-11/12 mx-auto">
            <div>
              <h5 className="text-sm mb-2">Tags</h5>
              <div className="flex w-full">
                {filteredData[0]?.fields?.tags.map((item: any) => (
                  <span className="bg-gray-200 rounded-md px-2 py-1 mr-3 text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>
          <section className="border-b pb-6 w-11/12 mx-auto">
            <div className="mx-auto mt-1">
              <h5 className="text-sm mb-4 mt-3">Where to find it</h5>

              {filteredData[0]?.fields?.embededMap === undefined ? (
                <p>No map to display</p>
              ) : (
                <iframe
                  src={filteredData[0]?.fields?.embededMap}
                  width="600"
                  height="250"
                  // allowfullscreen=""
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                  className="w-full rounded-lg"
                ></iframe>
              )}
            </div>
          </section>

          <section className="border-b pb-6 w-11/12 mx-auto">
            <div className="mx-auto mt-1">
              <h5 className="text-sm  mt-3">Reviews</h5>
              <Reviews reviews={reviewsArr} slug={slug} />
            </div>
          </section>
        </main>

        {/* DESKTOP TABS START HERE */}
        <div className="pt-5 sm:pt-10 w-11/12 sm:w-full mx-auto hidden sm:flex  ">
          <TabsRow
            filteredData={filteredData}
            slug={slug}
            reviews={reviewsArr}
          />
        </div>

        <section className="overflow-hidden w-11/12 sm:w-full pt-20 mx-auto">
          <h3 className="text-black mb-10 font-semibold text-4xl">
            Other {category}
          </h3>
          <Suggestions recomended={recomended} />
        </section>
      </section>
      <section className="mx-auto w-11/12 sm:w-full  py-10 overflow-hidden">
        <Link href={`/${category}` || ""} className="text-sm text-key">
          <button type="button" className="flex items-center ">
            <IoArrowBack className="mr-1" />
            back to {category}
          </button>
        </Link>
        <MobileBottomCategoryBanner {...filteredData} />
      </section>
    </>
  );
}
