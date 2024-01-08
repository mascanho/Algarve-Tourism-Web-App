"use client";

import { Toaster } from "react-hot-toast";

export const ToasterProvider = () => {
  return (
    <>
      <Toaster
        toastOptions={{ style: { maxWidth: "800px" } }}
        position="bottom-center"
      />
    </>
  );
};
