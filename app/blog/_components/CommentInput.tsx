"use client";
import { Textarea } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { createComment } from "@/app/libs/addBlogComment";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

const CommentInput = (FormData: FormData) => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  useEffect(() => {
    console.log(pending);
  }, [pending]);

  return (
    <form
      ref={formRef}
      action={async (data: FormData, slug: FormData) =>
        createComment(data, slug).then(() => {
          formRef.current?.reset();
          router.refresh();
        })
      }
    >
      <Textarea
        placeholder="Write your comment..."
        autosize
        required
        name="comment"
        className="font-thin ring-0 ring-black focus:outline-none focus:outline-0 focus:ring-0 focus:ring-key"
      />
      <button
        className="mt-3 w-28 outline-key border py-2 px-3 rounded-xl text-black active:bg-key active:text-white"
        type="submit"
        disabled={pending}
      >
        {pending ? "Posting" : "send"}
      </button>
    </form>
  );
};

export default CommentInput;
