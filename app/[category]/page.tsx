"use client";
import { Card } from "@/components/Card";
import React from "react";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const pathname = usePathname();

  console.log(pathname);

  if (pathname === "/sports") {
    return (
      <div>
        <section className="max-w-7xl mx-auto w-11/12 sm:w-full grid sm:grid-cols-3 h-min-screen mb-20">
          <Card />
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="max-w-7xl mx-auto w-11/12 sm:w-full grid sm:grid-cols-3 gap-y-8 h-full mb-20 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}
