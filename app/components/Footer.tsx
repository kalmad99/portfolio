import React from "react";
import { social } from "../data/social";

type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="hidden lg:flex w-full bg-black flex-col items-center my-0 pt-12 lg:pt-24">
        <div className="w-3/4 flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col w-full lg:w-1/2 justify-center gap-y-6 text-white">
            <h1 className="text-3xl font-bold">Kaleb Mesfin</h1>
            <p className="text-lg">
              Result-driven Full Stack Engineer building robust, scalable
              solutions across web, mobile, and backend to power exceptional
              user experiences and drive business success
            </p>
          </div>
          <div className="flex justify-center space-x-10">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.target}
                className="text-white hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-10 w-10" />
              </a>
            ))}
          </div>
        </div>
        <div className="bg-gray-400 h-[1px] w-3/4 mt-20"></div>
        <div className="mx-auto max-w-7xl overflow-hidden py-4 px-6 lg:py-16 lg:px-8">
          <p className="text-center text-xs lg:text-sm tracking-wider text-white">
            &copy; Copyright {currentYear}, Made by Kaleb Mesfin
          </p>
        </div>
      </footer>
      <footer className="flex lg:hidden w-full bg-black flex-col items-center my-0 pt-12 lg:pt-24">
        <div className="w-5/6 lg:w-3/4 flex flex-col lg:flex-row justify-between items-center gap-y-8">
          <div className="w-full flex justify-start space-x-2">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.target}
                className="text-white hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-8 w-8" />
              </a>
            ))}
          </div>
          <div className="flex flex-col w-full lg:w-1/2 justify-center gap-y-6 text-white">
            <h1 className="text-2xl font-bold">Kaleb Mesfin</h1>
            <p className="lg:text-lg">
              Result-driven Full Stack Engineer building robust, scalable
              solutions across web, mobile, and backend to power exceptional
              user experiences and drive business success
            </p>
          </div>
        </div>
        <div className="bg-gray-400 h-[1px] w-3/4 mt-12 lg:mt-20"></div>
        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-6 lg:py-16 lg:px-8">
          <p className="text-center text-xs lg:text-sm tracking-wider text-white">
            &copy; Copyright {currentYear}, Made by Kaleb Mesfin
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
