import React from "react";
import MusicCard from "./_components/MusicCard";
import { Metadata } from "next";
import { Carousel } from "@mantine/carousel";
import CarouselEl from "./_components/Carousel";
import AddLiveEventMenu from "./_components/AddLiveEventMenu";
import { useSession } from "next-auth/react";
import getCurrentUser from "../libs/getCurrentUser";

export const metadata: Metadata = {
  title: "Live Shows in The Algarve | Algarve Wonders",
  description:
    "Live shows in the Algarve. Discover upcoming events and live music",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/icon.png",
    href: "/images/icon.png",
  },
};

const Data = [
  {
    id: 1,
    name: "Banda A",
    website: "www.google.com",
    image:
      "https://variety.com/wp-content/uploads/2017/08/in-real-life.jpg?w=1000",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    location: "O patas",
    time: "10:00 - 12:00",
    date: "2022-01-01",
  },
  {
    id: 1,
    name: "Banda A",
    website: "www.google.com",
    image:
      "https://variety.com/wp-content/uploads/2017/08/in-real-life.jpg?w=1000",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    location: "O patas",
    time: "10:00 - 12:00",
    date: "2022-01-01",
  },
  {
    id: 1,
    name: "Banda A",
    website: "www.google.com",
    image:
      "https://variety.com/wp-content/uploads/2017/08/in-real-life.jpg?w=1000",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    location: "O patas",
    time: "10:00 - 12:00",
    date: "2022-01-01",
  },
  {
    id: 1,
    name: "Banda A",
    website: "www.google.com",
    image:
      "https://variety.com/wp-content/uploads/2017/08/in-real-life.jpg?w=1000",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    location: "O patas",
    time: "10:00 - 12:00",
    date: "2022-01-01",
  },
  {
    id: 1,
    name: "Banda B",
    website: "www.google.com",
    image:
      "https://variety.com/wp-content/uploads/2017/08/in-real-life.jpg?w=1000",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    location: "O patas",
    time: "10:00 - 12:00",
    date: "2022-01-01",
  },
];

async function LivePage() {
  let liveEvents = await prisma?.live?.findMany({});


  return (
    <main className="text-black text-2xl sm:mt-20 mx-auto w-full">
      <div className="flex items-center max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold w-fit break-keep">Live Events</h1>
      </div>
      <div className="flex items-center  max-w-7xl mx-auto mt-2">
        <p className="text-sm text-black/50">Add your own live event</p>
        <AddLiveEventMenu className="w-fit" />
      </div>
      {/* Live Bands */}
      <div className="mt-10">
        <h2 className="text-black/50 text-lg mb-5 mx-auto  max-w-7xl">
          Live Bands
        </h2>
        <CarouselEl>
          {Data.map((data: any) => (
            <MusicCard
              key={data.id}
              name={data.name}
              website={data.website}
              image={data.image}
              location={data.location}
              description={data.description}
              date={data.date}
              time={data.time}
            />
          ))}
        </CarouselEl>
      </div>
    </main>
  );
}
export default LivePage;
