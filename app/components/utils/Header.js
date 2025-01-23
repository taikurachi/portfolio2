"use client";
import Logo from "./Logo";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);
  // useEffect(() => {
  //   if (menuOpen) {
  //     document.body.classList.add("menu-open"); // Disable scrolling
  //   } else {
  //     document.body.classList.remove("menu-open"); // Enable scrolling
  //   }
  //   return () => {
  //     document.body.classList.remove("menu-open"); // Cleanup
  //   };
  // }, [menuOpen]);

  // const handleMobileMenuClick = () => {
  //   setMenuOpen((menuOpen) => !menuOpen);
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };
  // const handleLinkClick = () => {
  //   setMenuOpen(false);
  // };
  return (
    <header className={`p-10 max-w-[1120px] mx-auto h-[100px]`}>
      <nav className="flex justify-between items-center text-xl">
        <Logo width={100} />
        {/* <div className={`flex flex-col gap-2 sm:hidden cursor-pointer z-10`}>
          <hr
            className={`border-white border-2 w-10 transition-all duration-300 rounded-lg`}
          />
          <hr
            className={`border-white border-2 w-10 transition-all duration-300 rounded-lg`}
          />
          <hr
            className={`border-white border-2 w-10 transition-all duration-300 rounded-lg`}
          />
        </div> */}
        <ul className="flex sm:gap-10 gap-2">
          <Link href="/">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
          {/* <Link href="/contact">Contact</Link> */}
        </ul>
      </nav>
    </header>
  );
}
