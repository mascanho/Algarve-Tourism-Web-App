"use client";
import { cityArr } from "@/Data/Cities";
import { catArr } from "@/Data/Categories";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

export const SummaryCard = ({ tripData }: any) => {
  const getCookie = (cookieName: any) => {
    return Cookies.get(cookieName);
  };

  const cookies = getCookie("builderData");
  const parsedCookies = cookies ? JSON.parse(cookies) : {};

  console.log(parsedCookies);

  useEffect(() => {}, []);

  return (
    <section className="w-full h-full">
      <div className="flex justify-start items-center sm:space-x-4 mb-6">
        <h2 className="font-bold text-black">
          Number of days: <span>{parsedCookies?.days}</span>
        </h2>
        <h3 className="mt-2 mb-2">
          Attractions per day: {parsedCookies?.attractions}
        </h3>
      </div>
      <h3 className="mb-4 underline text-black">Category types:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-4xl font-bold">
        {parsedCookies?.categories?.map((cat: any) => {
          const category = catArr.find(
            (c: any) => c.name.toLowerCase() === cat.toLowerCase(),
          );
          if (category) {
            return (
              <div
                key={cat}
                className="block rounded-lg p-4 shadow-sm shadow-indigo-100 card__body card__body__summary border border-dashed"
              >
                <img
                  alt={category.name}
                  src={category.image}
                  className="rounded-md object-cover card__body-cover-image summary__image"
                />
                <div className="mt-2">
                  <dl>
                    <div>
                      <dd className="text-sm text-gray-500">{category.name}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <h3 className="mt-10 mb-2 underline text-black mb-4">Cities to visit</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-4xl">
        {parsedCookies?.cities?.map((city: any) => {
          const cityData = cityArr.find(
            (c: any) => c.name.toLowerCase() === city.toLowerCase(),
          );
          if (cityData) {
            return (
              <div
                key={cityData.name} // Assuming city name is unique
                className="block rounded-lg p-4 shadow-sm shadow-indigo-100 card__body card__body__summary border border-dashed"
              >
                <img
                  alt={cityData.name}
                  src={cityData.image}
                  className="h-24 w-full rounded-md object-cover card__body-cover-image summary__image"
                />
                <div className="mt-2">
                  <dl>
                    <div>
                      <dd className="text-sm text-gray-500 font-bold">
                        {cityData.name}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <footer className="fixed bottom-0 left-0 right-0 flex w-full justify-between p-4 bg-white">
        <div className="w-full flex justify-end max-w-4xl mx-auto px-8">
          <Link href="/planner">
            <button
              className="bg-key text-white px-2 w-28 py-1 rounded-md"
              type="submit"
            >
              Generate
            </button>
          </Link>
        </div>
      </footer>
    </section>
  );
};

export default SummaryCard;
