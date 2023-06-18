"use client";
import { Blockquote } from "@mantine/core";
import React from "react";

function Review({ name, job, rating, review, image }: any) {
  return <Blockquote cite="– Forrest Gump">{review}</Blockquote>;
}

export default Review;
``;
