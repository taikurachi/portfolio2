import Video from "../utils/Video";
import WorkCard from "./WorkCard";
export default function Work() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-10 max-w-[1120px] mx-auto gap-8 pb-64">
      <WorkCard
        className="col-span-1 lg:col-span-2 overflow-hidden"
        href="/beacon"
        color="bg-primary-salmon"
        title="Cancer treatment support app to decrease stress."
        tags={["Case Study", "UX/UI Design", "UX Research"]}
      >
        <div className="flex gap-4 w-[80%] lg:w-[50%] justify-between sm:items-start items-center top-0 sm:top-10 relative h-full mx-auto">
          <Video
            altText="Beacon showcase video"
            src="/beacon/beacon-onboarding.webm"
            className="w-[200px]"
            videoClassName="rounded-[10%] sm:rounded-[24px]"
          />
          <Video
            altText="Beacon showcase video"
            src="/beacon/beacon-second.webm"
            className="w-[200px]"
            videoClassName="rounded-[10%] sm:rounded-[24px]"
          />
          <Video
            altText="Beacon showcase video"
            src="/beacon/beacon-home.webm"
            className="w-[200px]"
            videoClassName="rounded-[10%] sm:rounded-[24px]"
          />
        </div>
      </WorkCard>
      <WorkCard
        href="/intbot"
        className="overflow-hidden"
        color="bg-primary-purple"
        title="Revamped Intbot website to increase user traffic."
        tags={["Front-End Engineering", "UX/UI Design"]}
      >
        <Video
          altText="IntBot website showcase video"
          src="/intbot/intbot-1.webm"
          className="absolute right-0 bottom-0 md:w-[90%] top-auto w-[90%] sm:top-[60px] lg:top-auto lg:w-[80%]"
        />
      </WorkCard>

      <WorkCard
        href="/intbot"
        color="bg-primary-blue"
        title="Syncing upcoming concerts with recently played songs."
        tags={["Front-End Engineering", "UX/UI Design"]}
      />
    </div>
  );
}
