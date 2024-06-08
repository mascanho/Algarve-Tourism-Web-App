"use client";
import { DotLoader, GridLoader, ScaleLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full h-screen items-center flex justify-center ">
      <GridLoader color="lightgray" size={100} />{" "}
    </div>
  );
}
