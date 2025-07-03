import Logo from "./Logo";
import Link from "next/link";
export default function Header() {
  return (
    <header className={`sticky top-0 bg-primary-black z-10`}>
      <div className="px-10 pt-6 mx-auto max-w-[1440px]">
        <nav className="flex justify-between items-center pb-6 border-primary-darkBeige">
          <Logo width={60} color="beige" />
          <ul className="flex sm:gap-10 gap-2 font-medium text-primary-darkBeige">
            <Link
              className="hover:text-primary-beige transition-colors"
              href="/"
            >
              Work
            </Link>
            <Link
              className="hover:text-primary-beige transition-colors"
              href="/about"
            >
              About
            </Link>
            <Link
              className="hover:text-primary-beige transition-colors"
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
