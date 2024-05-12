import React from "react";

const BuilderFooter = () => {
  return (
    <div className="h-20 flex justify-end items-center border-2 bg-white inset-0 shadow-inner w-full">
      <div className="mr-10">
        <button
          className="bg-key px-3 py-1 w-20 text-white rounded-xl"
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BuilderFooter;
