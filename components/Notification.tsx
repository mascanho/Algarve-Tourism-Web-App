import { notes } from "@/Data/Notifications";
import React from "react";
import { HiBell } from "react-icons/hi2";

const Notification = () => {
  return (
    <ul>
      {notes.map((item) =>
        item.isRead === true ? (
          <li
            key={item?.id}
            className="border rounded-md flex flex-nowrap text-left mb-2"
          >
            <div className="bg-green-500 flex w-6 justify-center h-14 items-center">
              <HiBell className="my-auto h-full flex items-center text-white" />
            </div>
            <div className="w-full flex flex-col justify-center pl-3">
              <span className="font-semibold">{item.title}</span>
              <span className="text-xs">{item.msg}</span>
            </div>
          </li>
        ) : null,
      )}
    </ul>
  );
};

export default Notification;
