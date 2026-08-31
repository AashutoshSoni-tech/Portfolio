import React, { useContext } from "react";
import assets from "../assets/assets";
import { AppContext } from "../Context/AppContext";

const Home = () => {
  const { theme } = useContext(AppContext);
  return (
    <div className="">
      <div className="flex flex-col items-center gap-5 pt-16 sm:pt-23">
        {theme === "dark" ? (
          <img className="w-40 sm:w-43" src={assets.heroImage} alt="" />
        ) : (
          <img
            className="w-40 sm:w-43 mask-b-from-70% mask-radial-[50%_90%] mask-radial-from-85%"
            src={assets.LightHeroImage}
            alt=""
          />
        )}
        <h1 className="text-4xl font-bold text-center leading-11 heading mx-3 sm:mx-0 light:text-slate-800/90">
          Building scalable
          <br />
          <span className="bg-linear-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
            full-stack applications.
          </span>
        </h1>
        <h2 className="sm:-mb-2 font-medium mt-4 ring py-1 px-5 rounded-3xl text-white/85 light:text-slate-800 heading">
          Hi, I'm Aashutosh Soni.
        </h2>
        <p className="sm:mx-65 mx-7 text-center text-sm sm:text-[15px] text-white/65 light:text-slate-500">
          I'm a MERN Stack Developer passionate about building responsive,
          scalable, and user-friendly web applications. I enjoy turning ideas
          into real products while continuously learning modern technologies.
        </p>
        <div className="flex gap-4 mt-5">
          <button className="py-2.5 px-4.5 text-sm font-semibold rounded-full ring hover:text-black hover:bg-white cursor-pointer transition-colors duration-300 ease-in-out">
            Get In Touch
          </button>

          <a
            href="/Aashutosh-Soni-CV.pdf"
            download="Aashutosh-Soni-CV.pdf"
            className="py-2.5 px-4.5 text-sm font-semibold rounded-full ring hover:text-black hover:bg-white cursor-pointer transition-colors duration-300 ease-in-out"
          >
            Download CV
          </a>
        </div>
        {/* Eperience With */}
        <div className="mt-10 flex flex-col gap-8 items-center">
          <h1 className="font-semibold tracking-widest text-sm sm:text-[13px] text-[#C5C5C5] light:text-slate-900">
            EXPERICNCE WITH
          </h1>
          {theme === "dark" ? (
            <div className="flex sm:gap-8.5 gap-6.5">
              <img className="h-8" src={assets.javascript} alt="" />
              <img className="h-8" src={assets.nodejs} alt="" />
              <img className="h-8" src={assets.html} alt="" />
              <img className="h-8" src={assets.css} alt="" />
              <img className="h-8" src={assets.reactjs} alt="" />
            </div>
          ) : (
            <div className="flex sm:gap-8.5 gap-6.5">
              <img className="h-7 pt-0.5" src={assets.LightHtml} alt="" />
              <img className="h-8" src={assets.LightNodejs} alt="" />
              <img className="h-8" src={assets.LightReact} alt="" />
              <img className="h-8" src={assets.LightJavascript} alt="" />
              <img className="h-8" src={assets.LightCss} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
