"use client";
import React, { useState } from "react";
import { SegmentedControl } from "@mantine/core";
import { Chip } from "@mantine/core";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { catArr } from "@/Data/Categories";
import { NumberInput } from "@mantine/core";

function RandomModalContent() {
  const [page, setPage] = useState(0);

  return (
    <>
      {page === 0 ? (
        <>
          <div className="mb-2 border-b-black pb-2">
            <h4 className="text-gray-400 pb-1">Number of days</h4>
            <NumberInput
              placeholder="Don't enter more than 20 and less than 10"
              min={1}
              max={20}
            />{" "}
          </div>
          <Chip.Group multiple>
            <h4 className="text-gray-400 ">Select categories</h4>
            <div className="flex w-full flex-wrap items-center mt-2 text-left justify-center">
              {catArr.map((item: any) => (
                <Chip className="mb-2 mr-2" key={item.id} value={item.name}>
                  {item.name}
                </Chip>
              ))}
            </div>
          </Chip.Group>{" "}
          <div className="mx-auto w-full flex">
            <SegmentedControl
              color="blue"
              data={["React", "Angular", "Vue", "marco"]}
              fullWidth
            />
          </div>
        </>
      ) : (
        <h1>Page 2</h1>
      )}
      <div className="w-full flex justify-between mt-4">
        <button
          className="bg-sky px-4 flex items-center w-28 space-x-2 py-1 text-white  rounded-md "
          onClick={() => setPage(0)}
        >
          <AiOutlineArrowLeft className="mr-1" /> Previous
        </button>
        <button
          className="bg-sky text-white px-4 w-28 py-1 text-center justify-center rounded-md items-center flex"
          onClick={() => setPage(1)}
        >
          Next
          <AiOutlineArrowRight className="ml-1" />
        </button>
      </div>
    </>
  );
}

export default RandomModalContent;
