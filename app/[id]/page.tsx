"use client";

import React from "react";
import { projects } from "../data/projects";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Page = ({ params }: { params: { id: string } }) => {
  const idNumber = parseInt(params.id);
  const currentData =
    !isNaN(idNumber) && idNumber > 0 && idNumber <= projects.length
      ? projects[idNumber - 1]
      : null;

  if (!currentData) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-y-10">
        <h1 className="text-5xl font-semibold capitalize">Project not found</h1>
        <Link href="/">
          <button className="bg-[#7843E9] text-white p-4 px-12 lg:px-20 text-lg lg:text-xl font-semibold uppercase rounded-lg tracking-wider shadow-md">
            Go Home
          </button>
        </Link>
      </main>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col min-h-screen"
      >
        {/* Hero */}
        <div className="w-full flex flex-col items-center pt-10">
          <div className="bg-gray-100 w-full h-[70vh] lg:min-h-screen flex flex-col justify-center items-center">
            <div className="w-11/12 lg:w-3/4 min-h-screen flex flex-col justify-center items-center gap-y-14">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl uppercase font-bold text-center tracking-wider">
                {currentData.name}
              </h1>
              <h1 className="w-11/12 lg:w-3/4 text-lg lg:text-xl font-medium lg:font-semibold text-center">
                This page contains the case study of {currentData.name} Project
                which includes the Project Overview, Tools Used and Live Links
                to the official product.
              </h1>
              {currentData.link !== "" && (
                <Link href={currentData.link} target="blank">
                  <button className="bg-[#7843E9] text-white p-4 px-12 lg:px-20 text-lg lg:text-xl font-semibold uppercase rounded-lg tracking-wider shadow-md">
                    Link
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="w-full h-full bg-white flex flex-col items-center py-24 gap-y-12">
            <div className="flex flex-col items-center w-11/12 lg:w-2/3 h-full">
              <img src={currentData.extendedImage} />
            </div>
            <div className="w-4/5 lg:w-1/2 flex flex-col items-start gap-y-10">
              <h1 className="text-4xl font-bold">Project Overview</h1>
              <div className="flex flex-col gap-y-6">
                {currentData.extendedDescription?.map((description, index) => {
                  return (
                    <p key={index} className="text-xl leading-8">
                      {description}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-4/5 lg:w-1/2 flex flex-col items-start gap-y-10">
              <h1 className="text-4xl font-bold">Tools Used</h1>
              <div className="flex flex-wrap gap-5">
                {currentData.toolsUsed?.map((tool: any, index: number) => {
                  return (
                    <div
                      className="flex items-center rounded-lg bg-gray-300 p-3 px-4 lg:px-6"
                      key={index}
                    >
                      <h1 className="lg:text-lg font-medium">{tool}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-4/5 lg:w-1/2 flex flex-col items-start gap-y-10">
              <Link href="/">
                <button className="border-2 border-[#7843E9] p-4 px-12 lg:px-20 text-lg lg:text-xl font-semibold uppercase rounded-lg tracking-wider shadow-md">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.main>
    </AnimatePresence>
  );
};

export default Page;
