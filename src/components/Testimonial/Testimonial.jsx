import React from "react";

export default function Testimonial() {
  return (
    <div>
      <div className="w-[80%] mx-auto mb-12">
        <h1 className="text-6xl max-[768px]:text-5xl font-bold bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text justify-center flex">
          Testimonial
        </h1>
        <h2 className="text-xl font-semibold text-gray-600 flex justify-center mt-2">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
          <div className=" min-w-[320px] rounded-xl shadow-xl px-6 py-4">
            <h3>
              <i className="fa-solid fa-quote-left"></i> Very experienced and
              super fast. Weren’t able to get one thing done but not his fault.
              I will definitely use him again. Very nice guy!{" "}
              <i className="fa-solid fa-quote-right"></i>
            </h3>
            <div className="flex items-center justify-around mt-6">
              <img
                src="./usman/usman02.jpg"
                alt="#"
                className="w-[60px] h-[60px] rounded-full"
              />
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold text-gray-600">Mbdevboston</h1>
                <h2 className="text-lg font-bold bg-gradient-to-r from-red-300 to-red-500 text-transparent bg-clip-text">
                  Designer
                </h2>
              </div>
            </div>
          </div>

          <div className=" min-w-[320px] rounded-xl shadow-xl px-6 py-4">
            <h3>
              <i className="fa-solid fa-quote-left"></i> Very experienced and
              super fast. Weren’t able to get one thing done but not his fault.
              I will definitely use him again. Very nice guy!{" "}
              <i className="fa-solid fa-quote-right"></i>
            </h3>
            <div className="flex items-center justify-around mt-6">
              <img
                src="./usman/usman01.jpg"
                alt="#"
                className="w-[60px] h-[60px] rounded-full"
              />
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold text-gray-600">Rossbrown</h1>
                <h2 className="text-lg font-bold bg-gradient-to-r from-sky-300 to-sky-500 text-transparent bg-clip-text">
                  Manager
                </h2>
              </div>
            </div>
          </div>

          <div className=" min-w-[320px] rounded-xl shadow-xl px-6 py-4">
            <h3>
              <i className="fa-solid fa-quote-left"></i> Very experienced and
              super fast. Weren’t able to get one thing done but not his fault.
              I will definitely use him again. Very nice guy!{" "}
              <i className="fa-solid fa-quote-right"></i>
            </h3>
            <div className="flex items-center justify-around mt-6">
              <img
                src="./usman/usman.jpg"
                alt="#"
                className="w-[60px] h-[60px] rounded-full"
              />
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold text-gray-600">
                  Ryangladhill
                </h1>
                <h2 className="text-lg font-bold bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text">
                  Developer
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
