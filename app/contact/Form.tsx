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
        className="input input-bordered input-info w-full bg-transparent "
      />{" "}
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-info w-full bg-transparent "
      />{" "}
      <textarea
        className="textarea textarea-info bg-transparent"
        placeholder="Bio"
      ></textarea>{" "}
      <div className="pt-2 w-full">
        <button className="border bg-sky text-white w-full py-2 mt-8">
          Send
        </button>
      </div>
    </form>
  );
}
