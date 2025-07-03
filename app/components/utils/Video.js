export default function Video({
  altText = null,
  src,
  className,
  videoClassName,
}) {
  return (
    <div className={`${className} rounded-lg bg-transparent`}>
      <video
        muted
        preload="auto"
        className={`${videoClassName} rounded-lg`}
        autoPlay
        loop
        playsInline
        alt={altText}
      >
        <source src={src} type="video/webm" />
      </video>
    </div>
  );
}
