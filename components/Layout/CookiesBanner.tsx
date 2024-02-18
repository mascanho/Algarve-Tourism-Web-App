"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function CookiesBanner() {
  const [cookieBanner, setCookieBanner] = useState(false);

  const handleYes = () => {
    window.localStorage.setItem("cookiesAccepted", "true");
    setCookieBanner(false);
  };

  const handleNo = () => {
    window?.close();
  };

  useEffect(() => {
    if (!window.localStorage.getItem("cookiesAccepted")) {
      setCookieBanner(true);
    }
  }, []);

  if (cookieBanner) {
    return (
      <div className="fixed bottom-0 flex bg-key text-white h-16 w-full justify-around items-center z-20">
        <section className="max-w-7xl w-full flex">
          <div className="w-11 h-11 sm:w-24 sm:h-24 relative ml-5 sm:ml-10">
            <img
              src="/cookie.webp"
              alt=""
              className="sm:-mt-10 mt-1 animate-shake animate-once transition-all duration-75"
            />
          </div>
          <div className="flex w-full justify-around items-center">
            <p className="sm:text-base text-xs sm:px-0 px-3">
              This website uses cookies to enhance the user experience.
            </p>
            <div className="flex sm:space-x-6 sm:pr-0 mr-4">
              <button
                type="button"
                className=" sm:px-3 sm:text-base text-xs py-1 bg-green-500 rounded-xl w-14 sm:w-20"
                onClick={handleYes}
              >
                Accept
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return null; // or any other JSX you want to render when cookieBanner is false
}
