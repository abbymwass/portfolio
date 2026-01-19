import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useRef, useState } from "react";
import { generatePDF } from "../../utils/pdfGenerator";
import { FaFilePdf } from "react-icons/fa";

const projects = [
  {
    name: "Ibima",
    year: "2025",
    align: "right",
    image: "../../public/images/ibima.png",
    link: "https://ibima.co.ke/",
    description: "A comprehensive insurance platform providing seamless insurance services and policy management across Kenya.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/ibima",
    status: "Live"
  },
  {
    name: "bizsure",
    year: "2025",
    align: "right",
    image: "../../public/images/bizsure-insurance.jpg", // If you have a logo, update this path to the logo file
    link: "https://demo.surebiz.co.ke/",
    description: "A financial management application helping users track expenses and manage budgets effectively.",
    technologies: ["React", "Firebase", "Material UI", "Redux"],
    githubLink: "https://github.com/yourusername/bizsure", // Use a GitHub link if available
    status: "Live"
  },
  {
    name: "kids playzone ",
    year: "J2025",
    align: "right",
    image: "../../public/images/kids.png",
    link: "https://kidsplayzone.nanatec.co.ke/",
    description: "this is a kids website that i have only dealt with the UI/ux.",
    technologies: ["html,css,css3"],
    githubLink: "",
    status: "live"
  },
  // {
  //   name: "Bank of Luck",
  //   year: "May2024",
  //   align: "left",
  //   image: "../../public/images/website-img-4.jpg",
  //   link: "#",
  //   description: "A modern banking platform offering seamless financial services and transactions.",
  //   technologies: ["React", "Node.js", "GraphQL", "Docker"],
  //   githubLink: "#",
  //   status: "Planning"
  // },
];

const ProjectsMain = () => {
  const projectsRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePDF = async () => {
    if (!projectsRef.current) return;
    
    setIsGenerating(true);
    
    // Scroll to projects section to ensure all animations are triggered
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Wait for scroll and animations to complete
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    await generatePDF(
      projectsRef.current,
      'my-projects.pdf',
      {
        backgroundColor: '#0a0a0a',
        orientation: 'portrait',
        animationTimeout: 4000, // Give more time for animations
        onStart: () => setIsGenerating(true),
        onComplete: () => {
          setIsGenerating(false);
          alert('PDF generated successfully!');
        },
        onError: (error) => {
          setIsGenerating(false);
          console.error('PDF generation error:', error);
        }
      }
    );
  };

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      
      {/* PDF Export Button */}
      <div className="flex justify-center mt-8 mb-4">
        <button
          onClick={handleGeneratePDF}
          disabled={isGenerating}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan to-orange text-white hover:shadow-lg hover:shadow-cyan/20 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaFilePdf className={isGenerating ? "animate-pulse" : ""} />
          {isGenerating ? "Generating PDF..." : "Export to PDF"}
        </button>
      </div>

      {/* Projects container with ref for PDF generation */}
      <div ref={projectsRef} className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              {...project}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
