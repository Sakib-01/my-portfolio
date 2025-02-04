import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { contactImg } from "../../assets/index";
import AOS from "aos";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ContactLeft = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <motion.div
      className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      />
      <div className="flex flex-col gap-4">
        <h3
          className="text-3xl font-bold text-white"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          Syed Sakibul Haque
        </h3>
        <p
          className="text-lg font-normal text-gray-400"
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-delay="400"
        >
          FrontEnd Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide"></p>
        <p
          className="text-base text-gray-400 flex items-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="500"
        >
          Phone: <span className="text-lightText">+8801777185618</span>
        </p>
        <p
          className="text-base text-gray-400 flex items-center gap-2"
          data-aos="fade-up"
          data-aos-duration="1800"
          data-aos-delay="600"
        >
          Email:{" "}
          <span className="text-lightText">syedsakibulhaque2@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2
          className="text-designColor uppercase font-titleFont mb-4"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="700"
        >
          Find me in
        </h2>
        <div className="flex gap-1 sm:gap-4">
          <a href="https://github.com/Sakib-01" target="blank">
            <motion.span
              className="bannerIcon hover:border-2 border-blue-500"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-duration="2200"
              data-aos-delay="800"
            >
              <FaGithub />
            </motion.span>
          </a>
          <a
            href="https://www.facebook.com/sakibul.haque.148?mibextid=LQQJ4d"
            target="blank"
          >
            <motion.span
              className="bannerIcon hover:border-2 border-blue-500"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-duration="2400"
              data-aos-delay="900"
            >
              <FaFacebookF />
            </motion.span>
          </a>
          <a href="https://wa.me/8801777185618" target="blank">
            <motion.span
              className="bannerIcon hover:border-2 border-blue-500"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-duration="2600"
              data-aos-delay="1000"
            >
              <FaWhatsapp />
            </motion.span>
          </a>
          <a
            href="https://www.linkedin.com/in/syed-sakibul-haque-3a2961282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="blank"
          >
            <motion.span
              className="bannerIcon hover:border-2 border-blue-500"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-duration="2800"
              data-aos-delay="1100"
            >
              <FaLinkedinIn />
            </motion.span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactLeft;
