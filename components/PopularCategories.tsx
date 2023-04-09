import Image from "next/image";
import React from "react";
import { IoIosPin } from "react-icons/io";

function PopularCategories() {
  return (
    <section className="max-w-7xl mx-auto my-20 text-center ">
      <div className="space-y-2">
        <h2 className="text-3xl">Popular Categories For You</h2>
        <h3>50+ locations from the best 3 categories</h3>
      </div>

      <div className="mt-20 sm:flex gap-x-10 justify-center space-y-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="w-fit text-center space-y-4 m-auto">
            <img
              src={
                "https://d4polzlyn428a.cloudfront.net/release/uploads/accounts/f63f65b503e22cb970527f23c9ad7db1/public_card/d4b2aeb2453bdadaa45cbe9882ffefcf/a6b5add611101199d4d3f3ad2a93ec88.png"
              }
              height={200}
              width={100}
              alt="image"
              className="w-80 h-fit object-contain rounded-2xl"
            />
            <h3 className="">Unique and Interesting Culture</h3>
            <div className="flex items-center space-x-2 text-sm border  w-fit px-2 py-1 rounded-md mx-auto">
              <IoIosPin className="text-red-500 text-center" />
              <span>103 Locations</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCategories;
