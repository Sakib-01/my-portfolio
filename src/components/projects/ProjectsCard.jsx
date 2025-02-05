/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

// Modal Component
const Modal = ({ isOpen, closeModal, projectInfo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-900">
            {projectInfo.title}
          </h3>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-900"
          >
            X
          </button>
        </div>
        <p className="text-base mb-4">{projectInfo.des}</p>
        <div className="flex justify-between">
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

const ProjectsCard = ({ title, des, src, githubLink, liveLink }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const projectInfo = { title, des, githubLink, liveLink, src };

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000">
      {/* Image Container */}
      <div className="w-full h-60 overflow-hidden rounded-lg flex-shrink-0">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>

      {/* Content Section */}
      <div className="w-full mt-5 flex flex-col gap-6 flex-grow h-[300px]">
        <div className="flex items-center justify-between">
          <h3 className="text-base uppercase text-designColor font-normal">
            {title}
          </h3>
          <div className="flex gap-2">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
            >
              <BsGithub />
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
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
        className="mt-4 p-3 bg-gradient-to-r from-designColor to-[#d41457] text-white font-bold rounded-md hover:scale-105 transition duration-300"
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
