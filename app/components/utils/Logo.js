import Image from "next/image";
import Link from "next/link";

export default function Logo({ width, color }) {
  return (
    <Link href="/">
      <Image
        src={`/logo-${color}.svg`}
        className=""
        width={width}
        height={width / 2}
        alt="taisei kurachi logo"
      />
    </Link>
  );
}
