import Logo from "./Logo";
import Link from "next/link";
export default function Header() {
  return (
    <header className="p-10 max-w-[1120px] mx-auto h-[100px]">
      <nav className="flex justify-between text-xl">
        <Logo width={100} />
        <ul className="flex gap-4">
          <Link href="/">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>
    </header>
  );
}
