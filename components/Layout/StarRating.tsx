"use client";
import { Rating, Group } from "@mantine/core";

function StarRating(rating: any) {
  console.log(rating, "this is the rating");

  return (
    <Group position="center">
      <Rating value={rating?.rating} fractions={2} readOnly />
    </Group>
  );
}
export default StarRating;
