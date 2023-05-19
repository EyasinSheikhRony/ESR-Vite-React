import React from "react";

export default function Portfolio() {
  return (
    <div className="mt-36 portfolio">
      <div className="">
        <h1 className="flex justify-center max-[768px]:text-5xl font-extrabold text-6xl bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400 text-transparent max-[1024px]:text-6xl">
          Portfolio
        </h1>
        <h2 className="flex justify-center font-bold pt-2 pb-6 text-2xl text-gray-600">
          Latest Projects
        </h2>
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 mb-12 w-[80%] mx-auto mt-12">
          <div className="min-w-[320px] rounded-2xl shadow-xl p-4 max-[768px]:mr-0 mr-4 mb-6 bg-gray-200">
            <a href="#" title="WordPress Website">
              <img
                src="./webpic/website02.jpg"
                alt="WordPress Website"
                className=""
              />
            </a>
            <h1 className="text-2xl font-bold text-purple-600 mt-6 mb-2">
              WORDPRESS
            </h1>
            <h1 className="text-sm font-bold text-gray-500">
              WordPress Development
            </h1>
          </div>

          <div className="min-w-[320px] rounded-2xl shadow-xl p-4 mr-0 mb-6 max-[1024px]:mr-0 bg-gray-200">
            <a href="#" title="MERN Stack">
              <img
                src="./webpic/website01.jpg"
                alt="MERN Stack"
                className=""
              />
            </a>
            <h1 className="text-2xl font-bold text-orange-600 mt-6 mb-2">
              MERN Stack
            </h1>
            <h1 className="text-sm font-bold text-gray-500">
              Full Stack Development
            </h1>
          </div>

          <div className="min-w-[320px] rounded-2xl shadow-xl p-4 mr-4 mb-6  min-[1536px]:mr-0  min-[1536px]:ml-4 max-[768px]:mr-0 bg-gray-200">
            <a href="#" title="Portfolio Website">
              <img
                src="./webpic/website04.jpg"
                alt="Portfolio Website"
                className=""
              />
            </a>
            <h1 className="text-2xl font-bold text-pink-600 mt-6 mb-2">
              Portfolio Website
            </h1>
            <h1 className="text-sm font-bold text-gray-500">
              Portfolio Website Design & Development
            </h1>
          </div>

          <div className="min-w-[320px] rounded-2xl shadow-xl p-4 mr-0 mb-6 max-[1024px]:mr-0 bg-gray-200">
            <a href="#" title="Urban.com">
              <img src="./webpic/urban1.jpg" alt="Urban Website" className="" />
            </a>
            <h1 className="text-2xl font-bold text-[#e056fd] pt-6 mb-2">
              Urban Fasion
            </h1>
            <h1 className="text-sm font-bold text-gray-500">Urban.com</h1>
          </div>

          <div className="min-w-[320px] rounded-2xl shadow-xl p-4 mr-4 mb-6 max-[768px]:mr-0  min-[1536px]:ml-4 bg-gray-200">
            <a href="#" title="Landing Page">
              <img
                src="./webpic/website05.jpg"
                alt="Landing Page"
                className="h-[245px] w-[100%]"
              />
            </a>
            <h1 className="text-2xl font-bold text-[#ED4C67] mt-6 mb-2">
              Landing Page
            </h1>
            <h1 className="text-sm font-bold text-gray-500">
              Landing Page Design & Development
            </h1>
          </div>

          <div className="min-w-[320px] rounded-2xl shadow-xl p-4 mr-0 mb-6 max-[1280px]:mr-0 bg-gray-200">
            <a href="#" title="UI/UX Design">
              <img
                src="./webpic/website03.jpg"
                alt="UI/UX Design"
                className="h-[245px] w-[100%]"
              />
            </a>
            <h1 className="text-2xl font-bold text-[#0652DD] pt-6 mb-2">
              UI/UX
            </h1>
            <h1 className="text-sm font-bold text-gray-500">UI/UX Design</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
