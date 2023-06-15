import React from "react";
import type { Metadata } from "next";
import TableAccordion from "./Accordion";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

const tableData: any = [
  {
    id: 1,
    name: "What to Do",
    url: "/",
    anchor: "#region",
  },
];

function page(props: any) {
  console.log(props, "from the props");

  return (
    <>
      <TableAccordion tableData={tableData} className="sm:hidden" />
      <section className="pt-20 max-w-7xl mx-auto sm:flex">
        <div className="w-full">
          <div className="sm:w-3/4 mx-auto">
            <img
              src="https://s3-eu-west-1.amazonaws.com/jet2blog/production/_1200x630_crop_center-center_none/FAO_Albufeira_Overview__Marina_955186632_Getty_RGB-136-DPI-For-Web.jpg"
              alt="image"
              className="mx-auto relative filter w-full object-cover"
            />
          </div>
        </div>
        {/* Mobile */}
        {/* Desktop */}
        <aside className="border h-fit sm:w-60 p-4 rounded-md hidden sm:block">
          <h2 className="mx-auto w-full text-center mb-2 ">Title</h2>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <p key={i} className="flex items-center space-x-4 text-black">
              <span className="text-gray-400 text-xl items-center mr-4 flex classNametext-gray-400">
                {i + 1} {""}
              </span>
              {""}
              Lorem, ipsum dolor.
            </p>
          ))}
        </aside>
      </section>
      <section className="my-10 max-w-7xl mx-auto w-full">
        <h2 className="text-4xl text-black">This the city</h2>
      </section>
    </>
  );
}

export default page;
