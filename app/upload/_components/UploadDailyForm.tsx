"use client";
import { uploadMeal } from "@/app/actions/uploadMeal";
import React, { useRef, useState } from "react";
import SubmitBtn from "./SubmitBtn";
import { useFormState } from "react-dom";
import { toast } from "react-hot-toast";
import Link from "next/link";

function UploadDailyForm() {
  const { formState } = useFormState();
  const ref = useRef<HTMLFormElement>(null);
  const [showMeal, setShowMeal] = useState(false);

  return (
    <section className="w-full mx-auto bg-transparent ">
      <form
        ref={ref}
        className="flex rounded-3xl px-4  mb-20 flex-col justify-center items-center w-11/12 mx-auto gap-y-2 py-10"
        action={async (formData: any) => {
          await uploadMeal(formData);
          ref?.current?.reset();
          toast.success("Meal uploaded successfully");
          setShowMeal(true);
        }}
      >
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
        <input
          required
          type="text"
          name="city"
          placeholder="Albufeira"
          className=" p-2 w-full rounded-md bg-white text-key border"
          maxLength={50}
        />
        <SubmitBtn />
        {showMeal && (
          <span className="mt-10 w-11/12 mx-auto  text-center">
            Whooohooo. We got your meal. See it published{" "}
            <Link href="/meals">
              <span className="underline">here</span>
            </Link>
          </span>
        )}
      </form>
    </section>
  );
}

export default UploadDailyForm;
