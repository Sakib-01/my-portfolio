import React, { useState, useEffect } from "react";
import Title from "../../layout/Title";
import Education from "./Education";
import Skills from "./Skills";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Importing the AOS styles

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(true);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      easing: "ease-in-out", // easing function
      once: true, // trigger animation only once
    });
  }, []);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Title title="As a junior web developer" des="My Resume" />
        </motion.div>
      </div>

      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {/* Professional Skills Tab */}
          <motion.li
            onClick={() => setEducationData(false) & setSkillData(true)}
            className={`${
              skillData
                ? "border-designColor text-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Professional Skills
          </motion.li>

          {/* Education Tab */}
          <motion.li
            onClick={() => setEducationData(true) & setSkillData(false)}
            className={`${
              educationData
                ? "border-designColor text-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Education
          </motion.li>

          {/* Experience and Achievements tabs (currently commented out) */}
          {/* <motion.li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Experience
          </motion.li>
          <motion.li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Achievements
          </motion.li> */}
        </ul>
      </div>

      {/* Conditional Rendering for Skills and Education */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10"
      >
        {skillData && <Skills />}
        {educationData && <Education />}
        {/* {achievementData && <Achievement />} */}
      </motion.div>
    </section>
  );
};

export default Resume;
