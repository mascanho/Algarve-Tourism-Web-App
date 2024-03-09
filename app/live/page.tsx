import React from "react";
import MusicCard from "./_components/MusicCard";

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
];

function LivePage() {
  return (
    <main className="text-black text-2xl sm:mt-20 mx-auto w-full">
      <h1 className="text-3xl font-bold">Live Events</h1>
      <p className="text-base">Coming Soon</p>

      {/* Live Bands */}
      <div className="mt-10">
        <h2 className="text-black/50 text-lg mb-5">Live Bands</h2>
        {Data.map((data: any) => (
          <MusicCard {...Data} />
        ))}
      </div>
    </main>
  );
}
export default LivePage;
