import Image from "next/image";
import Link from "next/link";

export default function Logo({ width }) {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        className="invert"
        width={width}
        height={width / 2}
        alt="taisei kurachi logo"
      />
    </Link>
  );
}
