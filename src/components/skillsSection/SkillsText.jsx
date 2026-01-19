import { FaCode, FaGraduationCap, FaLightbulb } from "react-icons/fa";

const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px] relative">
      {/* Background gradient effect */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange/10 rounded-full blur-3xl"></div>
      
      <div className="flex items-center gap-3 mb-10 group">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan to-orange rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <FaCode className="text-4xl text-orange relative z-10 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h2 className="text-6xl text-cyan relative">
          My Skills
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan to-orange rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
        </h2>
      </div>
      
      <div className="space-y-8 max-w-3xl relative z-10">
        <p className="text-lg text-center text-gray-300 leading-relaxed backdrop-blur-sm bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
          I'm proficient in these technologies and passionate about using them to create meaningful solutions. While I'm continuously learning and growing, I've developed a solid foundation in these tools and frameworks. I focus on writing clean, maintainable code and following best practices to deliver quality results. Each project I work on helps me refine these skills further and expand my knowledge in web development.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group bg-gray-800/50 p-6 rounded-lg border border-cyan/20 hover:border-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/20 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan to-orange rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                <FaCode className="text-2xl text-orange relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl text-cyan group-hover:text-orange transition-colors duration-300">Development</h3>
            </div>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              Focused on writing clean, efficient code and implementing modern development practices
            </p>
          </div>

          <div className="group bg-gray-800/50 p-6 rounded-lg border border-orange/20 hover:border-orange/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange/20 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange to-cyan rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                <FaGraduationCap className="text-2xl text-cyan relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl text-orange group-hover:text-cyan transition-colors duration-300">Learning</h3>
            </div>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              Continuously expanding my knowledge through projects and staying updated with latest trends
            </p>
          </div>

          <div className="group bg-gray-800/50 p-6 rounded-lg border border-cyan/20 hover:border-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/20 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan to-orange rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                <FaLightbulb className="text-2xl text-orange relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl text-cyan group-hover:text-orange transition-colors duration-300">Innovation</h3>
            </div>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              Exploring new technologies and creative solutions to build better user experiences
            </p>
          </div>
        </div>

        <div className="group bg-gray-800/50 p-6 rounded-lg border border-orange/20 hover:border-orange/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange/20">
          <p className="text-lg text-center text-gray-300 italic group-hover:text-gray-200 transition-colors duration-300">
            "Every line of code is an opportunity to learn, improve, and create something amazing."
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsText;
