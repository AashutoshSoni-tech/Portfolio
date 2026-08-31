import React from "react";
import { experiences } from "../assets/assets";

const Experience = () => {
  return (
    <div className="mt-25">
      <h1 className="text-2xl font-extrabold text-center bg-linear-to-b from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent tracking-wide">
        EXPERIENCE
      </h1>
      <div className="mx-8 sm:mx-40 mt-13 sm:mt-11 space-y-12">
        {experiences.map((item, index) => (
          <div className="space-y-5.5" key={index}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 sm:gap-6">
                <img className="w-7" src={item.logo} alt="" />
                <h1 className="text-lg font-semibold tracking-wide">
                  {item.title}
                </h1>
              </div>
              <p className="text-xs text-gray-400/70 light:text-gray-500 mr-2">
                {item.timeline}
              </p>
            </div>
            <div className="">
              <p className="text-[13px] leading-4.5 text-gray-400/85 light:text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
