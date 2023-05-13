"use client";
import { PuffLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <PuffLoader color="blue" size={200} />
    </div>
  );
}

export default Spinner;
