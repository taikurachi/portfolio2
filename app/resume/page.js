"use client";
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
            <Link className="hover:underline" href="mailto:tk2958@nyu.edu">
              tk2958@nyu.edu
            </Link>
            <Link
              className="hover:underline"
              href="https://www.linkedin.com/in/taiseikurachi/"
            >
              LinkedIn
            </Link>
            <Link
              className="hover:underline"
              href="https://github.com/taikurachi"
            >
              GitHub
            </Link>
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
            className="mb-4 rounded-md"
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
              title="Product Intern"
              imgClassName="w-full rounded-lg"
              date="Feb. 2025 - Present"
              name="Dynamo AI"
              href="https://www.linkedin.com/company/dynamofl/posts/?feedView=all"
              src="/resume/dynamo.jpeg"
            />
            <JobCard
              title="Frontend Engineer Intern"
              date="Dec. 2024 - Feb. 2025"
              name="IntBot"
              href="https://www.linkedin.com/company/intbot/posts/?feedView=all"
              src="/resume/intbot.svg"
            />
            <JobCard
              title="Frontend Engineer Intern"
              imgClassName="w-full rounded-lg"
              date="May. 2023 - Dec. 2024"
              name="GMB Fitness"
              href="https://www.linkedin.com/company/gold-medal-bodies/posts/?feedView=all"
              src="/resume/gmb.png"
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
