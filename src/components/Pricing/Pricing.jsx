import React from "react";
import "./Pricing.css";

export default function Pricing() {
  return (
    <div className="w-[70%] mx-auto ">
      <div className="mt-32 min-w-[320px]">
        <h1 className="mb-3 text-7xl max-[1024px]:text-5xl max-[768px]:ml-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-blue-500 to-gray-800 flex justify-center plan">
          Choose The Perfect Plan
        </h1>
        <h2 className="mb-12 text-md max-[1024px]:text-sm max-[768px]:ml-4 font-bold text-gray-600 flex justify-center">
          What type of job you are looking for? If you do not get the Service
          you are looking for ask me.
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          <div className="py-6 pb-10 rounded-lg shadow-2xl hover:scale-105 duration-700 max-w-[440px] min-w-[320px]">
            <h1 className="flex justify-center text-6xl text-gray-700 font-bold plan">
              $50
            </h1>
            <h2 className="flex justify-center text-xl text-gray-500 font-bold mb-6">
              Basic
            </h2>
            <h1 className="flex justify-center text-2xl text-gray-600 font-bold plan">
              PSD to HTML5
            </h1>
            <div className="mt-12">
              <div className="pl-6 flex items-center mb-2">
                <i className="fa-solid fa-check text-sky-500 font-bold text-xl mr-2"></i>{" "}
                <span className="text-md font-bold text-gray-600">
                  1 Simple Page
                </span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2">
                <i className="fa-solid fa-check text-sky-500 font-bold text-xl mr-2"></i>{" "}
                <span className="text-md font-bold text-gray-600">
                  Full and Fresh Hand Code
                </span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2">
                <i className="fa-solid fa-check text-sky-500 font-bold text-xl mr-2"></i>{" "}
                <span className="text-md font-bold text-gray-600">
                  Responsive Design
                </span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2">
                <i className="fa-solid fa-check text-sky-500 font-bold text-xl mr-2"></i>{" "}
                <span className="text-md font-bold text-gray-600">
                  Pixel Perfect Code
                </span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2">
                <i className="fa-solid fa-check text-sky-500 font-bold text-xl mr-2"></i>{" "}
                <span className="text-md font-bold text-gray-600">
                  30 Days Free Support
                </span>{" "}
              </div>
            </div>
            <div className="mt-48">
              <a
                href="contact"
                className="flex justify-center mt-28 font-bold text-xl text-white bg-gray-600 px-2 py-1 rounded-md border-2 border-gray-600 w-[50%] mx-auto hover:bg-white hover:text-gray-600 duration-700">
                Get Started
              </a>
            </div>
          </div>

          <div className="py-6 pb-10 rounded-lg shadow-2xl hover:scale-105 duration-700 bg-[#0EA6E4] max-w-[440px] min-w-[320px]">
            <h1 className="flex justify-center text-6xl text-white font-bold plan">
              $100
            </h1>
            <h2 className="flex justify-center text-xl text-white font-bold mb-6">
              Standard
            </h2>
            <h1 className="flex justify-center text-2xl text-white font-bold plan">
              HTML5 to WORDPRESS
            </h1>
            <div className="mt-12">
              <div className="pl-6 flex items-center mb-2 text-white">
                <i className="fa-solid fa-check font-bold text-xl mr-2"></i>{" "}
                <span className="text-md font-bold">WordPress Website</span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2 text-white">
                <i className="fa-solid fa-check font-bold text-xl mr-2"></i>{" "}
                <span className="text-md font-bold">
                  Full Control from WP Admin
                </span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2 text-white">
                <i className="fa-solid fa-check font-bold text-xl mr-2"></i>{" "}
                <span className="text-md font-bold">Responsive Design</span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2 text-white">
                <i className="fa-solid fa-check font-bold text-xl mr-2"></i>{" "}
                <span className="text-md font-bold">
                  Latest WordPress Support
                </span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2 text-white">
                <i className="fa-solid fa-check font-bold text-xl mr-2"></i>{" "}
                <span className="text-md font-bold">Commerce Website</span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2 text-white">
                <i className="fa-solid fa-check font-bold text-xl mr-2"></i>{" "}
                <span className="text-md font-bold">Payment Gateways</span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2 text-white">
                <i className="fa-solid fa-check font-bold text-xl mr-2"></i>{" "}
                <span className="text-md font-bold">1 Year Free Support</span>{" "}
              </div>
            </div>
            <div className="mt-32">
              <a
                href="contact"
                className="flex justify-center mt-8 font-bold text-xl text-gray-600 px-2 py-1 rounded-md border-2 border-gray-600 w-[50%] mx-auto hover:bg-gray-600 bg-white hover:text-white duration-700">
                Get Started
              </a>
            </div>
          </div>

          <div className="py-6 rounded-lg shadow-2xl hover:scale-105 duration-700 max-w-[440px] min-w-[320px]">
            <h1 className="flex justify-center text-6xl text-gray-600 font-bold plan">
              $200
            </h1>
            <h2 className="flex justify-center text-xl text-gray-600 font-bold mb-6">
              Premium
            </h2>
            <h1 className="flex justify-center text-2xl text-gray-600 font-bold plan">
              Custom Website
            </h1>
            <div className="mt-12">
              <div className="pl-6 flex items-center mb-2">
                <i className="fa-solid fa-check font-bold text-xl mr-2 text-sky-600"></i>{" "}
                <span className="text-md font-bold text-gray-600">
                  Full Control for Admin Panel
                </span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2">
                <i className="fa-solid fa-check font-bold text-xl mr-2 text-sky-600"></i>{" "}
                <span className="text-md font-bold text-gray-600">
                  Responsive Design
                </span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2">
                <i className="fa-solid fa-check font-bold text-xl mr-2 text-sky-600"></i>{" "}
                <span className="text-md font-bold text-gray-600">
                  Pixel Perfect Code
                </span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2">
                <i className="fa-solid fa-check font-bold text-xl mr-2 text-sky-600"></i>{" "}
                <span className="text-md font-bold text-gray-600">
                  Full Stack Development
                </span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2">
                <i className="fa-solid fa-check font-bold text-xl mr-2 text-sky-600"></i>{" "}
                <span className="text-md font-bold text-gray-600">
                  MERN Stack Development
                </span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2">
                <i className="fa-solid fa-check font-bold text-xl mr-2 text-sky-600"></i>{" "}
                <span className="text-md font-bold text-gray-600">
                  Commerce + Payment Gateways
                </span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2">
                <i className="fa-solid fa-check font-bold text-xl mr-2 text-sky-600"></i>{" "}
                <span className="text-md font-bold text-gray-600">
                  SEO Friendly
                </span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2">
                <i className="fa-solid fa-check font-bold text-xl mr-2 text-sky-600"></i>{" "}
                <span className="text-md font-bold text-gray-600">
                  Eye Catching Design
                </span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2">
                <i className="fa-solid fa-check font-bold text-xl mr-2 text-sky-600"></i>{" "}
                <span className="text-md font-bold text-gray-600">
                  Life Time Free Support
                </span>{" "}
              </div>
              <div className="pl-6 flex items-center mb-2">
                <i className="fa-solid fa-check font-bold text-xl mr-2 text-sky-600"></i>{" "}
                <span className="text-md font-bold text-gray-600">
                  Full & Fresh Hand Code
                </span>{" "}
              </div>
            </div>
            <div className="">
              <a
                href="contact"
                className="flex justify-center mt-8 font-bold text-xl text-white bg-gray-600 px-2 py-1 rounded-md border-2 border-gray-600 w-[50%] mx-auto hover:bg-white hover:text-gray-600 duration-700">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
