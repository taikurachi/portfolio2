import Link from "next/link";
export default function WorkCard({
  title,
  tags,
  children,
  color,
  className,
  href,
}) {
  return (
    <Link href={href} className={className}>
      <div className={`bg-[#636363] rounded-lg p-4 flex flex-col gap-6`}>
        <div className={`rounded-lg h-[300px] relative ${color} ${className}`}>
          {children}
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="flex flex-wrap gap-4">
          {tags.map((tag, index) => (
            <span className={`p-2 rounded-md text-black ${color}`} key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
