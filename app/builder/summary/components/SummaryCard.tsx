"use client";
import { cityArr } from "@/Data/Cities";
import { catArr } from "@/Data/Categories";
import React from "react";

// check local storage for Builder data
const data = localStorage.getItem("Builder");
const dataObj = JSON.parse(data || "{}");

export const SummaryCard = ({ tripData }: any) => {
  console.log(dataObj);

  return (
    <section className="w-full">
      <h2 className="text-left w-11/12 max-w-4xl">
        Days: {dataObj?.days}
        <br />
        Attractions per day: {dataObj?.attractions}
      </h2>
      <div className="grid grid-cols-5 gap-4 w-full max-w-4xl mt-10">
        {// map through the localstorage cities and if they exist in the cityArr display the image that corresponds to the city inside the cityArr corresponding to that city name
        dataObj?.categories?.map((cat: any) => {
          if (catArr.map((c: any) => c.name.toLowerCase()).includes(cat)) {
            return (
              <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                  alt=""
                  src={
                    catArr.find((c: any) => c.name.toLowerCase() === cat)?.image
                  }
                  className="h-24 w-full rounded-md object-cover"
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
      <div className="grid grid-cols-5 gap-4 w-full max-w-4xl mt-10">
        {// map through the localstorage cities and if they exist in the cityArr display the image that corresponds to the city inside the cityArr corresponding to that city name
        dataObj?.cities?.map((city: any) => {
          if (cityArr.map((c: any) => c.route).includes(city)) {
            return (
              <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                  alt=""
                  src={cityArr.find((c: any) => c.route === city)?.image}
                  className="h-24 w-full rounded-md object-cover"
                />
                <div className="mt-2">
                  <dl>
                    <div>
                      <dd className="text-sm text-gray-500">{city}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default SummaryCard;
