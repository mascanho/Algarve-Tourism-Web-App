"use client";
import React, { useEffect } from "react";
import { IoSend } from "react-icons/io5";
import { useSession } from "next-auth/react";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  FieldErrors,
} from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  errors: FieldErrors;
  formaState: FieldValues;
}

function CommentForm() {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: { comment: "" },
  });

  const handleMessage = (data: any) => {
    console.log("clicked");
    axios
      .post("/api/comment", data)
      .then((res) => {
        console.log(res);
        console.log("loading data");
        reset();
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      })
      .finally(() => {
        console.log("Comment has been uploaded");
        router.refresh();
      });
  };

  return (
    <div className="w-full">
      {!session ? (
        <button>Comment</button>
      ) : (
        <form
          className="flex items-center w-full"
          onSubmit={handleSubmit(handleMessage)}
          action="submit"
        >
          <input
            className="bg-gray-200 h-8 rounded-md text-black outline-none px-2 text-sm w-full "
            type="text"
            placeholder="Type your comment"
            id="comment"
            {...register("comment")}
          />
          <button
            type="submit"
            className="bg-sky w-10 h-10 justify-center rounded-md relative flex -ml-4 items-center"
          >
            <IoSend className=" text-white mx-auto " />
          </button>
        </form>
      )}
    </div>
  );
}

export default CommentForm;
