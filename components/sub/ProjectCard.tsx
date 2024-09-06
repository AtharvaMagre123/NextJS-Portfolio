import React from "react";

interface ProjectCardProps {
  src: string[];
  title: string;
  description: string;
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  src,
  title,
  description,
  github,
}) => {
  return (
    <div className="project-card border p-4 rounded-lg shadow-lg flex flex-col items-center">
      <img
        src={src[0]}
        alt={title}
        className="project-image w-full h-full object-cover mb-4 rounded"
      />

      <h2 className="project-title text-xl font-semibold mb-2 text-white z-20">
        <a
          href={github} // Make sure the link points to the right GitHub URL
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </h2>

      <p className="project-description text-[#575658] mb-4 text-center">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
