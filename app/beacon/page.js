"use client";
import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import HeadingMain from "../components/utils/headings/HeadingMain";
import HeadingLG from "../components/utils/headings/HeadingLG";
import HeadingMD from "../components/utils/headings/HeadingMD";
import HeadingSM from "../components/utils/headings/HeadingSM";
import Image from "next/image";
import Link from "next/link";
import Video from "../components/utils/Video";
import AccentText from "../components/utils/AccentText";
import WorkCard from "../components/work/WorkCard";
import BackButton from "../components/utils/BackButton";
import { useCursor } from "../components/cursorContext/CursorContext";
import { useEffect } from "react";

export default function BeaconPage() {
  const { setCursorProperties } = useCursor();
  useEffect(() => {
    setCursorProperties({ color: "bg-primary-salmon" });
  }, [setCursorProperties]);
  return (
    <>
      <Header />
      <BackButton />
      <div className="mx-auto pr-10 pl-10 max-w-[1120px] mt-10 flex flex-col gap-20 pb-20 sm:pb-40">
        <div className="flex flex-col gap-10">
          <HeadingMain>Cancer Support App Focused on Positivity.</HeadingMain>
          <p className="mb-0">
            A passion project inspired by a close friend diagnosed with Stage 3
            Oligodendroglioma.
          </p>
          <div className="flex flex-row gap-4">
            <Video
              videoClassName="rounded-[10%]"
              src="/beacon/beacon-onboarding.webm"
              altText="beacon onboarding video"
            />
            <Video
              videoClassName="rounded-[10%]"
              src="/beacon/beacon-second.webm"
              altText="beacon diagnosis video"
            />
            <Video
              videoClassName="rounded-[10%]"
              src="/beacon/beacon-home.webm"
              altText="beacon home video"
            />
          </div>
          <Link
            href="https://www.figma.com/proto/2j2nde84XUpr5ERidav8NH/Beacon-Prototyping?page-id=0%3A1&node-id=41-569&viewport=-1015%2C140%2C0.52&t=GHzeyB6fRfv7gydb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=41%3A569&show-proto-sidebar=1"
            className="rounded-lg p-2 pr-4 pl-4 text-lg bg-primary-lightSalmon hover:bg-primary-purple text-black w-fit  transition-colors"
          >
            View prototype
          </Link>
        </div>
        <div className={`flex justify-between gap-6 lg:flex-row flex-col`}>
          <div>
            <HeadingLG className="mb-4">Impact</HeadingLG>
            <ul className="list-disc ml-4">
              <li>
                <AccentText color="text-primary-salmon">60%</AccentText> of
                testers felt significantly more optimistic after app usage
              </li>
              <li>
                Increased user engagement for{" "}
                <AccentText color="text-primary-salmon">60%</AccentText> of
                testers through delivering personalized content
              </li>
              <li>
                Decreased stress and anxiety levels for{" "}
                <AccentText color="text-primary-salmon">40%</AccentText> of
                testers.
              </li>
            </ul>
          </div>
          <div>
            <HeadingLG className="mb-4">Role</HeadingLG>
            <ul className="list-disc ml-4">
              <li>UX/UI Design</li>
              <li>UX Research</li>
            </ul>
          </div>
          <div>
            <HeadingLG className="mb-4">Tools</HeadingLG>
            <ul className="list-disc ml-4">
              <li>Figma</li>
              <li>FigJam</li>
            </ul>
          </div>
          <div>
            <HeadingLG className="mb-4">Timeline</HeadingLG>
            <p>Dec. 2024 - Jan. 2025</p>
          </div>
        </div>
        <div>
          <HeadingLG>Problem</HeadingLG>
          <p>
            Cancer patients experience immense stress before diagnosis, during
            treatment, and even after recovery. This stress can negatively
            impact treatment outcomes, potentially contributing to tumor growth
            and spread. Current apps address some user needs, but are not
            complete solutions.
          </p>
          <p className="text-xl font-semibold">
            How can we reframe the experience of cancer to make it more{" "}
            <AccentText color="text-primary-salmon">hopeful</AccentText> and{" "}
            <AccentText color="text-primary-salmon">positive</AccentText> to
            decrease stress for everyone involved
            <AccentText color="text-primary-salmon">?</AccentText>
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2">
            <div className="sm:border-r w-full border-b p-0 sm:pr-10 pb-10">
              <HeadingMD>Depression & Anxiety</HeadingMD>
              <p>
                Research published in British Medical Journal reported that
                approximately{" "}
                <AccentText color="text-primary-salmon">20%</AccentText> and of
                cancer patients suffer from depression, and{" "}
                <AccentText color="text-primary-salmon">10%</AccentText> and
                experience anxiety disorders.
              </p>
              <p className="m-0">
                <AccentText
                  className="text-3xl font-bold"
                  color="text-primary-salmon"
                >
                  20%
                </AccentText>{" "}
                suffer from depression.
              </p>
              <p className="m-0">
                <AccentText
                  className="text-3xl font-bold"
                  color="text-primary-salmon"
                >
                  10%
                </AccentText>{" "}
                experience anxiety disorders.
              </p>
            </div>
            <div className="w-full pl-0 sm:pl-10 pr-0 pb-10 pt-10 sm:pt-0 sm:pr-10 border-b">
              <HeadingMD>Cancer-related PTSD</HeadingMD>
              <p>
                Journal of Clinical Oncology found that about{" "}
                <AccentText color="text-primary-salmon">22%</AccentText> of
                cancer survivors present with lifetime cancer-related PTSD.
              </p>
              <p className="m-0">
                <AccentText
                  className="text-3xl font-bold"
                  color="text-primary-salmon"
                >
                  22%
                </AccentText>{" "}
                of cancer survivors present with PTSD.
              </p>
            </div>
            <div className="w-full pt-10 pb-10 sm:pb-0 sm:border-b-0 sm:border-r border-b sm:pr-10">
              <HeadingMD>Stressors</HeadingMD>
              <p className="mb-2">According to the National Cancer Institute</p>
              <ul className="list-disc ml-8">
                <li>
                  stress hormones{" "}
                  <AccentText color="text-primary-salmon">
                    can cause tumors to grow and spread.
                  </AccentText>
                </li>
                <li>
                  stress can{" "}
                  <AccentText color="text-primary-salmon">
                    suppress the immune system
                  </AccentText>
                  , making it harder for the body to fight cancer.
                </li>
              </ul>
            </div>
            <div className="w-full pt-10 pl-0 sm:pl-10 pr-0 sm:pr-10">
              <HeadingMD>Current Apps</HeadingMD>
              <ul className="list-disc ml-8">
                <li>
                  lack of{" "}
                  <AccentText color="text-primary-salmon">
                    personalization
                  </AccentText>
                </li>
                <li>
                  lack of{" "}
                  <AccentText color="text-primary-salmon">
                    positivity and optimism
                  </AccentText>
                </li>
                <li>
                  only for certain cancers,{" "}
                  <AccentText color="text-primary-salmon">
                    not inclusive
                  </AccentText>{" "}
                  of every patient
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <HeadingLG>Solution</HeadingLG>
          <p>
            To decrease stress, anxiety, and depression for cancer-diagnosed
            patients, I created an{" "}
            <AccentText color="text-primary-salmon">
              education, visualization, support
            </AccentText>{" "}
            app that helps patients and surrounding people understand and
            navigate a cancer diagnosis.
          </p>
          <p>
            A study published in the Journal of Clinical Oncology found that
            patients who are well-informed about their cancer and treatment
            options experience{" "}
            <AccentText color="text-primary-salmon">20-30%</AccentText> lower
            levels of anxiety and depression compared to those who feel
            uncertain about their care.
          </p>
          <p className="">
            <AccentText
              className="text-3xl font-bold"
              color="text-primary-salmon"
            >
              20-30%
            </AccentText>{" "}
            lower levels of anxiety and depression when informed about their
            cancer.
          </p>
          <div className="flex md:flex-row flex-col-reverse gap-10 mt-20 items-center">
            <Video
              className="md:w-1/2 lg:w-1/4"
              videoClassName="rounded-[30px]"
              src="/beacon/beacon-onboarding.webm"
              altText="beacon onboarding demo"
            />
            <div>
              <HeadingMD className="text-primary-salmon mb-4">
                Quick + Supportive Onboarding
              </HeadingMD>
              <p className="font-semibold mb-4">
                No more headaches when trying to access the most vital
                information.
              </p>
              <p className="font-medium">
                Beacon allows you to sign up within seconds so you can access
                your personalized information as soon as possible.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-10 mt-20 items-center">
            <Video
              className="md:w-1/2 lg:w-1/4"
              videoClassName="rounded-[30px]"
              src="/beacon/beacon-second.webm"
              altText="beacon onboarding demo"
            />
            <div>
              <HeadingMD className="text-primary-salmon mb-4">
                Easy Lookup + Inclusive Design
              </HeadingMD>
              <p className="font-semibold mb-4">
                Every form of cancer is built in so users don&apos;t feel
                isolated about their diagnosis.
              </p>
              <p className="font-medium">
                Beacon makes sure every patient/person is seen. It delivers
                personalized content based on info inputted during onboarding.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-10 mt-20 items-center">
            <Video
              className="md:w-1/2 lg:w-1/4"
              videoClassName="rounded-[30px]"
              src="/beacon/beacon-home.webm"
              altText="beacon onboarding demo"
            />
            <div>
              <HeadingMD className="text-primary-salmon mb-4">
                Personalized Support Resources
              </HeadingMD>
              <p className="font-semibold mb-4">
                No more ambiguity or having to look for the necessary
                information.
              </p>
              <p className="font-medium">
                Beacon makes sure every patient/person is seen. It delivers
                personalized content based on info inputted during onboarding.
              </p>
            </div>
          </div>
        </div>
        <div>
          <HeadingLG>Process</HeadingLG>
          <div className="flex gap-10 flex-col lg:flex-row">
            <div className="flex gap-8">
              <AccentText
                className="font-bold text-3xl"
                color="text-primary-salmon"
              >
                01
              </AccentText>{" "}
              <div>
                <HeadingMD>Research</HeadingMD>
                <ul>
                  <li>Competitive Analysis</li>
                  <li>Identifying App Problems</li>
                  <li>Interviews & Affinity Mapping</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <AccentText
                className="font-bold text-3xl"
                color="text-primary-salmon"
              >
                02
              </AccentText>
              <div>
                <HeadingMD>Design</HeadingMD>
                <ul>
                  <li>Informed Brainstorming</li>
                  <li>Wireframes & Sketches</li>
                  <li>Lo-Fi Prototype</li>
                  <li>User Feedback</li>
                  <li>Hi-Fi Prototype</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-8">
              <AccentText
                className="font-bold text-3xl"
                color="text-primary-salmon"
              >
                03
              </AccentText>
              <div>
                <HeadingMD>Evaluate</HeadingMD>
                <ul>
                  <li>User Testing</li>
                  <li>Results & Evaluations</li>
                  <li>Feedback & Design Iterations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <HeadingLG>Research</HeadingLG>
          <div className="flex flex-col gap-10">
            <div>
              <HeadingMD>Competitive Analysis</HeadingMD>
              <p>
                I first looked into the market to determine whether existing
                apps were effectively helping patients understand their cancer
                treatment plan and offering proper support. I dove deeper into
                Outcomes4me and ACS Cares, which are two of the most popular
                cancer support apps available currently.
              </p>
              <div className="flex sm:flex-row flex-col gap-10">
                <div>
                  <div className="bg-white w-fit p-2 mb-8">
                    <Image
                      src="/beacon/outcomes-logo.webp"
                      width={500}
                      height={200}
                      alt="outcomes4me logo"
                    />
                  </div>
                  <div>
                    <HeadingSM>Pros</HeadingSM>
                    <ul className="ml-8 list-disc">
                      <li>Integration with medical records</li>
                      <li>Evidence-based content</li>
                      <li>Symptom tracking</li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <HeadingSM>Cons</HeadingSM>
                    <ul className="ml-8 list-disc">
                      <li>Lack of personalization</li>
                      <li>Overwhelming information</li>
                      <li>Limited emotional support</li>
                      <li>No emphasis on optimism</li>
                      <li>Only supports certain cancers</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="bg-white w-fit p-2 mb-8">
                    <Image
                      src="/beacon/acs-logo.webp"
                      width={350}
                      height={200}
                      alt="acs logo"
                    />
                  </div>
                  <div>
                    <HeadingSM>Pros</HeadingSM>
                    <ul className="ml-8 list-disc">
                      <li>Multilingual support</li>
                      <li>Widely-accessible</li>
                      <li>Reputable presented information</li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <HeadingSM>Cons</HeadingSM>
                    <ul className="ml-8 list-disc">
                      <li>Lack of personalization</li>
                      <li>Limited support resources</li>
                      <li>No emphasis on optimism</li>
                      <li>No treatment visualization</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="mt-8">
                It&apos;s evident that existing apps do have support resources
                and articles that inform users of their diagnosis. What&apos;s
                missing is the{" "}
                <AccentText color="text-primary-salmon">
                  optimistic energy
                </AccentText>
                ,{" "}
                <AccentText color="text-primary-salmon">
                  personalization
                </AccentText>
                , and{" "}
                <AccentText color="text-primary-salmon">
                  treatment visualization
                </AccentText>{" "}
                that breaks down the diagnosis into simpler terms. For my
                redesign, I wanted to focus on these key features.
              </p>
            </div>
            <div>
              <HeadingMD>Identifying App Problems</HeadingMD>
              <div className="flex flex-col gap-20">
                <div>
                  <HeadingSM>Doom Statistics</HeadingSM>
                  <p>
                    Here is an example google search for the survival rate of
                    Glioblastoma. When patients see the{" "}
                    <AccentText color="text-primary-salmon">
                      6.9% 5-year survival rate
                    </AccentText>
                    , specifically younger patients, they may be discouraged,
                    which can lead to worsening of symptoms, furthering
                    depression or anxiety. Instead of focusing solely on
                    survival rates or grim statistics, I aimed to emphasize{" "}
                    <AccentText color="text-primary-salmon">
                      positive words of affirmation, treatment options, support
                      resources, and success stories
                    </AccentText>
                    .
                  </p>
                  <Image
                    src="/beacon/research-1.webp"
                    alt="google search image"
                    width={800}
                    height={300}
                  />
                  <p className="mt-4">
                    My first instinct was to emphasize positivity throughout the
                    app, but it&apos;s also important to note that some people
                    don&apos;t want hope, but rather realistic news and how to
                    prepare with the inevitable. People need support with coming
                    to terms with death rather than staying strong and
                    surviving. It&apos;s important to consider edge cases and
                    think about designing for the entire audience.
                  </p>
                  <p className="mb-0">
                    For my design, I wanted to emphasize positivity but also
                    leave an option for those who want to be more realistic.
                  </p>
                </div>
                <div>
                  <HeadingSM>Lack of Support for Surrounding People</HeadingSM>
                  <p>
                    People who have loved ones or close friends in cancer
                    treatment need support as well. Here is some evidence from
                    my research supporting this fact. People often struggle with
                    finding ways to support the people who are experiencing
                    cancer.
                  </p>
                  <Image
                    src="/beacon/research-2a.webp"
                    alt="reddit post image"
                    width={800}
                    height={300}
                    className="mb-4"
                  />
                  <Image
                    src="/beacon/research-2b.webp"
                    alt="reddit post image"
                    width={800}
                    height={300}
                  />
                </div>
                <div>
                  <HeadingSM>High Button Clicks, High Friction</HeadingSM>
                  <p>
                    While testing out ACS CARES, the main app for cancer
                    support, I noted the amount of time and clicks it took for a
                    user to access the core features of the app.
                  </p>
                  <p className="m-0">
                    <AccentText
                      className="text-3xl font-bold"
                      color="text-primary-salmon"
                    >
                      12+
                    </AccentText>{" "}
                    clicks just to access content.
                  </p>
                  <p>
                    <AccentText
                      className="text-3xl font-bold"
                      color="text-primary-salmon"
                    >
                      5 minutes
                    </AccentText>{" "}
                    approximate time to onboard.
                  </p>
                  <Video
                    src="/beacon/research-3.webm"
                    className="w-1/2 md:w-1/4"
                  />
                </div>
                <div>
                  <HeadingSM>Lack of Personalized Content</HeadingSM>
                  <p>
                    This was the home screen for ACS CARES app. I signed up as
                    someone “having a loved one with brain cancer”. As a user,{" "}
                    <AccentText color="text-primary-salmon">
                      I want to learn more about the specific cancer without
                      having to look everywhere for relevant info
                    </AccentText>
                    . Also, the cancer options were more generalized. Instead of
                    having the option for Oligodendroglioma, it grouped all the
                    brain cancers together in a tab called “brain and special
                    cancers”. When creating a support app, personalization needs
                    to be emphasized. Users want to make sure their diagnosis is
                    seen.
                  </p>
                  <Image
                    src="/beacon/research-4.webp"
                    alt="affinity map image"
                    width={600}
                    height={100}
                  />
                </div>
                <div>
                  <HeadingMD>Interviews & Affinity Mapping</HeadingMD>
                  <p>
                    Before designing, I researched how patients handle cancer
                    diagnoses and the challenges they face with support apps. I
                    interviewed my friend and analyzed data from Reddit threads
                    to identify{" "}
                    <AccentText color="text-primary-salmon">
                      paint points, feature ideas, and user needs,
                    </AccentText>{" "}
                    which I organized into an affinity map.
                  </p>
                  <Image
                    src="/beacon/affinity-map.webp"
                    alt="affinity map image"
                    width={800}
                    height={300}
                  />
                </div>
                <div>
                  <HeadingSM>Research Findings</HeadingSM>
                  <ul className="list-disc ml-8">
                    <li>
                      The lack of personalization leads to a decrease in user
                      engagement.
                    </li>
                    <li>
                      People who are not familiar with medical jargon feel
                      frightened even when doctors try to explain.
                    </li>
                    <li>
                      Patients wished they had a community of people to talk to.
                    </li>
                    <li>
                      Patients wanted more information about treatment/diagnosis
                      to feel in control.
                    </li>
                  </ul>
                  <p className="mt-4 mb-0">
                    Users need personalization, a community, and context to feel
                    more in control about their situation. In my redesign, I
                    aimed to tackle all of these points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <HeadingLG>Design</HeadingLG>
          <div className="flex flex-col gap-20">
            <div>
              <HeadingMD>Informed Brainstorming</HeadingMD>
              <p>
                With user problems in mind, I brainstormed potential solutions,
                without considering feasibility at this stage.
              </p>
              <Image
                className="mb-8"
                src="/beacon/informed-brainstorming.webp"
                alt="informed brainstorming image"
                width={800}
                height={300}
              />
              <p className="mb-0">
                After going through the ideas, I narrowed down the features I
                wanted to design. I decided not to implement the integration
                with apple health kit for now due to time constraints and lack
                of user needs.
              </p>
            </div>
            <div>
              <HeadingMD>Core Features</HeadingMD>
              <p>
                Here were the 6 core features I looked to implement in my new
                design.
              </p>
              <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1 mt-8">
                <div className="flex flex-col items-center gap-4">
                  <Image
                    className="invert"
                    src="/beacon/person-icon.svg"
                    width={50}
                    height={50}
                    alt="person icon"
                  />
                  <p className="text-center">
                    Personalized articles for cancer patients and surrounding
                    patients
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Image
                    className="invert h-[50px]"
                    src="/beacon/visualization-icon.svg"
                    width={50}
                    height={50}
                    alt="visualization icon"
                  />
                  <p className="text-center">
                    Treatment visualization to ease stress and provide context
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Image
                    className="invert"
                    src="/beacon/favorite-icon.svg"
                    width={50}
                    height={50}
                    alt="favorite icon"
                  />
                  <p className="text-center">
                    Ability to save favorite articles, videos, or support groups
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Image
                    className="invert"
                    src="/beacon/videos-icon.svg"
                    width={50}
                    height={50}
                    alt="videos icon"
                  />
                  <p className="text-center">
                    Users can watch success stories and persona anecdotes.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Image
                    className="invert"
                    src="/beacon/community-icon.svg"
                    width={50}
                    height={50}
                    alt="community icon"
                  />
                  <p className="text-center">
                    Support system for different groups.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Image
                    className="invert"
                    src="/beacon/volunteer-icon.svg"
                    width={50}
                    height={50}
                    alt="volunteer icon"
                  />
                  <p className="text-center">
                    Ability to volunteer and post success stories or videos to
                    the app.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <HeadingMD>Wireframes & Sketches</HeadingMD>
              <div className="">
                <div className="flex flex-col md:flex-row gap-10 mb-8">
                  <div>
                    <HeadingSM>Home Screen</HeadingSM>
                    <p>
                      Users can access{" "}
                      <AccentText color="text-primary-salmon">
                        personalized content{" "}
                      </AccentText>
                      and{" "}
                      <AccentText color="text-primary-salmon">
                        suggested support groups
                      </AccentText>{" "}
                      in the home screen.
                    </p>
                    <Image
                      src="/beacon/sketch-1.webp"
                      width={400}
                      height={100}
                      alt="sketch image"
                    />
                  </div>
                  <div>
                    <HeadingSM>Treatment Visualization</HeadingSM>
                    <p>
                      Users can view{" "}
                      <AccentText color="text-primary-salmon">
                        how their cancer treatment
                      </AccentText>{" "}
                      fights cancer.
                    </p>
                    <Image
                      src="/beacon/sketch-2.webp"
                      width={400}
                      height={100}
                      alt="treatment visualization"
                    />
                  </div>
                </div>
                <div>
                  <HeadingSM>User Input Flow</HeadingSM>
                  <p>
                    Instead of making users sign up right away, I delayed the
                    account creation until it was absolutely necessary to
                    prevent friction and decrease drop offs.
                    <AccentText color="text-primary-salmon">
                      *progressive onboarding
                    </AccentText>
                  </p>
                  <div className="flex md:flex-row flex-col gap-10">
                    <Image
                      src="/beacon/sketch-3a.webp"
                      width={400}
                      height={100}
                      alt="user input flow image"
                    />{" "}
                    <Image
                      src="/beacon/sketch-3b.webp"
                      width={400}
                      height={100}
                      alt="user input flow image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <HeadingMD>Low-Fi Prototype</HeadingMD>
              <p>
                I iterated upon my sketches and constructed these lo-fi
                prototypes to get some{" "}
                <AccentText color="text-primary-salmon">
                  user feedback early in the process
                </AccentText>
                . If there was anything I needed to change, I could do so
                without having to sacrifice significant time or effort.{" "}
              </p>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {Array.from({ length: 8 }, () => 0).map((_, index) => (
                    <div key={index}>
                      <Image
                        className="w-full"
                        src={`/beacon/lofi-${index + 1}.svg`}
                        width={100}
                        height={100}
                        alt="sketch image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <HeadingMD>User Feedback</HeadingMD>
              <p>
                I tested my prototype with three users who were curious to learn
                more about different cancer treatments.{" "}
                <AccentText color="text-primary-salmon">
                  All users liked the personalized articles and success stories
                  that were introduced at the start
                </AccentText>
                . This was reassuring because these two functions were our
                primary focus, and what distinguishes us from existing apps.{" "}
              </p>
              <p className="m-0">
                While my ideal testing group would include real patients or
                people connected to patients, I recognized that accessing this
                group for testing at this stage would be challenging. Therefore,
                I decided to reserve testing with real patients for my
                high-fidelity interactive prototype, where their feedback will
                be most impactful.
              </p>
            </div>
            <div>
              <HeadingMD>Uncertainty over support groups</HeadingMD>
              <p className="mb-2">
                Some users noted that the{" "}
                <AccentText color="text-primary-salmon">regulation</AccentText>{" "}
                of these in-app support groups may be difficult.
              </p>
              <ol className="list-decimal ml-8 mb-4">
                <li>
                  How do we know that the advice or comfort that other people
                  give is going to benefit the user?
                </li>
                <li>
                  How is the chat going to be regulated for positive and
                  uplifting language?
                </li>
                <li>
                  How do we get users to join the groups if there are already
                  established support groups as in Reddit or FaceBook?
                </li>
              </ol>
              <p className="mb-0">
                With this in mind, I decided to remove the support groups
                function and focus on providing users with professional help
                that is consistent and is known to help.
              </p>
            </div>
            <div>
              <HeadingMD>Revised Design Features</HeadingMD>
              <div className="flex lg:flex-row flex-col mt-8 mb-8 lg:gap-0 gap-10">
                <div className="flex flex-1 flex-col md:flex-row lg:flex-col gap-4 items-center md:gap-10">
                  <div className="flex sm:flex-row flex-col gap-4 border-none sm:border-r pr-0 lg:pr-8 flex-1">
                    <Image
                      className="invert"
                      src="/beacon/community-icon.svg"
                      width={50}
                      height={50}
                      alt="community icon"
                    />
                    <div>
                      <HeadingSM>Support Groups</HeadingSM>
                      <ul className="list-disc ml-8">
                        <li>
                          inconsistent support due to various coping methods
                          (pessimism vs. optimism)
                        </li>
                        <li>lack of timely response</li>
                        <li>
                          lack of previous data, hard to get people to start
                          posting on support groups
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(55%) sepia(39%) saturate(631%) hue-rotate(314deg) brightness(94%) contrast(121%)",
                    }}
                    src="/beacon/worse-icon.svg"
                    alt="worse icon"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex-1 flex-col md:flex-row lg:flex-col gap-4 flex items-center justify-between md:gap-10">
                  <div className="flex w-full sm:flex-row flex-col flex-1 gap-4 sm:gap-8 pl-0 lg:pl-8">
                    <Image
                      className="invert"
                      src="/beacon/volunteer-icon.svg"
                      width={50}
                      height={50}
                      alt="volunteer icon"
                    />

                    <div>
                      <HeadingSM>24/7 Professional Help</HeadingSM>
                      <ul className="list-disc ml-8">
                        <li>24/7 support system via call</li>
                        <li>decreased regulation issues</li>
                        <li>consistent, effective support and advice</li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(100%) sepia(91%) saturate(963%) hue-rotate(45deg) brightness(94%) contrast(102%)",
                    }}
                    src="/beacon/better-icon.svg"
                    alt="better icon"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <p>
                Support groups sound great in theory. What can go wrong for a
                safe space where patients can share struggles and help each
                other?{" "}
                <AccentText color="text-primary-salmon">
                  The vulnerability of cancer patients, combined with the
                  potential for misinformation or harmful interactions, makes it
                  too risky to let users provide support to one another.
                </AccentText>{" "}
              </p>
              <p>
                Established platforms like Reddit, with their strict moderation
                and regulatory practices, are better equipped to handle these
                complexities.
              </p>
              <p>
                To ensure consistency and safety, it&apos;s best to focus the
                app on consistent resources for professional help. Established
                platforms like Reddit, with their strict moderation and
                regulatory practices, are better equipped to handle these
                complexities.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-4">
                <Image
                  className="invert"
                  src="/beacon/difficulties-icon.webp"
                  alt="difficulties icon"
                  width={80}
                  height={80}
                />
                <HeadingSM>
                  Difficulties With Addressing Every Cancer and Treatment Type
                </HeadingSM>
              </div>
              <p className="mb-0">
                To be an effective, professional app that meets my visions, I
                want every type of cancer and treatment to have a support
                article and visualization graphic associated. In an ideal world,
                I would have every edge case documented on the app so users
                don&apos;t feel neglected or alone in their journey. For this
                app design, I simplified this scenario to tackle one form of
                cancer.
              </p>
            </div>
            <div>
              <HeadingMD>High-fidelity Prototype</HeadingMD>
              <p>
                My goal of the Hi-Fi prototype is to validate if my design
                changes are genuine improvements, if people would use the app
                over other alternatives, and test the usability. I created a
                basic interactive prototype using Figma to test my hypothesis.
              </p>
              <HeadingSM>Onboarding</HeadingSM>
              <div className="flex gap-8 mb-8">
                <div>
                  <Image
                    className="w-full"
                    src="/beacon/hifi-1.svg"
                    width={300}
                    height={500}
                    alt="hifi image 1"
                  />
                </div>
                <div>
                  <Image
                    className="w-full"
                    src="/beacon/hifi-2.svg"
                    width={300}
                    height={500}
                    alt="hifi image 2"
                  />
                </div>
                <div>
                  <Image
                    className="w-full"
                    src="/beacon/hifi-3.svg"
                    width={300}
                    height={500}
                    alt="hifi image 3"
                  />
                </div>
              </div>
              <HeadingSM>Main Flow</HeadingSM>
              <div className="flex gap-8 mb-8">
                <div>
                  <Image
                    className="w-full"
                    src="/beacon/hifi-4.svg"
                    width={300}
                    height={500}
                    alt="hifi image 4"
                  />
                </div>
                <div>
                  <Image
                    className="w-full"
                    src="/beacon/hifi-5.svg"
                    width={300}
                    height={500}
                    alt="hifi image 5"
                  />
                </div>
                <div>
                  <Image
                    className="w-full"
                    src="/beacon/hifi-6.svg"
                    width={300}
                    height={500}
                    alt="hifi image 6"
                  />
                </div>
              </div>

              <div className="flex gap-8">
                <div>
                  <Image
                    className="w-full"
                    src="/beacon/hifi-7.svg"
                    width={300}
                    height={500}
                    alt="hifi image 7"
                  />
                </div>
                <div>
                  <Image
                    className="w-full"
                    src="/beacon/hifi-8.svg"
                    width={300}
                    height={500}
                    alt="hifi image 8"
                  />
                </div>
                <div>
                  <Image
                    className="w-full"
                    src="/beacon/hifi-9.svg"
                    width={300}
                    height={500}
                    alt="hifi image 9"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <HeadingLG>Evaluate</HeadingLG>
          <div className="flex flex-col gap-20">
            <div>
              <HeadingMD>User Testing</HeadingMD>
              <p>
                I moderated user testing with 5 users with varying backgrounds.
                One was my friend, current cancer patient. The rest included
                people who were interested in learning more about cancer.
              </p>
              <p>Here&apos;s a brief overview of the process:</p>
              <ul className="ml-8 list-disc mb-8">
                <li>Introduce the project goal, and put users at ease.</li>
                <li>
                  Describe scenario, set up context, and allow users to use the
                  app while thinking aloud.
                </li>
                <li>Ask follow up questions and gather feedback.</li>
                <li>
                  Let users fill out questionnaire. Thank them for
                  participation.
                </li>
              </ul>
              <Link
                href="https://drive.google.com/file/d/1I6JsYD2AZGKRN1naGODyurC_x2Jftgb0/view?usp=sharing"
                className="p-2 pr-3 pl-3 text-black block w-fit hover:bg-purple-300 bg-primary-salmon rounded-lg"
              >
                View detailed script
              </Link>
            </div>
            <div>
              <HeadingMD>Results & Evaluations</HeadingMD>
              <div className="flex flex-col gap-20">
                <div>
                  <HeadingSM>Measuring Success</HeadingSM>
                  <p>
                    To quantitatively measure the success of the design, I broke
                    down the larger design goals into detailed, measurable ones,
                    and developed a questionnaire to help me answer those
                    questions.
                  </p>
                  <div className="flex sm:flex-row flex-col gap-8 mb-8">
                    <div className="p-8 bg-black">
                      <HeadingSM>Detailed Design Goals</HeadingSM>
                      <p>
                        Alleviate stress and anxiety from users educational
                        content
                      </p>
                      <p>Allow users to explore personalized content</p>
                      <p>
                        Help users understand more cancer treatment plans to
                        decrease stress and uncertainty
                      </p>
                      <p>
                        Instill positivity and optimism through success stories
                      </p>
                    </div>
                    <div className="p-8 bg-black">
                      <HeadingSM>Evaluation Questions</HeadingSM>
                      <p>
                        Q: How much did learning more about diagnosis decrease
                        stress and anxiety levels?
                      </p>
                      <p>
                        Q: Does the personalized content increase your
                        engagement?
                      </p>
                      <p>
                        Q: Did learning about different treatment plans help
                        with clearing confusion or uncertainties
                      </p>
                      <p>
                        Q: Did you feel more optimistic reading and seeing the
                        success stories right here in the app?
                      </p>
                    </div>
                  </div>
                  <Link
                    href="https://drive.google.com/file/d/1s3kiJB81LNq-bLj3TiOrDZ9f36ksjptQ/view?usp=sharing"
                    className="p-2 text-black block w-fit hover:bg-purple-300 bg-primary-salmon rounded-lg"
                  >
                    View questionnaire
                  </Link>
                </div>
                <div>
                  <HeadingSM>Results</HeadingSM>
                  <p>
                    I was able to gather a lot of positive feedback on the
                    prototype, each with varying backgrounds. Here’s a summary
                    of the questionnaire.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <Image
                      className="w-full"
                      src="/beacon/results-1.webp"
                      width={300}
                      height={200}
                      alt="results image"
                    />
                    <Image
                      className="w-full"
                      src="/beacon/results-2.webp"
                      width={300}
                      height={200}
                      alt="results image"
                    />
                    <Image
                      className="w-full"
                      src="/beacon/results-3.webp"
                      width={300}
                      height={200}
                      alt="results image"
                    />{" "}
                    <Image
                      className="w-full"
                      src="/beacon/results-4.webp"
                      width={300}
                      height={200}
                      alt="results image"
                    />
                  </div>
                  <p className="mb-0">
                    Most importantly,{" "}
                    <AccentText color="text-primary-salmon">
                      none of my features had a negative effect on the 5 users
                      tested
                    </AccentText>
                    . All users noted an improvement in their cancer support
                    experience in one form or another.
                  </p>
                </div>
                <div>
                  <HeadingSM>Notable Outcomes</HeadingSM>
                  <p>
                    The most significant outcome was the{" "}
                    <AccentText color="text-primary-salmon">
                      increased optimism
                    </AccentText>{" "}
                    users felt after seeing success stories. This makes sense,
                    as users are often encouraged when they see someone in a
                    similar situation improve.
                  </p>
                  <p>
                    <AccentText color="text-primary-salmon">60%</AccentText> of
                    users reported no change in their feelings when learning
                    more about their diagnosis, which is understandable given
                    the neutral nature of facts. Proactive users may have also
                    done their own research prior. After discussing with some
                    users, many have noted that the first thing they would do is
                    to search up their diagnosis on Google. It wouldn’t make
                    sense for users to go straight to downloading the app.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <HeadingMD>Feedback & Design Iterations</HeadingMD>
              <p>
                I made sure to write down each piece of user feedback during
                testing. I used FigJam to organize and group the feedback by
                sections in the app.
              </p>
              <Image
                className="mb-8"
                src="/beacon/feedback.webp"
                width={800}
                height={300}
                alt="feedback image"
              />
              <div>
                <div className="flex flex-col gap-20">
                  <div>
                    <HeadingSM>
                      Decreasing Friction and Improving Initial Impressions
                    </HeadingSM>
                    <p>
                      Users noted that the onboarding process felt too
                      interrogative and more like a survey. These were the
                      changes I implemented below to address the issues.
                    </p>
                    <div className="flex flex-col gap-10 mt-10 mb-8">
                      <div className="flex sm:flex-row flex-col gap-10 items-start sm:items-center">
                        <Image
                          className="h-fit invert"
                          src="/beacon/progressive-icon.webp"
                          width={100}
                          height={80}
                          alt="progressive discolure icon"
                        />
                        <div>
                          <HeadingSM>Progressive Disclosure</HeadingSM>
                          <p>
                            Using an UX technique called progressive disclosure,
                            I decreased the cognitive load for users through the
                            separation of each question.
                          </p>
                        </div>
                      </div>
                      <div className="flex sm:flex-row flex-col gap-10 items-start sm:items-center">
                        <Image
                          className="invert h-fit"
                          src="/beacon/progress-icon.webp"
                          width={100}
                          height={80}
                          alt="progress icon"
                        />
                        <div>
                          <HeadingSM>Visual Progess Bar</HeadingSM>
                          <p>
                            I added progress dots in the bottom to indicate how
                            far along the user was in the onboarding process.
                            Having a progress visual will motivate users to
                            continue to finish their onboarding and reassure
                            them of any uncertainties.
                          </p>
                        </div>
                      </div>
                      <div className="flex sm:flex-row flex-col gap-10 items-start sm:items-center">
                        <Image
                          className="invert h-[100px]"
                          src="/beacon/friendly-icon.svg"
                          width={100}
                          height={80}
                          alt="friendly icon"
                        />

                        <div>
                          <HeadingSM>Friendly Langauge</HeadingSM>
                          <p>
                            I added friendly language in the first screen to
                            make the onboarding process feel less invasive,
                            tedious, or negative. I wanted users to feel safe
                            and supported when they first download the app.
                          </p>
                        </div>
                      </div>
                    </div>
                    <HeadingSM>Before</HeadingSM>
                    <Image
                      className="mb-8 sm:w-1/4 w-full"
                      src="/beacon/hifi-1.svg"
                      width={260}
                      height={100}
                      alt="hifi prototype"
                    />
                    <HeadingSM>After</HeadingSM>
                    <div className="flex flex-col sm:flex-row gap-10 mb-8">
                      <div>
                        <Image
                          src="/beacon/initial-1.svg"
                          width={300}
                          height={100}
                          alt="onboarding redesign"
                        />
                      </div>
                      <div>
                        <Image
                          src="/beacon/initial-2.svg"
                          width={300}
                          height={100}
                          alt="onboarding redesign"
                        />
                      </div>
                      <div>
                        <Image
                          src="/beacon/initial-3.svg"
                          width={300}
                          height={100}
                          alt="onboarding redesign"
                        />
                      </div>
                      <div>
                        <Image
                          src="/beacon/initial-4.svg"
                          width={300}
                          height={100}
                          alt="onboarding redesign"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <HeadingSM>Adding Manual Lookup Option</HeadingSM>
                    <p>
                      Users introduced an edge case where they might not fully
                      know the diagnosis. In this case, they want to be able to
                      manually navigate to the diagnosis by narrowing down
                      possible options.
                    </p>
                    <div className="flex sm:flex-row flex-col gap-10">
                      <Image
                        className="invert"
                        src="/beacon/usability-icon.svg"
                        width={100}
                        height={100}
                        alt="usability icon"
                      />
                      <div>
                        <HeadingSM>Increasing Usability</HeadingSM>
                        <p>
                          Adding a manual lookup option enhances the app&apos;s
                          usability by simplifying the process of finding a
                          diagnosis. This feature is especially helpful for
                          users who may not know their exact diagnosis or
                          struggle to remember the spelling of complex medical
                          terms.
                        </p>
                      </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-4 md:gap-10 mb-8">
                      <div>
                        <HeadingSM>Before</HeadingSM>
                        <div>
                          <Image
                            className=""
                            src="/beacon/hifi-3.svg"
                            width={340}
                            height={100}
                            alt="hifi prototype"
                          />
                        </div>
                      </div>
                      <div>
                        <HeadingSM>After</HeadingSM>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                          <div>
                            <Image
                              src="/beacon/lookup-1.svg"
                              width={340}
                              height={100}
                              alt="hifi prototype"
                            />
                          </div>
                          <div>
                            <Image
                              src="/beacon/lookup-2.svg"
                              width={340}
                              height={100}
                              alt="hifi prototype"
                            />
                          </div>
                          <div>
                            <Image
                              src="/beacon/lookup-3.svg"
                              width={340}
                              height={100}
                              alt="hifi prototype"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <HeadingSM>
                      Adding Descriptions to the Navigation Icons
                    </HeadingSM>
                    <p>
                      Users noted that not everyone may be familiar with icon
                      meanings, which can increase confusion in the app.
                    </p>
                    <div className="flex sm:flex-row flex-col gap-10">
                      <Image
                        className="invert"
                        src="/beacon/universal-icon.svg"
                        width={100}
                        height={100}
                        alt="usability icon"
                      />
                      <div>
                        <HeadingSM>Universal Design</HeadingSM>
                        <p>
                          Adding descriptions ensures that people of all
                          backgrounds, including varying ages, abilities, and
                          needs, can navigate the app with clarity and ease.
                          Universal design is especially critical for medical
                          apps, as it promotes accessibility and inclusivity for
                          all users.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-10">
                      <div>
                        <HeadingSM>Before</HeadingSM>
                        <Image
                          src="/beacon/hifi-4.svg"
                          width={300}
                          height={100}
                          alt="onboarding redesign"
                        />
                      </div>
                      <div>
                        <HeadingSM>After</HeadingSM>
                        <Image
                          src="/beacon/universal-1.svg"
                          width={300}
                          height={100}
                          alt="onboarding redesign"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <HeadingMD>Latest Prototype</HeadingMD>
              <p>
                Here&apos;s the latest prototype with some of my updated
                changes.
              </p>
              <div className="w-3/4 sm:w-1/4 rounded-lg">
                <Video
                  videoClassName="rounded-[10%]"
                  className="w-full"
                  src="/beacon/finished-prototype.webm"
                  altText="finished prototype video"
                />
              </div>
            </div>
            <div>
              <HeadingMD>Future Steps</HeadingMD>
              <div>
                <HeadingSM>Adding Volunteer Option</HeadingSM>
                <p className="mb-0">
                  My app relies on existing data to deliver relevant content to
                  each user. Adding an option for users to volunteer success
                  stories or other useful information could help keep the
                  app&apos;s content fresh and up-to-date. I initially excluded
                  this feature from the MVP, as it requires an established user
                  base to be effective.
                </p>
              </div>
            </div>
            <div>
              <HeadingMD>Reflections & Notes</HeadingMD>
              <div>
                <HeadingSM>What Went Well</HeadingSM>
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    Successfully validated my hypothesis with a working
                    prototype.
                  </li>
                  <li>
                    Successfully designed an intuitive interface that is
                    accessible to people of all ages, abilities, and technical
                    skills.
                  </li>
                  <li>
                    Users reported feeling more optimistic after engaging with
                    features like success stories and motivational messages.
                  </li>
                </ul>
              </div>
              <div>
                <HeadingSM>Challenges</HeadingSM>
                <ol className="list-decimal ml-8 mb-4">
                  <li>
                    Accounting for every type of cancer, their treatment, and
                    how different factors can influence symptoms/treatment
                    types. Different ways of handling such a large info database
                    include pulling data from reputable API like National Cancer
                    Institute API, collaborating with Cancer Experts and
                    creating resources manually, or scraping the web.
                  </li>
                  <li>
                    It&apos;s incredibly hard to perform tests on live patients,
                    leading to accuracy drop-offs during testing.
                  </li>
                  <li>
                    Cancer treatments, research, and guidelines evolve rapidly.
                    Keeping the database current and ensuring users receive
                    accurate, evidence-based information requires continuous
                    updates, partnerships with medical organizations, and
                    regular maintenance of the app&apos;s content.
                  </li>
                </ol>
              </div>
              <div>
                <HeadingSM>Lessons Learned</HeadingSM>
                <ul className="list-disc ml-8 mb-4">
                  <li>
                    Getting user feedback early allows me to gauge what core
                    features are effective or not.
                  </li>
                  <li>
                    Learned how to design with sensitivity, ensuring features
                    provide support without overwhelming users.
                  </li>
                  <li>
                    Measuring user testing results allows me to validate my
                    hypothesis and ensure my design is effective.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <HeadingLG>Other Work</HeadingLG>

          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1120px] mx-auto gap-8">
            <WorkCard
              href="/intbot"
              className="overflow-hidden"
              color="bg-primary-lightPurple"
              title="Revamped Intbot website to increase user traffic."
              tags={["Front-End Engineering", "UX/UI Design"]}
            >
              <Video
                altText="IntBot website showcase video"
                src="/intbot/intbot-1.webm"
                className="absolute border-gray-300 border-[4px] right-0 bottom-0 translate-y-4 translate-x-4 md:w-[90%] top-auto w-[90%] sm:top-[60px] lg:top-auto lg:w-[80%]"
              />
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
