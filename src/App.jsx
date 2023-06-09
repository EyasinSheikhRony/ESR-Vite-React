// @ts-nocheck
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Service from "./components/Service/Service";
import Skill from "./components/Skill/Skill";
import Portfolio from "./components/Portfolio/Portfolio";
import Header from "./Header";
import Footer from "./components/Footer/Footer";
import Faqs from "./components/FAQ/Faqs";
import NotFound from './components/404/NotFound'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/notf" element={<NotFound />} />
          </Routes>
        </Header>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
