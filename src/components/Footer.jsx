import React from "react";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import dribbble from "../assets/socials/dribbble.png";
import email from "../assets/socials/sms.png";

const Footer = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="bg-[#1C1C22] p-6 md:px-10 rounded-2xl flex flex-col">
        <div className="flex flex-row md:flex-row gap-6 justify-between items-center">
          <p className="text-[#F0F2F5] text-sm">© Designed by Adam Abd.</p>
          <div className="flex flex-row items-center gap-7">
            <a
              href="https://www.linkedin.com/in/joshua-harris-321a24190/"
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              href="https://github.com/joshua-harris"
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6"
            >
              <img src={instagram} alt="" />
            </a>
            <a
              href="mailto:anpch@example.com"
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6"
            >
              <img src={dribbble} alt="" />
            </a>
            <a
              href="mailto:anpch@example.com"
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6"
            >
              <img src={email} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
