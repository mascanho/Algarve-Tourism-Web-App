import React from "react";
import { BlogCard } from "./BlogCard";

function page() {
  return (
    <section className="h-screen sm:max-w-7xl sm:w-full mx-auto">
      <div className="relative flex justify-center items-center w-full overflow-hidden ">
        <div className="sm:border-r sm:w-8/12 block w-full h-screen mt-10 mx-auto sm:ml-0">
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
          <div>
            <div>
              <h3>This is a title</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam, odio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
