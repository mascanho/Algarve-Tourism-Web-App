"use client";
import { uploadWeekly } from "@/app/actions/uploadWeekly";
import { Accordion } from "@mantine/core";
import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { IoCalendar } from "react-icons/io5";
import SubmitBtn from "./SubmitBtn";
import Link from "next/link";
import { cityArr } from "@/Data/Cities";

function UploadWeeklyForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [showMeal, setShowMeal] = useState(false);

  return (
    <form
      ref={ref}
      action={async (formData: any) => {
        await uploadWeekly(formData);
        ref?.current.reset();
        toast.success("Weekly meal uploaded successfully");
        setShowMeal(true);
      }}
      className="flex flex-col w-11/12 mx-auto pb-16 mt-10 space-y-1 px-3"
    >
      <label className="text-black" for="birthday">
        Weekday
      </label>
      <div className="flex relative w-full">
        <input
          type="date"
          id="weekday"
          name="weekday"
          className="p-2 w-full rounded-md  bg-white placeholder:text-gray-500 text-black  border"
        />
      </div>
      <label htmlFor="business" className="text-left text-key w-full mx-0">
        Business Name
      </label>
      <input
        type="text"
        name="business"
        placeholder="Restaurant ABC"
        className=" p-2 w-full rounded-md bg-white text-key border"
        maxLength={50}
        required
      />
      <label htmlFor="business" className="text-left w-full mx-0 text-key">
        Meal Name
      </label>
      <input
        required
        type="text"
        name="meal"
        placeholder="Frango Assado"
        className="p-2 w-full rounded-md bg-white text-key border"
        maxLength={50}
      />
      <label htmlFor="business" className="text-left w-full mx-0 text-key">
        Price
      </label>
      <input
        required
        type="number"
        min="0"
        step="0.01"
        name="price"
        placeholder="12.99"
        className="p-2 w-full bg-white rounded-md text-key"
        maxLength={4}
      />
      <label htmlFor="business" className="text-left w-full mx-0 text-key">
        City
      </label>

      <select
        required
        name="city"
        className="p-2 w-full rounded-md bg-white border text-black placeholder-gray-500"
      >
        <option
          value=""
          disabled
          selected
          className="text-gray-500 placeholder:text-gray-500"
        >
          Select your City
        </option>
        {cityArr.map((city) => (
          <option key={city?.name} value={city?.name} className="text-black">
            {city?.name}
          </option>
        ))}
      </select>
      <div className="mt-10">
        <SubmitBtn />
      </div>
      {showMeal && (
        <span className="mt-10 w-11/12 mx-auto  text-center">
          Whooohooo. We got your meal. See it published{" "}
          <Link href="/meals">
            <span className="underline text-key">here</span>
          </Link>
        </span>
      )}
    </form>
  );
}

export default UploadWeeklyForm;
