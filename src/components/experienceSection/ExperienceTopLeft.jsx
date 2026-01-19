import ExperienceInfo from "./ExperienceInfo";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceTopLeft = () => {
  return (
    <motion.div 
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-col gap-8 w-[300px] relative"
    >
      {/* Subtle background gradient */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange/5 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan/5 rounded-full blur-2xl"></div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-orange font-bold uppercase text-3xl font-special text-center relative"
      >
        <span className="relative z-10">Crafting Digital Experiences</span>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-orange/50 rounded-full"></div>
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center items-center gap-6 relative"
      >
        <div className="group hover:scale-105 transition-transform duration-300">
          <ExperienceInfo number="3+" text="Projects" />
        </div>
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <div className="group hover:scale-105 transition-transform duration-300">
          <ExperienceInfo number="100%" text="Dedication" />
        </div>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-gray-300 bg-white/5 p-6 rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300"
      >
        Passionate about creating innovative web solutions that make a difference. 
        Focused on delivering exceptional user experiences through clean, efficient code.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="group hover:scale-105 transition-transform duration-300"
      >
        <ExperienceInfo number="24/7" text="Support" />
      </motion.div>
    </motion.div>
  );
};

export default ExperienceTopLeft;
