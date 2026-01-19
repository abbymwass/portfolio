import { FaUser, FaCode, FaLightbulb, FaRocket, FaMusic, FaBrain } from "react-icons/fa";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10 relative flex items-center gap-3">
        <FaUser className="text-orange" />
        About Me
        <span className="absolute -bottom-2 left-0 w-20 h-1 bg-orange rounded-full"></span>
      </h2>
      <div className="space-y-8">
        <div className="relative group">
          <div className="absolute -left-4 top-0 w-1 h-full bg-cyan/20 rounded-full group-hover:bg-cyan transition-all duration-300"></div>
          <p className="text-lg text-gray-300 leading-relaxed pl-4">
            Hi, I'm <span className="text-cyan font-semibold">Abigael Njeri</span>, a passionate frontend developer with a keen eye for creating beautiful and functional user interfaces. I specialize in building responsive and interactive web applications using modern technologies. My approach combines technical expertise with creative problem-solving to deliver exceptional user experiences. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
          </p>
        </div>
        
        <div className="relative group">
          <div className="absolute -left-4 top-0 w-1 h-full bg-orange/20 rounded-full group-hover:bg-orange transition-all duration-300"></div>
          <p className="text-lg text-gray-300 leading-relaxed pl-4">
            With expertise in <span className="text-orange">React</span>, <span className="text-orange">JavaScript</span>, and modern CSS frameworks, I focus on writing clean, maintainable code while ensuring optimal performance and accessibility. I believe in creating intuitive user interfaces that not only look great but also provide seamless experiences across all devices.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -left-4 top-0 w-1 h-full bg-cyan/20 rounded-full group-hover:bg-cyan transition-all duration-300"></div>
          <p className="text-lg text-gray-300 leading-relaxed pl-4">
            When I'm not coding, I enjoy staying up-to-date with the latest web development trends and contributing to open-source projects. I'm particularly interested in <span className="text-cyan">UI/UX design principles</span> and how they can be implemented to create more engaging digital experiences. I thrive in collaborative environments and am always excited to take on new challenges that push my skills to the next level.
          </p>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan/20 hover:border-cyan/40 transition-all duration-300">
          <h3 className="text-2xl text-cyan mb-4 flex items-center gap-2">
            <FaRocket className="text-orange" />
            My Mission
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm on a mission to create web experiences that not only meet but exceed user expectations. Every line of code I write is a step towards building a more accessible, efficient, and beautiful digital world. I believe in the power of technology to make a positive impact, and I'm committed to being part of that change.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-orange/20 hover:border-orange/40 transition-all duration-300 flex-1 min-w-[250px]">
            <h4 className="text-xl text-orange mb-2 flex items-center gap-2">
              <FaMusic className="text-cyan" />
              Fun Fact
            </h4>
            <p className="text-gray-300">I can debug code while listening to classical music - it's my secret productivity hack! 🎵</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg border border-cyan/20 hover:border-cyan/40 transition-all duration-300 flex-1 min-w-[250px]">
            <h4 className="text-xl text-cyan mb-2 flex items-center gap-2">
              <FaBrain className="text-orange" />
              Current Focus
            </h4>
            <p className="text-gray-300">Exploring the latest in AI-powered web development and micro-interactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeText;
