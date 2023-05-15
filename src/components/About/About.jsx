import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="mt-40 max-[768px]:mt-12 mb-16 min-w-[320px] ">
      <div className="flex max-[1024px]:flex-wrap ">
        {/* left side  */}
        <div className="w-[50vw] min-w-[320px] max-[1024px]:w-[80vw] max-[1024px]:mx-auto">
          <img src="./image/window.jpeg" alt="window" />
        </div>
        {/* right side  */}
        <div className="bg-gray-100 p-6 min-w-[320px] max-[1024px]:px-0 max-[1024px]:pt-6 w-[50vw] max-[1024px]:w-[80vw] max-[1024px]:mx-auto flex flex-col flex-wrap">
          <div className="">
            <h1 className="font-bold max-[1024px]:pl-4 text-5xl text-gray-700 mb-8 border-b-2 pb-2 max-[1024px]:text-lg">
              About Us
            </h1>
            <h2 className="w-[100%] max-[1024px]:pl-4 bg-clip-text bg-gradient-to-r from-red-500 to-purple-800 font-bold text-lg text-transparent">
              Why You Hire Me?
            </h2>
            <h2 className="mb-12 max-[1024px]:pl-4 max-[1024px]:pr-4 flex font-medium font-serif text-gray-500 max-[1024px]:text-sm max-[1024px]:font-sm max-[1024px]:mb-6">
              I am a Full-stack Web Developer. Who isn't interested in creating
              error-free websites with 100% client satisfaction? I have a
              passion for learning and sharing my knowledge with others as
              openly as possible. I love solving real-world problems. I am
              strategic and goal-oriented and always work with an end goal in
              mind. Over the years, I have built 50+ plus websites for my
              clients. I pride myself on producing quality work and maintaining
              excellent communication. Most of the time I work with React JS but
              I enjoy working with some technologies including WordPress,
              JavaScript, Python, JQuery & PHP language.
            </h2>
            <div className="flex flex-wrap max-[1024px]:pl-4 max-[1024px]:text-lg max-[1024px]:text-orange-600 max-[1024px]:pr-4 w-[100%] max-[1024px]:w-[80vw] mb-10 max-[1024px]:mx-auto justify-between max-[1024px]:font-medium font-extrabold text-gray-500 text-sm">
              <h1 className="max-[1024px]:w-full">Full Stack Web Developer</h1>
              <h1 className="max-[1024px]:w-full">WordPress Developer</h1>
              <h1 className="max-[1024px]:w-full">MERN Stack Developer</h1>
              <h1 className="max-[1024px]:w-full">UI/UX Designer</h1>
              <h1 className="max-[1024px]:w-full">WEB Design & Development</h1>
            </div>
          </div>

          <div className="">
            <div className="flex flex-wrap justify-center">
              <div className="bg-gradient-to-r from-gray-200 to-gray-100 p-4 min-w-[250px] rounded-lg m-4 flex flex-col justify-center items-center shadow-xl">
                <h1 className="font-medium text-4xl text-gray-600 font-sans">
                  100%
                </h1>
                <h2 className="font-extrabold text-2xl text-gray-600 font-sans">
                  JOB SUCCESS RATE
                </h2>
              </div>
              <div className="bg-gradient-to-r from-gray-200 to-gray-100 p-4 min-w-[250px] rounded-lg m-4 flex flex-col justify-center items-center shadow-xl">
                <h1 className="font-medium text-4xl text-gray-600 font-sans">
                  1,500+
                </h1>
                <h2 className="font-extrabold text-2xl text-gray-600 font-sans">
                  HOURS OF WORK
                </h2>
              </div>
              <div className="bg-gradient-to-r from-gray-200 to-gray-100 p-4 min-w-[250px] rounded-lg m-4 flex flex-col justify-center items-center shadow-xl">
                <h1 className="font-medium text-4xl text-gray-600 font-sans">
                  350+
                </h1>
                <h2 className="font-extrabold text-2xl text-gray-600 font-sans">
                  HAPPY CLIENTS
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
