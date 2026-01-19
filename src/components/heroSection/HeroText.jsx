import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaFileAlt, FaFilePdf } from "react-icons/fa";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-6 h-full justify-center md:text-left sm:text-center relative">
      {/* Subtle background gradient */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange/5 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan/5 rounded-full blur-2xl"></div>

      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey relative"
      >
        <span className="relative z-10">Front-End Web Developer</span>
        <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-orange/50 rounded-full md:block sm:hidden"></div>
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold uppercase relative"
      >
        <span className="relative z-10">
          <span className="text-orange">Abigael</span>
          <br className="sm:hidden md:block" />
          <span className="text-cyan">Njeri</span>
        </span>
        <div className="absolute -bottom-2 left-0 w-24 h-0.5 bg-orange/50 rounded-full md:block sm:hidden"></div>
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-gray-300 bg-white/5 p-6 rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300 max-w-2xl"
      >
        Transforming Ideas into Exceptional Digital Experiences
      </motion.p>

      <motion.p
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base text-gray-400 max-w-2xl leading-relaxed"
      >
        Passionate about creating intuitive and engaging web experiences. With expertise in modern front-end technologies, I specialize in building responsive, user-friendly applications that bring creative visions to life. Currently crafting digital solutions at Sys Nanatec, where I combine technical skills with a keen eye for design to deliver exceptional results.
      </motion.p>

      {/* Document Buttons */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex gap-4 mt-2"
      >
        <a
          href="/public/Abigael's CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-orange text-orange rounded-lg hover:bg-orange/10 transition-colors"
        >
          <FaFilePdf />
          <span>View CV</span>
        </a>
        <a
          href="/public/cover letter abz.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-cyan text-cyan rounded-lg hover:bg-cyan/10 transition-colors"
        >
          <FaFileAlt />
          <span>View Cover Letter</span>
        </a>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 -right-20 w-40 h-40 border-2 border-orange/20 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/2 -left-20 w-40 h-40 border-2 border-cyan/20 rounded-full blur-sm"></div>
    </div>
  );
};

export default HeroText;
