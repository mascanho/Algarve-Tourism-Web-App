"use client";
import { Breadcrumbs as Bread, Anchor } from "@mantine/core";
import { useRouter, usePathname } from "next/navigation";
import { AiFillHome } from "react-icons/ai";

function Breadcrumbs() {
  const pathname = usePathname();
  const router = useRouter();

  const pathanmeNoSlashes = pathname.replace("/", "").split("/");
  console.log(pathanmeNoSlashes);

  const items = [
    { title: <AiFillHome />, href: "/" },
    { title: pathanmeNoSlashes[0], href: `/${pathanmeNoSlashes[0]}` },
    { title: pathanmeNoSlashes[1], href: "#" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      {/* <Bread>{items}</Bread> */}
      <Bread separator="/" mt="xs" className="text-gray-400 m-auto">
        {items}
      </Bread>
    </>
  );
}

export default Breadcrumbs;
