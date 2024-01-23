"use client";
import { GridLoader } from "react-spinners";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-screen flex justify-center mt-20">
      <GridLoader color="gray" size={90} />
    </div>
  );
}
