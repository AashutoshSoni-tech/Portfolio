import React, { useContext, useState } from "react";
import assets from "../assets/assets";
import { Moon, Sun, SunriseIcon } from "lucide-react";
import { AppContext } from "../Context/AppContext.jsx";

const Navbar = () => {
  const { theme, setTheme } = useContext(AppContext);
  return (
    <nav className="flex justify-between px-7 sm:px-0 sm:justify-around items-center bg-black/95 light:bg-slate-100 light:text-slate-900 text-white/90 pt-1">
      <div>
        {theme === "dark" ? (
          <img className="size-16" src={assets.logo} alt="" />
        ) : (
          <img className="size-16" src={assets.lightLogo} alt="" />
        )}
      </div>
      <div className="hidden sm:flex items-center gap-13">
        <a
          href="#home"
          className="hover:text-white cursor-pointer transition-colors"
        >
          Home
        </a>

        <a
          href="#projects"
          className="hover:text-white cursor-pointer transition-colors"
        >
          Projects
        </a>

        <a
          href="#experience"
          className="hover:text-white cursor-pointer transition-colors"
        >
          Experience
        </a>

        <a
          href="#contact"
          className="hover:text-white cursor-pointer transition-colors"
        >
          Contact
        </a>
      </div>
      <div className="sm:hidden">
        {theme === "dark" ? (
          <Sun
            onClick={() => setTheme("light")}
            className="w-5 stroke-olive-200"
          />
        ) : (
          <Moon
            onClick={() => setTheme("dark")}
            className="w-5 stroke-olive-900"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
