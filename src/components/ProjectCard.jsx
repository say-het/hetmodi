import React from 'react';

const ProjectCard = ({ imgurl, title, description }) => {
  return (
    <div className="bg-black border-2 p-2 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full md:w-72 mx-auto">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={imgurl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
        />
      </div>
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold  mb-2">{title}</h2>
        <p className=" mb-4">{description}</p>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300">
          See Live
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
