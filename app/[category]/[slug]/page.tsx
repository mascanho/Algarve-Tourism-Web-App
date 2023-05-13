import Image from "next/image";
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

  const filteredData = data.filter((obj: any) => obj.fields.slug === slug);

  return (
    <>
      <section className=" bg-white text-left pb-16 space-y-4 h-full mb-20 sm:pl-6 sm:w-full mx-auto">
        <section className="w-full">
          <LeadGrid filteredData={filteredData} />
        </section>
        <div className="space-y-2 w-11/12 sm:w-full mx-auto">
          <div className="flex items-center space-x-1 bg-gray-200 w-fit px-2 rounded-md text-green-500 text-xs py-1">
            <FaRegGem />
            <span className="">Hidden Gem</span>
          </div>
          <div className="flex justify-between space-y-1  items-center ">
            <h1 className="sm:text-2xl text-sky w-auto min-w-fit sm:mr-4">
              {filteredData[0]?.fields?.title}
            </h1>
            <div className="flex justify-between w-full">
              <span className="flex items-center text-black text-sm text-left">
                <FaMapMarkerAlt />
                {filteredData[0]?.fields?.city}
              </span>
              <div className="sm:pr-4 flex space-x-2  ">
                <MdOutlineCardTravel className="w-6 h-6 sm:w-8 sm:h-8 p-1 border rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75" />
                <BiMapPin className="w-6 h-6 sm:w-8 sm:h-8 p-1 border rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75" />
                <BiShareAlt className="w-6 h-6 sm:w-8 sm:h-8 p-1 border rounded-full hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75" />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1">
              <div className="space-x-2 mt-1">
                {["Minimalist", "Beach House", "Tropic", "Private Pool"].map(
                  (item) => (
                    <span
                      key={item}
                      className="bg-gray-200 rounded-md px-2 text-xs sm:text-sm py-1 items-center m-auto "
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="sm:pt-10 w-11/12 sm:w-full mx-auto h-screen">
          <TabsRow />
        </div>
      </section>
    </>
  );
}
