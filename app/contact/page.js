import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import HeadingMain from "../components/utils/headings/HeadingMain";
export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="mx-auto pr-10 pl-10 max-w-[1120px] mt-20 flex flex-col pb-40">
        <HeadingMain>Contact</HeadingMain>
        <p>Reach out anytime!</p>
        <div className="flex gap-10">
          <div>LinkedIn</div>
          <div>LinkedIn</div>
          <div>LinkedIn</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
