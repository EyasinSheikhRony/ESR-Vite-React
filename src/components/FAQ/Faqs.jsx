import React, { useState } from "react";

export default function Faqs({ questions, answer }) {
  let [show, setShow] = useState(false);

  return (
    <div>
      <div className="">
        <div className="mt-2 justify-center w-[80%] mx-auto bg-gray-200 px-3 py-2">
          <div className="flex flex-col">
            <div className="flex max-[320px]:w-[310px] justify-between">
              <h1 className="question text-2xl font-bold text-gray-800 font-serif">
                {questions}
              </h1>
              <button className="faq_btn" onClick={() => setShow(!show)}>
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
            <p className="mt-6 answer bg-slate-600 text-white px-3 py-2 font-medium">
              {answer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
