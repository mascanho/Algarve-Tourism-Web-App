"use client";
import { usePathname } from "next/navigation";
import { Card } from "../components/Card";
import { useState } from "react";

export default function Routes({ category }: any) {
  const pathname = usePathname();

  const [path, setPath] = useState();

  const strPath = pathname;
  const newPath = strPath.replace("/", "");

  if (pathname === "/sports") {
    return (
      <section className="grid w-11/12 h-full mx-auto mb-20 max-w-7xl sm:w-full sm:grid-cols-4 sm:ml-6 gap-y-8 ">
        <Card category={category} />
      </section>
    );
  }

  return (
    <section className="grid w-11/12 h-full mx-auto mb-20 max-w-7xl sm:w-full sm:grid-cols-4 sm:ml-6 gap-y-8 ">
      <Card category={category} />
    </section>
  );
}
