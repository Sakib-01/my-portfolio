import {
  FaDownload,
  FaFacebookF,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedinIn,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import { SiFigma, SiMongodb, SiTailwindcss } from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["FrontEnd Developer.", "Professional Coder."],
    loop: true,
    typeSpeed: 45,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-5"
      >
        <h4
          className="text-lg font-normal underline"
          style={{ textDecorationColor: "#3b82f6" }}
        >
          WELCOME TO MY WORLD
        </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <br />
          <span className="text-designColor capitalize">
            Syed Sakibul Haque
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-500">
            {text}
          </span>{" "}
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-white font-bodyFont leading-6 tracking-wide">
          As a junior front-end developer specializing in React.js, I strive to
          create intuitive and responsive user interfaces. I leverage animations
          and transitions to enhance user experiences, ensuring every
          interaction feels seamless and engaging.
        </p>
      </motion.div>

      {/* Social Links and CV */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col md:flex-row gap-6 lgl:gap-10 justify-between"
      >
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-designColor uppercase font-titleFont mb-4"
          >
            Find me in
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex gap-4"
          >
            <a href="https://github.com/Sakib-01" target="blank">
              <span className="bannerIcon hover:border-2 border-blue-500">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.facebook.com/sakibul.haque.148?mibextid=LQQJ4d"
              target="blank"
            >
              <span className="bannerIcon hover:border-2 border-blue-500">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://wa.me/8801777185618" target="blank">
              <span className="bannerIcon  hover:border-2 border-blue-500">
                <FaWhatsapp />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/syed-sakibul-haque-3a2961282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="blank"
            >
              <span className="bannerIcon hover:border-2 border-blue-500">
                <FaLinkedinIn />
              </span>
            </a>
          </motion.div>
          <a
            href="https://drive.google.com/file/d/1mlR2fq7uHxBdRIYEHZ55s08JSmzC3J9a/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="bannerIcon hover:border-2 border-blue-500 p-5 mt-4"
            >
              <FaDownload />
            </motion.button>
          </a>
          <br />
          <span>Download CV</span>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-designColor uppercase font-titleFont mb-4"
          >
            BEST SKILL ON
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex gap-4"
          >
            <span className="bannerIcon hover:border-2 border-blue-500">
              <FaReact />
            </span>
            <span className="bannerIcon hover:border-2 border-blue-500">
              <FaJs />
            </span>
            <span className="bannerIcon hover:border-2 border-blue-500">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon hover:border-2 border-blue-500">
              <SiFigma />
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex gap-4 mt-4"
          >
            <span className="bannerIcon hover:border-2 border-blue-500">
              <FaNodeJs />
            </span>
            <span className="bannerIcon hover:border-2 border-blue-500">
              <SiMongodb />
            </span>
            <span className="bannerIcon hover:border-2 border-blue-500">
              <FaHtml5 />
            </span>
            <span className="bannerIcon hover:border-2 border-blue-500">
              <IoLogoCss3 />
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LeftBanner;
