"use client";
import { Menu, Button, Text, rem } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import { FaRegCalendarAlt } from "react-icons/fa";

function CalendarMenu({ mobile }: any) {
  return (
    <Menu trigger={mobile ? "hover" : "click"} shadow="md" width={200}>
      <Menu.Target>
        {mobile ? (
          <span className="text-sm underline">Add To Calendar</span>
        ) : (
          <FaRegCalendarAlt className="urlCopy w-8 h-8 p-[5px] border rounded-lg hover:cursor-pointer hover:bg-key hover:text-white transition-all ease-in delay-75" />
        )}
      </Menu.Target>

      <section
        className={`absolute top-10 ${mobile ? "right-16" : "right-28"} `}
      >
        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item
            leftSection={
              <IconSettings style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Settings
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Messages
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconPhoto style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Gallery
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconSearch style={{ width: rem(14), height: rem(14) }} />
            }
            rightSection={
              <Text size="xs" c="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item
            leftSection={
              <IconArrowsLeftRight
                style={{ width: rem(14), height: rem(14) }}
              />
            }
          >
            Transfer my data
          </Menu.Item>
          <Menu.Item
            color="red"
            leftSection={
              <IconTrash style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Delete my account
          </Menu.Item>
        </Menu.Dropdown>
      </section>
    </Menu>
  );
}

export default CalendarMenu;
