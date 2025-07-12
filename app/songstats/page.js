"use client";
import PageWithStickyBackButton from "../components/utils/PageWithStickyBackButton";
import Footer from "../components/utils/Footer";
import Video from "../components/utils/Video";
import Link from "next/link";
import Image from "next/image";
import HeadingMain from "../components/utils/headings/HeadingMain";
import HeadingLG from "../components/utils/headings/HeadingLG";
import HeadingMD from "../components/utils/headings/HeadingMD";
import HeadingSM from "../components/utils/headings/HeadingSM";
import AccentText from "../components/utils/AccentText";
import CodeBlock from "../components/utils/CodeBlock";

export default function SongStatsPage() {
  return (
    <PageWithStickyBackButton>
      <div className="mx-auto pr-10 pl-10 max-w-[1440px] mt-6 flex flex-col gap-20 pb-20 sm:pb-40">
        <div className="flex flex-col gap-10">
          <HeadingMain>Song Details Analysis</HeadingMain>
          <p className="mb-0">
            Music analytics dashboard providing lyrics analysis, song data
            visualization, and video discovery using Spotify design system.
          </p>
          <div className="sm:flex-row flex-col flex gap-4">
            <Video
              className="flex-1 rounded-lg"
              videoClassName="rounded-lg"
              src="/songstats/songstats-preview.webm"
              altText={"songstats video preview"}
            />
            <Video
              className="flex-1 rounded-lg"
              videoClassName="rounded-lg"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
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
            ].map(({ heading, feature, description }) => (
              <div key={feature}>
                <HeadingMD>{heading}</HeadingMD>
                <div className="flex-col flex gap-4">
                  <div className="flex-1">
                    <Video
                      src={`/songstats/songstats-${feature}.webm`}
                      className="rounded-lg"
                      videoClassName="rounded-lg"
                    />
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
            <div className="mb-6">
              <HeadingMD>Debouncing API Calls</HeadingMD>
              <CodeBlock>
                {`export const debounce = (fn, wait) => {
  let timeout;
  let pendingPromise = null;

  return function (...args) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;

    // If there's already a pending promise for this debounce, return it
    if (pendingPromise) return pendingPromise;

    // Create a new promise that will resolve with the result of fn
    pendingPromise = new Promise((resolve) => {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        const result = fn.apply(context, args);
        pendingPromise = null;
        resolve(result);
      }, wait);
    });

    return pendingPromise;
  };
};`}
              </CodeBlock>
              <p>
                By debouncing API calls, I can reduce the number of API calls to
                only the most recent changes to state. This is a common
                technique to improve performance and reduce server load by
                preventing excessive API requests during rapid user interactions
                like typing.
              </p>
            </div>
            <div>
              <HeadingMD>TanStack Query</HeadingMD>
              <CodeBlock>
                {`// Example: Using TanStack Query for API calls
const { data, isLoading, error } = useQuery({
  queryKey: ['songData', songId],
  queryFn: () => fetchSongData(songId),
  staleTime: 5 * 60 * 1000, // 5 minutes
  cacheTime: 10 * 60 * 1000, // 10 minutes
});`}
              </CodeBlock>
              <p>
                TanStack Query provides intelligent caching, background
                refetching, and optimistic updates. By setting appropriate stale
                and cache times, I reduce redundant API calls and improve user
                experience with instant data loading from cache.
              </p>
            </div>
            <div className="mb-6">
              <HeadingMD>React Cache</HeadingMD>
              <CodeBlock>
                {`import { cache } from 'react';

// Cache expensive operations across component tree
const getCachedSongAnalysis = cache(async (songId) => {
  const response = await fetch(\`/api/analysis/\${songId}\`);
  return response.json();
});

// Multiple components can call this without duplicate requests
const analysis = await getCachedSongAnalysis(songId);`}
              </CodeBlock>
              <p>
                React Cache eliminates duplicate requests during server-side
                rendering, ensuring expensive operations like AI analysis are
                only performed once per request cycle.
              </p>
            </div>
            <div className="mb-6">
              <HeadingMD>RSC Rendering + CSR Rendering</HeadingMD>
              <CodeBlock>
                {`// Server Component (RSC) - runs on server
export default async function SongPage({ params }) {
  // Pre-fetch data on server
  const songData = await fetchSongData(params.id);
  
  return (
    <div>
      <SongDetails data={songData} />
      <InteractiveLyrics songId={params.id} />
    </div>
  );
}

// Client Component (CSR) - runs in browser
'use client';
export default function InteractiveLyrics({ songId }) {
  const [selectedLine, setSelectedLine] = useState(null);
  // Interactive features here
}`}
              </CodeBlock>
              <p>
                By strategically combining Server Components for initial data
                fetching and Client Components for interactive features, we
                achieve optimal performance with fast initial loads and rich
                interactivity.
              </p>
            </div>
          </div>
        </div>
        <div>
          <HeadingLG>Spotify Design Flow</HeadingLG>
          <div>
            <div className="mb-6">
              <HeadingMD>Dynamic URLs</HeadingMD>
              <CodeBlock>
                {`// Dynamic routing with Next.js
// app/song/[id]/page.js
export default function SongPage({ params }) {
  const songId = params.id;
  
  return (
    <div>
      <SongDetails id={songId} />
      {/* URLs like /song/4uLU6hMCjMI75M1A2tKUQC */}
    </div>
  );
}

// Generate URLs from Spotify track IDs
const generateSongUrl = (trackId) => \`/song/\${trackId}\`;`}
              </CodeBlock>
              <p>
                Following Spotify&apos;s URL pattern, each song gets a unique
                URL based on its Spotify track ID, enabling direct sharing and
                bookmarking of specific songs.
              </p>
            </div>
            <div className="mb-6">
              <HeadingMD>Dynamic Color Palette</HeadingMD>
              <CodeBlock>
                {`// Extract colors from album artwork
const getColorPalette = async (imageUrl) => {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = imageUrl;
  
  return new Promise((resolve) => {
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      // Extract dominant colors using color quantization
      const colors = extractDominantColors(ctx.getImageData(0, 0, canvas.width, canvas.height));
      resolve(colors);
    };
  });
};`}
              </CodeBlock>
              <p>
                Like Spotify, I extract dominant colors from album artwork to
                create dynamic color schemes that change based on the currently
                viewed song, creating a cohesive visual experience.
              </p>
            </div>
          </div>
        </div>
        <div>
          <HeadingLG>Challenges</HeadingLG>
          <div>
            <div className="mb-14">
              <HeadingSM>
                <span className="text-2xl sm:text-3xl font-semibold decoration-red-700 underline">
                  Problem:
                </span>{" "}
                Search element losing focus across page rerenders
              </HeadingSM>
              <HeadingSM>
                <span className="text-2xl sm:text-3xl font-semibold decoration-green-700 underline">
                  Solution:
                </span>{" "}
                Use NextJS route groups and have a unified layout.tsx file
              </HeadingSM>
              <p>
                There was an issue where the search input would lose focus every
                time the search element would render results. This was caused by
                the entire page re-rendering when new search results were
                fetched, causing the DOM to rebuild and lose focus state.
              </p>
            </div>
            <div className="mb-14">
              <HeadingSM>
                <span className="text-2xl sm:text-3xl font-semibold decoration-red-700 underline">
                  Problem:
                </span>{" "}
                Python runtime not available alongside Node for Vercel hosting
              </HeadingSM>
              <HeadingSM>
                <span className="text-2xl sm:text-3xl font-semibold decoration-green-700 underline">
                  Solution:
                </span>{" "}
                Host Python scrapers as AWS Lambda functions
              </HeadingSM>
              <p>
                Vercel&apos;s serverless functions don&apos;t support mixed
                runtimes in a single deployment. Since the scraping logic was
                written in Python but the web app used Node.js, I had to
                separate the Python scrapers into AWS Lambda functions with API
                Gateway endpoints.
              </p>
            </div>
            <div className="mb-14">
              <HeadingSM>
                <span className="text-2xl sm:text-3xl font-semibold decoration-red-700 underline">
                  Problem:
                </span>{" "}
                API rate limiting causing failed requests
              </HeadingSM>
              <HeadingSM>
                <span className="text-2xl sm:text-3xl font-semibold decoration-green-700 underline">
                  Solution:
                </span>{" "}
                Implement exponential backoff and request queuing
              </HeadingSM>
              <p>
                Multiple APIs (MusixMatch, Perplexity, Invidious) had different
                rate limits. I implemented a request queue system with
                exponential backoff to handle rate limiting gracefully and
                ensure data consistency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PageWithStickyBackButton>
  );
}
