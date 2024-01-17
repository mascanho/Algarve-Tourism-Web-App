"use client";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import {
  Card,
  Image,
  Text,
  Badge,
  Divider,
  Group,
  Rating,
} from "@mantine/core";
import { IoLocation } from "react-icons/io5";
import Link from "next/link";
import { useEffect } from "react";

function FavMobileCard({
  title,
  image,
  rating,
  price,
  slug,
  type,
  id,
  city,
  shortDescription,
  removeFavouriteGlobal,
}: any) {
  // const { removeFavourite } = useAddToFavourites();

  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image src={image} height={180} alt={title} />
      </Card.Section>

      <section className="flex mt-4 justify-between items-center space-y-1">
        <Group className="">{title}</Group>
        <Rating value={rating} fractions={2} readOnly size="xs" />
      </section>
      <section className="flex justify-between space-x-6 pb-1 mt-1 items-center">
        <Group className="flex font-normal  text-gray-400">
          <IoLocation className="w-4 h-4 -ml-1" />
          <Text className="-ml-[14px] text-sm">{city}</Text>
        </Group>
        <Badge color={price === "Free" ? "green" : "red"} variant="light">
          {price}
        </Badge>
      </section>
      <Divider my={"sm"} />
      <Text size="sm" c="dimmed" className="text-black font-thin">
        {shortDescription}
      </Text>
      <Text size="sm" c="dimmed" className="mt-4"></Text>
      <div className="flex items-center space-x-3">
        <Link href={`/${type}/${slug}`} className="w-full">
          <button className="px-3 w-full  bg-sky py-2 rounded-lg text-white font-semibold">
            View
          </button>
        </Link>
        <button
          onClick={() => removeFavouriteGlobal(id)}
          className="px-3  bg-red-500 py-2  rounded-lg text-white font-semibold"
        >
          Delete
        </button>
      </div>
    </Card>
  );
}
export default FavMobileCard;
