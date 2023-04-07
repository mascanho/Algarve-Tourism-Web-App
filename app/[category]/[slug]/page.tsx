import Image from "next/image";
import { Inter } from "next/font/google";
import { Card } from "@/components/Card";
import type { Metadata } from "next";
import { LeadGrid } from "@/components/Layout/GridLayout";
import { FaRegGem } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className=" bg-white text-left pb-16 space-y-4 h-full mb-20 sm:pl-6">
      <section className="w-full ml-0">
        <LeadGrid />
      </section>
      <h1>Bali - Nusa Penida Island Tour</h1>
      <div className="w-11/12 mx-auto"></div>
      <h4 className="w-8/12 mx-auto">
        Check out this week&apos; selection of popular trips and events
      </h4>

      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-8 3xl:grid-cols-4 justify-items-start content-start items-start self-start w-11/12 sm:w-full mx-auto sm:mx-0 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </section>
  );
}
