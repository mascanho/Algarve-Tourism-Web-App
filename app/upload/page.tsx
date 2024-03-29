"use client";
import { useState } from "react";
import UploadWeeklyForm from "./_components/UploadWeeklyForm";
import { Drawer } from "@mantine/core";
import { useSession } from "next-auth/react";
import { useLoginModalStore } from "../hooks/useLoginModal";
import { useDisclosure } from "@mantine/hooks";

function Upload() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";
  const loginModal = useLoginModalStore();
  const [opened, { open, close }] = useDisclosure(false);
  const [uploadDay, setUploadDay] = useState("daily");

  if (isLoggedIn) {
    return (
      <div className="h-full w-full flex flex-wrap flex-col items-center justify-center max-w-4xl mx-auto">
        <h1 className="text-3xl mx-0 text-left font-bold pt-28 mb-5 text-key">
          Upload your meal
        </h1>
        <p className="-mt-2 w-8/12 text-center pb-4 sm:pb-2 ">
          Publish your meals and reach new customers near you
        </p>

        <UploadWeeklyForm />
      </div>
    );
  }

  return (
    <section className="h-full">
      <Drawer
        opened={opened}
        onClose={close}
        title="Guidelines"
        radius="lg"
        position="bottom"
      >
        <ul className="list-inside space-y-2 w-full list-disc mx-auto">
          <li>
            Ensure your dish names and descriptions are descriptive and
            appealing.
          </li>
          <li>
            Prices should be clear and reflect the value of your offerings.
          </li>
        </ul>
      </Drawer>
      <div className="w-full sm:w-2/3 sm:mx-auto mb-20 flex flex-nowrap flex-col items-center justify-center pb-40">
        <div className="w-11/12 rounded-xl text-black mx-auto bg-darkwhite flex py-5 px-2 justify-center text-center flex-col items-center mt-20 h-full">
          <h1 className="text-5xl mx-0 text-left font-bold pt-3 mb-5">
            Upload Meals
          </h1>
          <h2 className="sm:max-w-lg my-6">
            Showcase your daily or weekly culinary masterpieces and attract food
            lovers to your establishment. Share your signature dishes, chef's
            specials, and must-try creations with our community.
          </h2>{" "}
          <span
            onClick={loginModal.onOpen}
            className="text-xl mx-0 w-fit active:bg-gray-500 transition-all ease-in-out cursor-pointer text-center font-bold text-white bg-key border mt-6 mb-3 rounded-xl px-7 py-2"
          >
            Start uploading
          </span>
        </div>

        <div className="bg-white px-8 py-10 text-black mt-10 block w-11/12 sm:max-w-xl rounded-xl">
          <h1 className="text-xl text-gray-400 text-center mx-0 font-bold mb-5">
            How it works
          </h1>
          <ol className="list-decimal list-inside space-y-5">
            <li>
              Share Your Best Creations: Upload your specialties with their
              names, descriptions, and prices
            </li>
            <li>
              Entice Potential Customers: Let your dishes shine! Highlight what
              makes your restaurant unique and entice potential customers to
              visit and indulge in your offerings.
            </li>
            <li>
              Expand Your Reach: Reach a wider audience and attract food
              enthusiasts who are eager to discover new dining experiences.
            </li>
          </ol>
          <div className="pt-5">
            <span
              className="mt-10 underline text-key cursor-pointer"
              onClick={open}
            >
              Uploading Guidelines
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Upload;
