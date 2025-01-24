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
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
