import React, { useState } from "react";
import { Link, ScrollLink } from "react-scroll";

const Header = () => {
  let [open, setOpen] = useState(false);

  let links = [
    { name: "About me", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <nav className="bg-scaffold fixed w-full z-20 top-0 left-0">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4">
        <a
          href="https://flowbite.com/"
          className="text-2xl font-semibold whitespace-nowrap dark:text-white"
        >
          Adam Abd.
        </a>
        <div className="flex md:order-2">
          <a
            href="https://www.upwork.com/freelancers/~01554cc98ccc5eb306"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-r from-purple-500 via-pink-600 to-orange-400 font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            open ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col md:flex-row p-4 gap-3 md:gap-10 md:p-0 mt-4 font-medium rounded-lg bg-[#1C1C22] md:bg-transparent md:mt-0">
            {links.map((data, index) => {
              return (
                <li
                  key={index}
                  className="w-full md:w-auto bg-transparent border border-[#F0F2F5] md:border-none rounded-3xl py-2"
                >
                  <a
                    href="#"
                    className="block text-[#F0F2F5] text-center"
                    aria-current="page"
                  >
                    {data.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
