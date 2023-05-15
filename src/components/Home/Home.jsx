import React from "react";
import Details from "../AdminDetails/Details";
import About from "../About/About";
import Service from "../Service/Service";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Testimonial from "../Testimonial/Testimonial";
import Skill from "../Skill/Skill";
import Pricing from "../Pricing/Pricing";

export default function Home() {
  return (
    <div>
      <div className="">
        <Details />
        <About />
        <Skill />
        <Service />
        <Portfolio />
        <Testimonial />
        <Pricing />
        <Contact />
      </div>
    </div>
  );
}
