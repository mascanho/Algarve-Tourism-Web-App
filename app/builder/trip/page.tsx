"use client";
import React, { useEffect, useState } from "react";

const TripPage = () => {
  const [tripData, setTripData] = useState([]);

  useEffect(() => {
    // check localstorage for Builder data
    const data = localStorage.getItem("Builder");
    const dataObj = JSON.parse(data || "{}");
    console.log(dataObj);
    setTripData(dataObj);
  }, []);

  if (!tripData) {
    return <h1>Not tripo data</h1>;
  }

  console.log(tripData.days);

  return (
    <section className="min-h-screen pt-20">
      {tripData.categories?.map((category: string) => {
        return (
          <div key={category}>
            <h1>{category}</h1>
          </div>
        );
      })}
    </section>
  );
};
export default TripPage;
