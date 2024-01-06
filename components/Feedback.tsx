"use client";
import { Blockquote } from "@mantine/core";
import React from "react";

function Feedback({ name, job, rating, review, image }: any) {
  return (
    <Blockquote className="animate-fade-in" cite={`– ${name}`}>
      {review}
    </Blockquote>
  );
}

export default Feedback;
