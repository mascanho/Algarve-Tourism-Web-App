"use client";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";

const sportsToDo = [
  {
    id: 1,
    name: "Surf Expert - School 🏄",
    image:
      "https://images.ctfassets.net/z8r91y113x4j/2Iosoq1xchir3mnPryMchN/c040f1c3a26f4394e55e362b990e26c3/unnamed.jpg",
    desc: "Since 2002, introducing the culture of surf, stand up paddle and their unique lifestyle, bringing people from all over the world together for unforgettable shared experiences in these amazing surf world. ",
    path: "/sports/surf-expert-school",
  },
  {
    id: 2,
    name: "Kitesurf Algarve 🪁",
    image:
      "https://images.ctfassets.net/z8r91y113x4j/ji8ii1EbGPmkUKbRP30tA/d7fd418f544d2c6dabe1450771b15ff7/g24.png",
    desc: "To be able to take advantage of all the sensations of this sport, you have to know how to use and control the equipment with security.",
    path: "/sports/kitesurf-algarve",
  },
];

function BlogCarousel() {
  return (
    <Carousel withIndicators height={200} dragFree slideGap="md" align="start">
      {sportsToDo.map((item) => (
        <Carousel.Slide key={item.id}>
          <Link href={item.path}>
            <div className="w-full h-full flex flex-col rounded-md overflow-hidden relative">
              <img src={item.image} alt={item.name} className="block h-full" />
              <span className="absolute left-0 top-4 pr-2 py-1 pl-1 rounded-r-full text-xs text-black bg-white  ">
                {item.name}
              </span>
            </div>
          </Link>
        </Carousel.Slide>
      ))}
      {/* ...other slides */}
    </Carousel>
  );
}
export default BlogCarousel;
