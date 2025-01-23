export default function AccentText({ children, color, className }) {
  return (
    <span style={{ color: color }} className={`${className}`}>
      {children}
    </span>
  );
}
