import Image from "next/image";
import { Inter } from "next/font/google";
import Selection from "@/components/Selection";
import { Card } from "@/components/Card";
import type { Metadata } from "next";
import { catArr } from "@/Data/Categories";
import Pagination from "@/components/Pagination";
import BottomAssets from "@/components/BottomAssets";
import { CarouselCard } from "@/components/Card2";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <section className="text-center bg-white pt-20 pb-16 space-y-4">
        <div className="w-11/12 mx-auto">
          <h3 className="text-2xl font-bold sm:text-5xl text-black">
            Guides for your next location{" "}
          </h3>
        </div>
        <h4 className="w-8/12 mx-auto">
          Check out this week&apos; selection of popular trips and events
        </h4>
        <Selection />
        <section className="max-w-7xl mx-auto w-11/12 sm:w-full">
          <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-4 w-full">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
          <Pagination />
          <BottomAssets />
        </section>
      </section>
      <section className="h-screen bg-red-500">hello</section>
    </>
  );
}
