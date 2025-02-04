import { Link } from "react-scroll";
import { bannerImg } from "../../assets/index";
import { motion } from "framer-motion";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center lgl:ml-24 relative">
      {/* Animated Image */}
      <motion.img
        className="w-[300px] h-[400px] lgl:w-[550px] lgl:h-[680px] z-10 rounded-full"
        src={bannerImg}
        alt="bannerImg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Gradient background with animation */}
      <motion.div
        className="rounded-full absolute bottom-0 w-[300px] h-[350px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        {/* Apply the running-border class */}
        <div className="rounded-full running-border w-[300px] h-[350px] lgl:w-[500px] lgl:h-[510px]"></div>
      </motion.div>

      {/* SVG with spinning effect */}
      <Link
        to="contact"
        className="contactButton absolute -bottom-4 -right-4 hidden md:block md:right-12  lgl:-right-4 cursor-pointer"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 200 200" width="100" height="100">
            <circle cx="100" cy="100" r="90" fill="pink" />
            <path
              id="innerCirclePath"
              fill="none"
              d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />
            <text className="circleText">
              <textPath href="#innerCirclePath">Hire Now •</textPath>
            </text>
            <text className="circleText">
              <textPath href="#innerCirclePath" startOffset="44%">
                Contact Me •
              </textPath>
            </text>
          </svg>

          {/* Arrow centered within the SVG */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="black"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default RightBanner;
