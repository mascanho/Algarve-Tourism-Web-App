"use client";
import { Blockquote } from "@mantine/core";
import React from "react";

function Review({ name, job, rating, review, image }: any) {
  return (
    <Blockquote cite="– Forrest Gump">
      Life is like an npm install – you never know what you are going to get.
    </Blockquote>
  );
}

export default Review;
``;
