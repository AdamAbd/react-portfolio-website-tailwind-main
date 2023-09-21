import React from "react";

import adam from "../assets/adam.jpeg";
import Title from "./Title";

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
    name: "FULLSTACK DEVELOPMENT",
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

function About() {
  return (
    <section id="about" className="container mx-auto my-16">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={adam}
          alt="Foto Adam"
          className="w-64 md:w-80 h-64 md:h-80 rounded-xl object-cover"
        />
        <div>
          <Title title="About." />
          <h3 className="text-lg md:text-2xl text-white mt-3">
            I'm creative, flexible, open and like to find alternative solutions
            to solve existing problems. As a creative thinker, proficient &
            working with various technologies. Here are service that i offers :
          </h3>
          <div className="flex flex-row mt-7 items-start md:items-center gap-3">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-600 to-orange-400 text-7xl md:text-8xl font-bold">
              3+
            </div>
            <h3 className="text-white text-base md:text-2xl md:ml-5">
              Years of experience. Specialised in building apps, while ensuring
              a seamless UX for end users.
            </h3>
          </div>
        </div>
      </div>

      {/* services section */}
      <div className="mt-10">
        <Title title="Services." isCenter />
        <div className="grid md:grid-cols-3 mt-8 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-52 p-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-600 to-orange-400"
            >
              <div className="bg-scaffold w-full h-full flex flex-col justify-end items-start rounded-xl p-4">
                <img src={service.image} alt="" className="w-12 h-12 mb-3" />
                <h3 className="text-xl text-white">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
