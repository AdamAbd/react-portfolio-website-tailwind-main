import React from "react";

import ecohero from "../assets/projects/eco_hero.svg";
import emagz from "../assets/projects/emagz.svg";
import xaabee from "../assets/projects/xaabee.svg";
import rwoods from "../assets/projects/3rwoods.svg";

const Projects = () => {
  const projects = [
    {
      title: "Eco Hero",
      description:
        "Eco Hero is a Gamification-Based Mobile Application as an Innovative and Creative Solution to Overcoming Air Pollution Problems in Indonesia.",
      photo: ecohero,
      link: "https://play.google.com/store/apps/details?id=id.my.adamabd.ecohero",
      tags: ["Flutter", "Google Auth", "Firebase Firestore"],
    },
    {
      title: "Emagz",
      description:
        "Emagz.mobi is a place where users can read exclusive and premium magazines worldwide. With a great variety of magazines from over 300 content just for users.",
      photo: emagz,
      link: "https://demo.emagz.mobi/en",
      tags: ["Laravel", "Flutter", "Google Auth"],
    },
    {
      title: "Xaabee",
      description:
        "A place where students meet to help each other. Fast and accurate answer to the questioner. Pocket money for those who help answer. Download now!",
      photo: xaabee,
      link: "https://xaabee.com",
      tags: ["Next JS", "Tailwind CSS", "Frammer Motion"],
    },
    {
      title: "3R Woods",
      description:
        "Best Wood and Coconut Product Quality From Indonesia To the World",
      photo: rwoods,
      link: "https://3rwoods.adamabd.my.id/",
      tags: ["Next JS", "Tailwind CSS"],
    },
  ];
  return (
    <div className="container mx-auto my-8" id="projects">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-600 to-orange-400 font-semibold text-3xl mt-16">
        Featured projects:
      </h2>

      {/* featured projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-6 items-start justify-center">
        {projects.map((project, index) => {
          return (
            <div key={index} className="flex flex-col shadow-sm">
              <img src={project.photo} alt={project.title} />
              <div className="flex flex-row justify-between items-center mt-5">
                <h3 className="text-primary font-semibold text-3xl">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-28 py-1.5 rounded-3xl border-none text-center text-white bg-gradient-to-r from-purple-500 via-pink-600 to-orange-400"
                >
                  {"See Live >"}
                </a>
              </div>
              <p className=" text-white mt-3">{project.description}</p>
              <div className="flex flex-row mt-3 gap-3 md:gap-2.5">
                {project.tags.map((data, index) => {
                  return (
                    <a
                      key={index}
                      href="https://www.upwork.com/freelancers/~01554cc98ccc5eb306"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white border font-medium rounded-3xl text-sm px-4 py-1.5 text-center"
                    >
                      {data}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
