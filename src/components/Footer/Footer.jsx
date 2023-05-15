import React from "react";

let full_date = new Date();
let year = full_date.getFullYear();

const Footer = () => {
  return (
    <div className="bg-[#1C3C68] text-white flex-wrap flex">
      <div className="flex flex-wrap justify-between pt-10 h-auto w-[80%] max-[425px]:w-[100%] max-[425px]:ml-10 max-[768px]: mx-auto">
        {/* Discover sections  */}
        <div className="">
          <h1 className="font-bold font-sans text-2xl mb-1">Discover</h1>
          <hr className="mb-6" />
          <div className="flex">
            <div className="flex flex-col contact text-sm mr-4">
              <a href="home" className="mb-1">
                Home
              </a>
              <a href="terms" className="mb-1">
                Terms
              </a>
              <a href="talent_culture">Talent & Culture</a>
            </div>
            <div className="flex flex-col contact text-sm">
              <a href="refund_policy" className="mb-1">
                Refund Policy
              </a>
              <a href="faq" className="mb-1">
                FAQ
              </a>
              <a href="privacy_policy">Privacy Policy</a>
            </div>
          </div>
        </div>
        {/* payment method  */}
        <div className="mr-0 mt-6 lg:mt-0">
          <h1 className="mb-1 font-bold font-sans text-2xl">Payment Methods</h1>
          <hr className="mb-6" />
          <div className="flex flex-wrap">
            {/* Payment Method  */}
            <div className="">
              <div className="flex gap-1 mb-1 items-center">
                <img
                  src="./Payment/amex.svg"
                  className="w-16 h-12"
                  alt="Amex"
                  title="Amex"
                />
                <img
                  src="./Payment/visa.svg"
                  className="w-16 h-12"
                  alt="Visa"
                  title="Visa"
                />
                <img
                  src="./Payment/mastercard.svg"
                  className="w-16 h-12"
                  alt="Mastercard"
                  title="Mastercard"
                />
                <img
                  src="./Payment/usdCurency/payoneer.png"
                  className="w-16 h-12 bg-white rounded-md"
                  alt="Payoneer"
                  title="Payoneer"
                />
              </div>
              <div className="flex gap-1">
                <img
                  src="./Payment/bkash.svg"
                  className="w-16 h-12"
                  alt="Bkash"
                  title="Bkash"
                />
                <img
                  src="./Payment/nagad.svg"
                  className="w-16 h-12"
                  alt="Nagad"
                  title="Nagad"
                />
                <img
                  src="./Payment/upay.svg"
                  className="w-16 h-12"
                  alt="Upay"
                  title="Upay"
                />
                <img
                  src="./Payment/dbbl.svg"
                  className="w-16 h-12"
                  alt="DBBL"
                  title="DBBL"
                />
              </div>
            </div>
          </div>
        </div>
        {/* contact  */}
        <div className="mt-6 mr-16 lg:mt-0">
          <h1 className="mb-1 font-bold font-sans text-2xl">Contact</h1>
          <hr className="mb-6" />
          <div className="contact text-sm">
            <div className="flex items-center mb-1">
              <i className="fa-solid fa-phone mr-2"></i>
              <p>+880 1306 333764</p>
            </div>
            <div className="flex items-center mb-1">
              <i className="fa-solid fa-location-dot mr-2"></i>
              <p>Rupsha, Khulna, Bangladesh</p>
            </div>
            <div className="flex items-center mb-1">
              <i className="fa-solid fa-envelope mr-2"></i>
              <a href="https://mail.google.com/mail/u/0/#sent">
                skrony2573@gmail.com
              </a>
            </div>
          </div>
        </div>
        {/* follow us  */}
        <div className="mt-6 xl:mt-0">
          <h1 className="mb-1 font-bold font-sans text-2xl">Follow US</h1>
          <hr className="mb-5" />
          <div className="flex gap-2">
            <a href="https://www.facebook.com/EyasinSheikhRony" target="_main">
              <img
                src="./image/social-icon/facebook.png"
                alt="#"
                className="w-8 h-8 hover:-translate-y-2 duration-700 p-1"
              />
            </a>
            <a
              href="https://www.instagram.com/eyasin_sheikh_rony/"
              target="_main">
              <img
                src="./image/social-icon/instagram.png"
                alt="#"
                className="w-8 h-8 hover:-translate-y-2 duration-700 p-1"
              />
            </a>
            <a href="https://twitter.com/RonyVau2573" target="_main">
              <img
                src="./image/social-icon/twitter.png"
                alt="#"
                className="w-8 h-8 hover:-translate-y-2 duration-700 p-1"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCkZ0sZZ4neDaicwEZdKbEnQ"
              target="_main">
              <img
                src="./image/social-icon/youtube.png"
                alt="#"
                className="w-8 h-8 hover:-translate-y-2 duration-700 p-1"
              />
            </a>
          </div>
          <div className="mt-12 flex justify-end">
            <a href="/" className="animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 p-1 bg-slate-600">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <hr className="w-[80%] mx-auto mt-8" />
      <div className="flex items-center justify-between w-[80%] mx-auto py-6">
        <div className="">
          <a href="/">
            <h1 className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-extrabold text-4xl text-transparent">
              ESR
            </h1>
          </a>
        </div>
        <div className="font-sans text-sm font-medium max-[425px]:ml-[15px] max-[425px]:pt-[25px]">
          &copy; Copyright 2022-{year} | Eyasin Sheikh Rony
        </div>
      </div>
    </div>
  );
};

export default Footer;
