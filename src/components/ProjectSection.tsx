import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from ".././components/ui/card";
import { Badge } from ".././components/ui/badge";
import {
  Dialog,
  DialogContent,
} from ".././components/ui/dialog";
import { Button } from ".././components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import { SAOText } from "./SAOText";

// Import project images
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";
import project6 from "../assets/project-6.png";
import project7 from "../assets/project-7.png";
import project8 from "../assets/project-8.png";
import project9 from "../assets/project-9.png";
import project10 from "../assets/project-10.png";
import project11 from "../assets/project-11.png";


interface Technology {
  name: string;
  icon?: React.ReactNode;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  liveUrl?: string;
  githubUrl?: string;
  detailedDescription?: string;
  screenshots?: string[];
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Mock data for projects
  const projects: Project[] = [
    {
      id: "1",
      title: "NetSafeScan",
      description:
        "A sleek web app that scans URLs for potential threats, built with React (Next.js) and Tailwind CSS on the front end, and Node.js, Express, and PostgreSQL on the back end. NetSafeScan demonstrates my ability to build secure and responsive full-stack applications.",
      image: project1,
      technologies: [
        { name: "React(Next.js)" },
        { name: "Tailwind CSS" },
        { name: "Node.js" },
        { name: "Express" },
        { name: "PostgreSQL" },
        { name: "OAuth" },
        { name: "SafeBrowsing API" },
      ],
      liveUrl: "https://example.com/project1",
      githubUrl: "https://github.com/Jackielene/NetSafeScan",
      detailedDescription:
        "NetSafeScan is a modern and responsive web application that empowers users to check the safety of URLs before visiting them. It scans links for potential threats and malicious content, helping ensure a secure browsing experience. I built NetSafeScan using React (Next.js) and Tailwind CSS for the front end, while the back end is powered by Node.js, Express, and PostgreSQL for efficient data processing and reliable storage. This project highlights my focus on security, usability, and building robust full-stack web applications.",
    },
    {
      id: "2",
      title: "Siargao Travels Booking System",
      description:
        "A web-based platform built with Laravel and MySQL that allows users to browse, book, and manage resort reservations in the Siargao Islands.",
      image: project2,
      technologies: [
        { name: "Laravel" },
        { name: "MySQL" },
        { name: "JavaScript" },
        { name: "HTML" },
        { name: "CSS" },
      ],
      liveUrl: "https://example.com/project1",
      githubUrl: "https://github.com/Jackielene/Siargao-Travel-Booking-System--Laravel-",
      detailedDescription:
        "The Siargao Travels Booking System is a web-based platform designed to simplify and streamline the process of booking travel experiences in Siargao Island, Philippines. It allows users to explore available tour packages, reserve accommodations, and make secure online payments—all in one place.",
    },
    {
      id: "3",
      title: "IoT-Enabled Smoke Detector System",
      description:
        "IoT-based smoke detection system providing real-time monitoring to enhance fire safety.",
      image: project3,
      technologies: [
        { name: "Laravel" },
        { name: "MySQL" },
        { name: "JavaScript" },
        { name: "HTML" },
        { name: "CSS" },
      ],
      liveUrl: "https://example.com/project2",
      githubUrl: "https://github.com/Jackielene/Smoke-Sense-IoT-Real-Time-Monitoring",
      detailedDescription:
        "The IoT-Enabled Smoke Detector System is an innovative solution designed to enhance fire safety by improving response time and reliability during fire emergencies. It leverages IoT technology to detect harmful smoke levels in real time and instantly alert designated contacts through SMS notifications, including GPS coordinates of the incident location.",
    },
    {
      id: "4",
      title: "InstaBooth",
      description: "InstaBooth is a digital photobooth website that lets users capture polaroid-style images, apply filters, stickers, and downloadable png.",
      image: project4,
      technologies: [
        { name: "ReactJS" },
        { name: "Tailwind CSS" },
        { name: "Framer Motion" },
      ],
      liveUrl: "https://insta-booth.vercel.app/",
      githubUrl: "https://github.com/Jackielene/InstaBooth",
      detailedDescription:
        "InstaBooth is a web-based digital photobooth that allows users to capture fun and memorable moments with a creative twist. Designed with user experience in mind, the platform lets users take instant polaroid-style photos, apply filters, choose from a variety of frames and stickers, and download the final image as a PNG file — all from the convenience of their browser.",
    },
    {
      id: "5",
      title: "SNSU Enrollment System",
      description: "A web-based platform designed to streamline student enrollment, grade management, and faculty submissions.",
      image: project5,
      technologies: [
        { name: "PHP" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "Bootstrap" },
        { name: "MySQL" },
      ],
      liveUrl: "https://example.com/project4",
      githubUrl: "https://github.com/Jackielene/SNSU-Enrollment-Website",
      detailedDescription:
        "The SNSU Enrollment System is a web-based application developed for Surigao del Norte State University to streamline the student enrollment and grade management process. This system allows students to conveniently enroll in subjects, update personal information, and view their grades for currently enrolled courses.",
    },
    {
      id: "6",
      title: "Cosmos",
      description: "Cosmos is an interactive educational website that explores the wonders of the solar system.",
      image: project6,
      technologies: [
        { name: "ReactJS" },
        { name: "Tailwind CSS" },
        { name: "Framer Motion" },
      ],
      liveUrl: "https://cosmos-six.vercel.app/",
      githubUrl: "https://github.com/Jackielene/Cosmos",
      detailedDescription:
        "Cosmos is a modern web experience that explores the beauty, complexity, and wonder of the universe through an interactive and visually captivating platform. Designed to educate and inspire, Cosmos provides users with rich, dynamic content on celestial bodies, galaxies, space missions, and astronomical phenomena.",
    },
    {
      id: "7",
      title: "Trendify E-Commerce Website",
      description: "An online platform dedicated to offering trendy and fashionable clothing.",
      image: project7,
      technologies: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "Bootstrap" },
        { name: "JavaScript" },
      ],
      liveUrl: "https://jackielene.github.io/Trendify-E-Commerce-Website/",
      githubUrl: "https://github.com/Jackielene/Trendify-E-Commerce-Website",
      detailedDescription:
        "Trendify is a modern and responsive e-commerce website built to deliver a seamless online shopping experience. Designed with both aesthetics and functionality in mind, Trendify allows users to browse, search, and purchase the latest fashion and lifestyle products with ease.",
    },
    {
      id: "8",
      title: "Portfolio 1",
      description: "A personal website designed to showcase your skills and projects.",
      image: project8,
      technologies: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "Bootstrap" },
      ],
      liveUrl: "https://jackielene.github.io/My-Old-Portfolio/",
      githubUrl: "https://github.com/Jackielene/My-Old-Portfolio",
      detailedDescription:
        "Portfolio Website 1 is a personal online portfolio designed to showcase my skills, projects, and experience as an aspiring web developer. Built with a clean and responsive layout, this website reflects both my technical abilities and design sense, providing a professional space to present who I am and what I do.",
    },  
    {
      id: "9",
      title: "Portfolio 2",
      description: "A personal website designed to showcase your skills and projects.",
      image: project9,
      technologies: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "Bootstrap" },
      ],
      liveUrl: "https://jackielene-pomoy-portfolio.vercel.app/",
      githubUrl: "https://github.com/Jackielene/Jackielene-Pomoy-Portfolio",
      detailedDescription:
        "Portfolio Website 2 is a modern, fully responsive personal website developed to highlight my journey, skills, and projects as a web developer. Unlike the first version, this iteration puts a stronger emphasis on design aesthetics, user interactivity, and animation to create a more engaging user experience.",
    },
    {
      id: "10",
      title: "Scoopify",
      description: "Scoopify is a WordPress-based website dedicated to all things ice cream. It features delicious content including flavor guides, homemade recipes, product reviews, and the latest trends in frozen desserts.",
      image: project10,
      technologies: [
        { name: "WordPress" },
        { name: "Elementor" },
        { name: "CSS" },
      ],
      liveUrl: "https://example.com/project6",
      githubUrl: "https://github.com/Jackielene/Scoopify-WordPress",
      detailedDescription:
        "Scoopify is a visually appealing and user-friendly web application designed for an ice cream shop business. The platform allows customers to browse a curated selection of ice cream flavors, view product details, and place orders with ease. Scoopify aims to enhance the customer experience by offering a seamless online ordering system that mirrors the delight of walking into a real ice cream parlor.",
    },
    {
      id: "11",
      title: "Marius E-Commerce Website",
      description: "Marius is a modern online clothing shop offering stylish and affordable fashion for all. From everyday essentials to trend-setting pieces, we bring the latest looks straight to your doorstep.",
      image: project11,
      technologies: [
        { name: "PHP" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
      ],
      liveUrl: "https://example.com/project6",
      githubUrl: "https://github.com/username/project6",
      detailedDescription:
        "Marius E-Commerce Website is a modern and fully responsive online shopping platform built to deliver a smooth and engaging user experience. Designed for a fashion and lifestyle brand, Marius showcases a sleek product catalog, user-friendly navigation, and secure checkout functionality tailored to meet the needs of today's digital shoppers.",
    },
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-8 lg:px-16 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SAOText variant="h2" className="mb-4">
            My Projects
          </SAOText>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work showcasing my skills in front-end
            development, UI/UX design, and interactive web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card
                className="overflow-hidden h-full cursor-pointer bg-card hover:shadow-xl transition-all duration-300"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech.name}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => selectedProject && closeProjectModal()}
      >
        {selectedProject && (
          <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background/95 backdrop-blur-sm border-none shadow-2xl rounded-xl">
            <div className="relative">
              {/* Hero image with gradient overlay */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-t-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/95"></div>
                
                {/* Close button positioned at top-right with improved visibility */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 rounded-full bg-black border border-gray-400 hover:bg-black/80 text-white z-10 transition-all duration-200 hover:scale-110 shadow-md"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Title and description positioned over the gradient */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-white/80 max-w-3xl">{selectedProject.description}</p>
              </div>
            </div>
            
            <div className="p-6 md:p-8 space-y-8">
              {/* Technologies used with animated badges */}
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center text-white">
                  <span className="w-8 h-8 mr-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-sm">⚙️</span>
                  </span>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Badge variant="secondary" className="px-3 py-1 text-sm text-white">
                        {tech.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* About this project with icon */}
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center text-white">
                  <span className="w-8 h-8 mr-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-sm">📝</span>
                  </span>
                  About this project
                </h4>
                <p className="text-white leading-relaxed">
                  {selectedProject.detailedDescription || selectedProject.description}
                </p>
              </div>
              
              {/* Screenshots section with improved grid */}
              {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center text-white">
                    <span className="w-8 h-8 mr-2 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-sm">🖼️</span>
                    </span>
                    Screenshots
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.screenshots.slice(1).map((screenshot, index) => (
                      <motion.div
                        key={index}
                        className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <img
                          src={screenshot}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Action buttons with improved styling */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                {selectedProject.liveUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild className="px-6 py-5 bg-primary hover:bg-primary/90 shadow-lg text-white">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Demo
                      </a>
                    </Button>
                  </motion.div>
                )}

                {selectedProject.githubUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" asChild className="px-6 py-5 border-2 hover:bg-secondary/10 text-white">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  </motion.div>
                )}
                
                {/* Removing the bottom close button */}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
