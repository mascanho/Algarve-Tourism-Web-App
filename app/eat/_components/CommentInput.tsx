"use client";
import { Button, Textarea } from "@mantine/core";
import React, { useRef, useState } from "react";
import { createComment } from "@/app/libs/addBlogComment";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";

const CommentInput = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);

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
        className="font-thin"
      />
      <Button
        disabled={pending}
        className="mt-3"
        variant="outline"
        type="submit"
      >
        {pending ? "Posting" : "Comment"}
      </Button>
    </form>
  );
};

export default CommentInput;
