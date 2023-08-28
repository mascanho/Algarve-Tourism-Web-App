"use client";
import Image from "next/image";
import { GridLoader } from "react-spinners";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  // return (
  //   <div className="w-full h-full flex justify-center">
  //     <Image
  //       className="mx-auto"
  //       src={"/loading.gif"}
  //       alt="loader"
  //       width={400}
  //       height={500}
  //     />
  //   </div>
  return (
    <div className="w-full h-full items-center flex justify-center">
      <GridLoader color="lightblue" size={85} />
    </div>
  );
}
