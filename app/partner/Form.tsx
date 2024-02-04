"use client";

import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

export default function Form() {
  const [state, handleSubmit] = useForm("xeqbrndo");
  if (state.succeeded) {
    return (
      <section className="flex flex-col items-center justify-center text-center w-full">
        <h2 className="text-center text-3xl">We Will Get In Touch</h2>
        <Link href="/">
          <button className="border bg-sky text-white w-full py-2 mt-8 px-4 rounded-md">
            Back to Home Page
          </button>
        </Link>
      </section>
    );
  }
  return (
    <div className="px-10 w-full flex flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="w-full sm:text-4xl text-3xl font-bold text-sky text-center">
          Become a Partner
        </h1>
        <h2 className="w-10/12 my-6 mx-auto text-sm">
          We strive to create the best experiences to all visitors. If you would
          like to partner with us, please fill out the form below
        </h2>
      </section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-3 w-11/12"
        action="https://formspree.io/f/xeqbrndo"
        method="POST"
      >
        <input
          placeholder="Email"
          className="input input-bordered border border-gray-200  w-full bg-transparent"
          id="email"
          type="email"
          name="email"
          required
        />{" "}
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className="h-52 textarea border-gray-200 bg-transparent"
          placeholder="Your Message..."
          name="message"
          id="message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
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
