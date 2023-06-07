"use client";
import { IoSend } from "react-icons/io5";
import Image from "next/image";

function handleSubmit(e: any) {
  e.preventDefault();
  console.log("clicked");
}

function Comments() {
  return (
    <section className="flex justify-start mt-5">
      <div className="flex items-center flex-col justify-start text-left w-full space-y-3">
        <form
          className="flex items-center w-full"
          onSubmit={handleSubmit}
          action="submit"
        >
          <input
            className="bg-gray-200 h-8 rounded-md text-white px-2 text-sm w-full "
            type="text"
            placeholder="Type your comment"
          />
          <button className="bg-sky w-10 h-10 justify-center rounded-md relative flex -ml-4 items-center">
            <IoSend className=" text-white mx-auto " />
          </button>
        </form>
        <div className="flex justify-start w-full pt-2 pb-1">
          <span className="font font-semibold text-xs text-left ml-0">
            87 comments
          </span>
        </div>
        <div className="flex w-full">
          <img
            alt="Ichigo Kurosaki"
            src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/Ichigo-Kurosaki.jpg"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col items-center justify-center ml-2 w-full">
            <div className="flex items-center space-x-2  my-2 w-full">
              <span className="text-black font-semibold text-left">
                Ichigo Kurosaki
              </span>
              <div>
                <span className="text-xs text-gray-400 m-auto ">Apr 2020</span>
              </div>
            </div>
            <div className="block">
              <p className="text-base pl-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis cumque a placeat rem ipsum, nemo aspernatur quod et
                cupiditate nam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comments;
