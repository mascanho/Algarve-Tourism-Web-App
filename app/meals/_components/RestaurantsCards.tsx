import Link from "next/link";
import React from "react";

function RestaurantsCards({ restaurants }: any) {
  return (
    <>
      <div className="flex justify-between text-black w-11/12 mx-auto my-4 mt-20">
        <h3>Restaurants near you</h3>
        <Link href="/restaurants">
          <span className="text-xs underline">view all</span>
        </Link>
      </div>

      <div className="flex flex-col overflow-x-auto scrollbar-hide mb-10 ">
        <div className="flex sm:w-11/12 justify-center mx-auto">
          {restaurants.map((rest: any, index: number) => (
            <Link
              key={rest.title}
              href={`/restaurants/${rest?.fields?.slug}`}
              className="w-28 mr-4 sm:mx-auto"
            >
              <div
                key={index}
                className=" w-28 border flex-wrap h-28 p-2 mr-4 rounded-xl sm:min-w-28 sm:w-28 relative bg-white  mb-2 shadow-md"
                style={{
                  backgroundImage: `url(${rest?.fields?.mainImage?.fields?.file?.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <h3 className=" left-2 text-xs text-black px-1  sm:w-2/3">
                {rest?.fields.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default RestaurantsCards;
