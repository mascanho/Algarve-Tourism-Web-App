"use client";
import Image from "next/image";
import { DotLoader, GridLoader, ScaleLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full h-full items-center flex mt-10 justify-center ">
      <GridLoader color="lightgray" size={100} />{" "}
    </div>
  );
}
