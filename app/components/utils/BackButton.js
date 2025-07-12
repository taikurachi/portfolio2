import Link from "next/link";
import Image from "next/image";
import { forwardRef } from "react";

const BackButton = forwardRef(function BackButton(props, ref) {
  return (
    <Link
      href="/"
      className="max-w-[1440px] mx-auto pl-10 pr-10 pt-10 flex gap-2 sm:gap-4 items-center"
      ref={ref}
    >
      <div className="w-3 sm:w-[20px]">
        <Image src="/arrow-beige.svg" width={20} height={20} alt="arrow icon" />
      </div>
      <span>Back</span>
    </Link>
  );
});

export default BackButton;
