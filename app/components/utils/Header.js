import Logo from "./Logo";

export default function Header() {
  return (
    <header className="p-10 max-w-[1120px] mx-auto h-[100px]">
      <nav className="flex justify-between text-xl">
        <Logo width={100} />
        <ul className="flex gap-4">
          <li>Work</li>
          <li>About</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
