export default function HeadingSM({ children, className }) {
  return (
    <h3
      className={`text-2xl sm:text-3xl font-semibold ${
        className ? className : "mb-4"
      }`}
    >
      {children}
    </h3>
  );
}
