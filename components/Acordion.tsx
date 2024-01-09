"use client";
import { MainPageFaqs } from "@/Data/Faqs";
import { Accordion } from "@mantine/core";

const Acordion = () => {
  const items = MainPageFaqs.map((item, index) => (
    <Accordion.Item key={item?.id} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion variant="contained" defaultValue="Apples">
      {items}
    </Accordion>
  );
};

export default Acordion;
