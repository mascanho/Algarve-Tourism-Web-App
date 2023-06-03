import { Breadcrumbs as Bread, Anchor } from "@mantine/core";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { AiFillHome } from "react-icons/ai";

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
    <>
      {/* <Bread>{items}</Bread> */}
      <Bread
        separator="/"
        mt="xs"
        className="text-gray-400 m-auto cursor-pointer z-50 "
      >
        {items}
      </Bread>
    </>
  );
}

export default Breadcrumbs;
