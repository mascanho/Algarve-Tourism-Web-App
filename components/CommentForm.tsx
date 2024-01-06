"use client";
import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  FieldErrors,
} from "react-hook-form";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  useLoginModalStore,
  useRegisteredModalStore,
} from "@/app/hooks/useLoginModal";
import { FaSpinner } from "react-icons/fa";

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
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: { comment: "" },
  });
  const [signedIn, setsignedIn] = useState(false);
  const pathname = usePathname();

  // Modals using Zustand
  const loginModal = useLoginModalStore();
  const registeredModal = useRegisteredModalStore();
  const session = useSession();

  const handleCommentAuthentication = () => {
    registeredModal.onOpen();
    router.push(pathname + "?reviews=reviews");
    if (session.status === "authenticated") {
      setsignedIn(true);
    }
  };

  // useEffect to render the button or the form based on user logged in or not
  useEffect(() => {
    setsignedIn(!signedIn);
  }, [session.status]);

  const handleMessage = (data: any) => {
    axios
      .post("/api/comment", data)
      .then((res) => {
        console.log(res);

        reset();
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        router.refresh();
      });
  };

  console.log(session.data?.user?.email);

  return (
    <div className="w-full">
      {session.status === "unauthenticated" ? (
        <button
          className="border px-4 py-2 rounded-md"
          onClick={handleCommentAuthentication}
        >
          Leave a comment
        </button>
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
            required
          />
          <button
            type="submit"
            className="bg-sky w-10 h-10 justify-center rounded-md relative flex -ml-4 items-center"
          >
            <IoSend className=" text-white mx-auto active:scale-95 " />
          </button>
        </form>
      )}
    </div>
  );
}

export default CommentForm;
