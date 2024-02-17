"use client";
import useAddToFavourites from "@/app/hooks/useAddToFavourites";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { useInView } from "react-intersection-observer";

function Footer() {
  const [showToTop, setShowToTop] = useState(false);
  const { favourites } = useAddToFavourites();
  const [favouritesLength, setFavouritesLength] = useState(0);
  const pathname = usePathname();

  const { ref, InView }: any = useInView({
    triggerOnce: true,
    rootMargin: "140px 0px",
  });
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const [fakeOnlineUsers, setFakeOnlineUsers] = useState(() =>
    Math.floor(Math.random() * 1000),
  );

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the distance from the bottom of the page
      const distanceFromBottom =
        document.documentElement.scrollHeight -
        (window?.scrollY + window?.innerHeight);

      // Check if the distance is less than or equal to 200 pixels
      // and the scroll position is not within the first 200 pixels from the top
      if (window?.scrollY > 1000) {
        // If true, set setShowToTop to true
        setShowToTop(true);
      } else {
        // If false, set setShowToTop to false
        setShowToTop(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // SHOW THE ELEMENT CONDITIONALY DEPENDING ON SCROLL. IF SCROLING UP SHOW THE ELEMENT, IF SCROLLING DOWN HIDE THE ELEMENT

  useEffect(() => {
    const favouritesFromLocalStorage = localStorage.getItem("favourites");
    const favouritesArray = JSON.parse(favouritesFromLocalStorage) || [];
    setFavouritesLength(favouritesArray.length);
  }, [favourites.length]);

  useEffect(() => {
    setFakeOnlineUsers((prevOnlineUsers: any) => {
      // You can update the online users based on the previous value if needed
      // For now, we're generating a random number in this example
      return Math.floor(Math.random() * 1000);
    });
  }, []);

  return (
    <>
      {!pathname?.match(
        /\/(?:restaurants|beaches|adventure|events|business|hiking|sports|stays)\//,
      ) &&
        showToTop && (
          <HiArrowUp
            onClick={() => {
              window?.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-5xl text-black cursor-pointer fixed bottom-10 right-6 sm:right-10  bg-white border rounded-full p-1 py-2 transition-all ease-in-out delay-200 z-10"
          />
        )}

      <section ref={ref} className="bg-key  z-0 -mt-[1px] ">
        <footer className="footer  py-10 text-base-content max-w-7xl mx-auto w-11/12 ">
          <section className="grid grid-cols-2 w-full sm:flex justify-between px-4 sm:px-0 ">
            <div className="flex flex-col space-y-1 text-white">
              <span className="uppercase font-semibold text-white/60">
                About
              </span>
              <Link href="/about">
                <p className="link link-hover">About us</p>
              </Link>
              <Link href={"/about"}>
                <p className="link link-hover">What we do</p>
              </Link>
              <Link href={"/changelog"}>
                <p className="link link-hover">Changelog</p>
              </Link>
            </div>
            <div className="flex flex-col space-y-1 text-white">
              <Link href={"/about"}>
                <span className="font-semibold text-white/60 uppercase">
                  Company
                </span>
              </Link>
              <Link href="/legal">
                <p className="link link-hover">The Boring Stuff</p>
              </Link>
              <Link href={"/partner"}>
                <p className="link link-hover">Partnerships</p>
              </Link>
              <Link href={"/contact"}>
                <p className="link link-hover">Contact</p>
              </Link>
            </div>
            <div className="flex flex-col space-y-1 mt-5 sm:mt-0 text-white">
              <span className="uppercase text-white/60 font-semibold">
                Quick Links
              </span>
              {/* <Link href="/submit"> */}
              {/*   <p className="link link-hover">Submissions</p> */}
              {/* </Link> */}
              <Link href={"/beaches"}>
                <p className="link link-hover">Best Beaches</p>
              </Link>
              <Link href={"/adventure"}>
                <p className="link link-hover">Best Adventures</p>
              </Link>

              <Link href={"/upload"}>
                <p className="link link-hover">Upload Daily Meals</p>
              </Link>
              <Link href={"/submit"}>
                <p className="link link-hover">Submit Places</p>
              </Link>
            </div>
            <div className="flex flex-col space-y-1 mt-5 sm:mt-0 text-white">
              <span className="font-semibold text-white/60 uppercase">
                Partners
              </span>
              <a href="https://markwarrior.dev" target="_blank">
                <p className="link link-hover">Mark Warrior</p>
              </a>
              {/* <a href="https://markwarrior.com" target="_blank"> */}
              {/*   <p className="link link-hover">Blackcat Marketing</p> */}
              {/* </a> */}
              <a href="https://www.estralho-criativo.com/" target="_blank">
                <p className="link link-hover">Estralho Criativo</p>
              </a>
              <a
                href="https://algarveinformativo.blogspot.com/"
                target="_blank"
              >
                <p className="link link-hover">Algarve Informativo</p>
              </a>
              <a
                href="https://www.turismodeportugal.pt/"
                className="link link-hover"
                target="_blank"
              >
                <p className="link link-hover">Turismo de Portugal</p>
              </a>
            </div>
          </section>
        </footer>
        <footer className="footer max-w-7xl w-11/12 mx-auto  py-4 border-t text-white  border-base-300">
          <div className="items-center grid-flow-col px-4 sm:px-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <div className="text-white">
              <p>
                Algarve Wonders &copy; {new Date().getFullYear()} <br />
              </p>
              <span className="block text-xs">
                Developed by{" "}
                <a className="text-red-300" href="https://markwarrior.dev">
                  MarkWarrior.dev
                </a>
              </span>
            </div>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col px-4 sm:px-0 w-full ">
              <div className="flex bg-black/80  space-x-2 -mt-6 sm:mt-0 mb-4 sm:mb-0 mx-auto w-full items-center py-1 px-4 text-xs rounded-xl">
                <span suppressHydrationWarning className="text-white">
                  {fakeOnlineUsers}
                </span>{" "}
                <span>users online</span>
                <span className="w-2 h-2 rounded-full bg-green-500/60" />
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
