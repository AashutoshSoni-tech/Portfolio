import { Mail } from "lucide-react";
import React, { useContext } from "react";
import assets from "../assets/assets";
import { AppContext } from "../Context/AppContext";

const Contact = () => {
  const { theme, setTheme } = useContext(AppContext);
  return (
    <div className="mt-30 sm:mt-40 mx-8 sm:mx-40 flex flex-col gap-4 pb-16">
      <h1 className="text-xl font-bold tracking-wide">Contact</h1>
      <p className="text-[13px] leading-4.5 text-gray-400/80 light:text-gray-500 mt-2 sm:mr-25">
        Computer Science Engineering student at Sagar Institute of Research and
        Technology, Bhopal(2024-28). Passionate about building modern web
        applications and solving real-world problems through code. Always
        learning, building, and growing as a developer.
      </p>
      <div className="flex items-center gap-1.5">
        <Mail className="size-4 stroke-gray-300 light:stroke-gray-500" />
        <a className="text-sm font-semibold pb-0.5 text-gray-400 light:text-gray-500 cursor-pointer hover:text-gray-400/90 transition-colors">
          aashutosh13579@gmail.com
        </a>
      </div>
      <div className="flex gap-4 sm:gap-5 -ml-1 mt-1 sm:mt-4">
        <a
          href="https://www.linkedin.com/in/aashutosh-soni-ats5858"
          target="_blank"
          rel="noopener noreferrer"
        >
          {theme === "dark" ? (
            <img
              className="w-7 cursor-pointer hover:opacity-85 transition-opacity"
              src={assets.LinkedIn}
              alt=""
            />
          ) : (
            <img
              className="w-6 cursor-pointer hover:opacity-85 transition-opacity"
              src={assets.LightLinkedIn}
            />
          )}
        </a>

        <a
          href="https://github.com/AashutoshSoni-tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          {theme === "dark" ? (
            <img
              className="w-6 pt-[1.25px] cursor-pointer hover:opacity-85 transition-opacity"
              src={assets.GitHub}
              alt=""
            />
          ) : (
            <img
              className="w-6 cursor-pointer hover:opacity-85 transition-opacity"
              src={assets.LightGithub}
              alt=""
            />
          )}
        </a>
      </div>
    </div>
  );
};

export default Contact;
