import React from "react";
import assets from "../assets/assets";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const ProjectInfo = [
    {
      thumbnail: assets.myBlog,
      title: "Blog Website",
      link: "https://my-blog-frontend-ochre.vercel.app",
    },
    {
      thumbnail: assets.ayursetu,
      title: "Ayursetu Website",
      link: "https://dr-rahul-soni-frontend.onrender.com",
    },
    { thumbnail: assets.ayursetu, title: "PROJECT INFO3", link: "xyz" },
    { thumbnail: assets.myBlog, title: "PROJECT INFO4", link: "xyz" },
  ];

  return (
    <div id="projects" className="mt-18 flex flex-col items-center gap-12">
      <h1 className="text-2xl font-extrabold text-center bg-linear-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent tracking-wide">
        PROJECTS
      </h1>
      {/* Project Cards Container */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-5">
        {ProjectInfo.map((item, index) => (
          // Project card
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#2A2A2A] light:bg-slate-700 z-1 rounded-2xl overflow-hidden shadow-gray-800/70 border border-white/8 light:border-white/60 light:shadow-[0_8px_30px_rgba(0,0,0,0.50)] light:shadow-gray-400/600 shadow-[0_8px_30px_rgba(0,0,0,0.35)] cursor-pointer">
              <div className="w-80 h-55 sm:w-90 sm:h-55 overflow-hidden">
                <img
                  className="w-full h-full object-cover "
                  src={item.thumbnail}
                  alt=""
                />
              </div>
              <div className="mx-5 pt-4 pb-3 flex justify-between items-center">
                <h2 className="font-bold text-white/80 light:text-white">
                  {item.title}
                </h2>
                <ArrowUpRight className="size-5 cursor-pointer stroke-white/80 light:stroke-white hover:stroke-white/90 transition-all" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
