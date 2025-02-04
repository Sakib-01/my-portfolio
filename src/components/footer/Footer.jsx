import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { logo } from "../../assets/index";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-2 gap-8"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="w-full h-full flex flex-col gap-8">
          <img className="w-32" src={logo} alt="logo" />
          <div className="flex gap-4">
            <a
              href="https://github.com/Sakib-01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="bannerIcon"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.facebook.com/sakibul.haque.148?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="bannerIcon"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <FaFacebookF />
              </span>
            </a>
            <a
              href="https://wa.me/8801777185618"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="bannerIcon"
                data-aos="fade-up"
                data-aos-duration="1700"
              >
                <FaWhatsapp />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/syed-sakibul-haque-3a2961282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="bannerIcon"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div
          className="w-full h-full"
          data-aos="fade-up"
          data-aos-duration="1900"
        >
          <h3 className="text-xl uppercase text-designColor tracking-wider">
            Quick Link
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            <li>
              <a
                href="#about"
                className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
              >
                About
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
              >
                Projects
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
              >
                Contact
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer copyright */}
      {/* <div className="w-full mx-auto py-10">
        <p className="text-center text-gray-500 text-base">
          © 2025. All rights reserved by Sakib
        </p>
      </div> */}
    </div>
  );
};

export default Footer;
