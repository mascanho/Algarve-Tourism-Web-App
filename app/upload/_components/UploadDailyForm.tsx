"use client";
import { uploadMeal } from "@/app/actions/uploadMeal";
import React from "react";
import SubmitBtn from "./SubmitBtn";

function UploadDailyForm() {
  return (
    <section className="w-full mx-auto bg-darkwhite ">
      <form
        className="flex rounded-3xl px-4  mb-20 flex-col justify-center items-center w-11/12 mx-auto gap-y-2 py-10"
        action={uploadMeal}
      >
        <label htmlFor="business" className="text-left text-key w-full mx-0">
          Business Name
        </label>
        <input
          type="text"
          name="business"
          placeholder="Restaurant ABC"
          className=" p-2 w-full rounded-md bg-white text-key border"
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
          placeholder="€ 12.99"
          className="p-2 w-full bg-white rounded-md text-key"
        />
        <label htmlFor="business" className="text-left w-full mx-0 text-key">
          City
        </label>
        <input
          required
          type="text"
          name="city"
          placeholder="Albufeira"
          className=" p-2 w-full rounded-md bg-white text-key border"
        />
        <SubmitBtn />
      </form>
    </section>
  );
}

export default UploadDailyForm;
