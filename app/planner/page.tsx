import React from "react";
import { cookies } from "next/headers";

console.log(cookieData.days, "From the Page itself");

const JourneyPage = () => {
  // retrieve the cookies from the server
  const getCookie = (name: string) => {
    const cookieStore = cookies();
    return cookieStore.get(name)?.value;
  };

  const data = getCookie("builderData");
  const cookieData = JSON.parse(data || "{}");

  return <div>JourneyPage</div>;
};

export default JourneyPage;
