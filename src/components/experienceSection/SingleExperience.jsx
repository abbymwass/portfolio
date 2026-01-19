import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-col gap-4 w-[300px] bg-white/5 p-6 rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-orange font-bold text-xl">{experience.job}</h3>
        <div className="flex flex-col gap-1">
          <p className="text-cyan font-semibold">{experience.company}</p>
          {experience.location && (
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <FaMapMarkerAlt className="text-orange" />
              <span>{experience.location}</span>
            </div>
          )}
          {experience.contact && (
            <div className="flex flex-col gap-1 mt-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaPhone className="text-orange" />
                <a href={`tel:${experience.contact.phone}`} className="hover:text-orange transition-colors">
                  {experience.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaEnvelope className="text-orange" />
                <a href={`mailto:${experience.contact.email}`} className="hover:text-orange transition-colors">
                  {experience.contact.email}
                </a>
              </div>
            </div>
          )}
        </div>
        <p className="text-lightBrown text-sm">{experience.date}</p>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-lightGrey font-semibold">Responsibilities:</h4>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SingleExperience;
