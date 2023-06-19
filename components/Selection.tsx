"use client";
import { catArr } from "@/Data/Categories";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Select } from "@mantine/core";

const Selection = ({ text }: any) => {
  const router = useRouter();
  const pathname = usePathname();

  const goToPage = (e: any) => {
    const route = e.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(route);

    router.push(`${route}`);
  };

  return (
    <>
      <div className="items-center justify-between hidden w-10/12 pb-10 m-auto space-x-3 sm:flex max-w-7xl sm:w-full ">
        {catArr.map((cat) => (
          <div
            className="px-2 py-1 text-xs text-center transition-all ease-in delay-75 md:border md:rounded-md md:w-28  md:px-3 sm:py-2 sm:first:w-20 sm:first:bg-blue-400 first:text-white first:bg-blue-400 w-14 sm:w-fit hover:cursor-pointer hover:bg-sky hover:text-white"
            key={cat.id}
            onClick={(e) => router.push(`${cat.route}`)}
          >
            {cat.name}
          </div>
        ))}
      </div>
      <section className="flex w-full sm:hidden">
        <Select
          className="w-full mb-8 h-[100%]  "
          placeholder="Pick one"
          data={catArr.map((cat) => cat.name)}
          onChange={(e) => goToPage(e)}
        />{" "}
      </section>
    </>
  );
};

export default Selection;
