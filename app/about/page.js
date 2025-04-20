import Header from "../components/utils/Header";
import HeadingMain from "../components/utils/headings/HeadingMain";
import HeadingLG from "../components/utils/headings/HeadingLG";
import Image from "next/image";
import Footer from "../components/utils/Footer";
export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="mx-auto pr-10 pl-10 max-w-[1120px] mt-20 flex flex-col gap-20 pb-40">
        <div>
          <HeadingMain className="mb-4">About me</HeadingMain>
          <p>
            I love figuring out the &quot;why&quot; behind things and solving
            problems creatively and efficiently. I also enjoy pressure and high
            stakes environments.
          </p>
          <Image
            src="/about/profile.webp"
            width={600}
            height={300}
            alt="taisei profile image"
          />
        </div>
        <div>
          <HeadingLG className="mb-4">Education</HeadingLG>
          <div className="flex sm:flex-row flex-col gap-4 items-start sm:items-end">
            <Image
              className="rounded-lg h-min"
              src="/about/nyu.png"
              width={70}
              height={10}
              alt="nyu icon"
            />
            <div>
              <p className="mb-0 font-semibold">
                B.S. Integrated Design & Media
              </p>
              <p className="mb-0">
                Minors in Computer Science, Web Development
              </p>
            </div>
          </div>
        </div>
        <div>
          <HeadingLG className="mb-4">Value</HeadingLG>
          <p className="mb-4">
            My combination of frontend & design technical skills allows me to be
            effective in a variety of roles and situations.
          </p>
          <ul className="ml-8 list-disc">
            <li>I can engineer new products and features.</li>
            <li>I can prototype new features before pushed to production.</li>
            <li>I can bridge that gap between design and development teams.</li>
          </ul>
        </div>
        <div>
          <HeadingLG className="mb-4">Hobbies</HeadingLG>
          <p>
            Wrestling has shaped how I view different situations. It&apos;s
            taught me to be humble, be open to learning, and embracing doing
            difficult things to excel.
          </p>
          <div className="flex gap-10">
            <div>
              <Image
                className="w-full"
                src="/about/taisei-small.JPG"
                width={200}
                height={300}
                alt="taisei wrestling"
              />
            </div>
            <div>
              <Image
                className="w-full"
                src="/about/wrestling.webp"
                width={600}
                height={300}
                alt="taisei wrestling"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
