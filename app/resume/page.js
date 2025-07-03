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
      <div className="mx-auto pr-10 pl-10 max-w-[1440px] mt-20 flex flex-col gap-10 pb-40">
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
          <HeadingMD>Education</HeadingMD>
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-4">
              <Image
                src="/resume/nyu.png"
                alt="nyu icon"
                width={66}
                height={66}
                className="rounded-md"
              />
              <div>
                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">
                  New York University
                </h3>
                <p className="mb-0">
                  B.S. Integrated Design & Media (HCI), Minor in Computer
                  Science
                </p>
              </div>
            </div>
            <div>
              <p className="mb-0 text-right">New York, NY</p>
              <p className="mb-0">Exp. May 2026</p>
            </div>
          </div>
          <p className="mb-0">
            <span className="font-bold">GPA: </span>3.7 / 4.0
          </p>
          <p className="mb-0">
            <span className="font-bold">Relevant Courses: </span>
            <span>
              Data Structures & Algorithms, UX Design, Dynamic Web Applications,
              Dark Patterns (UX/UI)
            </span>
          </p>
        </div>
        <div>
          <HeadingMD>Experience</HeadingMD>
          <div className="flex flex-col gap-8">
            <JobCard
              title="Frontend Software Engineer Intern"
              imgClassName="w-full rounded-lg"
              date="May. 2025 - Present"
              name="TikTok"
              href="https://www.linkedin.com/company/bytedance/posts/?feedView=all"
              src="/resume/bytedance.jpg"
            />
            <JobCard
              title="Frontend/Product, Contract"
              imgClassName="w-full rounded-lg"
              date="Feb. 2025 - Apr. 2025"
              name="Dynamo AI"
              href="https://www.linkedin.com/company/dynamofl/posts/?feedView=all"
              src="/resume/dynamo.jpeg"
            />
            <JobCard
              title="Frontend Engineer Intern"
              imgClassName="w-full rounded-lg"
              date="Dec. 2024 - Feb. 2025"
              name="IntBot"
              href="https://www.linkedin.com/company/intbot/posts/?feedView=all"
              src="/resume/intbot.jpeg"
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
            <span className="font-bold">Languages: </span>TypeScript,
            JavaScript, HTML, CSS, Python, PHP
          </p>
          <p className="mb-0">
            <span className="font-bold">Frameworks: </span>React, NextJS,
            NodeJS, ExpressJS, TailwindCSS
          </p>
          <p className="mb-0">
            <span className="font-bold">Preprocessors: </span>SCSS, SASS, LESS
          </p>
          <p className="mb-0">
            <span className="font-bold">Others: </span>Git, Docker, Jest,
            Firebase, Webpack
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
