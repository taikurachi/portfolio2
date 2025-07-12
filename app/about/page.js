import HeadingMain from "../components/utils/headings/HeadingMain";
import HeadingLG from "../components/utils/headings/HeadingLG";
import Image from "next/image";
import Footer from "../components/utils/Footer";
import PageWithStickyBackButton from "../components/utils/PageWithStickyBackButton";
export default function AboutPage() {
  return (
    <PageWithStickyBackButton>
      <div className="mx-auto pr-10 pl-10 max-w-[1440px] mt-6 flex flex-col gap-20 pb-40">
        <div>
          <HeadingMain className="mb-4">About Me</HeadingMain>
          <p className="text-lg opacity-80">A bit about me and my life.</p>
          <Image
            src="/about/profile.webp"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "60%", height: "auto" }}
            alt="taisei profile image"
            className="rounded-xl mb-10"
          />
          <p>
            I love figuring out the &quot;why&quot; behind things and solving
            problems creatively and efficiently. I also enjoy pressure and high
            stakes environments.
          </p>
          <p>
            Challenges excite me. I see them as learning opportunities, a chance
            to expand my skillset and deepen my knowledge. I have a strong
            desire to be skilled at things I devote my time and care to.
          </p>
        </div>
        <div>
          <HeadingLG className="mb-4">Hobbies</HeadingLG>
          <p className="text-lg opacity-80">I like a bit of competitiveness.</p>
          <div className="flex gap-10 mb-10">
            <div>
              <Image
                className="w-full rounded-xl"
                src="/about/wrestling.webp"
                width={700}
                height={300}
                alt="taisei wrestling"
              />
            </div>
            <div>
              <Image
                className="w-full rounded-xl"
                src="/about/taisei-small.JPG"
                width={300}
                height={400}
                alt="taisei wrestling"
              />
            </div>
          </div>
          <p>
            Wrestling has shaped how I view different situations. It&apos;s
            taught me to be humble, be open to learning, and embracing doing
            difficult things to excel.
          </p>
        </div>
      </div>
      <Footer />
    </PageWithStickyBackButton>
  );
}
