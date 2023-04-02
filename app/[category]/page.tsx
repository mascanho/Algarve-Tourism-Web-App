import BottomAssets from "@/components/BottomAssets";
import { Card } from "@/components/Card";
import Pagination from "@/components/Pagination";
import React from "react";

export default function page() {
  return (
    <div>
      <section className="max-w-7xl mx-auto w-11/12 sm:w-full">
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 w-full">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
        <Pagination />
      </section>
    </div>
  );
}
