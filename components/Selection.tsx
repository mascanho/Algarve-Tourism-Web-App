"use client";
import { catArr } from "@/Data/Categories";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Selection = ({ text }: any) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="items-center justify-between hidden w-10/12 pt-10 m-auto space-x-3 sm:flex max-w-7xl sm:w-11/12">
        {catArr.map((cat) => (
          <div
            className="px-2 py-1 text-xs text-center transition-all ease-in delay-75 border rounded-full sm:px-3 sm:py-2 sm:first:w-20 sm:first:bg-blue-400 first:text-white first:bg-blue-400 w-14 sm:w-fit hover:cursor-pointer hover:bg-sky hover:text-white"
            key={cat.id}
            onClick={(e) => router.push(`${cat.route}`)}
          >
            {cat.name}
          </div>
        ))}
      </div>
      <section className="flex w-full">
        <select
          onChange={(e) => router.push(e.target.value)}
          className="w-11/12 mx-auto bg-white select outline outline-1 sm:hidden"
        >
          <option disabled selected className="">
            {text}
          </option>
          {catArr.map((item) => (
            <option value={item.route} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </section>
    </>
  );
};

export default Selection;
