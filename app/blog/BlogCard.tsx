import React from "react";
import Link from "next/link";

export const BlogCard = ({
  image,
  title,
  slug,
  description,
  body,
  author,
  avatar,
  date,
  tags,
  role,
}: any) => {
  const inputDate = new Date(date);
  const humanDate = inputDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="sm:hover:scale-105 active:scale-95 transition-all ease-in delay-75">
      <Link href={`/blog/${slug}`}>
        <section className="flex sm:w-11/12 w-11/12 mx-auto relative">
          <div className="avatar hidden ">
            <div className="w-12 rounded-full h-12">
              <img src={`https://${avatar?.fields?.file?.url}`} />
            </div>
          </div>
          <div className="hidden  flex-col justify-center my-auto w-full h-full">
            <div className="flex items-center pl-2 space-y-1">
              <h4 className="font-bold flex-items text-black">{author}</h4>
              <div className="flex items-center">
                <span className="text-sm ml-2 sm:pb-1">{humanDate}</span>
              </div>
            </div>
            <div className="block pl-2 text-sm">
              <span>{role}</span>
            </div>
          </div>
          <picture className="w-40 h-28  hidden rounded-md  absolute top-7 right-0">
            <img
              className="h-28 rounded-md"
              src={`https://${image?.fields?.file?.url}`}
            />
          </picture>
        </section>
        <section className="sm:w-11/12 mx-auto">
          <div className="pb-2 sm:w-full w-11/12 mx-auto sm:mx-0  sm:mt-3">
            <div className="flex items-center">
              <span className="text-black font-semibold">{title}</span>
            </div>
            <p className="text-sm text-black/60 mt-2 line-clamp-2">
              {description}
            </p>
          </div>
          <div className="flex sm:w-full w-11/12 mx-auto pb-3">
            {tags.map((item: any) => (
              <span className="border mr-1 px-2 rounded-2xl text-[10px] bg-key text-white font-semibold">
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center pb-2 w-11/12 sm:w-full mx-auto">
            <span className="text-xs">{humanDate}</span>
          </div>
          <hr className="block sm:w-full mx-auto my-2" />
        </section>
      </Link>
    </section>
  );
};

export default BlogCard;
