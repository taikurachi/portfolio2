export default function AccentText({ children, color, className }) {
  return (
    <span className={`${className} ${color ? color : ""}`}>{children}</span>
  );
}
