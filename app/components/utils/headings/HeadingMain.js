export default function HeadingMain({ children, className }) {
  return (
    <h1 className={`text-4xl sm:text-6xl font-bold ${className}`}>
      {children}
    </h1>
  );
}
