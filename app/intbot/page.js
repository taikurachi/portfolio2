"use client";
import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import Video from "../components/utils/Video";
import Link from "next/link";
import Image from "next/image";
import AssetDisplayColumn from "../components/utils/AssetDisplayColumn";
import WorkTags from "../components/utils/WorkTags";
import { useState } from "react";
import HeadingMain from "../components/utils/headings/HeadingMain";
import HeadingLG from "../components/utils/headings/HeadingLG";
import HeadingMD from "../components/utils/headings/HeadingMD";
import HeadingSM from "../components/utils/headings/HeadingSM";
export default function IntbotPage() {
  const [version, setVersion] = useState(0);

  const dynamicVideoLink = [
    "/intbot/blob-1.webm",
    "/intbot/blob-2.webm",
    "/intbot/blob-3.webm",
  ];
  const handleVersionClick = (e) => {
    const index = Number(e.target.dataset.index);
    setVersion(index);
  };
  return (
    <>
      <Header />
      <div className="mx-auto pr-10 pl-10 max-w-[1120px] mt-20 flex flex-col gap-20 pb-40">
        <div className="flex flex-col gap-10">
          <HeadingMain>
            Revamped IntBot website to increase user traffic.
          </HeadingMain>
          <p>
            Intbot is an early-staged startup focusing on humanoid robots using
            machine learning and AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <AssetDisplayColumn>
              <Video
                altText="intbot website desktop"
                src="/intbot/intbot-1.webm"
              />
              <Video
                altText="intbot contact section"
                src="/intbot/intbot-2.webm"
              />
              <Video
                altText="intbot careers section"
                src="/intbot/intbot-3.webm"
              />
            </AssetDisplayColumn>
            <AssetDisplayColumn>
              <Video altText="intbot mobile site" src="/intbot/intbot-4.webm" />
            </AssetDisplayColumn>
          </div>
          <Link
            href="https://intbot.ai/"
            className="rounded-lg p-2 pr-4 pl-4 text-lg bg-primary-purple text-black w-fit hover:bg-purple-300 transition-colors"
          >
            View site
          </Link>
        </div>
        <WorkTags
          impact={[
            "Increased user traffic by over 30%.",
            "Built typographic and layout system to establish brand consistency and professionalism.",
            "Created reusable React + TypeScript components for scalability and efficiency. ",
          ]}
          role={["UX/UI Designer", "Front-End Engineer"]}
          tools={[
            "React",
            "TypeScript",
            "TailwindCSS",
            "Figma",
            "Motion (Animations)",
          ]}
          timeline="Dec. 2024 - Jan. 2025"
          className=""
        />
        <div>
          <HeadingLG>Challenges</HeadingLG>
          <div className="flex flex-col gap-10">
            <div>
              <HeadingMD>Time constraints</HeadingMD>
              <p className="mb-4">
                The time constraint was my biggest challenge. I was tasked to
                design and develop a brand new website within 2 weeks as IntBot
                wanted to demo their product at 2025 CES.
              </p>
              <p className="mb-4">
                I didn&apos;t have time to conduct carefully conduct the design
                process, such as user research as my Co-founder wanted to see
                some high-fidelity prototypes as soon as possible.
              </p>
              <p className="mb-4">
                I couldn&apos;t fully validate my design choices through
                usability testing. I couldn&apos;t make too many iterations
                based on user feedback.
              </p>
            </div>
            <div>
              <HeadingMD>No firm design system</HeadingMD>
              <p className="mb-4">
                I didn&apos;t have a foundational design system to work with, so
                I had to first find a commercial free font that would suit the
                IntBot brand.
              </p>
              <p className="mb-4">
                I looked for geometric fonts to symbolize Intbot&apos;s
                modernistic, innovative brand appeal.
              </p>
              <p className="mb-8">
                I stumbled upon these two fonts. I used Evolventa-bold for
                headings and Mundial for regular paragraph text. I made these
                typographic systems for future improvements to the website and
                other aspects of the IntBot brand.
              </p>
              <div className="flex sm:flex-row flex-col gap-4">
                <div className="w-full sm:w-[50%] bg-white p-4 text-black font-evolventa">
                  <div className="flex gap-4 items-center mb-5">
                    <div className="bg-gray-200 w-fit p-2 rounded-sm">
                      <Image
                        src="/intbot/fontface_icon.svg"
                        width={20}
                        height={20}
                        alt="fontface icon"
                      />
                    </div>
                    <p className="text-xl">Evolventa</p>
                  </div>
                  <p className="text-6xl mb-5">Heading-xl</p>
                  <p className="text-5xl mb-5">Heading-lg</p>
                  <p className="text-4xl mb-5">Heading-md</p>
                  <p className="text-3xl mb-5">Heading-sm</p>
                </div>
                <div className="w-full sm:w-[50%] bg-white p-4 text-black font-mundial">
                  <div className="flex gap-4 items-center mb-6">
                    <div className="bg-gray-200 w-fit p-2 rounded-sm">
                      <Image
                        src="/intbot/fontface_icon.svg"
                        width={20}
                        height={20}
                        alt="fontface icon"
                      />
                    </div>
                    <p className="font-mundial text-xl">Mundial</p>
                  </div>
                  <p className="text-xl mb-5">Paragraph-xl</p>
                  <p className="text-lg mb-5">Paragraph-lg</p>
                  <p className="text-md mb-5">Paragraph-md</p>
                  <p className="text-sm mb-5">Paragraph-sm</p>
                </div>
              </div>
            </div>
            <div>
              <HeadingMD>Moving blobs</HeadingMD>
              <p className="mb-4">
                Creating a fluid blob animation for the hero section was an
                iterative process.
              </p>
              <div className="w-full sm:w-1/2 relative">
                <div
                  onClick={handleVersionClick}
                  className="absolute text-black flex cursor-pointer z-10"
                >
                  <span className="bg-purple-200 p-3 border" data-index="0">
                    v1
                  </span>
                  <span className="bg-purple-200 p-3 border" data-index="1">
                    v2
                  </span>
                  <span className="bg-purple-200 p-3 border" data-index="2">
                    v3
                  </span>
                </div>
                <div className="relative">
                  <Video
                    key={version}
                    className="absolute top-0 left-0"
                    src={dynamicVideoLink[version]}
                    altText={`blob animation ${version}`}
                  />
                  <Video
                    src={dynamicVideoLink[0]}
                    altText={`placeholder animation`}
                  />
                </div>
              </div>
            </div>
            <div>
              <HeadingMD>Changing blob colors</HeadingMD>
              <p className="mb-4">
                The color changing animation was hard to animate due to CSS’s
                interpolation properties. CSS handles animation of styling
                properties differently for various properties. I was trying to
                animate the backgorund colors of radial-gradient for the blobs
                but CSS couldn’t GG them properly as would a backgorund-color
                transition.
              </p>
              <p className="mb-8">
                As a solution, I decided to rotate the hue of the layer instead
                of changing the blob colors to give an illusion that the blobs
                are changing colors.
              </p>
              <div className="flex sm:flex-row flex-col gap-4">
                <div>
                  <HeadingSM>Before</HeadingSM>
                  <Video
                    src="/intbot/blob-4.webm"
                    altText="blob animation before"
                  />
                </div>
                <div>
                  <HeadingSM>After</HeadingSM>
                  <Video
                    src="/intbot/blob-5.webm"
                    altText="blob animation after"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <HeadingLG>Before & After</HeadingLG>
          <p className="mb-8">
            Here is a before and after of the IntBot website after my
            contributions.
          </p>
          <div className="flex sm:flex-row flex-col gap-4">
            <div className="flex-1">
              <HeadingSM>Before</HeadingSM>
              <Image
                src="/intbot/intbot-5.jpg"
                alt="Intbot before image"
                layout="responsive"
                width={100}
                height={80}
              />
            </div>
            <div className="flex-1">
              <HeadingSM>After</HeadingSM>
              <Video src="/intbot/intbot-1.webm" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
