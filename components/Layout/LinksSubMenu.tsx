"use client";
import React from "react";
import { Text } from "@mantine/core";
import { FaCity } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cityArr } from "@/Data/Cities";
import { catArr } from "@/Data/Categories";

const LinksSubMenu = ({ data, close }: any) => {
  const router = useRouter();

  const handleClick = (item: any) => {
    for (const obj of data) {
      if (obj.route === item.route) {
        router.push(obj.href);
      }
    }

    console.log(item);
  };

  return (
    <section className="ml-3 pl-2 border-l-[1px] border-gray-200 mb-1 mt-2">
      {data.map((item: any) => (
        <Text
          component="a"
          href={item.href}
          key={item.name}
          className="text-gray-400 pl-2 mb-3 flex items-center mr-1 rounded-md transition duration-300 ease-in-out"
          onClick={() => {
            if (cityArr.map((c: any) => c.route).includes(item.route)) {
              router.push("/algarve/" + item.route);
              close();
            }
            if (catArr.map((c: any) => c.route).includes(item.route)) {
              router.push(item.route);
              close();
            }
          }}
        >
          {item.name}
        </Text>
      ))}
    </section>
  );
};

export default LinksSubMenu;
