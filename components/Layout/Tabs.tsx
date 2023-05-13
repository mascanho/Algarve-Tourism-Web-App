"use client";
import { Tabs } from "@mantine/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function TabsRow({ filteredData }: any) {
  console.log(filteredData);

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
    options
  );

  return (
    <Tabs color="teal" defaultValue="first" className="">
      <Tabs.List className="text-left">
        <Tabs.Tab className="text-left ml-0 pl-0" value="first" color="blue">
          Description
        </Tabs.Tab>
        <Tabs.Tab value="second" color="blue">
          Photos
        </Tabs.Tab>
        <Tabs.Tab value="third" color="blue">
          Description
        </Tabs.Tab>
        <Tabs.Tab value="fourth" color="blue">
          Price
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs" className="leading-7">
        {parsedContent}
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        Second tab color is blue, it gets this value from props, props have the
        priority and will override context value
      </Tabs.Panel>
      <Tabs.Panel value="third" pt="xs">
        third tab color is blue, it gets this value from props, props have the
        priority and will override context value
      </Tabs.Panel>
      <Tabs.Panel value="fourth" pt="xs">
        {filteredData[0]?.fields?.price}
      </Tabs.Panel>
    </Tabs>
  );
}

export default TabsRow;
