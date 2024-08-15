import React from "react";
import { useRouter } from "next/navigation";
import { projects } from "../data/projects";

type Props = {};

const Projects = (props: Props) => {
  const router = useRouter();
  const handleDetailClick = (id: string) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div
      id="projects"
      className="flex w-full !bg-white lg:min-h-screen flex-col items-center justify-center gap-y-12 py-12 lg:py-24"
    >
      <div className="w-11/12 lg:w-5/6 flex flex-col items-center">
        <div className="w-full lg:w-3/4 flex flex-col items-center gap-y-4 lg:gap-y-8">
          <h1 className="uppercase tracking-wider font-bold text-2xl lg:text-4xl">
            Projects
          </h1>
          <div className="bg-[#7843E9] w-8 h-1 lg:h-2"></div>
          <p className="w-11/12 lg:w-2/3 lg:text-xl font-medium text-center">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>
      </div>
      <div className="w-11/12 lg:w-2/3 flex flex-col items-center mt-8 gap-y-8">
        {projects.map((project: any, index: number) => {
          return (
            <div
              key={index}
              className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-12 my-6 lg:my-12"
            >
              <div className="w-full h-full object-cover relative">
                <img src={project.image} />
              </div>
              <div className="flex flex-col items-center lg:items-start gap-y-6">
                <h1 className="text-2xl lg:text-3xl font-bold text-center lg:text-left uppercase">
                  {project.name}
                </h1>
                <p className="text-center lg:text-start">
                  {project.description}
                </p>
                <button
                  onClick={() => {
                    handleDetailClick(project.id);
                  }}
                  className="bg-[#7843E9] w-fit text-white p-3 px-8 lg:px-12 lg:text-lg uppercase rounded-lg tracking-wider shadow-md"
                >
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
