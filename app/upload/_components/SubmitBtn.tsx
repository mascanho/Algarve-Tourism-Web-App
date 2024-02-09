"use client";
import Spinner from "@/components/Spinner";
import { useFormStatus } from "react-dom";
import { FaSpinner } from "react-icons/fa";

function SubmitBtn() {
  const { loading, pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={loading}
      className={`border w-full bg-key mt-8 px-3 py-2 rounded-md text-highlight ${pending && "bg-gray-500"} font-semibold`}
    >
      {pending ? (
        <span className="flex justify-center">
          <FaSpinner className="animate-spin text-2xl " />
        </span>
      ) : (
        "Upload"
      )}
    </button>
  );
}

export default SubmitBtn;
