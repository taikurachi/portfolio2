import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function Header({ showBackButton = false }) {
  return (
    <header className={`fixed top-0 left-0 right-0 bg-primary-black z-10`}>
      <div className="px-10 pt-6 mx-auto max-w-[1440px]">
        <nav className="flex justify-between items-center pb-6 border-primary-darkBeige relative">
          <div className="flex items-center gap-4">
            <Logo width={60} color="beige" />
            <AnimatePresence>
              {showBackButton && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-20 py-[6px] px-4 rounded-md bg-primary-gray group"
                >
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-primary-darkBeige group-hover:text-primary-beige transition-colors rounded-md"
                  >
                    <Image
                      src="/arrow-beige.svg"
                      width={13}
                      height={13}
                      alt="arrow icon"
                      className="opacity-60 group-hover:opacity-100"
                    />
                    <span className="text-sm sm:font-semibold">Back</span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
