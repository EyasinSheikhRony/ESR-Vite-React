// @ts-nocheck
import React from "react";
import DarkMood from "../DarkMood/DarkMood";
import {
  FaHammer,
  FaLaptopCode,
  FaUserPlus,
  FaBars,
} from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="bg-gray-100 shadow-lg hover:shadow-xl fixed left-0 pt-2 -top-1 right-0 z-50">
      <div className="flex flex-col justify-between items-center w-[80%] mx-auto">
        {/* topbar  */}
        <div className="flex w-[100%] justify-between py-2 ">
          <div className="flex ml-2 text-sm items-center font-semibold text-gray-600 max-[768px]:hidden">
            <div className="">
              <a href="mailto:skrony2573@gmail.com">
                <i className="fa-solid fa-envelope mr-1"></i>
                skrony2573@gmail.com
              </a>
            </div>
            <div className="">
              <h6>
                <i className="fa-solid fa-phone-volume mr-1 ml-3"></i>
                +8801306333764
              </h6>
            </div>
          </div>
          <div className="flex gap-2 items-center max-[768px]:hidden">
            <a href="https://github.com/EyasinSheikhRony" target="_blank">
              <img
                src="./image/social-icon/github.png"
                alt="github"
                className="h-6 w-6"
              />
            </a>
            <a
              href="https://join.skype.com/invite/vJ24tJSl2PxH"
              target="_blank">
              <img
                src="./image/social-icon/skype.png"
                alt="skype"
                className="h-6 w-6"
              />
            </a>
            <a href="https://codepen.io/Rony-Vau" target="_blank">
              <img
                src="./image/social-icon/codepen.png"
                alt="codepen"
                className="h-6 w-6"
              />
            </a>
            <a
              href="https://app.slack.com/client/T03BBSB14/D03KK1UQ2ET/files/F03MQKKA64W"
              target="_blank">
              <img
                src="./image/social-icon/slack.png"
                alt="slack"
                className="h-[20px] w-[20px]"
              />
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center w-[100%] mx-auto pb-2">
          {/* left site  */}
          <div className="">
            <a href="/">
              <img
                src="./image/icon/man.png"
                alt="Site Pic"
                className="w-16 h-16"
              />
            </a>
          </div>
          {/* middle site  */}
          <div className="flex gap-3">
            <div className="max-[768px]:hidden flex gap-3">
              <a href="/" className="navbar_nav_items" title="Home">
                <i className="fa-solid fa-house mr-1"></i>Home
              </a>

              <a href="about" className="navbar_nav_items" title="About">
                <i className="fa-solid fa-user mr-1"></i>About
              </a>

              <a href="contact" className="navbar_nav_items" title="Contact">
                <i className="fa-solid fa-phone mr-1"></i>Contact
              </a>

              <div className="">
                <a
                  href="skill"
                  className="flex items-center navbar_nav_items"
                  title="Skills">
                  <FaLaptopCode />
                  <span className="ml-1">Skills</span>
                </a>
              </div>

              <div className="">
                <a
                  href="service"
                  className="flex items-center navbar_nav_items"
                  title="Service">
                  <FaHammer />
                  <span className="ml-1">Service</span>
                </a>
              </div>

              <div className="">
                <a
                  href="portfolio"
                  className="flex items-center navbar_nav_items"
                  title="Portfolio">
                  <FaUserPlus />
                  <span className="ml-1">Portfolio</span>
                </a>
              </div>
            </div>
            {/* right site  */}
            <div className="flex items-center">
              {/* <DarkMood /> */}
              <div className="min-[768px]:hidden ml-2">
                <FaBars />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
