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
        <div>
          <HeadingLG className="mb-4">
            How I Became Interested in Development
          </HeadingLG>
          <p>
            I became interested in development after my first web development
            class in freshmen year. I remember being intimidated by the large
            HTML skeleton when I was creating my first websites. Ever since
            then, I&apos;ve been continuously learning the fundamentals, new
            technologies, and more computer science theory. I&apos;ve made it a
            goal to spent at least an hour of coding a day to build upon my
            skills.
          </p>
          <div className="flex sm:flex-row flex-col gap-4 sm:gap-10">
            <Image
              className="w-1/2 md:min-w-[300px]"
              src="/about/book.webp"
              height={500}
              width={400}
              alt="psychology of success book"
            />
            <p>
              Through this book, I learned about the brain&apos;s neuroplastic
              capabilities. I was scared about learning how to code because of
              my preconceived notions of how challenging it was and it was only
              for the smartest people. This book gave me more confidence that
              being “smart” isn&apos;t just genetic but you can teach yourself
              to be “smart” as long as you immerse yourself in the proper
              environment and spend hours practicing.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
