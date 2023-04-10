"use client";
import { catArr } from "@/Data/Categories";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Selection = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="sm:flex justify-around max-w-7xl mx-auto w-11/12 sm:w-full pt-5 hidden">
        {catArr.map((cat) => (
          <div
            className="text-xs  px-2 text-center border sm:px-4 py-1 sm:py-2 sm:first:w-20 sm:first:bg-blue-400 first:text-white first:bg-blue-400 rounded-full w-14 sm:w-32 hover:cursor-pointer hover:bg-sky hover:text-white transition-all ease-in delay-75"
            key={cat.id}
            onClick={(e) => router.push(`${cat.route}`)}
          >
            {cat.name}
          </div>
        ))}
      </div>
      <section className="py-2">
        <select
          onChange={(e) => router.push(e.target.value)}
          className="select w-9/12 bg-white outline outline-1 sm:hidden"
        >
          <option disabled selected className="">
            Pick your next adventure
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
