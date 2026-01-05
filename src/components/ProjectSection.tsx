import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Card, CardContent } from ".././components/ui/card";
import { Badge } from ".././components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
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
import project12 from "../assets/project 12.png";
import project13 from "../assets/project 13.png";
import newFunnel1 from "../assets/New Funnel 1.mp4";
import newFunnel2 from "../assets/New Funnel 2.mp4";
import permadeckFunnel from "../assets/Permadeck.mp4";
import schoolFreightWorksFunnel from "../assets/School Freight Works.mp4";
import automation1 from "../assets/Automation 1.png";
import automation2 from "../assets/Automation 2.png";
import automation3 from "../assets/Automation 3.png";
import automation4 from "../assets/Automation 4.png";
import email1 from "../assets/Email 1.png";
import email2 from "../assets/Email 2.png";
import email3 from "../assets/Email 3.png";
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

  // Mock data for projects - ReactJS projects prioritized first
  const projects: Project[] = [
    // ReactJS Projects (Prioritized)
    {
      id: "12",
      title: "Tropiride Siargao",
      description: "A web application made from Laravel and ReactJS with a real-time GPS tracking system for vehicle reservation tracking.",
      image: project12,
      technologies: [
        { name: "Laravel" },
        { name: "ReactJS" },
        { name: "GPS Tracking" },
        { name: "Real-time System" },
        { name: "MySQL" },
      ],
      liveUrl: "https://example.com/tropiride",
      githubUrl: "https://github.com/Jackielene/Tropiride",
      detailedDescription:
        "Tropiride Siargao is a comprehensive web application built with Laravel and ReactJS that revolutionizes vehicle reservation and tracking. The platform features a real-time GPS tracking system that allows users to monitor vehicle locations in real-time, making it perfect for rental services and transportation management. This innovative solution combines robust backend architecture with a modern, responsive frontend to deliver seamless vehicle reservation and tracking capabilities.",
    },
    {
      id: "13",
      title: "Purple Track Academy",
      description: "A web application made from Laravel and ReactJS used by call center trainers and recruiter officers to train and hire their scholar waves for call center agents.",
      image: project13,
      technologies: [
        { name: "Laravel" },
        { name: "ReactJS" },
        { name: "MySQL" },
        { name: "Training Management" },
      ],
      liveUrl: "https://www.purpletrackacademy.com/",
      githubUrl: "https://github.com/pta-portal-dev/pta-web-app",
      detailedDescription:
        "Purple Track Academy is a specialized web application designed for call center training and recruitment management. Built with Laravel and ReactJS, this platform empowers call center trainers and recruiter officers to efficiently manage scholar waves, conduct training programs, and streamline the hiring process for call center agents. The application provides comprehensive tools for tracking trainee progress, managing recruitment pipelines, and ensuring smooth onboarding of new call center professionals.",
    },
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
    // Non-ReactJS Projects
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

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
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
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <SAOText variant="h3">High-Converting Funnel Builds</SAOText>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              I craft revenue-focused funnels that combine persuasive storytelling,
              frictionless UX, and data-backed conversion tactics. Below are
              live builds that highlight how I guide cold traffic into high-intent
              leads with captivating hero narratives, irresistible offers, and
              strategic trust markers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              {
                id: "funnel-1",
                title: "Memento Coaching Hub Prime Lead Capture Funnel",
                video: newFunnel1,
                copy: "Engineered for coaches who need a consistent stream of discovery calls. This funnel warms visitors with a credibility-packed hero section, nurtures objections through social proof, and closes with a scarcity-driven booking flow.",
              },
              {
                id: "funnel-2",
                title: "Growth Catalyst Consulting Premium Offer Launch Funnel",
                video: newFunnel2,
                copy: "Built for a high-ticket launch, this funnel combines cinematic visuals, bold value stacking, and an interactive walkthrough that keeps attention anchored until the CTA fires. Perfect for productized services and live cohorts.",
              },
              {
                id: "funnel-3",
                title: "Permadeck Exterior Concrete Coatings Funnel",
                video: permadeckFunnel,
                copy: "Permadeck is a next-generation epoxy resurfacing system that transforms concrete into a durable, slip-resistant, and low-maintenance finish.",
              },
              {
                id: "funnel-4",
                title: "School Freight Works Funnel",
                video: schoolFreightWorksFunnel,
                copy: "Portfolio funnel showing School Freight Works handling USDA commodity foods and cafeteria equipment with cold-chain monitoring, USDA-compliant drivers, and end-to-end delivery, install, and removal—ending in a clear CTA.",
              },
            ].map((funnel, index) => (
              <motion.div
                key={funnel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-card/60 backdrop-blur-lg shadow-xl p-6 space-y-4"
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <video
                    src={funnel.video}
                    autoPlay
                    loop
                    playsInline
                    muted
                    className="w-full h-full aspect-video object-cover pointer-events-none"
                  />
                </div>
                <h4 className="text-xl font-semibold">{funnel.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {funnel.copy}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center space-y-3 mt-12">
            <SAOText variant="h3">Website Builds</SAOText>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of custom websites crafted for clarity, conversion, and
              cohesive brand storytelling—built with modern front-end engineering
              and thoughtful UX/UI.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="h-full group perspective-1000"
            >
              <Card
                className="relative overflow-hidden h-full cursor-pointer transition-all duration-500 
                  bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-xl
                  border-2 border-primary/10 hover:border-primary/30
                  shadow-lg hover:shadow-2xl hover:shadow-primary/20
                  before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:via-purple-500/5 before:to-primary/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
                onClick={() => openProjectModal(project)}
                style={{
                  transform: 'translateZ(0)',
                }}
              >
                {/* Gradient border glow effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-purple-500/50 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10 rounded-lg" />
                
                {/* Image container with overlay effects */}
                <div className="relative h-56 overflow-hidden">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                  
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Project number badge */}
                  <motion.div 
                    className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center font-bold text-primary-foreground shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: idx * 0.05,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </motion.div>
                </div>

                <CardContent className="p-6 relative">
                  {/* Floating particles effect */}
                  <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-primary/40 blur-sm animate-pulse-subtle" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-purple-500/40 blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
                  
                  <motion.h3 
                    className="text-xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-muted-foreground mb-5 line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies with staggered animation */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: idx * 0.05 + index * 0.1,
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs font-medium bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm"
                        >
                          {tech.name}
                        </Badge>
                      </motion.div>
                    ))}
                    {project.technologies.length > 3 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: idx * 0.05 + 0.3,
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs font-medium border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      </motion.div>
                    )}
                  </div>

                  {/* View project indicator */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                  />
                </CardContent>

                {/* Corner shine effect */}
                <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 space-y-8"
        >
          <div className="text-center space-y-4">
            <SAOText variant="h3">Automation Workflows</SAOText>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Beyond funnels, I streamline back-end operations with automations
              that sync CRMs, alert teams in real time, and eliminate busywork.
              Each build pairs crystal-clear reporting with rock-solid reliability
              so you win back more focus hours without losing visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {[
              {
                id: "automation-1",
                title: "New Lead Automation",
                image: automation1,
                copy: "Welcomes every fresh lead instantly, tags the source, enriches their profile, and drops them into the exact nurture path that matches their intent—no manual triage required.",
              },
              {
                id: "automation-2",
                title: "Confirmation + Reminder Engine",
                image: automation2,
                copy: "Sends branded confirmations immediately after booking, then schedules SMS and email reminders that escalate urgency as the appointment nears to cut down on day-of surprises.",
              },
              {
                id: "automation-3",
                title: "No-Show Recovery Flow",
                image: automation3,
                copy: "Detects missed calls automatically, fires off empathetic follow-ups, and routes the lead into a save sequence that nudges them back onto your calendar without human chasing.",
              },
              {
                id: "automation-4",
                title: "One-Click Rescheduling Concierge",
                image: automation4,
                copy: "Hands prospects a frictionless reschedule experience with live availability, double-confirmation notices, and Slack alerts for your team so nobody slips through the cracks.",
              },
            ].map((automation, index) => (
              <motion.div
                key={automation.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative rounded-3xl bg-card/70 backdrop-blur-xl shadow-2xl p-[1px] flex flex-col lg:flex-row gap-6 before:absolute before:inset-[-1px] before:rounded-[1.7rem] before:bg-gradient-to-r before:from-primary/20 before:via-purple-500/20 before:to-primary/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
              >
                <div className="relative flex-1 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.45)] border border-white/10 min-h-[320px] md:min-h-[420px] lg:min-h-[500px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                  <img
                    src={automation.image}
                    alt={automation.title}
                    className="w-full h-full object-contain bg-gradient-to-br from-black/40 via-black/20 to-transparent"
                  />
                </div>
                <div className="flex-1 space-y-3 self-center py-6 px-6">
                  <h4 className="text-2xl font-semibold">{automation.title}</h4>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {automation.copy}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 space-y-8"
        >
          <div className="text-center space-y-4">
            <SAOText variant="h3">Email Marketing Campaigns</SAOText>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Nurture sequences that feel bespoke, prime inbox opens, and drive
              decisive clicks. Each sequence is strategically scheduled and
              automated, so subscribers receive the right narrative at the right
              moment. These campaigns blend storytelling, urgency, and
              design-forward layouts so your message rises above the noise.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                id: "email-1",
                title: "Launch Warm-Up Series",
                image: email1,
                copy: "A three-touch cadence that unlocks over three days: teaser on Day 1, authority builder on Day 3, offer reveal on Day 5. The entire drip is locked into automation so every new lead experiences the same momentum regardless of when they enter.",
                stat: "41% open lift vs. previous launch",
              },
              {
                id: "email-2",
                title: "Event Confirmation + Reminder Flow",
                image: email2,
                copy: "Confirms immediately after registration, then fires reminders at T-24h, T-4h, and T-30m across email + SMS. Each touch rehashes value, adds FAQs, and escalates urgency to keep attendance sky-high.",
                stat: "87% of registrants attended live",
              },
              {
                id: "email-3",
                title: "Reactivation Win-Back",
                image: email3,
                copy: "Behavior-triggered journey: once a lead ghosts for 21 days, this plain-text check-in lands, followed by an incentive reminder 48h later and a final PS nudge at the 5-day mark—all automated so your team never has to chase manually.",
                stat: "24% of cold leads reactivated in 72h",
              },
            ].map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-3xl bg-card/80 backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.45)] p-[1px] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/25 before:via-purple-500/25 before:to-primary/25 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
              >
                <div className="relative rounded-[1.7rem] bg-background/80 p-8 flex flex-col lg:flex-row gap-10 items-center">
                  <div className="flex-1 w-full">
                    <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-2xl">
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-primary">
                      Email Momentum
                    </div>
                    <h4 className="text-2xl font-semibold">{campaign.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {campaign.copy}
                    </p>
                    <div className="inline-flex items-center gap-2 rounded-2xl bg-primary/15 border border-primary/30 px-4 py-2 text-sm text-primary/80">
                      <span className="text-base font-semibold text-primary">
                        {campaign.stat}
                      </span>
                      <span>measured across the latest send</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => selectedProject && closeProjectModal()}
      >
        {selectedProject && (
          <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 overflow-y-auto bg-background/95 backdrop-blur-sm border-none shadow-2xl rounded-xl mx-2 sm:mx-4">
            <DialogTitle className="sr-only">{selectedProject.title} - Project Details</DialogTitle>
            <div className="relative">
              {/* Hero image with gradient overlay */}
              <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden rounded-t-xl">
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
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 rounded-full bg-black/70 border border-gray-400/50 hover:bg-black/90 text-white z-10 transition-all duration-200 hover:scale-110 shadow-md w-8 h-8 sm:w-10 sm:h-10"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
              
              {/* Title and description positioned over the gradient */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 leading-tight">{selectedProject.title}</h2>
                <p className="text-white/80 text-sm sm:text-base line-clamp-2 sm:line-clamp-none">{selectedProject.description}</p>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
              {/* Technologies used with animated badges */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 flex items-center text-white">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 mr-2 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xs sm:text-sm">⚙️</span>
                  </span>
                  <span className="text-sm sm:text-base">Technologies Used</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Badge variant="secondary" className="px-2 py-1 sm:px-3 text-xs sm:text-sm text-white">
                        {tech.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* About this project with icon */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 flex items-center text-white">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 mr-2 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xs sm:text-sm">📝</span>
                  </span>
                  <span className="text-sm sm:text-base">About this project</span>
                </h4>
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {selectedProject.detailedDescription || selectedProject.description}
                </p>
              </div>
              
              {/* Screenshots section with improved grid */}
              {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-3 flex items-center text-white">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 mr-2 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xs sm:text-sm">🖼️</span>
                    </span>
                    <span className="text-sm sm:text-base">Screenshots</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
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
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border">
                {selectedProject.liveUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button asChild className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-5 bg-primary hover:bg-primary/90 shadow-lg text-white text-sm sm:text-base">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
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
                    className="w-full sm:w-auto"
                  >
                    <Button variant="outline" asChild className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-5 border-2 hover:bg-secondary/10 text-white text-sm sm:text-base">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
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
