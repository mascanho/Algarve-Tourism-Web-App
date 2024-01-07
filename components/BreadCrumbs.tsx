"use client";
import { Breadcrumbs, Anchor } from "@mantine/core";
import { usePathname } from "next/navigation";

export default function BreadCrumbs() {
  const pathname = usePathname();

  const url = window?.location?.href;

  const [_, folder, article] = url.split("/").filter(Boolean);

  const items = [
    { title: "Home", href: "/" },
    { title: article, href: `/${article}` },
    { title: pathname?.split("/").pop(), href: "#" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <>
      <Breadcrumbs className="text-gray-400" mt="xs">
        {items}
      </Breadcrumbs>
    </>
  );
}
