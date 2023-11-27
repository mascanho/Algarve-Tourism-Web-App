import React from "react";
import TableOfContentsFloating from "./TableOfContents";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import Image from "next/image";

const options = {
  renderNode: {
    "embedded-asset-block": (node: any) => {
      const { title, description, file } = node.data.target.fields;
      const mimeType = file.contentType;
      const src = file.url;
      const alt = title || description;
      if (mimeType === "image/jpeg" || mimeType === "image/png") {
        return <img src={src} alt={alt} />;
      }
    },
  },
};

async function getAllBlogs() {
  const client: any = createClient({
    space: process.env.CONTENTFUL_SPACE_ID3!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN3!,
  });
  const res = await client.getEntries({ content_type: "blog" });

  return await res.items;
}

const page = async (props: any) => {
  const { category, slug } = props.params;

  const allBlogs = await getAllBlogs();
  const blog = allBlogs.filter((obj: any) => obj.fields.slug === slug);

  // Contentful Rich Text Renderer
  const post = documentToReactComponents(blog[0]?.fields?.body, options);

  return (
    <section className="max-w-7xl w-11/12 sm:w-9/12 sm:flex mx-auto mt-4 sm:mt-20">
      <div className="sm:w-3/4 w-full flex-1 font-semibold">
        <div className="sm:w-full mb-8 relative ">
          <img
            src={blog[0]?.fields?.image?.fields?.file.url}
            alt={blog[0]?.fields?.title}
            className="w-full"
          />
          <div className="w-full absolute hidden sm:block bottom-32 h-[100px] bg-gradient-to-b from-transparent to-white" />
          <div className="w-full absolute hidden sm:block bottom-32 h-[200px] bg-gradient-to-b from-transparent to-white" />
          <div className="w-11/12 sm:w-full">
            <h1 className="text-black sm:text-4xl text-2xl font-semibold ">
              {blog[0]?.fields?.title}
            </h1>
          </div>
          <div className="relative w-full  space-x-2 mt-4 flex items-center justify-between">
            <div className="w-full flex items-center">
              <div className="relative w-10 h-10 mr-2">
                <Image
                  src={`https:${blog[0]?.fields?.avatar?.fields?.file.url}`}
                  layout="responsive"
                  alt="albvufeir"
                  width={80}
                  height={80}
                  objectFit="contain"
                  className="rounded-full w-10 h-10"
                />
              </div>
              <div className="w-full flex-1 flex flex-col">
                <span className="text-black text-xs">
                  {blog[0]?.fields?.author}
                </span>
                <span className="text-xs font-semibold">
                  {blog[0]?.fields?.role}
                </span>
              </div>
            </div>
            <div className="flex space-x-2 w-52">
              <span>3 min read</span>
              <span>hello</span>
            </div>
          </div>
        </div>
        <section className="mt-10 sm:mt-20 richText">{post}</section>
      </div>
    </section>
  );
};

export default page;
