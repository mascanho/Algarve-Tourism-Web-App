"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Newspaper,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const newsItems = [
  {
    text: "Awards: Top 5 beaches for travellers in the Algarve",
    icon: Trophy,
    link: "/awards",
  },
];

export default function NewsBanner() {
  const pathname = usePathname();
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isPaused) {
      timer = setInterval(() => {
        setIsFading(true);
        setTimeout(() => {
          setCurrentNewsIndex(
            (prevIndex) => (prevIndex + 1) % newsItems.length,
          );
          setIsFading(false);
        }, 300);
      }, 5000);
    }

    return () => clearInterval(timer);
  }, [isPaused]);

  const prevNews = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentNewsIndex(
        (prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length,
      );
      setIsFading(false);
    }, 300);
  };

  const nextNews = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
      setIsFading(false);
    }, 300);
  };

  const currentNews = newsItems[currentNewsIndex];

  if (pathname !== "/") return null;

  return (
    <div
      className="w-full bg-gradient-to-r from-red-500 to-green-900 text-white py-1.5 px-4 flex items-center justify-between text-xs"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl flex w-full justify-around mx-auto items-center">
        {newsItems.length > 1 && (
          <button
            onClick={prevNews}
            className="p-1 rounded-full hover:bg-gray-700 transition-colors"
          >
            <ChevronLeftIcon size={20} />
          </button>
        )}
        <div className="flex-1 text-center overflow-hidden">
          <Link
            href={currentNews?.link}
            className={`inline-flex items-center space-x-2 transition-opacity duration-300 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            <currentNews.icon size={16} />
            <span className="font-medium ">{currentNews?.text}</span>
          </Link>
        </div>
        {newsItems.length > 1 && (
          <button
            onClick={nextNews}
            className="p-1 rounded-full hover:bg-gray-700 transition-colors"
          >
            <ChevronRightIcon size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
