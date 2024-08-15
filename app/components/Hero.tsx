import Link from "next/link";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      id="home"
      className="bg-[url('/background_2.png')] flex w-full h-[75vh] lg:min-h-screen flex-col items-center justify-center mt-10 lg:mt-[100px]"
    >
      <div className="w-11/12 lg:w-3/4 flex flex-col items-center gap-y-14">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase font-bold text-center tracking-wider">
          Hey, I am Kaleb Mesfin
        </h1>
        <h1 className="w-11/12 lg:w-3/4 text-lg lg:text-xl font-semibold text-center">
          Result-driven Full Stack Engineer building robust, scalable solutions
          across web, mobile, and backend to power exceptional user experiences
          and drive business success
        </h1>
        <Link href="#projects">
          <button className="bg-[#7843E9] text-white p-4 px-12 lg:px-20 text-lg lg:text-xl font-semibold uppercase rounded-lg tracking-wider shadow-md">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
