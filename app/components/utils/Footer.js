import Logo from "./Logo";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-primary-beige text-black">
      <div className="pr-10 pl-10 pb-8 pt-8 flex flex-col md:flex-row items-start md:items-end gap-10 sm:gap-20 mx-auto w-[1440px]">
        <div>
          <Logo width={60} color="black" />
          <p className="mt-4 mb-0">Designed & built by Taisei Kurachi</p>
        </div>
        <div>
          <h4 className="font-semibold text-2xl mb-2 md:mb-4">Contact</h4>
          <div className="flex sm:flex-row flex-col gap-2 sm:gap-10">
            <Link
              href="https://www.linkedin.com/in/taiseikurachi/"
              className="hover:underline"
            >
              LinkedIn
            </Link>
            <Link href="mailto:tk2958@nyu.edu" className="hover:underline">
              tk2958@nyu.edu
            </Link>
            <Link
              href="https://github.com/taikurachi"
              className="hover:underline"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
