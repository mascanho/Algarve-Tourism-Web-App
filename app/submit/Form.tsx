"use client";

import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function Form() {
  const { width, height } = useWindowSize();
  const [state, handleSubmit] = useForm("xeqbrndo");
  if (state.succeeded) {
    return (
      <section className="flex flex-col items-center justify-center text-center w-full ">
        <Confetti width={width} height={height} />
        <h2 className="text-center text-3xl">We Got Your Place!</h2>
        <div>
          <Link href="/">
            <button className="border bg-key text-white w-full py-2 mt-8 px-4 rounded-md">
              Back to Home Page
            </button>
          </Link>
          <Link href="/">
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="border bg-key text-white w-full py-2 mt-4  px-4 rounded-md"
            >
              Submit Another
            </button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="px-10 w-full flex flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="w-full sm:text-4xl text-3xl font-bold text-key text-center">
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
          required
        />{" "}
        <ValidationError prefix="name" field="name" errors={state.errors} />
        <input
          placeholder={`London`}
          className="input input-bordered border text-black border-gray-200  w-full bg-transparent"
          id="city"
          type="text"
          name="city"
          required
        />{" "}
        <ValidationError prefix="city" field="city" errors={state.errors} />
        <input
          placeholder={`https://www.toweroflondon.com`}
          className="input input-bordered border border-gray-200 text-black  w-full bg-transparent"
          id="website"
          type="text"
          name="website"
        />{" "}
        <ValidationError
          prefix="website"
          field="website"
          errors={state.errors}
        />
        <div className="pt-2 w-full">
          <button
            type="submit"
            className="border bg-key text-white w-full py-2 rounded-md"
            disabled={state.submitting}
          >
            Send
          </button>
        </div>
      </form>{" "}
      <span className="text-gray-300 text-xs pt-10">
        Locations provided must be in the Algarve
      </span>
    </div>
  );
}
