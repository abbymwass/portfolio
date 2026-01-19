import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px] relative">
      {/* Background gradient effect */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange/10 rounded-full blur-3xl"></div>

      <h2 className="text-6xl text-cyan mb-10 relative">
        Projects
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan to-orange rounded-full"></span>
      </h2>

      {/* <div className="max-w-3xl relative z-10">
        <p className="text-lg text-center text-gray-300 leading-relaxed backdrop-blur-sm bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
          Selected live builds showcasing real-world UIs, performance, and accessibility.
        </p>
      </div> */}
    </div>
  );
};

export default ProjectsText;
