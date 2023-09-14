import React from "react";
import Services from "./Services";

import adam from "../assets/adam.jpeg";

const About = () => {
  const skills = [
    { name: "UI & UX DESIGNING", image: "/src/assets/icons/ruler-pen.png" },
    { name: "WEB DEVELOPMENT", image: "/src/assets/icons/code.png" },
    { name: "MOBILE DEVELOPMENT", image: "/src/assets/icons/android.png" },
    {
      name: "WEB SCRAPING WITH PYTHON",
      image: "/src/assets/icons/python-svg.png",
    },
  ];
  return (
    <div className="container mx-auto" id="about">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={adam}
          alt="Foto Adam"
          className="w-64 md:w-80 h-64 md:h-80 rounded-xl object-cover"
        />
        <div>
          <h2 className="text-purple-500 font-semibold text-2xl md:text-3xl">
            About me:
          </h2>
          <h3 className="text-lg md:text-2xl text-white mt-3">
            I'm creative, flexible, open and like to find alternative solutions
            to solve existing problems. As a creative thinker, proficient &
            working with various technologies. Here are the service i have :
          </h3>
          <div className="md:flex my-7 items-center">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-600 to-orange-400 text-8xl font-bold">
              3+
            </div>
            <h3 className="text-white text-2xl md:ml-5">
              Years of experience. Specialised in building apps, while ensuring
              a seamless web experience for end users.
            </h3>
          </div>
        </div>
      </div>

      {/* skills */}
      {/* <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} />
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div> */}

      {/* services section */}
      <Services />
    </div>
  );
};

export default About;
