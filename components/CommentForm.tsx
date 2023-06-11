"use client";
import React, { useEffect } from "react";
import { IoSend } from "react-icons/io5";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  FieldErrors,
} from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  useLoginModalStore,
  useRegisteredModalStore,
} from "@/app/hooks/useLoginModal";

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

// const session = true;

function CommentForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: { comment: "" },
  });

  // Modals using Zustand
  const loginModal = useLoginModalStore();
  const registeredModal = useRegisteredModalStore();
  const session = useSession();

  console.log(session);

  const handleMessage = (data: any) => {
    axios
      .post("/api/comment", data)
      .then((res) => {
        reset();
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        router.refresh();
      });
  };

  return (
    <div className="w-full">
      {session.data === null ? (
        <button onClick={loginModal.onOpen}>Comment</button>
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
