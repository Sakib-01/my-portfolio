import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="PGD in Information and Communication Technology"
            subTitle="Bangladesh Agricultural University (2023 - 2024)"
            result="3.90/4"
            des="This postgraduate diploma program focuses on developing advanced skills in information and communication technology to prepare professionals for the tech industry."
          />
          <ResumeCard
            title="MSc in Mathematics"
            subTitle="National University Bangladesh (2020 - 2021)"
            result="3.89/4"
            des="This master's program emphasizes advanced mathematical concepts and research, equipping students for academic and professional careers in mathematics."
          />
          <ResumeCard
            title="BSc in Mathematics"
            subTitle="Kingstar Secondary School (2015 - 2019)"
            result="3.45/4"
            des="This undergraduate program provides a strong foundation in mathematics, focusing on problem-solving, analytical thinking, and practical applications."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
              <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Sr. Software Engineer"
                subTitle="Google Out Tech - (2017 - Present)"
                result="USA"
                des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
              />
              <ResumeCard
                title="Web Developer & Trainer"
                subTitle="Apple Developer Team - (2012 - 2016)"
                result="MALAYSIA"
                des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
              />
              <ResumeCard
                title="Front-end Developer"
                subTitle="Nike - (2020 - 2011)"
                result="Oman"
                des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
              />
            </div>
          </div> */}
    </motion.div>
  );
};

export default Education;
