import Footer from "../components/utils/Footer";
import Header from "../components/utils/Header";
import HeadingMain from "../components/utils/headings/HeadingMain";
import HeadingMD from "../components/utils/headings/HeadingMD";
import Image from "next/image";
import HeadingSM from "../components/utils/headings/HeadingSM";
import Link from "next/link";
import JobCard from "../components/utils/JobCard";

export default function ResumePage() {
  return (
    <>
      <Header />
      <div className="mx-auto pr-10 pl-10 max-w-[1120px] mt-20 flex flex-col gap-10 pb-40">
        <div>
          <HeadingMain className="mb-4">Taisei Kurachi</HeadingMain>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-10">
            <span>tk2958@nyu.edu</span>
            <span>LinkedIn</span>
            <span>GitHub</span>
          </div>
        </div>
        <div>
          <HeadingMD>About</HeadingMD>
          <p>
            A proactive designer focused on crafting user-friendly,
            high-performance, and accessible solutions. Experienced in HTML,
            CSS, JavaScript, and React, I excel at bridging design and
            development. Eager to grow, I actively seek learning opportunities
            through mentorship and independent study.
          </p>
        </div>
        <div>
          <HeadingMD>Education</HeadingMD>
          <Image
            src="/resume/nyu.png"
            alt="nyu icon"
            width={50}
            height={50}
            className="mb-4"
          />
          <div className="flex justify-between gap-4">
            <HeadingSM className="mb-0">New York University</HeadingSM>
            <p className="mb-0">New York, NY</p>
          </div>
          <div className="mb-2 flex justify-between gap-10">
            <p className="mb-0">
              B.S. Integrated Design & Media, Minors in Computer Science + Web
              Development
            </p>
            <p className="min-w-fit">Exp. May 2026</p>
          </div>

          <p className="mb-2">
            <span className="font-bold">GPA: </span>3.7
          </p>
          <p className="mb-2">
            <span className="font-bold">Relevant Courses: </span>User Experience
            Design, Data Structures & Algorithms, Object Oriented Programming,
            Dynamic Web Applications, Visual Foundation Studio, Ideation &
            Prototyping, Dark Patterns (UX/UI)
          </p>
          <p className="mb-2">
            <span className="font-bold">Varsity Wrestling: </span>4th place at
            Northeast Regionals, set NYU single-season record with 32 wins at
            125 lbs, ranked 12th nationally
          </p>
        </div>
        <div>
          <HeadingMD>Experience</HeadingMD>
          <div className="flex flex-col gap-8">
            <JobCard
              title="Front-End Engineer + UX/UI Design Intern"
              date="Dec. 2024 - Present"
              name="IntBot"
              href="https://www.linkedin.com/company/intbot/posts/?feedView=all"
              src="/resume/intbot.svg"
            />
            <JobCard
              title="UX/UI Design Intern"
              imgClassName="w-full rounded-lg"
              date="Dec. 2024 - Jan. 2025"
              name="Quilly"
              href="https://www.linkedin.com/company/quilly/posts/?feedView=all"
              src="/resume/quilly.jpeg"
            />
            <JobCard
              title="UX/UI Engineer Intern"
              imgClassName="w-full rounded-lg"
              date="May. 2023 - Dec. 2024"
              name="GMB Fitness"
              href="https://www.linkedin.com/company/gold-medal-bodies/posts/?feedView=all"
              src="/resume/gmb.png"
            />
            <JobCard
              title="Web Designer & Developer Intern"
              imgClassName="w-full rounded-lg"
              date="May. 2023 - Aug. 2023"
              name="Consulfi"
              href="https://www.linkedin.com/company/consulfi/posts/?feedView=all"
              src="/resume/consulfi.jpg"
            />
            <JobCard
              title="Graphic Designer"
              imgClassName="w-full rounded-lg"
              date="Oct. 2022 - Dec. 2024"
              name="NYU Wrestling"
              href="https://www.linkedin.com/school/new-york-university/posts/?feedView=all"
              src="/resume/nyu.png"
            />
          </div>
        </div>
        <div>
          <HeadingMD>Skills</HeadingMD>
          <p className="mb-0">
            <span className="font-bold">Design: </span>Figma, FigJam, Adobe
            Photoshop
          </p>
          <p className="mb-0">
            <span className="font-bold">Languages: </span>TypeScript,
            JavaScript, HTML, CSS, PHP
          </p>
          <p className="mb-0">
            <span className="font-bold">Frameworks: </span>ReactJS, NextJS,
            TailwindCSS, SASS, SCSS
          </p>
          <p className="mb-0">
            <span className="font-bold">Others: </span>Git, Docker, Firebase,
            Webpack, Jest
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
