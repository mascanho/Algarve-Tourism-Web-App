"use client";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import { useEffect, useState } from "react";

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array: any) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function BlogCarousel({ items }: any) {
  const [shuffledItems, setShuffledItems]: any = useState([]);

  useEffect(() => {
    // Shuffle the array when the component mounts
    setShuffledItems(shuffleArray(items));
  }, []);

  return (
    <Carousel withIndicators height={200} dragFree slideGap="md" align="start">
      {shuffledItems.map((item: any) => (
        <Carousel.Slide key={item?.sys?.id}>
          <Link href={`/${item?.fields.type}/${item?.fields?.slug}`}>
            <div className="w-full h-full flex flex-col rounded-md overflow-hidden relative">
              <img
                src={"https:" + item?.fields?.mainImage?.fields?.file?.url}
                alt={item.name}
                className="block h-full"
              />
              <span className="absolute font-semibold left-0 top-4 pr-2 py-1 pl-1 rounded-r-full text-xs text-black bg-white">
                {item.fields?.title}
              </span>
            </div>
          </Link>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
export default BlogCarousel;
