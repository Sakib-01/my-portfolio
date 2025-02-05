/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

// Modal Component
const Modal = ({ isOpen, closeModal, projectInfo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-[500px] lg:w-[600px] max-h-[80vh] overflow-y-auto relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-xl font-bold"
        >
          &times;
        </button>

        {/* Modal Content */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          {projectInfo.title}
        </h3>
        <p className="text-base mb-4 text-gray-700">{projectInfo.des}</p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {projectInfo.technology.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-gray-800 text-white rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Challenges Faced */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-900">
            Challenges Faced:
          </h4>
          <p className="text-sm text-gray-700">{projectInfo.challenges}</p>
        </div>

        {/* Potential Improvements */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900">
            Potential Improvements:
          </h4>
          <p className="text-sm text-gray-700">{projectInfo.improvements}</p>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6">
          <a
            href={projectInfo.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg p-3 bg-gray-800 text-white rounded-full hover:bg-designColor transition duration-300"
          >
            <BsGithub />
          </a>
          <a
            href={projectInfo.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg p-3 bg-gray-800 text-white rounded-full hover:bg-designColor transition duration-300"
          >
            <FaGlobe />
          </a>
        </div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectsCard = ({
  title,
  des,
  src,
  githubLink,
  liveLink,
  technology,
  challenges,
  improvements,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const projectInfo = {
    title,
    des,
    githubLink,
    liveLink,
    src,
    technology,
    challenges,
    improvements,
  };

  return (
    <div className="w-full p-4 xl:px-5 h-auto xl:py-8 rounded-lg shadow-lg flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition duration-1000">
      {/* Image Container */}
      <div className="w-full h-60 overflow-hidden rounded-lg flex-shrink-0">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      {/* scroll image contaner */}
      {/* <div className="w-full h-60 overflow-hidden rounded-lg flex-shrink-0 relative group">
        <img
          className="w-full h-auto object-cover absolute top-0 left-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-50%]"
          src={src}
          alt={title}
        />
      </div> */}

      {/* Content Section */}
      <div className="w-full mt-5 flex flex-col gap-6 flex-grow h-[250px]">
        <div className="flex items-center justify-between">
          <h3 className="text-base uppercase text-designColor font-normal">
            {title}
          </h3>
          <div className="flex gap-2">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300"
            >
              <BsGithub />
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300"
            >
              <FaGlobe />
            </a>
          </div>
        </div>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 flex-grow">
          {des}
        </p>
      </div>

      {/* View Details Button */}
      <button
        onClick={openModal}
        className=" p-3 bg-gradient-to-r from-designColor to-[#d41457] text-white font-bold rounded-md hover:scale-105 transition duration-300"
      >
        View Details
      </button>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        projectInfo={projectInfo}
      />
    </div>
  );
};

export default ProjectsCard;
