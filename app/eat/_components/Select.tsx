"use client";
import { cityArr } from "@/Data/Cities";
import { Select } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function CitySelect() {
  const router = useRouter();
  const [city, setCity] = useState("");

  const handleCityChoice = (e: any) => {
    const newcity = "?city=" + e.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(newcity);
    setCity(newcity);
  };

  return (
    <>
      <Select
        label="City"
        placeholder="Pick value"
        data={cityArr.map((item) => item.name)}
        className="w-11/12 mx-auto ring-offset-black focus:ring-2 focus:ring-red-500 focus-oultine-none"
        onChange={handleCityChoice}
        id="city"
        name="city"
      />
    </>
  );
}
