import React from "react";
import { projects } from "../../data/projects";
import Link from "next/link";
import { Metadata } from "next";
import Details from "@/app/components/Details";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const idNumber = parseInt(params.id);
  const currentData =
    !isNaN(idNumber) && idNumber > 0 && idNumber <= projects.length
      ? projects[idNumber - 1]
      : null;

  if (!currentData) {
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
    };
  }

  return {
    title: `${currentData.name} - Project Details`,
    description: `Detailed case study of the ${currentData.name} project, including overview, tools used, and links to the official product.`,
  };
}

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

  return <Details currentData={currentData} />;
};

export default Page;
