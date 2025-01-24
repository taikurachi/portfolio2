export default function Video({ altText, src, className, videoClassName }) {
  return (
    <div className={`${className} rounded-lg bg-transparent`}>
      <video
        muted
        preload="auto"
        className={videoClassName}
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
