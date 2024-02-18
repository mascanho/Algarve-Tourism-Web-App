"use client";
import { Breadcrumbs as Bread, Anchor } from "@mantine/core";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { IoChevronBack } from "react-icons/io5";

function Breadcrumbs() {
  const pathname = usePathname();
  const router = useRouter();

  const pathanmeNoSlashes = pathname
    ? pathname.replace("/", "").split("/")
    : [];

  const items = [
    { title: <AiFillHome />, href: "/" },
    { title: pathanmeNoSlashes[0], href: `/${pathanmeNoSlashes[0]}` },
    { title: pathanmeNoSlashes[1], href: "" },
  ].map((item, index) => (
    <Link href={item.href} key={index}>
      {item.title}
    </Link>
  ));

  return (
    <section className="flex items-center print:hidden">
      {/* <Bread>{items}</Bread> */}
      <IoChevronBack className="bg-black rounded-full w-6 h-6    sm:hidden hidden" />
      <Bread
        separator="/"
        mt="xs"
        className="text-gray-400  cursor-pointer z-0 sm:flex my-auto sm:m-0 text-xs"
        color="dimmed"
      >
        {items}
      </Bread>
      {/* Turn bavk */}
    </section>
  );
}

export default Breadcrumbs;
