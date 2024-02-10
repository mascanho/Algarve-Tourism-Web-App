import Link from "next/link";
import React from "react";

function RestaurantsCards({ restaurants }: any) {
  return (
    <>
      <div className="flex justify-between text-black w-11/12 mx-auto my-4 mt-20">
        <h3>Restaurants</h3>
        <Link href="/restaurants">
          <span className="text-xs underline">view all</span>
        </Link>
      </div>

      <div className="flex flex-col overflow-x-auto scrollbar-hide mb-10 ">
        <div className="flex">
          {restaurants.map((rest: any, index: number) => (
            <Link key={rest.title} href={`/restaurants/${rest?.fields?.slug}`}>
              <div
                key={index}
                className="flex-shrink-0 w-28 border h-28 p-2 mr-4 rounded-xl relative bg-white mb-2 shadow-md"
                style={{
                  backgroundImage: `url(${rest?.fields?.mainImage?.fields?.file?.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-30 rounded-xl"
                  style={{ mixBlendMode: "multiply" }}
                ></div>
              </div>
              <h3 className=" left-2 text-xs text-black px-2">
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
