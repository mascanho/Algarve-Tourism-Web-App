"use client";
import { useState } from "react";
import UploadDailyForm from "./_components/UploadDailyForm";
import UploadWeeklyForm from "./_components/UploadWeeklyForm";

const isLoggedIn = true;

function Upload() {
  const [uploadDay, setUploadDay] = useState("daily");

  if (isLoggedIn) {
    return (
      <div className="h-full w-full flex flex-wrap flex-col items-center justify-center">
        <h1 className="text-3xl mx-0  text-left font-bold mt-10 mb-5 text-key">
          Upload your meal
        </h1>
        <div className="flex space-x-3 gap-x-3 mt-5 ">
          <fieldset className="flex space-x-3">
            <legend className="sr-only">Upload Day</legend>
            <label htmlFor="daily">
              <input
                type="radio"
                id="daily"
                name="uploadDay"
                value="daily"
                checked={uploadDay === "daily"}
                onChange={() => setUploadDay("daily")}
              />
              Daily
            </label>
            <label htmlFor="weekly">
              <input
                type="radio"
                id="weekly"
                name="uploadDay"
                value="weekly"
                checked={uploadDay === "weekly"}
                onChange={() => setUploadDay("weekly")}
              />
              Weekly
            </label>
          </fieldset>
        </div>

        {uploadDay === "daily" && <UploadDailyForm />}
        {uploadDay === "weekly" && <UploadWeeklyForm />}
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-wrap flex-col items-center justify-center">
      <h1>Login</h1>
    </div>
  );
}

export default Upload;
