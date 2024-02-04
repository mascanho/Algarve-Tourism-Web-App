"use client";

import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export default function Form() {
  const [state, handleSubmit] = useForm("xeqbrndo");
  const { width, height } = useWindowSize();

  if (state.succeeded) {
    return (
      <section className="flex flex-col items-center justify-center text-center w-full">
        <Confetti width={width} height={height} />
        <h2 className="text-center text-3xl">Thank You For Your Contact</h2>
        <Link href="/">
          <button className="border bg-key text-white w-full py-2 mt-8 px-4 rounded-md">
            Back to Home Page
          </button>
        </Link>
      </section>
    );
  }

  return (
    <div className="px-10 w-full flex flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="w-full sm:text-4xl text-3xl font-bold text-key text-center">
          Let's Get In Touch
        </h1>
        <h2 className="w-10/12 my-6 mx-auto text-sm">
          Share your travel dreams with us! Drop us a message, and let's turn
          your wanderlust into a journey. Adventure awaits!
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
            className="border bg-key text-white w-full py-2"
            disabled={state.submitting}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
