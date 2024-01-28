"use client";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MdOutlineChevronRight } from "react-icons/md";

export default function Categorydrawer(filteredData: any, { text }: any) {
  console.log(filteredData, "From the new stuff");

  const [opened, { open, close }] = useDisclosure(false);

  const options = {
    renderNode: {
      "embedded-asset-block": (node: any) => {
        const { title, description, file } = node.data.target.fields;
        const mimeType = file.contentType;
        const src = file.url;
        const alt = title || description;
        if (mimeType === "image/jpeg" || mimeType === "image/png") {
          return <img src={src} alt={alt} />;
        }
      },
    },
  };

  const parsedContent = documentToReactComponents(
    filteredData[0]?.fields?.description,
    options,
  );

  return (
    <>
      <Drawer
        radius="md"
        position="bottom"
        opened={opened}
        onClose={close}
        // title="Authentication"
        size={"lg"}
      >
        {/* Drawer content */}
        <div className="mt-2 richText">{parsedContent}</div>
      </Drawer>

      <span
        onClick={open}
        className="cursor-pointer text-xs underline flex items-center mt-2"
      >
        view more <MdOutlineChevronRight />
      </span>
    </>
  );
}
