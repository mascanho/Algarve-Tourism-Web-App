"use client";
import { Rating } from "@mantine/core";
import React from "react";

const MobileRating = ({ value }: any) => {
  return (
    <Rating
      value={value}
      fractions={2}
      readOnly
      size="xs"
      className="text-xs"
    />
  );
};

export default MobileRating;
