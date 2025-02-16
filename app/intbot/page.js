"use client";
import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import Video from "../components/utils/Video";
import Link from "next/link";
import Image from "next/image";
import AssetDisplayColumn from "../components/utils/AssetDisplayColumn";
import { useState } from "react";
import HeadingMain from "../components/utils/headings/HeadingMain";
import HeadingLG from "../components/utils/headings/HeadingLG";
import HeadingMD from "../components/utils/headings/HeadingMD";
import HeadingSM from "../components/utils/headings/HeadingSM";
import AccentText from "../components/utils/AccentText";
import WorkCard from "../components/work/WorkCard";
import BackButton from "../components/utils/BackButton";
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
      <BackButton />
      <div className="mx-auto pr-10 pl-10 max-w-[1120px] mt-10 flex flex-col gap-20 pb-20 sm:pb-40">
        <div className="flex flex-col gap-10">
          <HeadingMain>
            Revamped IntBot website to increase user traffic.
          </HeadingMain>
          <p className="mb-0">
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
        <div className={`flex gap-8 md:flex-row flex-col`}>
          <div>
            <HeadingLG className="mb-4">Impact</HeadingLG>
            <ul className="list-disc ml-4">
              <li>
                Increased user traffic by{" "}
                <AccentText color="#EEE0FF">30%</AccentText>
              </li>
              <li>
                Built <AccentText color="#EEE0FF">typographic</AccentText> and{" "}
                <AccentText color="#EEE0FF">layout</AccentText> system to
                establish brand consistency and professionalism.
              </li>
              <li>
                Created reusable{" "}
                <AccentText color="#EEE0FF">React + TypeScript</AccentText>{" "}
                components for scalability and efficiency.
              </li>
            </ul>
          </div>
          <div>
            <HeadingLG className="mb-4">Role</HeadingLG>
            <ul className="list-disc ml-4">
              <li>UX/UI Design</li>
              <li>Front-End Engineer</li>
            </ul>
          </div>
          <div>
            <HeadingLG className="mb-4">Tools</HeadingLG>
            <ul className="list-disc ml-4">
              <li>ReactJS</li>
              <li>TypeScript</li>
              <li>TailwindCSS</li>
              <li>Figma</li>
              <li>Motion (Animations)</li>
            </ul>
          </div>
          <div>
            <HeadingLG className="mb-4">Timeline</HeadingLG>
            <p>Dec. 2024 - Jan. 2025</p>
          </div>
        </div>
        <div>
          <HeadingLG>Challenges</HeadingLG>
          <div className="flex flex-col gap-20">
            <div>
              <HeadingMD>Time constraints</HeadingMD>
              <p>
                The time constraint was my biggest challenge. I was tasked to
                design and develop a brand new website within 2 weeks as IntBot
                wanted to demo their product at 2025 CES.
              </p>
              <p>
                I didn&apos;t have time to conduct carefully conduct the design
                process, as my Co-founder wanted to see high-fidelity prototypes
                as soon as possible.
              </p>
              <p className="mb-0">
                I couldn&apos;t fully validate my design choices through
                usability testing. I couldn&apos;t make too many iterations
                based on user feedback.
              </p>
            </div>
            <div>
              <HeadingMD>No firm design system</HeadingMD>
              <p>
                I didn&apos;t have a foundational design system to work with. I
                was tasked to build typographic and brand guidelines from
                scratch.
              </p>
              <p className="mb-8">
                I decided upon two geometric fonts,{" "}
                <span className="font-evolventa underline">Evolventa-bold</span>{" "}
                for headings and{" "}
                <span className="font-evolventa underline">Mundial</span> for
                paragraph text, to symbolize Intbot&apos;s modernistic,
                innovative brand appeal.
              </p>
              <HeadingSM>Typography</HeadingSM>
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
                    <p className="text-xl mb-0">Evolventa</p>
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
                    <p className="text-xl mb-0">Mundial</p>
                  </div>
                  <p className="text-xl mb-5">Paragraph-xl</p>
                  <p className="text-lg mb-5">Paragraph-lg</p>
                  <p className="text-[16px] mb-5">Paragraph-md</p>
                  <p className="text-sm mb-5">Paragraph-sm</p>
                </div>
              </div>
            </div>
            <div>
              <HeadingMD className="mb-4">Moving blobs</HeadingMD>
              <p>
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
                    src={dynamicVideoLink[0]}
                    altText={`placeholder animation`}
                  />
                  <Video
                    key={version}
                    className="absolute top-0 left-0"
                    src={dynamicVideoLink[version]}
                    altText={`blob animation ${version}`}
                  />
                </div>
              </div>
            </div>
            <div>
              <HeadingMD>Changing blob colors</HeadingMD>
              <p>
                The color-changing animation was challenging to implement due to
                CSS&apos;s interpolation properties. CSS handles the animation
                of various styling properties differently, which created
                difficulties. Specifically, I was trying to animate the
                background colors of a radial-gradient for the blobs, but CSS
                couldn&apos;t interpolate them properly, unlike how it handles a
                background-color transition.
              </p>
              <p>
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
        <div>
          <HeadingLG>Before & After</HeadingLG>
          <p>
            Here is a before and after of the IntBot website after my
            contributions.
          </p>
          <div className="flex sm:flex-row flex-col gap-4">
            <div className="flex-1">
              <HeadingSM>Before</HeadingSM>
              <Image
                src="/intbot/intbot-5.webp"
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
        <div>
          <HeadingLG>Other Work</HeadingLG>

          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1120px] mx-auto gap-8">
            <WorkCard
              className="col-span-1 overflow-hidden"
              href="/beacon"
              color="bg-primary-salmon"
              title="Cancer treatment support app to decrease stress."
              tags={["Case Study", "UX/UI Design", "UX Research"]}
            >
              <div className="flex gap-4 w-[80%] lg:w-[80%] justify-between sm:items-start items-center top-0 sm:top-24 relative h-full mx-auto">
                <Video
                  altText="Beacon showcase video"
                  src="/beacon/beacon-onboarding.webm"
                  className="w-[200px]"
                  videoClassName="rounded-[10%] sm:rounded-[20px]"
                />
                <Video
                  altText="Beacon showcase video"
                  src="/beacon/beacon-second.webm"
                  className="w-[200px]"
                  videoClassName="rounded-[10%] sm:rounded-[20px]"
                />
                <Video
                  altText="Beacon showcase video"
                  src="/beacon/beacon-home.webm"
                  className="w-[200px]"
                  videoClassName="rounded-[10%] sm:rounded-[20px]"
                />
              </div>
            </WorkCard>
            <WorkCard
              className="overflow-hidden"
              href="/songsync"
              color="bg-primary-green"
              title="Syncing upcoming concerts with recently played songs."
              tags={["Front-End Engineering", "UI Design"]}
            >
              <Video
                altText="Songsync showcase video"
                src="/songsync/songsync.webm"
                className="absolute right-0 bottom-0 translate-y-4 translate-x-4 md:w-[90%] w-[90%] sm:top-[60px] lg:top-auto lg:w-[80%]"
              />
            </WorkCard>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
