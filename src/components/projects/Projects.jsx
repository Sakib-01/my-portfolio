import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS
import { motion } from "framer-motion"; // Framer Motion
import Title from "../../layout/Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectTwo, projectThree } from "../../assets/index";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      {/* Add motion to the grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div data-aos="fade-up">
          <ProjectsCard
            title="ProRecco - Product Recommendation Website"
            des="ProRecco is a React-based product recommendation website built with MongoDB, Express, and Node.js. The Product Review project allows users to submit, view, and interact with product reviews. It aims to provide an easy-to-use platform for customers to share their experiences with products."
            src={projectOne}
            githubLink="https://github.com/Sakib-01/product-recommendation-client"
            liveLink="https://prorecco.netlify.app"
          />
        </motion.div>

        <motion.div data-aos="fade-up" data-aos-delay="200">
          <ProjectsCard
            title="SportsGear - Sports Equipment Website"
            des="SportsGear is a React e-commerce platform focused on sports equipment. Built with the MERN stack, GameGear is a modern and sleek e-commerce platform for sports accessories. It offers dynamic features, responsive design, and advanced technologies."
            src={projectTwo}
            githubLink="https://github.com/Sakib-01/Game-gear-client"
            liveLink="https://wondrous-dasik-07abea.netlify.app"
          />
        </motion.div>

        <motion.div data-aos="fade-up" data-aos-delay="400">
          <ProjectsCard
            title="Career Compass - Career Growth Website"
            des="Career Compass is a cutting-edge career counseling platform designed to guide individuals toward their professional aspirations. With its intuitive design and insightful content. It's built with MongoDB, Express, and Node.js for robust functionality."
            src={projectThree}
            githubLink="https://github.com/Sakib-01/career-compass"
            liveLink="https://delicate-figolla-3ba475.netlify.app"
          />
        </motion.div>

        {/* Repeat the projects for a second row */}
        <motion.div data-aos="fade-up" data-aos-delay="600">
          <ProjectsCard
            title="ProRecco - Product Recommendation Website"
            des="ProRecco is a React-based product recommendation website built with MongoDB, Express, and Node.js. The Product Review project allows users to submit, view, and interact with product reviews. It aims to provide an easy-to-use platform for customers to share their experiences with products."
            src={projectThree}
            githubLink="https://github.com/Sakib-01/product-recommendation-client"
            liveLink="https://prorecco.netlify.app"
          />
        </motion.div>

        <motion.div data-aos="fade-up" data-aos-delay="800">
          <ProjectsCard
            title="SportsGear - Sports Equipment Website"
            des="SportsGear is a React e-commerce platform focused on sports equipment. Built with the MERN stack, GameGear is a modern and sleek e-commerce platform for sports accessories. It offers dynamic features, responsive design, and advanced technologies."
            src={projectOne}
            githubLink="https://github.com/Sakib-01/Game-gear-client"
            liveLink="https://wondrous-dasik-07abea.netlify.app"
          />
        </motion.div>

        <motion.div data-aos="fade-up" data-aos-delay="1000">
          <ProjectsCard
            title="Career Compass - Career Growth Website"
            des="Career Compass is a cutting-edge career counseling platform designed to guide individuals toward their professional aspirations. With its intuitive design and insightful content. It's built with React, MongoDB, Express, and Node.js for robust functionality."
            src={projectTwo}
            githubLink="https://github.com/Sakib-01/career-compass"
            liveLink="https://delicate-figolla-3ba475.netlify.app"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
