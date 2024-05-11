"use client";
import { Menu, Text, rem } from "@mantine/core";
import { FaGoogle, FaRegCalendarAlt } from "react-icons/fa";
import { FaYahoo, FaMicrosoft } from "react-icons/fa";
import {
  google,
  outlook,
  office365,
  yahoo,
  ics,
  CalendarEvent,
} from "calendar-link";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { IoLogoApple } from "react-icons/io";

function CalendarMenu({ mobile, calendarData }: any) {
  const event: CalendarEvent = {
    title: calendarData?.title + "- Algarve Wonders",
    description:
      window?.location?.href + "\n\n" + calendarData?.shortDescription,
    // start: "2019-12-29 18:00:00 +0100",
    duration: [3, "hour"],
    location: calendarData?.city,
    url: window?.location?.href,
  };

  // Then fetch the link
  const msoutlook = outlook(event); // https://outlook.live.com/owa/...
  const office = office365(event); // https://outlook.office.com/owa/...
  const yahooCalendar = yahoo(event); // https://calendar.yahoo.com/?v=60&title=...
  const apple = ics(event); // standard ICS file based on https://icalendar.org

  const googleURL = google(event);
  console.log(googleURL);
  console.log(calendarData);
  console.log(window.location.href);

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
            <a href={googleURL} target="_blank">
              <Menu.Item className="flex items-center">
                <FaGoogle className="inline mb-1" /> Google Calendar
              </Menu.Item>
            </a>
            <a href={msoutlook} target="_blank">
              <Menu.Item className="flex items-center">
                <PiMicrosoftOutlookLogoFill className="inline -ml-1 text-lg" />{" "}
                Outlook Calendar
              </Menu.Item>
            </a>
            <a href={apple} target="_blank">
              <Menu.Item className="flex items-center">
                <IoLogoApple className="inline -ml-1 mb-1 text-xl" /> Apple
                Calendar
              </Menu.Item>
            </a>
            <a href={yahooCalendar} target="_blank">
              <Menu.Item className="flex items-center">
                <FaYahoo className="inline mb-1" /> Yahoo Calendar
              </Menu.Item>
            </a>
            <a href={office} target="_blank">
              <Menu.Item className="flex items-center">
                <FaMicrosoft className="inline mb-1" /> Office 365 Calendar
              </Menu.Item>
            </a>
          </Menu.Dropdown>
        </section>
      </Menu>
    </>
  );
}

export default CalendarMenu;
