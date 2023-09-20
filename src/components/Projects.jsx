import React from "react";

import emagz from "../assets/projects/emagz.svg";
import xaabee from "../assets/projects/xaabee.svg";
import rwoods from "../assets/projects/3rwoods.svg";

const Projects = () => {
  const projects = [
    {
      title: "Emagz",
      description:
        "Emagz.mobi is a place where users can read exclusive and premium magazines worldwide. With a great variety of magazines from over 300 content just for users.",
      photo: emagz,
      link: "https://demo.emagz.mobi/en",
    },
    {
      title: "Xaabee",
      description:
        "A place where students meet to help each other. Fast and accurate answer to the questioner. Pocket money for those who help answer. Download now!",
      photo: xaabee,
      link: "https://xaabee.com",
    },
    {
      title: "3R Woods",
      description:
        "Best Wood and Coconut Product Quality From Indonesia To the World",
      photo: rwoods,
      link: "https://3rwoods.adamabd.my.id/",
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
              <h3 className="text-primary font-semibold text-2xl">
                {project.title}
              </h3>
              <p className=" text-white mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="outline w-32 py-2 rounded-3xl border-none mt-5 text-center text-white "
              >
                {"See Live >"}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
