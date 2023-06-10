"use client";
import { Rating, Group } from "@mantine/core";

function StarRating(rating: any) {
  return (
    <Group position="center">
      <Rating value={rating?.rating} fractions={2} readOnly size="xs" />
    </Group>
  );
}
export default StarRating;
