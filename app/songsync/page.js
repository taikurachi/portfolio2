import Header from "../components/utils/Header";
import HeadingMain from "../components/utils/headings/HeadingMain";
import HeadingLG from "../components/utils/headings/HeadingLG";
import WorkCard from "../components/work/WorkCard";
import Footer from "../components/utils/Footer";
import Video from "../components/utils/Video";
import Link from "next/link";
import BackButton from "../components/utils/BackButton";

export default function SongsyncPage() {
  return (
    <>
      <Header />
      <BackButton />
      <div className="mx-auto pr-10 pl-10 max-w-[1120px] mt-10 flex flex-col gap-20 pb-20 sm:pb-40">
        <div className="flex flex-col gap-10">
          <HeadingMain>
            Syncing upcoming concerts with recently played songs.
          </HeadingMain>
          <p className="mb-0">
            Figuring out Spotify OAuth, NextJS proxy routes, and displaying an
            aesthetic UI.
          </p>
          <div className="flex flex-row gap-4">
            <Video src="/songsync/songsync.webm" altText="songsync demo" />
          </div>
          <Link
            href="https://www.figma.com/proto/2j2nde84XUpr5ERidav8NH/Beacon-Prototyping?page-id=0%3A1&node-id=41-569&viewport=-1015%2C140%2C0.52&t=GHzeyB6fRfv7gydb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=41%3A569&show-proto-sidebar=1"
            className="rounded-lg p-2 pr-4 pl-4 text-lg bg-primary-green hover:bg-primary-purple text-black w-fit  transition-colors"
          >
            View code
          </Link>
        </div>
        <div className={`flex gap-8 md:flex-row flex-col`}>
          <div>
            <HeadingLG className="mb-4">Role</HeadingLG>
            <ul className="list-disc ml-4">
              <li>Front-End Engineer</li>
              <li>UI Design</li>
            </ul>
          </div>
          <div>
            <HeadingLG className="mb-4">Tools</HeadingLG>
            <ul className="list-disc ml-4">
              <li>NextJS</li>
              <li>ReactJS</li>
              <li>JavaScript</li>
              <li>CSS Modules</li>
              <li>Spotify REST API</li>
              <li>Ticketmaster REST API</li>
              <li>Figma</li>
            </ul>
          </div>
          <div>
            <HeadingLG className="mb-4">Timeline</HeadingLG>
            <p>Oct. 2024 - Nov. 2025</p>
          </div>
        </div>
        <div>
          <HeadingLG>Problem</HeadingLG>
          <p>
            Users often miss concerts due to lack of notice from artists about
            concert dates. This app aims to notify users of upcoming concerts by
            artists of their recently played 50 songs.
          </p>
        </div>
        <div>
          <HeadingLG>Process</HeadingLG>
          <p>
            I used Spotify&apos;s OAuth system to acquire an access token, which
            allowed me to fetch the user&apos;s recently played songs. After
            retrieving the JSON data with song and artist details, I used each
            artist&apos;s name to make a request through a proxy route in
            Next.js, fetching related events from the Ticketmaster API.
            Additionally, I implemented the Color-Thief API to extract the
            dominant color from each song&apos;s album image, using this color
            palette to enhance the visual experience of the web app. I
            wasn&apos;t able to deploy my project live because Spotify places a
            restriction on web apps until they are approved.
          </p>
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
              href="/intbot"
              className="overflow-hidden"
              color="bg-primary-purple"
              title="Revamped Intbot website to increase user traffic."
              tags={["Front-End Engineering", "UX/UI Design"]}
            >
              <Video
                altText="IntBot website showcase video"
                src="/intbot/intbot-1.webm"
                className="absolute border-gray-300 border-[4px] right-0 bottom-0 translate-y-4 translate-x-4 md:w-[90%] top-auto w-[90%] sm:top-[60px] lg:top-auto lg:w-[80%]"
              />
            </WorkCard>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
