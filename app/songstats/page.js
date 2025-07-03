"use client";
import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import Video from "../components/utils/Video";
import Link from "next/link";
import Image from "next/image";
import HeadingMain from "../components/utils/headings/HeadingMain";
import HeadingLG from "../components/utils/headings/HeadingLG";
import HeadingMD from "../components/utils/headings/HeadingMD";
import HeadingSM from "../components/utils/headings/HeadingSM";
import AccentText from "../components/utils/AccentText";
import BackButton from "../components/utils/BackButton";

export default function SongStatsPage() {
  return (
    <>
      <Header />
      <BackButton />
      <div className="mx-auto pr-10 pl-10 max-w-[1440px] mt-10 flex flex-col gap-20 pb-20 sm:pb-40">
        <div className="flex flex-col gap-10">
          <HeadingMain>Song Details Analysis</HeadingMain>
          <p className="mb-0">
            Music analytics dashboard providing lyrics analysis, song data
            visualization, and video discovery using Spotify design system.
          </p>
          <div className="flex gap-4">
            <Video
              className="flex-1"
              src="/songstats/songstats-preview.webm"
              altText={"songstats video preview"}
            />
            <Video
              className="flex-1"
              src="/songstats/songstats-lyrics.webm"
              altText={"songstats lyrics analysis"}
            />
          </div>
          <div className="flex gap-4">
            <Link
              href="https://www.songstats.xyz/"
              className="rounded-lg p-2 pr-4 pl-4 text-lg bg-primary-green text-black w-fit hover:bg-purple-300 transition-colors"
            >
              View site
            </Link>
            <Link
              href="https://github.com/taikurachi/Songstats"
              className="rounded-lg p-2 pr-4 pl-4 text-lg bg-primary-lightGreen text-black w-fit hover:bg-purple-300 transition-colors"
            >
              View code
            </Link>
          </div>
        </div>
        <div className={`flex gap-8 md:flex-row flex-col`}>
          <div>
            <HeadingLG className="mb-4">Impact</HeadingLG>
            <ul className="list-disc ml-4 flex flex-col gap-2">
              <li>
                Reduced initial load time by{" "}
                <AccentText color="text-primary-green">~40%</AccentText> by
                balancing RSC/CSR/SSR and integrating TanStack Query/React
                Cache.
              </li>
              <li>
                Integrated{" "}
                <AccentText color="text-primary-green">4+ REST APIs</AccentText>{" "}
                (MusixMatch, Ticketmaster, Perplexity, Invidious) through proxy
                routes in NextJS.
              </li>
              <li>
                Prototyped UX/UI based off{" "}
                <AccentText color="text-primary-green">Spotify</AccentText>{" "}
                design system using Figma.
              </li>
            </ul>
          </div>
          <div>
            <HeadingLG className="mb-4">Role</HeadingLG>
            <p>UX/UI Designer, Frontend Engineer</p>
          </div>
          <div>
            <HeadingLG className="mb-4">Tools</HeadingLG>
            <p>
              ReactJS, TypeScript, Python, NextJS, TailwindCSS, Figma, Motion,
              p5JS, AWS Lambda
            </p>
          </div>
          <div>
            <HeadingLG className="mb-4">Timeline</HeadingLG>
            <p>Jan 2024 - May 2025</p>
          </div>
        </div>
        <div>
          <HeadingLG>Features</HeadingLG>
          <div className="grid grid-cols-2 gap-20">
            {[
              {
                heading: "Song Details Analysis",
                feature: "details",
                description: (
                  <>
                    <p className="mb-0">
                      <span className="font-bold text-primary-green">
                        Total streams
                      </span>{" "}
                      is derived by scraping{" "}
                      <Link
                        href="https://www.mystreamcount.com/"
                        className="underline"
                      >
                        mystreamcount.com
                      </Link>
                      .
                    </p>
                    <p className="mb-0">
                      <span className="font-bold text-primary-green">
                        Most streamed country
                      </span>{" "}
                      is derived by scraping{" "}
                      <Link className="underline" href="https://kworb.net/">
                        kworb.net
                      </Link>
                      .
                    </p>

                    <p className="mb-0">
                      <span className="font-bold text-primary-green">
                        Chart data{" "}
                      </span>{" "}
                      is derived by scraping{" "}
                      <Link
                        href="https://www.mystreamcount.com/"
                        className="underline"
                      >
                        mystreamcount.com
                      </Link>
                      .
                    </p>
                    <p className="mb-0">
                      <span className="font-bold text-primary-green">
                        Longevity
                      </span>{" "}
                      is derived by an algorithm based on recent streams ratio
                      via peak performance.
                    </p>
                    <p className="mb-0">
                      <span className="font-bold text-primary-green">
                        Lyrics score
                      </span>{" "}
                      is derived Perplexity API based on criteria of depth,
                      meaning, and complexity.
                    </p>
                    <p className="mb-0">
                      <span className="font-bold text-primary-green">
                        Popularity
                      </span>{" "}
                      is derived from Spotify Web API results.
                    </p>
                  </>
                ),
              },
              {
                heading: "Song Lyrics Analysis",
                feature: "lyrics",
                description: (
                  <>
                    <p className="mb-0">
                      <span className="font-bold text-primary-green">
                        Lyrics
                      </span>{" "}
                      is derived by passing Spotify ISRC through{" "}
                      <span className="underline">MusixMatch API</span>.
                    </p>
                    <p className="mb-0">
                      <span className="font-bold text-primary-green">
                        Lyrics analysis
                      </span>{" "}
                      is derived by passing lyrics, artist and album name into{" "}
                      <span className="underline">Perplexity API</span>.
                    </p>
                    <p className="mb-0">
                      <span className="font-bold text-primary-green">
                        Scrolling
                      </span>{" "}
                      to desired lyric was done by calculating the pixel
                      distance from top of container and storing each element
                      inside a ref array.
                    </p>
                  </>
                ),
              },
              {
                heading: "Related Media Discovery",
                feature: "related-media",
                description: (
                  <>
                    <p className="mb-0">
                      <span className="font-bold text-primary-green">
                        Related content
                      </span>{" "}
                      is derived by calling{" "}
                      <span className="underline">Invidious API</span>.
                    </p>
                    <p className="mb-0">
                      <span className="font-bold text-primary-green">
                        Filtering
                      </span>{" "}
                      is done on the frontend via string matching.
                    </p>
                  </>
                ),
              },
              ,
            ].map(({ heading, feature, description }) => (
              <div key={feature}>
                <HeadingMD key={feature}>{heading}</HeadingMD>
                <div className="flex-col flex gap-4">
                  <div className="flex-1">
                    <Video src={`/songstats/songstats-${feature}.webm`} />
                  </div>
                  <div className="flex-1">{description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <HeadingLG>Performance Optimizations</HeadingLG>
          <div>
            <div>
              <HeadingMD>Debouncing API Calls</HeadingMD>
            </div>
            <div>
              <HeadingMD>TanStack Query</HeadingMD>
            </div>
            <div>
              <HeadingMD>React Cache</HeadingMD>
            </div>
            <div>
              <HeadingMD>RSC Rendering + CSR Rendering</HeadingMD>
            </div>
          </div>
        </div>
        <div>
          <HeadingLG>Spotify Design Flow</HeadingLG>
          <div>
            <div>
              <HeadingMD>Dynamic URLs</HeadingMD>
            </div>
            <div>
              <HeadingMD>Dynamic Color Palette</HeadingMD>
            </div>
          </div>
        </div>
        <div>
          <HeadingLG>Challenges</HeadingLG>
          <div>
            <div>
              <HeadingSM>
                Problem: Search element losing focus across page rerenders
              </HeadingSM>
              <HeadingSM>
                Solution: Use NextJS route groups and have a unified layout.tsx
                file
              </HeadingSM>
              <p>
                There was an issue where the search input would lose focus every
                time the search element would render results.
              </p>
            </div>
            <div>
              <HeadingSM>
                Problem: Python runtime not available alongside Node for Vercel
                hosting
              </HeadingSM>
              <HeadingSM>
                Solution: Host Python scrapers as AWS Lambda functions
              </HeadingSM>
              <p>
                There was an issue where the search input would lose focus every
                time the search element would render results.
              </p>
            </div>
            <div>
              <HeadingSM>
                Problem: Python runtime not available alongside Node for Vercel
                hosting
              </HeadingSM>
              <HeadingSM>
                Solution: Host Python scrapers as AWS Lambda functions
              </HeadingSM>
              <p>
                There was an issue where the search input would lose focus every
                time the search element would render results.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
