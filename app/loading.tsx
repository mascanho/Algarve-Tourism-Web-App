"use client";
import Image from "next/image";
import { DotLoader, GridLoader, ScaleLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full h-full min-h-screen items-center flex justify-center ">
      <GridLoader color="lightgray" size={100} />{" "}
    </div>
  );
}
