import Image from "next/image";
import Link from "next/link";
export default function JobCard({
  src,
  href,
  title,
  name,
  date,
  imgClassName,
}) {
  return (
    <div className="flex md:flex-row flex-col items-start md:items-center w-full">
      <Link href={href} className={`w-12 sm:w-16 flex justify-center mb-2`}>
        <Image
          className={`w-full rounded-md ${imgClassName ? imgClassName : ""}`}
          src={src}
          alt={`${name} icon`}
          width={20}
          height={20}
        />
      </Link>
      <div className="flex sm:flex-row flex-col items-start sm:items-center w-full">
        <div className="ml-0 md:ml-4 mb-2 md:mb-0 ">
          <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">
            {name}
          </h3>
          <p className="mb-0">{title}</p>
        </div>
        <p className="ml-0 sm:ml-auto">{date}</p>
      </div>
    </div>
  );
}
