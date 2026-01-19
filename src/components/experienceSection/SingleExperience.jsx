import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const SingleExperience = ({ experience }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleResponsibilities = expanded
    ? experience.responsibilities
    : experience.responsibilities.slice(0, 4);
  const hasMore = experience.responsibilities.length > 4;

  return (
    <div
      className="flex flex-col gap-4 w-[300px] bg-white/5 p-6 rounded-lg border border-white/5"
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
        </div>
        <p className="text-lightBrown text-sm">{experience.date}</p>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-lightGrey font-semibold">Responsibilities:</h4>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
          {visibleResponsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-orange underline mt-2 self-start"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleExperience;
