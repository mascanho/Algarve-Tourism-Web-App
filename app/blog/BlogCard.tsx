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
}: any) => {
  console.log(title, body, "from the blog card");

  return (
    <>
      <Link href={`/blog/${slug}`}>
        <section className="flex sm:w-11/12 w-11/12 mx-auto relative">
          <div className="avatar">
            <div className="w-12 rounded-full h-12">
              <img src={`https://${avatar?.fields?.file?.url}`} />
            </div>
          </div>
          <div className="block w-full h-full">
            <div className="flex items-center pl-2 space-y-1">
              <h4 className="font-bold flex-items text-black">{author}</h4>
              <div className="flex items-center">
                <span className="pb-1 text-sm ml-2">Apr 20, 2022</span>
              </div>
            </div>
            <div className="block pl-2 text-sm">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
          <picture className="w-40 h-28 sm:inline-block hidden rounded-md  absolute top-2 right-0">
            <img
              className="h-28 rounded-md"
              src={`https://${image?.fields?.file?.url}`}
            />
          </picture>
        </section>
        <section className="sm:w-11/12 mx-auto">
          <div className="pb-2 sm:w-2/3 w-11/12 mx-auto sm:mx-0 mt-3 sm:mt-1">
            <p className="text-sm mt-2 line-clamp-2">{description}</p>
          </div>
          <div className="flex sm:w-full w-11/12 mx-auto mt-2 pb-6">
            {tags.map((item: any) => (
              <span className="border mr-2 px-2 rounded-2xl sm:text-xs bg-gray-100">
                {item}
              </span>
            ))}
          </div>
          <hr className="block sm:w-full mx-auto pb-8" />
        </section>
      </Link>
    </>
  );
};

export default BlogCard;
