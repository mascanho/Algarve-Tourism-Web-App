"use client";
import React, { useEffect, useState } from "react";
import CitySelection from "./components/CitySelection";

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

  return (
    <section className="min-h-screen sm:my-20  max-w-7xl flex flex-col justify-center items-center mx-auto">
      <CitySelection />
    </section>
  );
};
export default TripPage;
