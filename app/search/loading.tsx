"use client";
import { GridLoader } from "react-spinners";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-full flex justify-center mt-10">
      <GridLoader color="gray" size={90} />
    </div>
  );
}
