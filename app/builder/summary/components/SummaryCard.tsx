"use client";
import { cityArr } from "@/Data/Cities";
import { catArr } from "@/Data/Categories";
import React, { useEffect } from "react";
import useAddBuilderData from "@/app/hooks/useAddBuilderData";

import Cookies from "js-cookie";

// check local storage for Builder data
const data = localStorage.getItem("Builder");
const dataObj = JSON.parse(data || "{}");

export const SummaryCard = ({ tripData }: any) => {
  const addToBuilderData: any = useAddBuilderData();

  const getCookie = (cookieName: any) => {
    return Cookies.get(cookieName);
  };

  const builderData = addToBuilderData.builderData;

  const cookies = getCookie("myCookieName");

  const parsedCookies = cookies ? JSON.parse(cookies) : {};

  console.log(parsedCookies);

  return (
    <section className="w-full">
      <h2 className="text-left w-11/12 max-w-4xl text-lg font-bold text-black">
        Days: {dataObj?.days}
        <br />
        Attractions per day: {dataObj?.attractions}
      </h2>
      <h3 className="mt-10 mb-2">Categoriues to visit</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-4xl font-bold">
        {// map through the localstorage cities and if they exist in the cityArr display the image that corresponds to the city inside the cityArr corresponding to that city name
        dataObj?.categories?.map((cat: any) => {
          if (catArr.map((c: any) => c.name.toLowerCase()).includes(cat)) {
            return (
              <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 card__body card__body__summary border border-dashed">
                <img
                  alt=""
                  src={
                    catArr.find((c: any) => c.name.toLowerCase() === cat)?.image
                  }
                  className="rounded-md object-cover card__body-cover-image summary__image "
                />
                <div className="mt-2">
                  <dl>
                    <div>
                      <dd className="text-sm text-gray-500">{cat}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            );
          }
        })}
      </div>
      <h3 className="mt-10 mb-2">Cities to visit</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-4xl">
        {// map through the localstorage cities and if they exist in the cityArr display the image that corresponds to the city inside the cityArr corresponding to that city name
        dataObj?.cities?.map((city: any) => {
          if (cityArr.map((c: any) => c.route).includes(city)) {
            return (
              <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 card__body card__body__summary border">
                <img
                  alt=""
                  src={cityArr.find((c: any) => c.route === city)?.image}
                  className="h-24 w-full rounded-md object-cover card__body-cover-image summary__image"
                />
                <div className="mt-2">
                  <dl>
                    <div>
                      <dd className="text-sm text-gray-500 font-bold">
                        {city}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            );
          }
        })}
      </div>
      <footer className="fixed bottom-0 left-0 right-0 flex w-ful justify-between p-4 bg-white">
        <div className="w-full flex justify-end max-w-4xl mx-auto px-8">
          <button
            className="bg-key text-white px-2 w-20 py-1 rounded-md"
            type="submit"
          >
            Next
          </button>
        </div>
      </footer>
    </section>
  );
};

export default SummaryCard;
