import ExperienceInfo from "./ExperienceInfo";
import { useState } from "react";

const ExperienceTopLeft = () => {
  const previewText = "Passionate about creating innovative web solutions that make a difference. Focused on delivering exceptional user experiences through clean, efficient code.";
  
  const fullText = "I've developed and deployed numerous web applications that are currently live and accessible on Google. My portfolio showcases a diverse range of projects, from interactive e-commerce platforms to dynamic web applications. Each project demonstrates my commitment to creating responsive, user-friendly interfaces and implementing modern web technologies. I take pride in delivering solutions that not only meet client requirements but also provide exceptional user experiences.";

  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className="flex flex-col gap-8 w-[300px] relative"
    >
      {/* Subtle background gradient */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange/5 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan/5 rounded-full blur-2xl"></div>

      <p 
        className="text-orange font-bold uppercase text-3xl font-special text-center relative"
      >
        <span className="relative z-10">Crafting Digital Experiences</span>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-orange/50 rounded-full"></div>
      </p>

      <div 
        className="flex justify-center items-center gap-6 relative"
      >
        <div className="group">
          <ExperienceInfo number="3+" text="Projects" />
        </div>
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <div className="group">
          <ExperienceInfo number="100%" text="Dedication" />
        </div>
      </div>

      <div 
        className="text-center text-gray-300 bg-white/5 p-6 rounded-lg border border-white/5"
      >
        <p className="mb-3">
          {expanded ? fullText : previewText}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-orange hover:text-cyan transition-colors underline"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>

      <div 
        className="group"
      >
        <ExperienceInfo number="24/7" text="Support" />
      </div>
    </div>
  );
};

export default ExperienceTopLeft;
