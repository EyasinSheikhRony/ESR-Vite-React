// @ts-nocheck
import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

export default function Skill() {
  const [onScroll, setOnScroll] = useState(false);

  return (
    <div className="mt-36 w-[80%] mx-auto">
      <div className="">
        <h1 className="flex max-[768px]:text-5xl max-[1024px]:py-2 justify-center font-bold text-8xl text-transparent bg-gradient-to-tr py-4 from-[#f10ba4] via-orange-500 to-[#fbf01a] bg-clip-text mb-6">
          My Skills
        </h1>
        <div className="grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 my-20 max-[1024px]:my-10 gap-5 max-[1024px]:gap-0">
          <div className="min-w-[320px] max-[1024px]:mb-4 flex flex-col items-center rounded-2xl shadow-2xl hover:scale-105 duration-700 px-6 py-12">
            <span className="">
              <i className="fa-solid fa-globe text-4xl text-sky-600"></i>
            </span>
            <h1 className="text-3xl font-bold text-gray-600 mb-4 mt-2">
              Web Development
            </h1>
            <div className="flex flex-col justify-start items-start w-[100%] mt-12">
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">
                  WordPress
                </h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={100} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">
                  JavaScript
                </h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={95} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">PHP</h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={95} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">HTML</h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={99} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">CSS</h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={96} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">
                  UX/UI Design
                </h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={98} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-[320px] max-[1024px]:mb-4 flex flex-col items-center rounded-2xl shadow-2xl hover:scale-105 duration-700 px-6 py-12">
            <span>
              <i className="fa-solid fa-screwdriver-wrench text-4xl text-green-600"></i>
            </span>
            <h1 className="text-3xl font-bold text-gray-600 mb-4 mt-2">
              Frame Work
            </h1>
            <div className="flex flex-col justify-start items-start w-[100%] mt-12">
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">
                  React JS
                </h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={100} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">
                  Tailwind CSS
                </h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={100} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">SASS</h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={100} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">
                  Vite
                </h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={100} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">Bootstrap</h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={98} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">Laravel</h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={96} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-[320px] max-[1024px]:mb-4 flex flex-col items-center rounded-2xl shadow-2xl hover:scale-105 duration-700 px-6 py-12">
            <span>
              <i className="fa-solid fa-server text-4xl text-orange-600"></i>
            </span>
            <h1 className="text-3xl font-bold text-gray-600 mb-4 mt-2">
              Server Side
            </h1>
            <div className="flex flex-col justify-start items-start w-[100%] mt-12">
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">Node JS</h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={100} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">
                  Express JS
                </h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={100} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">
                  Fresh Code
                </h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={100} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">
                  Xampp Server
                </h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={100} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">
                  Wamp Server
                </h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={100} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">Postman</h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={100} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-[320px] max-[1024px]:mb-8 flex flex-col items-center rounded-2xl hover:scale-105 shadow-2xl duration-700 px-6 py-12">
            <span>
              <i className="fa-solid fa-database text-4xl text-gray-600"></i>
            </span>
            <h1 className="text-3xl font-bold text-gray-600 mb-4 mt-2">
              Database & Other
            </h1>
            <div className="flex flex-col justify-start items-start w-[100%] mt-12">
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">MongoDB</h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={100} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">
                  Responsive
                </h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={100} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">SEO</h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={100} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">Git</h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={99} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">
                Adobe Photoshop
                </h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={95} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h1 className="text-xl font-semibold text-gray-600">
                  
                  Adobe Illustrator
                </h1>
                <p className="text-xl font-bold text-gray-600">
                  <ScrollTrigger
                    onEnter={() => setOnScroll(true)}
                    onExit={() => setOnScroll(false)}>
                    {onScroll && (
                      <div className="flex">
                        <CountUp start={0} end={90} duration={3} delay={0} />
                        <span>%</span>
                      </div>
                    )}
                  </ScrollTrigger>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
