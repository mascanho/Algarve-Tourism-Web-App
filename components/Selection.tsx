"use client";
import { catArr } from "@/Data/Categories";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Box, ScrollArea, Select } from "@mantine/core";

const Selection = ({ text }: any) => {
  const router = useRouter();
  const pathname = usePathname();

  const goToPage = (e: any) => {
    const route = e.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    router.push(`${route}`);
  };

  // matching the placeholder of the dropdown select with the path and title of category
  let placeholder = "";

  const matching = catArr.find((cat) => cat.route === pathname);

  if (matching) {
    placeholder = matching.name;
  }

  // when the pathname is "/"
  if (pathname === "/") {
    // Add your code here for when the pathname is "/"
    // ...
    placeholder = "Select your category";
  }

  return (
    <>
      {pathname === "/" ? null : (
        <section className="flex max-w-7xl w-full sm:hidden mx-auto px-2 py-2 overflow-hidden">
          <ScrollArea w={400} h={40}>
            <Box w={500} className="">
              {catArr.map((cat: any) => (
                <span className="mr-2 text-key text-sm" key={cat?.id}>
                  {cat?.name}
                </span>
              ))}
            </Box>
          </ScrollArea>
        </section>
      )}
    </>
  );
};

export default Selection;
