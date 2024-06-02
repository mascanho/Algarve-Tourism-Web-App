"use client";
import { Button, Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaHeart, FaMap, FaMapPin } from "react-icons/fa";
import Link from "next/link";

export const PlannerCard = ({ item }: any) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <section className="border w-full sm:w-52 mx-auto rounded-lg overflow-hidden relative fade-in-image">
      <div className="flex flex-col p-3 space-y-2 typewriter overflow-hidden flex-nowrap min-h-72  sm:h-[19rem] py-1 line-clamp-2">
        <div className="flex justify-between items-center">
          <Link
            target="_blank"
            href={`/${item?.fields?.type}/${item?.fields?.slug}`}
          >
            <h4 className="text-key font-semibold flex flex-wrap truncate text-sm pt-2 ">
              {item.fields.title}
            </h4>
          </Link>
          <FaHeart className="text-key hover:text-red-500 mt-1 mr-1 text-sm hover:cursor-pointer ease-in delay-75 transition-all" />
        </div>
        <div key={item.sys.id} className="space-y-2">
          <Link
            target="_blank"
            href={`/${item?.fields?.type}/${item?.fields?.slug}`}
          >
            <div className="fade-in-image relative">
              <div className="bg-key  p-1 pr-2 absolute bottom-2 flex space-x-1 rounded-r-lg items-center">
                <FaMapPin className="text-[11px] text-red-500 " />
                <span className="text-[11px] text-white">
                  {item.fields.city}
                </span>
              </div>
              <img
                src={"https://" + item.fields.mainImage.fields.file.url}
                alt={item.fields.title}
                className="sm:h-32 w-full object-cover rounded-md max-w-48"
              />
            </div>
          </Link>
          <Box maw={400} mx="auto">
            <Group justify="left" mb={5}>
              <div className="flex space-x-1 ">
                <FaMap className="text-sm" />
                <span className="text-xs cursor-pointer" onClick={toggle}>
                  View Map
                </span>
              </div>
            </Group>

            <Collapse
              in={opened}
              transitionDuration={500}
              transitionTimingFunction="linear"
            >
              <iframe
                className="rounded-md"
                width={180}
                height={100}
                src={item.fields.embededMap}
              ></iframe>
            </Collapse>
          </Box>

          <div className="flex sm:w-48 justify-between typewriter min-h-20 h-10 max-h-40 overflow-hidden">
            <div>
              <h4 className="text-xs sm:w-44 w-40 text-black">
                {item.fields.shortDescription}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
