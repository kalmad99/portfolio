import React from "react";
import { skills } from "../data/skills";

type Props = {};

const About = (props: Props) => {
  return (
    <div
      id="about"
      className="flex w-full lg:min-h-screen flex-col items-center justify-center gap-y-12 py-12 lg:py-24"
    >
      <div className="w-11/12 lg:w-5/6 flex flex-col items-center">
        <div className="w-full lg:w-3/4 flex flex-col items-center gap-y-4 lg:gap-y-8">
          <h1 className="uppercase tracking-wider font-bold text-2xl lg:text-4xl">
            About Me
          </h1>
          <div className="bg-[#7843E9] w-8 h-1 lg:h-2"></div>
          <p className="w-11/12 lg:w-2/3 lg:text-xl font-medium text-center">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
      </div>
      <div className="w-11/12 lg:w-5/6 flex flex-col items-center my-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="w-full lg:col-span-5 flex flex-col gap-y-5 lg:gap-y-8">
            <h1 className="text-xl lg:text-3xl font-semibold capitalize">
              Get to know me!
            </h1>
            <p className="lg:text-lg leading-5 lg:leading-7">
              I&apos;m a passionate Full Stack Engineer with a flair for
              creating dynamic and user-friendly websites and mobile
              applications, coupled with the expertise to develop robust backend
              systems. My journey in the tech industry has equipped me with a
              comprehensive skill set that spans across the full spectrum of
              enterprise development.
            </p>

            <p className="lg:text-lg leading-5 lg:leading-7">
              My dedication to understanding and solving the unique challenges
              of each project, ensures that I deliver ideal solutions that
              fulfill my clients&apos; visions. Whether you&apos;re looking to
              bring a new idea to life or optimize an existing platform,
              I&apos;m here to guide you through the process with ease and
              professionalism. I thrive on the challenges that each new project
              brings and am committed to delivering high-quality, sustainable
              solutions that exceed your expectations. Let&apos;s collaborate to
              turn your vision into reality!
            </p>
          </div>
          <div className="lg:col-span-2"></div>
          <div className="w-full lg:col-span-5 flex flex-col gap-y-5 lg:gap-y-8">
            <h1 className="text-xl lg:text-3xl font-semibold capitalize">
              My Skills
            </h1>
            <div className="flex flex-wrap gap-5">
              {skills.map((skill: any, index: number) => {
                return (
                  <div
                    className="flex items-center rounded-lg bg-gray-300 p-3 px-4 lg:px-6"
                    key={index}
                  >
                    <h1 className="lg:text-lg font-medium">{skill}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
