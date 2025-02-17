"use client";
import { useCursor } from "../cursorContext/CursorContext";
import Video from "../utils/Video";
import WorkCard from "./WorkCard";
export default function Work() {
  const { setCursorVariant, setCursorProperties } = useCursor();
  const cardEnter = (text, color) => {
    setCursorVariant("text");
    setCursorProperties({
      color,
      text,
    });
  };

  const cardLeave = () => {
    setCursorVariant("default");
    setCursorProperties({
      color: "",
      text: "",
    });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-10 max-w-[1120px] mx-auto gap-8 pb-64">
      <WorkCard
        cardEnter={() => cardEnter("View Case Study", "bg-primary-salmon")}
        cardLeave={cardLeave}
        className="col-span-1 lg:col-span-2 overflow-hidden"
        href="/beacon"
        color="bg-primary-lightSalmon"
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
        cardEnter={() => cardEnter("View Project", "bg-primary-purple")}
        cardLeave={cardLeave}
        href="/intbot"
        className="overflow-hidden"
        color="bg-primary-lightPurple"
        title="Revamped Intbot website to increase user traffic."
        tags={["Front-End Engineering", "UX/UI Design"]}
      >
        <Video
          altText="IntBot website showcase video"
          src="/intbot/intbot-1.webm"
          className="absolute border-gray-300 border-[4px] shadow-xl right-0 bottom-0 translate-y-4 translate-x-4 md:w-[90%] top-auto w-[90%] sm:top-[60px] lg:top-auto lg:w-[80%]"
        />
      </WorkCard>
      <WorkCard
        cardEnter={() => cardEnter("View Project", "bg-primary-green")}
        cardLeave={cardLeave}
        className="overflow-hidden"
        href="/songsync"
        color="bg-primary-lightGreen"
        title="Syncing upcoming concerts with recently played songs."
        tags={["Front-End Engineering", "UI Design"]}
      >
        <Video
          altText="Songsync showcase video"
          src="/songsync/songsync.webm"
          className="absolute right-0 bottom-0 shadow-xl translate-y-4 translate-x-4 md:w-[90%] w-[90%] sm:top-[60px] lg:top-auto lg:w-[80%]"
        />
      </WorkCard>
    </div>
  );
}
