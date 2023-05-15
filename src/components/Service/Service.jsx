import React from "react";
import { FaLaptopCode } from "react-icons/fa";

export default function Service() {
  return (
    <div className="mt-36 max-[768px]:mt-10 w-[80%] mx-auto max-[768px]:w-[100%] mb-10">
      <div className="flex items-center flex-col">
        <h1 className="font-bold text-8xl max-[768px]:text-5xl bg-gradient-to-r from-purple-600 via-sky-600 to-orange-600 bg-clip-text text-transparent">
          Services
        </h1>
        <h2 className="text-lg font-medium text-gray-600 mt-2 mb-8">
          What I Will Do For You?
        </h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 justify-between items-center text-center">
          <div className=" min-w-[320px] bg-gradient-to-tr from-purple-400 to-purple-600 text-white p-4 rounded-lg ml-4 mt-4 mb-4 mr-4 flex justify-between items-center flex-col shadow-xl">
            <FaLaptopCode className="text-4xl" />
            <h1 className="font-bold text-2xl mb-2">FRONT-END DEVELOPER</h1>
            <h2 className="font-semibold text-md">
              I’m a Front End Web developer who is passionate about making
              error-free websites with 100% client satisfaction.
            </h2>
            <a
              href="contact"
              className="font-semibold text-xl px-2 py-1 rounded-md bg-transparent hover:border-gray-600 hover:bg-gray-600 duration-500 border-2 mt-10 mb-2">
              Hire Me
            </a>
          </div>

          <div className=" min-w-[320px] max-[1280px]:ml-2 max-[1024px]:ml-4 bg-gradient-to-tr from-sky-400 to-sky-600 text-white p-4 rounded-lg ml-0 mt-4 mb-4 mr-4 flex justify-between items-center flex-col shadow-xl">
            <i className="fa-solid fa-server text-4xl"></i>
            <h1 className="font-bold text-2xl mb-2">BACK-END DEVELOPER</h1>
            <h2 className="font-semibold text-md">
              I’m a Back End Web developer who is passionate about making
              error-free websites with 100% client satisfaction.
            </h2>
            <a
              href="contact"
              className="font-semibold text-xl px-2 py-1 rounded-md bg-transparent hover:border-gray-600 hover:bg-gray-600 duration-500 border-2 mt-10 mb-2">
              Hire Me
            </a>
          </div>

          <div className=" min-w-[320px] max-[1024px]:ml-4 bg-gradient-to-tr from-orange-400 to-orange-600 text-white p-4 rounded-lg ml-0 mt-4 mb-4 mr-4 flex justify-between items-center flex-col shadow-xl">
            <i className="fa-solid fa-code text-4xl"></i>
            <h1 className="font-bold text-2xl mb-2">FULL-STACK DEVELOPER</h1>
            <h2 className="font-semibold text-md">
              I’m a Full Stack Web developer who is passionate about making
              error-free websites with 100% client satisfaction.
            </h2>
            <a
              href="contact"
              className="font-semibold text-xl px-2 py-1 rounded-md bg-transparent hover:bg-gray-600 duration-500 border-2 hover:border-gray-600 mt-10 mb-2">
              Hire Me
            </a>
          </div>

          <div className=" min-w-[320px] bg-gradient-to-tr from-pink-400 to-pink-600 text-white p-4 rounded-lg ml-4 mt-4 mb-4 mr-4 flex justify-between items-center flex-col shadow-xl">
            <i className="fa-brands fa-wordpress text-4xl"></i>
            <h1 className="font-bold text-2xl mb-2">WORDPRESS DEVELOPER</h1>
            <h2 className="font-semibold text-md">
              I’m a WordPress Developer who is passionate about making
              error-free websites with 100% client satisfaction.
            </h2>
            <a
              href="contact"
              className="font-semibold text-xl px-2 py-1 rounded-md bg-transparent hover:border-gray-600 hover:bg-gray-600 duration-500 border-2 mt-10 mb-2">
              Hire Me
            </a>
          </div>

          <div className=" min-w-[320px] max-[1280px]:ml-2 max-[1024px]:ml-4 bg-gradient-to-tr from-green-400 to-green-600 text-white p-4 rounded-lg ml-0 mt-4 mb-4 mr-4 flex justify-between items-center flex-col shadow-xl">
            <i className="fa-brands fa-react text-4xl"></i>
            <h1 className="font-bold text-2xl max-[1280px]:text-[23px] mb-2">
              MERN STACK DEVELOPER
            </h1>
            <h2 className="font-semibold text-md">
              I’m a MERN Web developer who is passionate about making error-free
              websites with 100% client satisfaction.
            </h2>
            <a
              href="contact"
              className="font-semibold text-xl px-2 py-1 rounded-md bg-transparent hover:border-gray-600 hover:bg-gray-600 duration-500 border-2 mt-10 mb-2">
              Hire Me
            </a>
          </div>

          <div className=" min-w-[320px] max-[1024px]:ml-4 bg-gradient-to-tr from-red-400 to-red-600 text-white p-4 rounded-lg ml-0 mt-4 mb-4 mr-4 flex justify-between items-center flex-col shadow-xl">
            <i className="fa-solid fa-laptop text-4xl"></i>
            <h1 className="font-bold text-2xl mb-2">UI/UX DESIGNER</h1>
            <h2 className="font-semibold text-md">
              I’m a UX/UI Designer who is passionate about making error-free
              websites with 100% client satisfaction.
            </h2>
            <a
              href="contact"
              className="font-semibold text-xl px-2 py-1 rounded-md bg-transparent hover:border-gray-600 hover:bg-gray-600 duration-500 border-2 mt-10 mb-2">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
