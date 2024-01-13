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
}: any) {
  const { removeFavourite } = useAddToFavourites();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image src={image} height={160} alt={title} />
      </Card.Section>

      <Group className="flex  justify-between mb-1" mt="md">
        <Text fw={500}>{title}</Text>
        <Badge color={price === "Free" ? "green" : "red"} variant="light">
          {price}
        </Badge>
      </Group>
      <section className="flex justify-between space-x-6 mb-2 mt-1 items-center">
        <Group className="flex font-normal  text-gray-400">
          <IoLocation className="w-4 h-4" />
          <Text className="-ml-3">{city}</Text>
        </Group>
        <Rating value={rating} fractions={2} className="" readOnly size="xs" />
      </section>
      {/* <Divider my={"md"} /> */}
      <Text size="sm" c="dimmed" className="text-black font-thin">
        {shortDescription}
      </Text>
      <Text size="sm" c="dimmed" className="mt-4"></Text>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => removeFavourite(id)}
          className="px-3 w-full bg-sky py-2 rounded-lg text-white font-semibold"
        >
          View
        </button>
        <Link href={`/${type}/${slug}`}>
          <button className="px-3 w-full bg-red-500 py-2 rounded-lg text-white font-semibold">
            Delete
          </button>
        </Link>
      </div>
    </Card>
  );
}
export default FavMobileCard;
