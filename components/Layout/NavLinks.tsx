"use client";
import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Text, Collapse, Box } from "@mantine/core";
import { useRouter } from "next/navigation";
import { IoAccessibilityOutline } from "react-icons/io5";
import { FaChevronDown, FaCity } from "react-icons/fa";
import { cityArr } from "@/Data/Cities";
import { catArr } from "@/Data/Categories";
import LinksSubMenu from "./LinksSubMenu";

function NavLinks({ title, icon, city, data, close }: any) {
  const [opened, { toggle }] = useDisclosure(false);
  const { toggle: toggleCat }: any = useDisclosure(false);
  const [openedCat] = useDisclosure(false);
  const router = useRouter();

  return (
    <>
      <Box maw={400} mx="auto" className="my-4">
        <Group justify="center" mb={9}>
          <div className="flex items-center" onClick={toggle}>
            {title}
            <FaChevronDown className="ml-1 pt-[2px] text-xs text-gray-400" />
          </div>
        </Group>
        <Collapse
          in={opened}
          transitionDuration={200}
          transitionTimingFunction="linear"
        >
          {/* ...content */}
          <div className="flex">
            <LinksSubMenu data={data} close={close} />
          </div>
        </Collapse>{" "}
      </Box>{" "}
    </>
  );
}
export default NavLinks;
