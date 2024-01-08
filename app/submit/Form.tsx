"use client";

import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

export default function Form() {
  const [state, handleSubmit] = useForm("xeqbrndo");
  if (state.succeeded) {
    return (
      <>
        <p className="text-center">We got your place!</p>
        <Link href="/">
          <button className="border bg-sky text-white w-full py-2 mt-8">
            Back to Home Page
          </button>
        </Link>
      </>
    );
  }

  return (
    <div className="px-10 w-full flex flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="w-full sm:text-4xl text-3xl font-bold text-sky text-center">
          Send us your place
        </h1>
        <h2 className="w-10/12 my-8 mx-auto text-sm">
          We would love to receive your place so that we can include it in our
          database. Fill the form below with the details of the place that you
          wish to submit for approval.
        </h2>
      </section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-3 w-11/12"
        action="https://formspree.io/f/xeqbrndo"
        method="POST"
      >
        <input
          placeholder={`The Tower of London`}
          className="input input-bordered border border-gray-200 text-black  w-full bg-transparent"
          id="name"
          type="text"
          name="name"
        />{" "}
        <ValidationError prefix="name" field="name" errors={state.errors} />
        <input
          placeholder={`London`}
          className="input input-bordered border text-black border-gray-200  w-full bg-transparent"
          id="city"
          type="text"
          name="city"
        />{" "}
        <ValidationError prefix="city" field="city" errors={state.errors} />
        <input
          placeholder={`https://www.toweroflondon.com`}
          className="input input-bordered border border-gray-200 text-black  w-full bg-transparent"
          id="city"
          type="text"
          name="city"
        />{" "}
        <ValidationError prefix="city" field="city" errors={state.errors} />
        <div className="pt-2 w-full">
          <button
            type="submit"
            className="border bg-sky text-white w-full py-2"
            disabled={state.submitting}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
