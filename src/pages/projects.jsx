  import React from 'react';
  import ProjectCard from '../components/ProjectCard';

  const Projects = () => {
    return (
      <div className="container mx-auto my-10">
        <div className="flex flex-wrap justify-center gap-4">
            <ProjectCard imgurl={`https://th.bing.com/th/id/OIG4._svs297if_09Bm5aNazy?pid=ImgGn`} title="Chat App" description="Real Time Chatting App using MERN stack and Socket.io"/>
            <ProjectCard imgurl={`https://th.bing.com/th/id/OIG3.HibcaWZvbr75KjcZbayh?w=1024&h=1024&rs=1&pid=ImgDetMain`} title="KissanAI" description="Precision Farming using Advanced Neural Networks"/>
            <ProjectCard imgurl={`https://th.bing.com/th/id/OIG3.I_NJupiV3riLFI5wEfMB?w=1024&h=1024&rs=1&pid=ImgDetMain`} title="Portfolio Website" description="This Website"/>
        </div>
      </div>
    );
  };

  export default Projects;
