import type { Metadata } from "next";
import { LeadGrid } from "@/components/Layout/GridLayout";
import { FaRegGem } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import TabsRow from "@/components/Layout/Tabs";
import { createClient } from "contentful";
import Buttons from "@/components/Layout/Buttons";
import StarRating from "@/components/Layout/StarRating";
import getReviews from "@/app/libs/getReviews";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import GenericCarousel from "@/components/Layout/CarouselGeneric";
import { Carousel } from "@mantine/carousel";
import Suggestions from "./_components/Suggestions";

// export const metadata: Metadata = {
//   title: "Home",
//   description: "Welcome to Next.js",
// };

export async function generateMetadata({ params, searchParams }: any) {
  return {
    title: params.slug.toUpperCase(),
  };
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
      <section className="overflow-hidden bg-white text-left pb-16 sm:px-4 md:w-full md:px-6 lg:px-6 xl:pr-0 space-y-4  md:max-w-4xl lg:max-w-7xl lg:pl-6  mb-2 text-black">
        <section className="w-full">
          <LeadGrid filteredData={filteredData} />
        </section>
        <div className="space-y-2 w-11/12 sm:w-full mx-auto">
          <div className="flex items-centert space-x-2">
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
          <div className="flex justify-between space-y-6 sm:space-y-2 w-full sm:pt-4  items-end ">
            <div className="sm:flex md:block lg:flex items-center mt-2 sm:mt-0">
              <div>
                <h1 className="text-2xl sm:text-4xl text-sky w-auto font-semibold min-w-fit sm:mr-4">
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
          <div className="flex justify-between sm:hidden">
            <StarRating rating={filteredData[0]?.fields?.rating} />
            <div className="sm:pr-4 space-x-2 items-center sm:hidden flex  ">
              <Buttons filteredData={filteredData} />
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 sm:pt-2">
              <div className="space-x-2 mt-4 sm:mt-0 hidden sm:inline">
                {filteredData[0]?.fields?.tags.map((item: any) => (
                  <span
                    key={item}
                    className="bg-gray-200 rounded-md px-2 text-xs sm:text-xs py-1 items-center m-auto "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 sm:pt-10 w-11/12 sm:w-full mx-auto ">
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
        <Link href={`/${category}`} className="text-sm text-sky">
          <button type="button" className="flex items-center ">
            <IoArrowBack className="mr-1" />
            back to {category}
          </button>
        </Link>
      </section>
    </>
  );
}
