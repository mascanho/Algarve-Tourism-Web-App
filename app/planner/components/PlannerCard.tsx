"use client";
import { Button, Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaMap } from "react-icons/fa";

export const PlannerCard = ({ item }) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <section className="border w-fit mx-auto rounded-lg overflow-hidden">
      <div className="flex flex-col p-3 space-y-2 typewriter overflow-hidden flex-nowrap h-80 line-clamp-2">
        <h4 className="text-key font-semibold flex flex-wrap truncate">
          {item.fields.title}
        </h4>
        <div key={item.sys.id} className="space-y-2">
          <div className="fade-in-image">
            <img
              src={"https://" + item.fields.mainImage.fields.file.url}
              alt={item.fields.title}
              className="h-32 w-full object-cover rounded-md max-w-48"
            />
          </div>

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
                width={192}
                height={130}
                src={item.fields.embededMap}
              ></iframe>
            </Collapse>
          </Box>

          <div className="flex w-48 justify-between typewriter min-h-20 h-10 max-h-40 overflow-hidden">
            <div>
              <h4 className="text-xs w-44 text-black">
                {item.fields.shortDescription}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
