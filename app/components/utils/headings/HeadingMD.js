export default function HeadingMD({ children, className }) {
  return (
    <h3
      className={`text-3xl sm:text-4xl font-bold ${
        className ? className : "mb-6"
      }`}
    >
      {children}
    </h3>
  );
}
