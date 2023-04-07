import Image from "next/image";
import { Inter } from "next/font/google";
import Selection from "@/components/Selection";
import { Card } from "@/components/Card";
import type { Metadata } from "next";
import { catArr } from "@/Data/Categories";
import Pagination from "@/components/Pagination";
import BottomAssets from "@/components/BottomAssets";
import { CarouselCard } from "@/components/Card2";
import { LeadGrid } from "@/components/Layout/GridLayout";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className=" bg-white text-left pb-16 space-y-4 h-full mb-20 sm:pl-4">
      <section className="w-full ml-0">
        <LeadGrid />
      </section>
      <h1>Bali - Nusa Penida Island Tour</h1>
      <div className="w-11/12 mx-auto"></div>
      <h4 className="w-8/12 mx-auto">
        Check out this week&apos; selection of popular trips and events
      </h4>
      <section className="max-w-7xl mx-auto w-11/12 sm:w-full">
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-8 w-full h-full">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </section>
    </section>
  );
}
