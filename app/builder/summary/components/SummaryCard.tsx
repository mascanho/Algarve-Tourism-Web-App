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

  // Remove duplicates from categories and cities
  const uniqueCategories = [...new Set(parsedCookies?.categories)];
  const uniqueCities = [...new Set(parsedCookies?.cities)];

  useEffect(() => {}, []);

  // Function to normalize city names
  const normalizeCityName = (name: string) => {
    // Normalize to lowercase and remove any non-alphanumeric characters
    return name.toLowerCase().replace(/[^a-z0-9]/gi, "");
  };

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
        {uniqueCategories?.map((cat: any, index: number) => {
          const category = catArr.find(
            (c: any) => c.name.toLowerCase() === cat.toLowerCase(),
          );
          if (category) {
            return (
              <div
                key={`${cat}-${index}`}
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
        {uniqueCities?.map((city: any, index: number) => {
          // Normalize city name from cookies for comparison
          const normalizedCookieCity = normalizeCityName(city);

          // Find city data with normalized name
          const cityData = cityArr.find(
            (c: any) => normalizeCityName(c.name) === normalizedCookieCity,
          );
          if (cityData) {
            return (
              <div
                key={`${cityData.name}-${index}`}
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
