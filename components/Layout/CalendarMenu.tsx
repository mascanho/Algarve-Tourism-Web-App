"use client";
import { Menu, Text, rem } from "@mantine/core";
import {
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { FaGoogle, FaRegCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import { DateTimePicker } from "@mantine/dates";

function CalendarMenu({ mobile, calendarData }: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [googleURL, setGoogleURL]: any = useState();

  const handleAddToGoogleCalendar = () => {
    console.log(calendarData);

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting&details=Meeting+with+team&location=Office&ctz=America/New_York
`;
    setGoogleURL(url);
    window.open(googleURL, "_blank");
    close();
  };

  return (
    <>
      <Menu trigger={mobile ? "click" : "hover"} shadow="md" width={200}>
        <Menu.Target>
          {mobile ? (
            <span className="text-sm underline">Add To calendar</span>
          ) : (
            <FaRegCalendarAlt className="urlCopy w-8 h-8 p-[5px] border rounded-lg hover:cursor-pointer hover:bg-key hover:text-white transition-all ease-in delay-75" />
          )}
        </Menu.Target>

        <section
          className={`absolute top-10 ${mobile ? "right-16" : "right-28"} `}
        >
          <Menu.Dropdown>
            <Menu.Label>Add to calendars</Menu.Label>
            <Menu.Item className="flex items-center">
              <FaGoogle className="inline mt-[1px]" />
              <span
                className="pt-4 ml-1 text-black/60"
                onClick={handleAddToGoogleCalendar}
              >
                {" "}
                Google Calendar
              </span>
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconMessageCircle
                  style={{ width: rem(14), height: rem(14) }}
                />
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
    </>
  );
}

export default CalendarMenu;
