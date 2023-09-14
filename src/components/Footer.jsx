import React from "react";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import dribbble from "../assets/socials/dribbble.png";
import email from "../assets/socials/sms.png";

const Footer = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="bg-[#1C1C22] p-6 md:px-10 rounded-xl flex flex-col">
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <a
            href="https://flowbite.com/"
            className="text-2xl font-semibold whitespace-nowrap dark:text-white"
          >
            Adam Abd.
          </a>
          <div className="flex flex-row items-center gap-6">
            <span className="text-white">Follow me</span>
            <div className="flex flex-row gap-3">
              <a
                href="https://www.linkedin.com/in/joshua-harris-321a24190/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="" />
              </a>
              <a
                href="https://github.com/joshua-harris"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="" />
              </a>
              <a
                href="mailto:anpch@example.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={dribbble} alt="" />
              </a>
              <a
                href="mailto:anpch@example.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={email} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-600 to-orange-400 mt-6 mb-4" />
        <p className="text-[#F0F2F5] text-xs text-end">
          © Designed by Adam Abd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
