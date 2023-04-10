"use client";
import { usePathname } from "next/navigation";
import { Card } from "../Card";
import { useState } from "react";

export default function Routes({ category }: any) {
  const pathname = usePathname();

  const [path, setPath] = useState();

  const strPath = pathname;
  const newPath = strPath.replace("/", "");

  if (pathname === "/sports") {
    return (
      <section className="max-w-7xl mx-auto w-11/12 sm:w-full grid sm:grid-cols-4 sm:ml-6 gap-y-8 h-full mb-20 ">
        <Card category={category} />
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto w-11/12 sm:w-full grid sm:grid-cols-4 sm:ml-6 gap-y-8 h-full mb-20 ">
      <Card category={category} />
    </section>
  );
}
