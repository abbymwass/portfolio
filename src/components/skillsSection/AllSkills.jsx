import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skillSections = [
  {
    title: "Frontend",
    skills: [
      { skill: "HTML", percentage: 98, level: "Excellent" },
      { skill: "CSS", percentage: 95, level: "Excellent" },
      { skill: "JavaScript", percentage: 80, level: "Advanced" },
      { skill: "ReactJS", percentage: 70, level: "Good" },
      { skill: "Vue.js", percentage: 65, level: "Good" },
      { skill: "Svelte", percentage: 60, level: "Good" },
      { skill: "TailwindCSS", percentage: 88, level: "Advanced" },
      { skill: "TypeScript", percentage: 65, level: "Good" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { skill: "PHP", percentage: 50, level: "Intermediate" },
      { skill: "Node.js", percentage: 60, level: "Intermediate" },
      { skill: "Express.js", percentage: 55, level: "Intermediate" },
      { skill: "MongoDB", percentage: 45, level: "Intermediate" }
    ]
  },
  {
    title: "Other Technologies",
    skills: [
      { skill: "Git", percentage: 85, level: "Advanced" },
      { skill: "Docker", percentage: 40, level: "Basic" },
      { skill: "AWS", percentage: 35, level: "Basic" },
      { skill: "Linux", percentage: 60, level: "Intermediate" }
    ]
  }
];

const AllSkills = () => {
  return (
    <div className="mt-8 max-w-5xl">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Frontend Section */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="md:col-span-1"
        >
          <h3 className="text-2xl text-cyan mb-8 font-semibold relative group">
            {skillSections[0].title}
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-cyan to-orange rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-300"></span>
          </h3>
          <div className="space-y-6">
            {skillSections[0].skills.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", `0.${index}`)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
                className="group relative"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium group-hover:text-cyan transition-colors duration-300">
                    {item.skill}
                  </span>
                  <span className="text-sm text-orange/80 group-hover:text-orange transition-colors duration-300">
                    {item.level}
                  </span>
                </div>
                <div className="relative w-full h-2 bg-gray-700/30 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan to-orange rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {item.percentage}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backend and Other Technologies */}
        <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
          {skillSections.slice(1).map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <h3 className="text-2xl text-cyan mb-8 font-semibold relative group">
                {section.title}
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-cyan to-orange rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-300"></span>
              </h3>
              <div className="space-y-6">
                {section.skills.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", `0.${index}`)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
                    className="group relative"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-cyan transition-colors duration-300">
                        {item.skill}
                      </span>
                      <span className="text-sm text-orange/80 group-hover:text-orange transition-colors duration-300">
                        {item.level}
                      </span>
                    </div>
                    <div className="relative w-full h-2 bg-gray-700/30 rounded-full overflow-hidden backdrop-blur-sm">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan to-orange rounded-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex justify-end mt-1">
                      <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {item.percentage}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
