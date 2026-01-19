import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Sys Nanatec",
    location: "Nairobi, Kasarani",
    date: "2022 - Present",
    responsibilities: [
      "Developing and maintaining responsive web applications using React and modern JavaScript",
      "Implementing reusable components and optimizing application performance",
      "Collaborating with the team to deliver high-quality user experiences",
      "Working on large-scale applications and generating innovative solutions",
      "Building and integrating RESTful APIs with backend services",
      "Implementing responsive designs and ensuring cross-browser compatibility",
      "Writing clean, maintainable, and well-documented code",
      "Participating in code reviews and implementing best practices",
      "Troubleshooting and debugging complex issues",
      "Staying updated with the latest web development trends and technologies"
    ],
  }
];

const AllExperiences = () => {
  return (
    <div className="flex justify-center">
      <SingleExperience experience={experiences[0]} />
    </div>
  );
};

export default AllExperiences;
