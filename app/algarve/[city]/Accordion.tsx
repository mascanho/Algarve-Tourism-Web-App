"use client";
import { Accordion } from "@mantine/core";
import Link from "next/link";
function TableAccordion({ tableData }: any) {
  return (
    <Accordion
      // chevron=/* {<IconPlus size="1rem" />} */
      styles={{
        chevron: {
          "&[data-rotate]": {
            transform: "rotate(45deg)",
          },
        },
      }}
    >
      <Accordion.Item value="customization">
        <Accordion.Control className="font-bold">
          Table of Contents
        </Accordion.Control>
        {/* <Accordion.Panel> */}
        {/*   Colors, fonts, shadows and many other parts are customizable to fit */}
        {/*   your design needs */}
        {/* </Accordion.Panel> */}
        {tableData.map((bookmark: any) => {
          return (
            <Link href={`${bookmark.url}`}>
              <Accordion.Panel key={bookmark.id} className="text-gray-400">
                {bookmark.name}
              </Accordion.Panel>
            </Link>
          );
        })}
      </Accordion.Item>
    </Accordion>
  );
}

export default TableAccordion;
