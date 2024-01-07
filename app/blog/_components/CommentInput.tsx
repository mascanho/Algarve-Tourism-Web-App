"use client";
import { Button, Textarea } from "@mantine/core";
import React from "react";
import prisma from "../../libs/prismadb";
import { createComment } from "@/app/libs/addBlogComment";
import { useRouter } from "next/navigation";

const CommentInput = () => {
  const router = useRouter();
  return (
    <form
      action={async (data: FormData, slug: FormData) =>
        createComment(data, slug).then(() => router.refresh())
      }
    >
      <Textarea
        placeholder="Write your comment..."
        autosize
        required
        name="comment"
      />
      <Button className="mt-3" variant="outline" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CommentInput;
