"use client";
import { Blockquote } from "@mantine/core";
import React from "react";

function Review({ name, job, rating, review, image }: any) {
  return (
    <Blockquote className="animate-fade-in" cite={`– ${name}`}>
      {review}
    </Blockquote>
  );
}

export default Review;
``;
