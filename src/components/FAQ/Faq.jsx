// @ts-nocheck
import React, { useState } from "react";
import Data from "./FaqData";
import Faqs from "./Faqs";

export default function Faq() {
  let [data, setData] = useState(Data);
  return (
    <div className="mt-36 mb-20">
      <h1 className="text-5xl flex justify-center w-[80%] max-[768px]:text-xl max-[1280px]:text-3xl mx-auto font-bold text-gray-700 mb-8 bg-gradient-to-r bg-clip-text text-transparent from-orange-300 to-orange-600 pb-4">
        Frequently Asked Questions
      </h1>
      {data.map((item) => (
        <Faqs key={item.id} {...item} />
      ))}
    </div>
  );
}
