import React from "react";
import avatar from "../assets/avatar.png";
import ParticleBg from "./ParticleBg";

const Home = () => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <ParticleBg />
      <div
        className="absolute z-20 container mx-auto items-center flex text-white h-screen"
        id="home"
      >
        <div className="flex flex-col items-center justify-between w-full">
          {/* img */}
          <img
            src={avatar}
            alt="Avatar Adam"
            className="w-44 md:w-52 h-44 md:h-52 rounded-full object-cover bg-[#F0F2F5]"
          />
          {/* image & content */}
          {/* text */}
          <h1 className="md:w-[640px] my-7 font-semibold text-3xl md:text-5xl text-center leading-10 md:leading-tight">
            <b className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-600 to-orange-400">
              Hello, I'm Adam,
            </b>{" "}
            fullstack developer based in Indonesia.
          </h1>
          <p className="md:w-[500px] text-center">
            Flutter Developer, Web Developer with React, Laravel Developer & UX
            Designer. I create seamless UX for end-users.
          </p>
          <div className="mt-7 flex flex-row gap-5">
            <a
              href="https://resume.io/r/3dk7AQhsx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F0F2F5] py-3 px-7 rounded-3xl text-[#161513] text-sm md:text-base"
            >
              See My Resume
            </a>
            <button className="py-3 px-7 rounded-3xl border border-[#F0F2F5] text-[#F0F2F5] text-sm md:text-base">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
