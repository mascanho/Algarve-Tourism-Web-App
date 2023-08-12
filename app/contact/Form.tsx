"use client";

export default function Form() {
  return (
    <form className=" m-auto flex flex-col space-y-6 w-full">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-info w-full bg-transparent"
      />{" "}
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-info w-full "
      />{" "}
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-info w-full "
      />{" "}
      <textarea className="textarea textarea-info" placeholder="Bio"></textarea>{" "}
      <button className="border py-2">Send</button>
    </form>
  );
}
