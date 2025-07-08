import WorkCard from "./WorkCard";

export default function Work() {
  return (
    <div className="max-w-[1440px] mx-auto px-10 py-10">
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 md:overflow-visible md:snap-none md:gap-10 -mx-4 sm:mx-auto scrollbar-hide">
        <WorkCard
          title="Song Details Analysis"
          href="/songstats"
          videoSrc={["/songstats/songstats-preview.webm"]}
          timeline="Jan 2025 - May 2025"
          tools="React/TypeScript, NextJS, Python, TailwindCSS, AWS Lambda"
          description="Music analytics dashboard providing lyrics analysis, song data visualization, and video discovery using Spotify Design System."
        />

        <WorkCard
          title="Cancer Support App"
          videoSrc={["onboarding", "home", "second"].map(
            (videoType) => `/beacon/beacon-${videoType}.webm`
          )}
          href="/beacon"
          timeline="Dec 2024 - Jan 2025"
          tools="Figma, FigJam"
          bgColor="bg-primary-lightSalmon"
          description="Case study on a cancer support app driven by a comprehensive UX process and continuous iterations."
        />
      </div>
    </div>
  );
}
