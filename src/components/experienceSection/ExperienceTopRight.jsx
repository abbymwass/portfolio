import { useState } from "react";

const ExperienceTopRight = () => {
  const fullText =
    "I've developed and deployed numerous web applications that are currently live and accessible on Google. My portfolio showcases a diverse range of projects, from interactive e-commerce platforms to dynamic web applications. Each project demonstrates my commitment to creating responsive, user-friendly interfaces and implementing modern web technologies. I take pride in delivering solutions that not only meet client requirements but also provide exceptional user experiences.";

  const preview = fullText.slice(0, 180) + "...";
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="xl:w-[25%] lg:w-[30%] border border-lightBrown p-4 rounded-xl">
      <p className="text-lg text-center text-lightGrey">
        {expanded ? fullText : preview}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-sm text-orange underline"
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
};

export default ExperienceTopRight;
