"use client";
import { MainPageFaqs } from "@/Data/Faqs";
import { Accordion } from "@mantine/core";
import { InView, useInView } from "react-intersection-observer";

const Acordion = () => {
  const { ref, inView: InView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "40px 0px",
  });

  const items = MainPageFaqs.map((item, index) => (
    <Accordion.Item key={item?.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <section className="w-11/12 mx-auto max-w-7xl mt-20 pb-20" ref={ref}>
      <h5 className="mt-4 mb-10 text-xl">FAQs</h5>
      <Accordion
        variant="contained"
        defaultValue="Apples"
        style={{
          opacity: InView ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {items}
      </Accordion>
    </section>
  );
};

export default Acordion;
