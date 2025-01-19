import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="p-10 border-t">
      <div className="flex flex-col md:flex-row gap-5 justify-between max-w-[1120px] mx-auto">
        <div>
          <Logo width={100} />
          <p className="mt-4">Designed & built by Taisei Kurachi</p>
        </div>
        <div>
          <h4 className="font-semibold text-2xl mb-2 md:mb-4">Contact</h4>
          <p>LinkedIn</p>
          <p>tk2958@nyu.edu</p>
        </div>
        <div>
          <h4 className="font-semibold text-2xl mb-2md:mb-4">
            Currently listening to
          </h4>
          <div>Sienna by The Mariahs</div>
        </div>
      </div>
    </footer>
  );
}
