import Link from "next/link";
import Image from "next/image";
export default function BackButton() {
  return (
    <Link
      href="/"
      className="max-w-[1120px] mx-auto pl-10 pr-10 pt-10 flex gap-4"
    >
      <Image src="/arrow-beige.svg" width={20} height={20} alt="arrow icon" />
      <span>Back</span>
    </Link>
  );
}
