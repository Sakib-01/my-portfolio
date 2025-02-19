import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS
import { motion } from "framer-motion"; // Framer Motion
import Title from "../../layout/Title";
import ProjectsCard from "./ProjectsCard";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
} from "../../assets/index";

const projectData = [
  {
    title: "ZIPSHIP (Parcel Management App)",
    des: "ZIPSHIP .An online platform for booking, managing, and delivering parcels with a user-friendly interface and powerful features. User can send parcel , deliveryman delivered those ,and admin who can check all those things.It aims to provide an easy-to-use platform for customers to share their goods",
    src: projectFour,
    githubLink: "https://github.com/Sakib-01/ZIPSHIP-Parcel-Management-client",
    liveLink: "https://zipship.netlify.app",
    technology: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "Firebase",
      "stripe",
    ],
    challenges:
      "Managing MongoDB aggregation for data relation, Updated version of react-router Dom and tailwind and optimizing database queries for better performance.",
    improvements:
      "Implementing AI-based recommendations and adding authentication to enhance user experience and security.",
  },
  {
    title: "ProRecco - Product Recommendation Website",
    des: "ProRecco is a React-based product recommendation website built with MongoDB, Express, and Node.js. The Product Review project allows users to submit, view, and interact with product reviews. It aims to provide an easy-to-use platform for customers to share their experiences with products.",
    src: projectOne,
    githubLink: "https://github.com/Sakib-01/product-recommendation-client",
    liveLink: "https://prorecco.netlify.app",
    technology: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "Firebase",
      "JWT",
    ],
    challenges:
      "Managing real-time updates for user-submitted reviews and optimizing database queries for better performance.",
    improvements:
      "Implementing AI-based recommendations and adding authentication to enhance user experience and security.",
  },
  // {
  //   title: "SportsGear - Sports Equipment Website",
  //   des: "SportsGear is a React e-commerce platform focused on sports equipment. Built with the MERN stack, GameGear is a modern and sleek e-commerce platform for sports accessories. It offers dynamic features, responsive design, and advanced technologies.",
  //   src: projectTwo,
  //   githubLink: "https://github.com/Sakib-01/Game-gear-client",
  //   liveLink: "https://wondrous-dasik-07abea.netlify.app",
  //   technology: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  //   challenges:
  //     "Handling cart state management efficiently across different components and ensuring smooth API integration for product listing.",
  //   improvements:
  //     "Integrating a payment gateway, improving search functionality, and optimizing page load speed for better UX.",
  // },
  {
    title: "Career Compass - Career Growth Website",
    des: "Career Compass is a cutting-edge career counseling platform designed to guide individuals toward their professional aspirations. With its intuitive design and insightful content, it's built with MongoDB, Express, and Node.js for robust functionality.",
    src: projectThree,
    githubLink: "https://github.com/Sakib-01/career-compass",
    liveLink: "https://delicate-figolla-3ba475.netlify.app",
    technology: ["React", "Firebase", "Tailwind CSS"],
    challenges:
      "Implementing a dynamic recommendation system based on user preferences and ensuring smooth navigation across career guidance sections.",
    improvements:
      "Adding AI-driven career suggestions, integrating job application tracking, and enhancing UI for a better user experience.",
  },
];

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

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <ProjectsCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
