import React, { useState } from "react";

export default function Faqs({ questions, answer }) {
  let [show, setShow] = useState(false);

  return (
    <div>
      <div className="">
        <div className="mt-2 justify-center w-[45%] mx-auto min-w-[300px] px-2">
          <div className="flex flex-col">
            <div className="flex justify-between bg-gray-100 p-2">
              <h1 className="text-xl font-bold text-gray-800">{questions}</h1>
              <button className="" onClick={() => setShow(!show)}>
                {show ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {show && (
            <p className="answer bg-gray-100 pt-8 text-gray-600 px-3 py-2 font-bold">
              {answer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
