import Video from "../utils/Video";
import WorkCard from "./WorkCard";
export default function Work() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-10 max-w-[1120px] mx-auto gap-8 pb-64">
      <WorkCard
        className="overflow-hidden"
        color="bg-primary-purple"
        title="Revamped Intbot website to increase user traffic."
        tags={["Front-End Engineering", "UX/UI Design"]}
        name="IntBot"
      >
        <Video
          altText="IntBot website showcase video"
          src="/intbot/intbot-1.webm"
          className="absolute right-0 bottom-0 md:w-[90%] top-auto w-[90%] sm:top-[60px] lg:top-auto lg:w-[80%]"
        />
      </WorkCard>
      <WorkCard
        color="bg-primary-blue"
        title="Cancer treatment support app to decrease stress."
        tags={["Case Study", "UX/UI Design", "UX Research"]}
        name="Cancer case study"
      ></WorkCard>
      <WorkCard
        color="bg-primary-blue"
        title="Website redesign case study."
        tags={["Case Study", "UX/UI Design", "UX Research"]}
      />
      <WorkCard
        color="bg-primary-blue"
        title="Spotify song visualization."
        tags={["Front-End Engineering", "UX/UI Design"]}
      />
    </div>
  );
}
