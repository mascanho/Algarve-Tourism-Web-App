import React from "react";
import { BlogCard } from "./BlogCard";

function page() {
  return (
    <section className="h-screen sm:max-w-7xl sm:w-full mx-auto">
      <div className="relative flex justify-center items-center w-full overflow-hidden ">
        <div className="sm:border-r sm:w-8/12 block w-full h-screen pt-10 mx-auto sm:ml-0">
          <div className="mx-auto sm:w-11/12 my-6 ">
            <input
              className=" mx-auto rounded-lg bg-transparent border py-1 pl-2 w-8/12"
              placeholder="Search..."
            />
          </div>
          <h2 className="sm:w-11/12 mx-auto w-11/12 border-b pb-5 font-bold text-black">
            Articles
          </h2>
          <div className="mx-auto mt-5">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        <div className="w-1/3 sm:pl-6  h-screen hidden sm:inline-block">
          <div className="mt-10">
            <div className="bg-gray-200 p-4 py-6 rounded-lg space-y-2">
              <h3 className="text-black font-bold text-lg">This is a title</h3>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam, odio.
              </p>
              <div className="mt-2">
                <button className="bg-sky rounded-md px-4 py-1 mt-2 text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
