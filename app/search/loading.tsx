"use client";
import { GridLoader } from "react-spinners";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-full flex justify-center">
      <GridLoader color="blue" size={100} />
    </div>
  );
}
