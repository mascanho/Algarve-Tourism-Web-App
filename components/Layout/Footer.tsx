"use client";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <section className="bg-black mt-20">
        <footer className="footer  py-10 text-base-content max-w-7xl mx-auto ">
          <section className="grid grid-cols-2 w-full sm:flex justify-between px-4 sm:px-0 ">
            <div className="flex flex-col space-y-1">
              <span className="footer-title">About</span>
              <Link href={"/about"}>
                <p className="link link-hover">What we do</p>
              </Link>
              <p className="link link-hover">Design</p>
              <p className="link link-hover">Marketing</p>
              <p className="link link-hover">Advertisement</p>
            </div>
            <div className="flex flex-col space-y-1">
              <Link href={"/about"}>
                <span className="footer-title">Company</span>
              </Link>
              <Link href="/about">
                <p className="link link-hover">About us</p>
              </Link>
              <Link href="/legal">
                <p className="link link-hover">The Boring Stuff</p>
              </Link>
              <Link href={"/contact"}>
                <p className="link link-hover">Contact</p>
              </Link>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="footer-title">Quick Links</span>
              <Link href="/submit">
                <p className="link link-hover">Submissions</p>
              </Link>
              <p className="link link-hover">Best Places</p>
              <p className="link link-hover">Cheapest Places</p>
              <a href="#" className="link link-hover">
                <p className="link link-hover">Turismo de Portugal</p>
              </a>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="footer-title">Partners</span>
              <a href="https://markwarrior.dev" target="_blank">
                <p className="link link-hover">Mark Warrior</p>
              </a>
              <a href="https://markwarrior.com" target="_blank">
                <p className="link link-hover">Blackcat Marketing</p>
              </a>
              <a href="https://markwarrior.com" target="_blank">
                <p className="link link-hover">Estralho Criativo</p>
              </a>
              <Link href="/policy">
                <p className="link link-hover">Privacy & Cookies</p>
              </Link>
            </div>
          </section>
        </footer>
        <footer className="footer max-w-7xl mx-auto  py-4 border-t  text-base-content border-base-300">
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
            <div>
              <p>
                Algarve Wonders &copy; {new Date().getFullYear()} <br />
              </p>
              <span className="block text-xs">
                Developed by{" "}
                <a className="text-sky" href="https://markwarrior.dev">
                  MarkWarrior.dev
                </a>
              </span>
            </div>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4 px-4 sm:px-0">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
