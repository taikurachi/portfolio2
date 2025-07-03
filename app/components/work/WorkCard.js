import Link from "next/link";

export default function WorkCard({
  description,
  title,
  timeline,
  href,
  tools,
  bgColor = null,
  videoSrc = null,
}) {
  const classNamesBasedOnLength = {
    1: "rounded-lg",
    2: "rounded-xl w-1/3",
    3: "rounded-[calc(9%+5px)] w-[23%]",
  };
  return (
    <Link
      href={href}
      className="flex flex-col gap-8 cursor-pointer hover:bg-zinc-800 p-4 rounded-lg -ml-4 -mr-4"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold">{title}</h2>
        <div className="opacity-80">{timeline}</div>
      </div>
      <div
        className={`flex justify-center items-center gap-4 sm:gap-6 shadow-2xl aspect-[640/346.56] ${bgColor} ${
          videoSrc.length > 1 && "p-8 rounded-lg"
        }`}
      >
        {videoSrc.map((video, index) => (
          <video
            key={index}
            src={video}
            className={classNamesBasedOnLength[videoSrc.length]}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
        ))}
      </div>
      <div className="flex justify-between gap-24">
        <p className="opacity-80">{description}</p>
        <p className="text-end font-semibold">{tools}</p>
      </div>
    </Link>
  );
}
