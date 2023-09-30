"use client";
import React, { useState } from "react";
import { SegmentedControl } from "@mantine/core";
import { Chip } from "@mantine/core";

function RandomModalContent() {
  const [page, setPage] = useState(0);

  return (
    <>
      <div className="mx-auto w-full flex">
        <SegmentedControl
          color="blue"
          data={["React", "Angular", "Vue", "marco"]}
          fullWidth
          onClick={(e: any) => console.log(e.target.innerText)}
        />
      </div>
      <Chip.Group multiple>
        <Chip value="1">Multiple chips</Chip>
        <Chip value="2">Can be selected</Chip>
        <Chip value="3">At a time</Chip>
      </Chip.Group>{" "}
    </>
  );
}

export default RandomModalContent;
