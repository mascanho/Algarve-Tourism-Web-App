"use client";
import { useState } from "react";
import UploadDailyForm from "./_components/UploadDailyForm";
import UploadWeeklyForm from "./_components/UploadWeeklyForm";
import { SegmentedControl } from "@mantine/core";
import getCurrentUser from "../libs/getCurrentUser";
import { useSession } from "next-auth/react";
import { useLoginModalStore } from "../hooks/useLoginModal";

function Upload() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";
  const loginModal = useLoginModalStore();

  console.log(session);

  const [uploadDay, setUploadDay] = useState("daily");

  if (isLoggedIn) {
    return (
      <div className="h-full w-full flex flex-wrap flex-col items-center justify-center">
        <h1 className="text-3xl mx-0  text-left font-bold mt-10 mb-5 text-key">
          Upload your meal
        </h1>
        <div className="flex space-x-3 gap-x-3 mt-5 ">
          <SegmentedControl
            value={uploadDay}
            onChange={setUploadDay}
            data={[
              { value: "daily", label: "Daily" },
              { value: "weekly", label: "Weekly" },
            ]}
          />
        </div>

        {uploadDay === "daily" && <UploadDailyForm />}
        {uploadDay === "weekly" && <UploadWeeklyForm />}
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-wrap flex-col items-center justify-center">
      <h1
        onClick={loginModal.onOpen}
        className="text-xl mx-0  text-left font-bold mt-10 mb-5 text-key border rounded-xl px-5 py-2"
      >
        Login
      </h1>
    </div>
  );
}

export default Upload;
