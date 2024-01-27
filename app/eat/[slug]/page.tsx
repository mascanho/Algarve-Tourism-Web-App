import React, { Suspense } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import Image from "next/image";
import BreadCrumbs from "@/components/BreadCrumbs";
import { notFound } from "next/navigation";
import Link from "next/link";
import CommentCard from "../_components/CommentCard";
import CommentInput from "../_components/CommentInput";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import getCurrentUser from "@/app/libs/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { IoArrowBack } from "react-icons/io5";
import { Button } from "@mantine/core";
import LoginButton from "../_components/LoginButton";

// Fetch comments from Mongo DB
export async function getComments() {
  const comments = await prisma?.comments?.findMany();
  return comments;
}

async function getAllBlogs() {
  const client: any = createClient({
    space: process.env.CONTENTFUL_SPACE_ID3!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN3!,
  });
  const res = await client.getEntries({
    content_type: "blog",
    limit: 10,
    include: 10,
    skip: 0,
  });

  return await res.items;
}

export async function generateMetadata({ params, searchParams }: any) {
  const titleCaseTitle = params.slug
    .split("-")
    .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const getDescription = async ({ params }: any) => {
    const client: any = createClient({
      space: process.env.CONTENTFUL_SPACE_ID3!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN3!,
    });
    const res = await client.getEntries({
      content_type: "blog",
      limit: 1,
      skip: 0,
      "fields.slug": params.slug,
    });
    return res?.items[0]?.fields?.description;
  };

  const description = await getDescription({ params });

  return {
    title: titleCaseTitle,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/images/icon.png",
      href: "/images/icon.png",
      apple: "/apple-icon.png",
      other: {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    },
  };
}

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

const page = async (props: any) => {
  const { category, slug } = props.params;
  const session = await getServerSession(authOptions);
  const currentUser: any = getCurrentUser();

  const allComments = await getComments();

  // Filtering the right comments to match the right slug
  const commentsFiltered = allComments?.filter(
    (obj: any) => obj?.slug === slug,
  );

  // Order the comments by date
  const comments = commentsFiltered?.sort(
    (a: any, b: any) => b?.createdAt - a?.createdAt,
  );

  const allBlogs = await getAllBlogs();
  const blog = allBlogs?.filter((obj: any) => obj.fields.slug === slug);

  // Redirect the user if the pathaname doesn't exist
  if (!blog[0]) {
    notFound();
  }

  // Contentful Rich Text Renderer
  const post = documentToReactComponents(blog[0]?.fields?.body, options);

  return (
    <section className="max-w-7xl w-11/12 sm:w-9/12 sm:flex mx-auto mt-4 sm:mt-10">
      <div className="sm:w-3/4 w-full flex-1 font-semibold">
        <section className="mb-5 sm:mb-10 line-clamp-1 overflow-hidden text-xs">
          <BreadCrumbs />
        </section>
        <div className="sm:w-full mb-8 relative ">
          <div className="w-11/12 sm:w-full my-4">
            <h1 className="text-black sm:text-4xl text-2xl sm:mt-4 font-semibold ">
              {blog[0]?.fields?.title}
            </h1>
          </div>

          <Image
            width={900}
            height={700}
            src={"https:" + blog[0]?.fields?.image?.fields?.file.url}
            alt={blog[0]?.fields?.title}
            className="mb-4 sm:mb-0 object-contain w-full h-full rounded-md"
          />
          <section className="hidden">
            <div className="w-full absolute hidden sm:block sm:bottom-28 h-[100px] bg-gradient-to-b from-transparent to-white" />
            <div className="w-full absolute hidden sm:block sm:bottom-28 h-[200px] bg-gradient-to-b from-transparent to-white" />
          </section>
          <div className="relative w-full space-x-2 mt-4 flex items-center justify-between">
            <div className="w-full flex items-center">
              <div className="relative w-10 h-10 mr-2 flex items-center">
                <Image
                  src={`https:${blog[0]?.fields?.avatar?.fields?.file.url}`}
                  layout="responsive"
                  alt={blog[0]?.fields?.author}
                  width={80}
                  height={80}
                  objectFit="contain"
                  className="rounded-full w-14 h-14"
                />
              </div>
              <div className="w-full  flex flex-col">
                <span className="text-black text-xs">
                  {blog[0]?.fields?.author}
                </span>
                <span className="text-xs font-semibold">
                  {blog[0]?.fields?.role}
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-full text-right">
              <span className="text-xs w-full">
                {new Intl.DateTimeFormat("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(blog[0]?.fields?.date))}
              </span>
              <span className="text-xs w-full">3 min read</span>
            </div>
          </div>
        </div>
        <section className="mt-10 sm:mt-20 richText">{post}</section>
        <section className="text-black mt-20">
          <hr />
          <div className="mt-20">
            <h3 className="sm:text-3xl">Comments</h3>
            <div className="my-4">
              {session === null ? <LoginButton /> : <CommentInput />}
            </div>
            <div className="mt-10">
              {comments.map((comment: any) => (
                <Suspense key={comment.id} fallback={<p>Loading...</p>}>
                  <CommentCard comment={comment} />
                </Suspense>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-11 block">
          <hr className="mt-8 mb-16" />
          <Link href="/blog">
            <button
              className="text-gray-600 flex items-center space-x-2"
              type="button"
            >
              <IoArrowBack className="mr-2" />
              Back to Blogs
            </button>
          </Link>
        </section>
      </div>
    </section>
  );
};

export default page;
