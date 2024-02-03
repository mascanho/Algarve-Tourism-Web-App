"use client";
import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { FieldValues, useForm, FieldErrors } from "react-hook-form";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
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

function ReviewForm(formData: FormData) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: { review: "" },
  });
  const [signedIn, setsignedIn] = useState(false);
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

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

  const handleMessage = (data: any) => {
    setLoading(true);
    axios
      .post("/api/review", data)
      .then((res) => {
        reset();
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        router.refresh();
        setLoading(false);
      });
  };

  return (
    <div className="w-full">
      {session.status === "unauthenticated" ? (
        <button
          className="border sm:px-4 sm:py-2 rounded-md text-xs px-3 py-1 sm:text-base"
          onClick={handleCommentAuthentication}
        >
          Leave a review
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
            placeholder="Write your review..."
            id="review"
            {...register("review")}
            required
          />
          <button
            disabled={loading}
            type="submit"
            className="bg-sky w-10 h-10 justify-center rounded-md relative flex -ml-4 items-center"
          >
            {loading ? (
              <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>
            ) : (
              <IoSend className="text-white" />
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default ReviewForm;
