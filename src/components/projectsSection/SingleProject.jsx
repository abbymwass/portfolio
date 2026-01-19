import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ 
  name, 
  year, 
  align, 
  image, 
  link, 
  description,
  technologies,
  githubLink,
  status,
  isLogo // Add isLogo prop
}) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-12 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col p-8 rounded-2xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500`}
    >
      <div className="flex-1 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="md:text-4xl sm:text-3xl font-bold bg-gradient-to-r from-orange to-cyan bg-clip-text text-transparent">{name}</h2>
            {status === "Live" ? (
              <div className="relative flex items-center">
                <div className="relative w-5 h-5 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
              </div>
            ) : (
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                status === "In Development" ? "bg-yellow-500/20 text-yellow-400" :
                "bg-gray-500/20 text-gray-400"
              }`}>
                {status}
              </span>
            )}
          </div>
          <h2 className={`text-xl font-light text-gray-300 font-special ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}>
            {year}
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 rounded-full text-sm bg-cyan/10 text-cyan border border-cyan/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-2 items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan to-orange text-white hover:shadow-lg hover:shadow-cyan/20 transition-all duration-500 cursor-pointer group"
          >
            Live Demo 
            <FaExternalLinkAlt className="group-hover:rotate-45 transition-transform duration-500" />
          </a>
          {githubLink !== "#" && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex gap-2 items-center px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-500 cursor-pointer group"
            >
              GitHub
              <FaGithub className="group-hover:scale-110 transition-transform duration-500" />
            </a>
          )}
        </div>
      </div>

      <div className={`relative group ${(name === "bizsure" || name === "kids playzone ") ? "max-h-[80px] max-w-[120px] p-2 bg-white/10" : "max-h-[320px] max-w-[500px]"} rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-500 flex items-center justify-center`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-orange/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <img 
          src={image} 
          alt={`${name} project screenshot`} 
          className={(name === "bizsure" || name === "kids playzone ") ? "w-auto h-12 object-contain mx-auto" : "w-full h-full object-cover"}
        />
      </div>
    </motion.div>
  );
};

export default SingleProject;
