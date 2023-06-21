import React from "react";
import { BlogCard } from "./BlogCard";

function page() {
  return (
    <section className="h-screen max-w-7xl mx-auto">
      <div className="relative flex justify-center items-center w-full overflow-hidden  bg-cover bg-blend-multiply h-screen">
        <div className="border-r w-2/3 block h-screen">
          <h2 className="w-11/12 border-b font-bold text-black">Articles</h2>
          <div>
            <BlogCard />
          </div>
        </div>
        <div className="w-1/3 block h-screen">
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
