export default function Video({
  altText = null,
  src,
  className,
  videoClassName,
}) {
  return (
    <div className={`${className} bg-transparent`}>
      <video
        muted
        preload="auto"
        className={`${videoClassName}`}
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
