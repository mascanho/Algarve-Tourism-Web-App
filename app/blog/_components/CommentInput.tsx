"use client";
import { Textarea } from "@mantine/core";
import React, { useRef, useState } from "react"; // Added useState import
import { createComment } from "@/app/libs/addBlogComment";
import { useRouter } from "next/navigation"; // Changed from "next/navigation"
import { useFormStatus } from "react-dom";

const CommentInput = ({ slug }: any) => {
  const router = useRouter();
  const formRef = useRef(null);
  const { pending } = useFormStatus();
  const [buttonText, setButtonText] = useState("Send"); // Added state for button text

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(formRef?.current);
    setButtonText("Posting"); // Update button text to "Posting" when submitting
    await createComment(formData, slug);
    formRef?.current.reset();
    router.refresh();
    setButtonText("Send"); // Reset button text to "Send" after submission
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <Textarea
        placeholder="Write your comment..."
        autosize
        required
        name="comment"
        className="font-thin ring-0 ring-black focus:outline-none focus:ring-0 focus:ring-key"
      />
      <button
        className="mt-3 w-28 outline-key border border-black py-2 px-3 rounded-xl text-black active:bg-key active:text-white"
        type="submit"
        disabled={pending}
      >
        {buttonText} {/* Render button text dynamically */}
      </button>
    </form>
  );
};

export default CommentInput;
