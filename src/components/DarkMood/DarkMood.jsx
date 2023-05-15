import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./DarkMood.css";

export default function DarkMood() {
  let [dark, setDark] = useState("light_theme");

  let toggleDark = () => {
    dark === "dark_theme" ? setDark("light_theme") : setDark("dark_theme");
  };

  let toggleLight = () => {
    dark === "light_theme" ? setDark("dark_theme") : setDark("light_theme");
  };

  useEffect(() => {
    document.body.className = dark;
  }, [dark]);

  return (
    <div className="flex gap-1 cursor-pointer">
      {dark === "light_theme" ? (
        <div>
          <FaMoon onClick={() => toggleDark()} />
        </div>
      ) : (
        <div>
          <FaSun onClick={() => toggleLight()} />
        </div>
      )}
    </div>
  );
}
