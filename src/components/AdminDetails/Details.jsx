import React from "react";
import Typed from "typed.js";
import "./Details.css";

export default function () {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Web Developer",
        "MERN Stack Developer",
        "WordPress Developer",
        "UI & UX Designer",
      ],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="mt-52 max-[768px]:mt-2 pb-20 min-w-[320px] w-[80%] mx-auto">
      <div className="flex max-[768px]:flex-col justify-between">
        {/* left side  */}
        <div className="">
          <h1 className="text-xl min-[1440px]:text-2xl font-bold font-mono text-gray-500 mb-2 pt-40 max-[768px]:pt-2">
            Hello There,
          </h1>
          <p className="text-2xl min-[1440px]:text-4xl max-[425px]:text-xl font-bold font-serif text-sky-600">
            I'm a <span className="text-pink-600 typed_text" ref={el}></span>
          </p>
          <div className="flex gap-3 mt-10 mb-32 max-[768px]:mb-6 max-[768px]:mt-12">
            <a
              href="https://www.facebook.com/EyasinSheikhRony"
              target="_blank"
              title="Facebook">
              <img
                src="./image/social-icon/facebook.png"
                alt="social-icon"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.instagram.com/eyasin_sheikh_rony/"
              target="_blank"
              title="Instagram">
              <img
                src="./image/social-icon/instagram.png"
                alt="social-icon"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/eyasin-sheikh-rony/"
              target="_blank"
              title="Linkedin">
              <img
                src="./image/social-icon/linkedin.png"
                alt="social-icon"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://twitter.com/RonyVau2573"
              target="_blank"
              title="Twitter">
              <img
                src="./image/social-icon/twitter.png"
                alt="social-icon"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCkZ0sZZ4neDaicwEZdKbEnQ"
              target="_blank"
              title="Youtube">
              <img
                src="./image/social-icon/youtube.png"
                alt="social-icon"
                className="w-6 h-6"
              />
            </a>
          </div>
          <div className="">
            <a href="contact" className="hire_btn">
              Hire Me
            </a>
            <a
              href="./image/Rony.png"
              className="download_cv_btn ml-3"
              download>
              Download CV
            </a>
          </div>
        </div>
        {/* right side  */}
        <div className="max-[768px]:mt-20 flex justify-center ">
          <div className="profile_pic bg-gradient-to-b from bg-sky-300 to-sky-500 min-w-[300px] w-[500px] overflow-hidden">
            <img
              src="./image/Rony.png"
              alt="Profile Pic"
              className="pic relative left-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
