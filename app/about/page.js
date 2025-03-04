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
          <p>
            My combination of design and technical skills allows me to be
            effective in a variety of roles and situations.
          </p>
          <ul className="ml-8 list-disc">
            <li>I can lead your design of a new website, mobile page.</li>
            <li>I can engineer a new prototype that I designed.</li>
            <li>
              I can also bridge that gap between design and development teams.
            </li>
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
        <div>
          <HeadingLG className="mb-4">
            How I became Interested in Design
          </HeadingLG>
          <p>
            I came across this Duke Commitment edit made by CBB Visuals. I was
            inspired and wanted to make my own. I taught myself Photoshop and
            created this graphic for my commitment to wrestle at NYU.
          </p>
          <p>
            This graphic took me over 15 hours to make since I manually cut out
            the image using the pen tool. I only realized later that I could
            just press the select subject button to achieve the same result...
          </p>
          <div className="flex gap-4 sm:gap-10 mb-8">
            <div>
              <Image
                src="/about/duke.webp"
                height={500}
                width={400}
                alt="duke commitment graphic"
              />
            </div>
            <div>
              <Image
                src="/about/taisei-commit.webp"
                height={500}
                width={400}
                alt="taisei commit graphic"
              />
            </div>
          </div>
          <p>
            Ever since then, I was asked by other athletes to make commitment
            graphics for them.
          </p>
          <div className="flex gap-4 sm:gap-10 mb-8">
            <div>
              <Image
                src="/about/nyu-commit.webp"
                height={500}
                width={400}
                alt="nyu commit graphic"
              />
            </div>
            <div>
              <Image
                src="/about/jwu-commit.webp"
                height={500}
                width={400}
                alt="jwu commit graphic"
              />
            </div>
            <div>
              <Image
                src="/about/rwu-commit.webp"
                height={500}
                width={400}
                alt="rwu commit graphic"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
