"use client";
import Logo from "./Logo";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Header() {
  return (
    <header className={`sticky top-0 bg-primary-black z-10`}>
      <div className="max-w-[1120px] pr-10 pl-10 pt-6 mx-auto">
        <nav className="flex justify-between items-center text-xl border-b-[0.1px] pb-6 border-primary-darkBeige">
          <Logo width={80} color="beige" />
          <ul className="flex sm:gap-10 gap-2">
            <Link
              className="font-semibold text-primary-darkBeige hover:text-primary-beige transition-colors"
              href="/"
            >
              Work
            </Link>
            <Link
              className="font-semibold text-primary-darkBeige hover:text-primary-beige transition-colors"
              href="/about"
            >
              About
            </Link>
            <Link
              className="font-semibold text-primary-darkBeige hover:text-primary-beige transition-colors"
              href="/resume"
            >
              Resume
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
