import React from "react";

import android from "../assets/icons/android.png";
import code from "../assets/icons/code.png";
import design from "../assets/icons/ruler-pen.png";

const services = [
  {
    name: "MOBILE DEVELOPMENT",
    description:
      "I am an expert mobile developer. I have experience using Flutter and React Native.",
    image: android,
  },
  {
    name: "WEB DEVELOPMENT",
    description:
      "I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS",
    image: code,
  },
  {
    name: "UI & UX DESIGNING",
    description: "I design beautiful web iterfaces with Figma",
    image: design,
  },
];

const Services = () => {
  return (
    <div>
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-600 to-orange-400 font-semibold text-3xl mt-14">
        The services i offer:
      </h2>
      <div className="grid md:grid-cols-3 mt-8 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative h-52 p-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-600 to-orange-400"
          >
            <div className="bg-scaffold w-full h-full flex flex-col justify-end items-start rounded-xl p-4">
              <img src={service.image} alt="" className="mb-3" />
              <h3 className="text-2xl text-white">{service.name}</h3>
              {/* <p className="text-base">{service.description}</p> */}
            </div>
          </div>
          // <div
          //   key={index}
          //   className="flex flex-col justify-center items-center p-6 text-center text-white"
          // >
          //   <img src={service.image} alt="" className="mb-3" />
          //   <h6 className="text-2xl mb-4">{service.name}</h6>
          //   <p className="text-base">{service.description}</p>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
