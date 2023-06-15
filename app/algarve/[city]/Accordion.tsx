"use client";
import { Accordion } from "@mantine/core";

function TableAccordion({ tableDate }: any) {
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
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>
          Colors, fonts, shadows and many other parts are customizable to fit
          your design needs
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

export default TableAccordion;
