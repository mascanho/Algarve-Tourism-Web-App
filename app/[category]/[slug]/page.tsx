import Image from "next/image";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";
import { Inter } from "next/font/google";
import { Card } from "@/components/Card";
import type { Metadata } from "next";
import { LeadGrid } from "@/components/Layout/GridLayout";
import { FaRegGem } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdOutlineCardTravel } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiMapPin } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import TabsRow from "@/components/Layout/Tabs";
import { createClient } from "contentful";
import Buttons from "@/components/Layout/Buttons";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};
const inter = Inter({ subsets: ["latin"] });

interface FunctionProps {}

export default async function Home(props: any) {
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

  const filteredData: any = data.filter((obj: any) => obj.fields.slug === slug);

  return (
    <>
      {/* <Breadcrumbs /> */}
      <section className=" bg-white text-left pb-16 space-y-4  mb-20 sm:pl-6 sm:w-full mx-auto">
        <section className="w-full">
          <LeadGrid filteredData={filteredData} />
        </section>
        <div className="space-y-2 w-11/12 sm:w-full mx-auto">
          <div className="flex items-centert space-x-2">
            <span className="flex items-center text-black text-base text-left">
              <FaMapMarkerAlt />
              {filteredData[0]?.fields?.city}
            </span>
            <div className="flex items-center space-x-1 bg-gray-200 w-fit px-2 rounded-md text-green-500 text-xs py-1">
              <FaRegGem />
              <span className="text-xs">Hidden Gem</span>
            </div>
          </div>
          <div className="flex justify-between space-y-6 w-full  items-center ">
            <h1 className="text-lg sm:text-2xl text-sky w-auto font-semibold min-w-fit sm:mr-4">
              {filteredData[0]?.fields?.title}
            </h1>
            <div className="flex justify-between ">
              <div className="sm:pr-4 flex space-x-2  ">
                <Buttons filteredData={filteredData} />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1">
              <div className="space-x-2">
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
        <div className="sm:pt-5 w-11/12 sm:w-full mx-auto ">
          <TabsRow filteredData={filteredData} />
        </div>
      </section>
    </>
  );
}
