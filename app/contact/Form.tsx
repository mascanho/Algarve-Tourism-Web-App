"use client";

import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

export default function Form() {
  const [state, handleSubmit] = useForm("xeqbrndo");
  if (state.succeeded) {
    return (
      <>
        <p className="text-center">We got your message!</p>
        <Link href="/">
          <button className="border bg-sky text-white w-full py-2 mt-8">
            Back to Home Page
          </button>
        </Link>
      </>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" m-auto flex flex-col space-y-6 w-full"
      action="https://formspree.io/f/xeqbrndo"
      method="POST"
    >
      <input
        placeholder="Email"
        className="input input-bordered input-info w-full bg-transparent"
        id="email"
        type="email"
        name="email"
      />{" "}
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        className="textarea textarea-info bg-transparent"
        placeholder="Your Message..."
        name="message"
        id="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div className="pt-2 w-full">
        <button
          type="submit"
          className="border bg-sky text-white w-full py-2 mt-8"
          disabled={state.submitting}
        >
          Send
        </button>
      </div>
    </form>
  );
}
