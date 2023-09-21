import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Title from "./Title";

import gatuko from "../assets/projects/gatuko_demo.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const blogs = [
  {
    image: gatuko,
    title: "How to Build Dekstop App Using React JS and Electron JS",
    tags: ["Electron JS", "React JS", "Tailwind CSS"],
  },
  {
    image: gatuko,
    title: "How to Build Dekstop App Using React JS and Electron JS",
    tags: ["Electron JS"],
  },
  {
    image: gatuko,
    title: "How to Build Dekstop App Using React JS and Electron JS",
    tags: ["Electron JS"],
  },
];

function Blog() {
  const carouselRef = useRef(null);

  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between items-center">
        <Title title={"Blogs."} />
        <div className="flex flex-row gap-2">
          <button
            onClick={() => {
              carouselRef.current.previous();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 fill-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              carouselRef.current.next();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 fill-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <Carousel
        ref={carouselRef}
        responsive={responsive}
        showDots={false}
        infinite={true}
        arrows={false}
        className="w-full mt-7"
      >
        {blogs.map((data, index) => {
          return (
            <div key={index} className="flex flex-col mx-2">
              <img
                src={data.image}
                alt={data.title}
                className=" aspect-video bg-white rounded-xl"
              />
              <div className="flex flex-col px-2 pt-3 pb-5 gap-2">
                <a
                  href="https://www.linkedin.com/in/joshua-harris-321a24190/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-medium text-white hover:underline"
                >
                  {data.title}
                </a>
                <div className="flex flex-row gap-2">
                  {data.tags.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="text-white border font-medium rounded-3xl text-xs xl:text-sm px-4 py-1.5 text-center items-center flex"
                      >
                        {data}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Blog;
