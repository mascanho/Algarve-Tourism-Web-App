import React from "react";
import SearchDrawerContent from "./search/_components/SearchDrawerContent";
import { catArr } from "@/Data/Categories";

function NotFound() {
  return (
    <div className="h-screen text-white flex space-y-3 flex-col items-center justify-center bg-key">
      <h2 className="text-8xl font-bold">404</h2>
      <h3>Oh dear... seems like you are lost</h3>
      <h4>Here... we will point you the way. check below</h4>
      <div>
        {catArr.map((item) => (
          <div key={item}>
            <div>{item?.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotFound;
