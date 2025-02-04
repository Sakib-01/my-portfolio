import { useState } from "react";
// import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-11/12 h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      {/* Logo with Zoom-in Animation */}
      <motion.div
        className="flex justify-center items-center gap-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img className="w-20 rounded-full" src={logo} alt="logo" />
        <h2 className="text-designColor text-3xl font-semibold">Sakib</h2>
      </motion.div>

      {/* Navbar Links */}
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }, index) => (
            <motion.li
              key={_id}
              className="text-base font-bold text-gray-400 tracking-wide cursor-pointer relative group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-designColor duration-300"
              >
                {title}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-designColor transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>

        {/* Mobile Menu */}
        {showMenu && (
          <motion.div
            className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col gap-8 py-2 relative">
              {/* Mobile Menu Content */}
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  I am a passionate junior web developer specializing in
                  creating responsive and dynamic websites with a focus on user
                  experience and modern design principles.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item, index) => (
                  <motion.li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a href="https://github.com/Sakib-01" target="blank">
                    <span className="bannerIcon">
                      <FaGithub />
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/sakibul.haque.148?mibextid=LQQJ4d"
                    target="blank"
                  >
                    <span className="bannerIcon">
                      <FaFacebookF />
                    </span>
                  </a>
                  <a href="https://wa.me/8801777185618" target="blank">
                    <span className="bannerIcon">
                      <FaWhatsapp />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/syed-sakibul-haque-3a2961282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="blank"
                  >
                    <span className="bannerIcon">
                      <FaLinkedinIn />
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
