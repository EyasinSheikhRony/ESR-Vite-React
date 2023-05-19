// @ts-nocheck
import React, { useState } from "react";
import "./Faq.css";
import Data from "./FaqData";
import Faqs from "./Faqs";

export default function Faq() {
  let [data, setData] = useState(Data);
  return (
    <div className="my-44">
      <h1 className="text-4xl flex justify-center font-bold text-gray-700 mb-8">
        Frequently Asked Questions
      </h1>
      {data.map((item) => (
        <Faqs key={item.id} {...item} />
      ))}
    </div>
  );
}
