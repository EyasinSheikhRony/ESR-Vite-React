// @ts-nocheck
import React, { useState } from "react";
import "./About.css";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

export default function About() {
  const [onScroll, setOnScroll] = useState(false);
  return (
    <div className="mt-40 max-[768px]:mt-12 mb-16 min-w-[320px] w-[80vw] mx-auto ">
      <div className="grid lg:grid-cols-1 ">
        {/* left side  */}
        {/* <div className="w-[50vw] min-w-[320px] max-[1024px]:w-[80vw] max-[1024px]:mx-auto">
          <img src="./image/window.jpeg" alt="window" />
        </div> */}
        {/* right side  */}
        <div className="bg-gray-100 p-16 min-w-[320px] max-[425px]:p-4 flex flex-col flex-wrap rounded-xl">
          <div className="">
            <h1 className="font-bold text-5xl text-gray-700 mb-8 border-b-2 pb-2">
              About Us
            </h1>
            <h2 className="w-[100%] pb-4 bg-clip-text bg-gradient-to-r from-red-500 to-purple-800 font-bold text-lg text-transparent">
              Why You Hire Me?
            </h2>
            <h2 className="mb-12 flex font-medium font-serif text-gray-500 w-[100%]">
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
            <div className="flex flex-wrap gap-2 max-[1024px]:text-lg max-[1024px]:text-orange-600 w-[100%] mb-10 justify-between max-[1024px]:font-medium font-bold text-gray-500 text-sm">
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
                <ScrollTrigger
                  onEnter={() => setOnScroll(true)}
                  onExit={() => setOnScroll(false)}>
                  <h1 className="font-medium text-4xl text-gray-600 font-sans">
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={100} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </h1>
                </ScrollTrigger>
                <h2 className="font-extrabold text-2xl text-gray-600 font-sans">
                  JOB SUCCESS RATE
                </h2>
              </div>
              <div className="bg-gradient-to-r from-gray-200 to-gray-100 p-4 min-w-[250px] rounded-lg m-4 flex flex-col justify-center items-center shadow-xl">
                <ScrollTrigger
                  onEnter={() => setOnScroll(true)}
                  onExit={() => setOnScroll(false)}>
                  <h1 className="font-medium text-4xl text-gray-600 font-sans">
                    {onScroll && (
                      <div className="flex items-center">
                        <CountUp start={0} end={1200} duration={3} delay={0} />
                        <span>+</span>
                      </div>
                    )}
                  </h1>
                </ScrollTrigger>
                <h2 className="font-extrabold text-2xl text-gray-600 font-sans">
                  HOURS OF WORK
                </h2>
              </div>
              <div className="bg-gradient-to-r from-gray-200 to-gray-100 p-4 min-w-[250px] rounded-lg m-4 flex flex-col justify-center items-center shadow-xl">
                <ScrollTrigger
                  onEnter={() => setOnScroll(true)}
                  onExit={() => setOnScroll(false)}>
                  <h1 className="font-medium text-4xl text-gray-600 font-sans">
                    {onScroll && (
                      <div className="flex items-center">
                        <CountUp start={0} end={350} duration={3} delay={0} />
                        <span>+</span>
                      </div>
                    )}
                  </h1>
                </ScrollTrigger>
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
