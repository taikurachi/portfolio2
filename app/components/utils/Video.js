export default function Video({ altText, src, className }) {
  return (
    <div className={`${className} rounded-lg`}>
      <video muted preload="true" autoPlay loop playsInline alt={altText}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
