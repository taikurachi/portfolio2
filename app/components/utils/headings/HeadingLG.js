export default function HeadingLG({ children, className }) {
  return (
    <h2
      className={`text-4xl sm:text-6xl font-bold ${
        className ? className : "mb-8"
      }`}
    >
      {children}
    </h2>
  );
}
