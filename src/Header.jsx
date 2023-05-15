import React from "react";
import { NavLink } from "react-router-dom";
import { FaHammer, FaLaptopCode, FaUserPlus, FaBars } from "react-icons/fa";

const nav = [
  {
    name: "Home",
    path: "/",
    icon: <i className="fa-solid fa-house mr-1"></i>,
  },
  {
    name: "About",
    path: "/about",
    icon: <i className="fa-solid fa-user mr-1"></i>,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <i className="fa-solid fa-phone mr-1"></i>,
  },
  {
    name: "Skills",
    path: "/skill",
    icon: <FaLaptopCode className="mr-1" />,
  },
  {
    name: "Service",
    path: "/service",
    icon: <FaHammer className="mr-1" />,
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: <FaUserPlus className="mr-1" />,
  },
];

export default function Header(props) {
  return (
    <div className="">
      <div className="fixed left-0 top-0 z-50 w-full shadow-lg hover:shadow-xl">
        <div className="w-[100%] bg-gray-100">
          <div className="flex justify-between w-[80%] mx-auto py-2">
            <div className="flex text-sm items-center font-semibold text-gray-600 max-[768px]:hidden">
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
        </div>
        {/* <Navbar /> */}
        <div className="w-[100%] bg-gray-100">
          <div className="flex justify-between w-[80%] mx-auto items-center pb-2">
            <div className="">
              <a href="/">
                <img
                  src="./image/icon/man.png"
                  alt="Site Pic"
                  className="w-16 h-16"
                />
              </a>
            </div>
            <div className="flex justify-between gap-4">
              {nav.map((item, index) => (
                <div className="flex justify-between">
                  <NavLink key={index} to={item.path}>
                    <div className="flex items-center text-gray-600 font-bold text-md max-[768px]:hidden hover:bg-gray-300 duration-700 p-2 rounded-md">
                      {item.icon}
                      {item.name}
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}
