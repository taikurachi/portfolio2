"use client";
import { useCursor } from "../cursorContext/CursorContext";
import Logo from "./Logo";
import Link from "next/link";
export default function Footer() {
  const { setCursorProperties, cursorProperties } = useCursor();
  const previousColor = cursorProperties?.color;
  console.log(previousColor);
  const cardEnter = () => setCursorProperties({ color: "bg-black" });
  const cardLeave = () => setCursorProperties({ color: previousColor });

  return (
    <footer
      onMouseEnter={cardEnter}
      onMouseLeave={cardLeave}
      className="bg-primary-beige text-black"
    >
      <div className="pr-10 pl-10 pb-8 pt-8 flex flex-col md:flex-row items-start md:items-end gap-10 sm:gap-20 max-w-[1120px] mx-auto ">
        <div>
          <Logo width={80} color="black" />
          <p className="mt-4 mb-0">Designed & built by Taisei Kurachi</p>
        </div>
        <div>
          <h4 className="font-semibold text-2xl mb-2 md:mb-4">Contact</h4>
          <div className="flex sm:flex-row flex-col gap-2 sm:gap-10">
            <Link href="https://www.linkedin.com/in/taiseikurachi/">
              LinkedIn
            </Link>
            <Link href="mailto:tk2958@nyu.edu">tk2958@nyu.edu</Link>
            <Link href="https://github.com/taikurachi">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
