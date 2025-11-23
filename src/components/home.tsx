"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import HeroSection from "./HeroSection"
import Navbar from "./Navbar"
import ProjectsSection from "./ProjectSection"
import ServicesSection from "./Services"
import CertificatesSection from "./Certificates"
import ThemeProvider, { useTheme } from "./ThemeProvider"
import { Linkedin, Mail, Phone, Globe } from "lucide-react"
import { SAOText } from "./SAOText"
// Import images
import profileImage from "../assets/profile.png"
import logoImage from "../assets/j-logo.png"
import TidioChat from "./TidioChat"

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    { number: "3+", label: "Years Experience", icon: "🎯" },
    { number: "11+", label: "Projects Completed", icon: "🚀" },
    { number: "100%", label: "Client Satisfaction", icon: "✨" },
  ]

  const softSkills = [
    { name: "Teamwork", icon: "🤝", description: "Collaborating effectively with cross-functional teams" },
    { name: "Communication", icon: "💬", description: "Clear and effective stakeholder communication" },
    { name: "Critical Thinking", icon: "🧠", description: "Analyzing problems to find innovative solutions" },
    { name: "Time Management", icon: "⏰", description: "Delivering projects on time with quality" },
    { name: "Problem Solving", icon: "🔧", description: "Turning challenges into opportunities" },
    { name: "Adaptability", icon: "🌱", description: "Thriving in fast-paced environments" },
  ]

  const interests = [
    { name: "Design Trends", icon: "🎨", color: "from-purple-500 to-pink-500" },
    { name: "Technology", icon: "💻", color: "from-blue-500 to-cyan-500" },
    { name: "Web Development", icon: "🌐", color: "from-green-500 to-emerald-500" },
  ]

  const languages = [
    { name: "English", level: "Professional", flag: "🇬🇧" },
    { name: "Filipino", level: "Native", flag: "🇵🇭" },
  ]

  return (
    <section
      id="about"
      className={`py-20 relative overflow-hidden ${theme === "dark" ? "text-white" : "text-black"} ${theme === "dark" ? "bg-[#0f0c29]" : "bg-white"}`}
    >
      {/* Decorative curved lines */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <path d="M400,200 Q550,100 700,300 T800,600" fill="none" stroke="#8a2be2" strokeWidth="2" />
          <path d="M100,300 Q250,200 400,400 T700,500" fill="none" stroke="#00bfff" strokeWidth="2" />
          <path d="M200,100 Q350,150 500,200 T800,300" fill="none" stroke="#8a2be2" strokeWidth="2" />
        </svg>
      </div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        {/* Hero Header Section */}
          <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-[#8a2be2] to-[#6a5acd]/30 px-8 py-4 rounded-full">
              <SAOText variant="h2" className="text-white uppercase">About Me</SAOText>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            Turning Ideas Into
            <span className="block mt-2 bg-gradient-to-r from-[#8a2be2] via-[#00bfff] to-[#8a2be2] bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`text-lg md:text-xl max-w-3xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
          >
            I'm a Full Stack Web Developer passionate about crafting beautiful, functional web experiences. 
            Based in the stunning Siargao Islands, I bring creativity and technical expertise to every project.
          </motion.p>
          </motion.div>

        {/* Stats Section */}
            <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className={`relative group rounded-[30px] p-8 ${
                theme === "dark" 
                  ? "bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0c29]/80 border border-[#6a5acd]/20 hover:border-[#8a2be2]/50" 
                  : "bg-gradient-to-br from-white to-slate-50 border border-gray-200 hover:border-[#8a2be2]/50 shadow-lg hover:shadow-xl"
              } transition-all duration-300 overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8a2be2]/0 to-[#00bfff]/0 group-hover:from-[#8a2be2]/10 group-hover:to-[#00bfff]/10 transition-all duration-500 rounded-[30px]" />
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#8a2be2] to-[#00bfff] bg-clip-text text-transparent`}
                >
                  {stat.number}
                </motion.div>
                <p className={`text-sm md:text-base font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:pr-8 lg:mr-4"
          >
            <div>
              <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
                Who I Am
              </h3>
              <div className="space-y-4">
                <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                  Hello! I'm <span className="font-semibold text-[#8a2be2]">Jackielene Pomoy</span>, a skilled Full Stack Web Developer 
                  who transforms creative visions into high-performing digital experiences.
                </p>
                <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                  With a Bachelor's degree in Information Technology and hands-on experience through projects and freelancing, 
                  I specialize in creating solutions that drive real business results.
                </p>
                <div className={`p-5 rounded-xl mt-6 ${
                  theme === "dark" 
                    ? "bg-gradient-to-r from-[#1a1a2e]/60 to-[#0f0c29]/60 border border-[#6a5acd]/30" 
                    : "bg-gradient-to-r from-blue-50 to-purple-50 border border-purple-200"
                }`}>
                  <h4 className={`font-bold text-lg mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    My Top Skills:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Building responsive websites that work flawlessly on all devices",
                      "Setting up CRM automations that streamline business processes",
                      "Building appointment workflows that reduce no-shows and increase bookings"
                    ].map((skill, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-start gap-3 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                      >
                        <span className="text-[#8a2be2] font-bold mt-1">•</span>
                        <span>{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                    </div>
                <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                  My passion lies in combining technical expertise with marketing strategy to deliver solutions that not only look great 
                  but also generate measurable results for businesses.
                </p>
                  </div>
                    </div>

            {/* Contact Cards */}
            <div className="mt-8">
              <h4 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                Let's Connect
              </h4>
              <div className="space-y-3">
                {[
                  { icon: Mail, text: "pomoy.jackielene.s@gmail.com", href: "mailto:pomoy.jackielene.s@gmail.com", color: "from-blue-500 to-cyan-500" },
                  { icon: Phone, text: "+(639) 953120464", href: "tel:+639953120464", color: "from-green-500 to-emerald-500" },
                  { icon: Linkedin, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/jackielene-pomoy/", color: "from-blue-600 to-blue-700" },
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className={`flex items-center gap-4 p-4 rounded-xl group transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-[#1a1a2e]/40 hover:bg-[#1a1a2e] border border-[#6a5acd]/20 hover:border-[#8a2be2]/50"
                        : "bg-white/80 hover:bg-white border border-gray-200 hover:border-[#8a2be2]/50 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon size={20} className="text-white" />
                  </div>
                    <span className={`flex-1 ${theme === "dark" ? "text-gray-300 group-hover:text-white" : "text-gray-700 group-hover:text-black"} transition-colors`}>
                      {contact.text}
                    </span>
                  </motion.a>
                ))}
                </div>
              </div>
            </motion.div>

          {/* Profile Image */}
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start lg:pl-8 lg:ml-4"
          >
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8a2be2] via-[#00bfff] to-[#8a2be2] rounded-[50px] opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500 animate-pulse" />
              
              {/* Main image container */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative rounded-[40px] overflow-hidden border-4 border-transparent bg-gradient-to-br from-[#8a2be2] to-[#00bfff] p-1"
              >
                <div className={`rounded-[36px] overflow-hidden ${theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"}`}>
                  <img
                    src={profileImage}
                    alt="Jackielene Pomoy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -top-4 -left-4 px-4 py-2 rounded-full shadow-lg ${
                  theme === "dark" ? "bg-[#1a1a2e] border border-[#6a5acd]" : "bg-white border border-gray-200"
                }`}
              >
                <span className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                  🎯 Available for Work
                </span>
              </motion.div>
              </div>
            </motion.div>
        </div>

        {/* Education and Skills Section */}
        <div className={`${theme === "dark" ? "bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0c29]/80" : "bg-gradient-to-br from-white to-slate-50"} rounded-[40px] p-8 md:p-12 mb-20 border ${
          theme === "dark" ? "border-[#6a5acd]/20" : "border-gray-200"
        } shadow-xl`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-gradient-to-r from-[#8a2be2] to-[#6a5acd] px-6 py-3 rounded-full mb-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>🎓</span> Education
                </h3>
            </motion.div>

              <div className={`relative p-6 rounded-[30px] ${
                theme === "dark" ? "bg-[#1a1a2e]/40" : "bg-white/80"
              } border ${theme === "dark" ? "border-[#6a5acd]/20" : "border-gray-200"} hover:border-[#8a2be2]/50 transition-all duration-300`}>
            <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
              viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full px-4 py-2 text-sm font-semibold mb-4 text-white shadow-md"
                >
                  <span>✅</span>
                  <span>Graduated 2025</span>
            </motion.div>
                <h4 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                  Surigao del Norte State University
                </h4>
                <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  Bachelor of Science in Information Technology
                </p>
                <div className="mt-4 pt-4 border-t border-gray-700/30">
                  <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    Successfully completed degree with expertise in web development, software engineering, and modern technologies. 
                    Gained practical experience through hands-on projects and real-world applications.
                  </p>
          </div>
        </div>
            </motion.div>

            {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-gradient-to-r from-[#00bfff] to-[#8a2be2] px-6 py-3 rounded-full mb-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>💡</span> Soft Skills
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className={`relative group rounded-xl p-4 transition-all duration-300 cursor-pointer ${
                      theme === "dark"
                        ? "bg-[#1a1a2e]/40 hover:bg-[#1a1a2e] border border-[#6a5acd]/20 hover:border-[#00bfff]/50" 
                        : "bg-white/80 hover:bg-white border border-gray-200 hover:border-[#8a2be2]/50 shadow-sm hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                      <div className="flex-1">
                        <h4 className={`font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-black"}`}>
                          {skill.name}
                        </h4>
                        <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-600"} group-hover:text-[#8a2be2] transition-colors`}>
                          {skill.description}
                        </p>
                  </div>
            </div>
                    {hoveredCard === index && (
          <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-br from-[#8a2be2]/10 to-[#00bfff]/10 rounded-xl -z-10"
                      />
                    )}
                  </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
        </div>

        {/* Interests and Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            className={`${theme === "dark" ? "bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0c29]/80" : "bg-gradient-to-br from-white to-slate-50"} rounded-[40px] p-8 border ${
              theme === "dark" ? "border-[#6a5acd]/20" : "border-gray-200"
            } shadow-xl`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full mb-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🌟</span> Interests
              </h3>
            </motion.div>

            <div className="space-y-4">
                {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 ${
                    theme === "dark" 
                      ? "bg-[#1a1a2e]/40 hover:bg-[#1a1a2e] border border-[#6a5acd]/20 hover:border-pink-500/50"
                      : "bg-white/80 hover:bg-white border border-gray-200 hover:border-pink-500/50 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${interest.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative flex items-center gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{interest.icon}</div>
                    <span className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {interest.name}
                    </span>
                  </div>
                </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            className={`${theme === "dark" ? "bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0c29]/80" : "bg-gradient-to-br from-white to-slate-50"} rounded-[40px] p-8 border ${
              theme === "dark" ? "border-[#6a5acd]/20" : "border-gray-200"
            } shadow-xl`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-full mb-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🗣️</span> Languages
              </h3>
            </motion.div>

            <div className="space-y-4">
                {languages.map((language, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className={`group rounded-xl p-5 transition-all duration-300 ${
                    theme === "dark" 
                      ? "bg-[#1a1a2e]/40 hover:bg-[#1a1a2e] border border-[#6a5acd]/20 hover:border-blue-500/50"
                      : "bg-white/80 hover:bg-white border border-gray-200 hover:border-blue-500/50 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{language.flag}</span>
                      <div>
                        <h4 className={`font-bold text-lg ${theme === "dark" ? "text-white" : "text-black"}`}>
                          {language.name}
                        </h4>
                        <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                          {language.level}
                        </p>
                  </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      theme === "dark" ? "bg-[#6a5acd]/30 text-[#00bfff]" : "bg-blue-100 text-blue-700"
                    }`}>
                      {language.level}
                    </div>
                  </div>
                </motion.div>
                ))}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const { theme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '5b15491b-95f1-46f7-a44f-0a963758d0ad',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form'
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent successfully!'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 relative overflow-hidden ${theme === "dark" ? "text-white" : "text-black"} ${theme === "dark" ? "bg-[#0f0c29]" : "bg-gradient-to-r from-slate-100 to-slate-200"}`}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <path d="M400,200 Q550,100 700,300 T800,600" fill="none" stroke="#8a2be2" strokeWidth="2" />
          <path d="M100,300 Q250,200 400,400 T700,500" fill="none" stroke="#00bfff" strokeWidth="2" />
          <path d="M200,100 Q350,150 500,200 T800,300" fill="none" stroke="#8a2be2" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <SAOText variant="h2" className="text-3xl font-bold uppercase mb-6 mx-auto">Get In Touch</SAOText>
          <p className={`${theme === "dark" ? "text-white" : "text-black"} max-w-2xl mx-auto`}>
            Have a project in mind or want to chat? Feel free to reach out! I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={`${theme === "dark" ? "bg-[#1a1a2e]/80" : "bg-gradient-to-r from-[#6a5acd]/30 to-[#8a2be2]/10"} rounded-[40px] p-8 shadow-md`}
          >
            <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-[#8a2be2] to-[#6a5acd]/30 w-64 py-2 px-6 rounded-full text-white whitespace-nowrap">Contact Information</h3>
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-12 h-12 bg-[#6a5acd] rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className={`font-medium ${theme === "dark" ? "text-[#00bfff]" : "text-[#1a1a2e]"}`}>Email</h4>
                  <p className={`${theme === "dark" ? "text-white" : "text-black"} whitespace-nowrap overflow-hidden text-ellipsis`}>pomoy.jackielene.s@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-12 h-12 bg-[#6a5acd] rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className={`font-medium ${theme === "dark" ? "text-[#00bfff]" : "text-[#1a1a2e]"}`}>Phone</h4>
                  <p className={`${theme === "dark" ? "text-white" : "text-black"} whitespace-nowrap`}>+(639) 953120464</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-12 h-12 bg-[#6a5acd] rounded-full flex items-center justify-center">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className={`font-medium ${theme === "dark" ? "text-[#00bfff]" : "text-[#1a1a2e]"}`}>Location</h4>
                  <p className={`${theme === "dark" ? "text-white" : "text-black"} whitespace-nowrap`}>Siargao Islands, Philippines</p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-10">
              <h4 className={`font-medium mb-4 ${theme === "dark" ? "text-[#00bfff]" : "text-[#1a1a2e]"}`}>Connect with me</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://www.linkedin.com/in/jackielene-pomoy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  className={`w-12 h-12 ${theme === "dark" ? "bg-[#1a1a2e]" : "bg-slate-200"} rounded-full flex items-center justify-center hover:bg-[#6a5acd] transition-colors`}
                >
                  <Linkedin className={`h-5 w-5 ${theme === "dark" ? "text-white" : "text-black"} hover:text-white`} />
                </motion.a>
                <motion.a 
                  href="https://github.com/Jackielene"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  className={`w-12 h-12 ${theme === "dark" ? "bg-[#1a1a2e]" : "bg-slate-200"} rounded-full flex items-center justify-center hover:bg-[#6a5acd] transition-colors`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-5 w-5 ${theme === "dark" ? "text-white" : "text-black"} hover:text-white`}
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className={`${theme === "dark" ? "bg-[#1a1a2e]/80" : "bg-gradient-to-r from-[#6a5acd]/30 to-[#8a2be2]/10"} rounded-[40px] p-8 shadow-md`}
          >
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 mb-6 rounded-lg ${
                  submitStatus.success ? 'bg-green-500/20 text-green-700 dark:text-green-200' : 'bg-red-500/20 text-red-700 dark:text-red-200'
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className={`text-sm font-medium ${theme === "dark" ? "text-[#00bfff]" : "text-[#1a1a2e]"}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-[#6a5acd]/30 ${theme === "dark" ? "bg-[#1a1a2e]/40" : "bg-white/90"} ${theme === "dark" ? "text-white" : "text-black"} focus:outline-none focus:ring-2 focus:ring-[#8a2be2]/50 transition-all`}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className={`text-sm font-medium ${theme === "dark" ? "text-[#00bfff]" : "text-[#1a1a2e]"}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-[#6a5acd]/30 ${theme === "dark" ? "bg-[#1a1a2e]/40" : "bg-white/90"} ${theme === "dark" ? "text-white" : "text-black"} focus:outline-none focus:ring-2 focus:ring-[#8a2be2]/50 transition-all`}
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className={`text-sm font-medium ${theme === "dark" ? "text-[#00bfff]" : "text-[#1a1a2e]"}`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-[#6a5acd]/30 ${theme === "dark" ? "bg-[#1a1a2e]/40" : "bg-white/90"} ${theme === "dark" ? "text-white" : "text-black"} focus:outline-none focus:ring-2 focus:ring-[#8a2be2]/50 transition-all`}
                  placeholder="Subject"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className={`text-sm font-medium ${theme === "dark" ? "text-[#00bfff]" : "text-[#1a1a2e]"}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-[#6a5acd]/30 ${theme === "dark" ? "bg-[#1a1a2e]/40" : "bg-white/90"} ${theme === "dark" ? "text-white" : "text-black"} focus:outline-none focus:ring-2 focus:ring-[#8a2be2]/50 transition-all`}
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-[#8a2be2] to-[#6a5acd] text-white py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#8a2be2]/50 font-medium ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  const { theme } = useTheme();
  
  const scrollToHero = () => {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className={`relative overflow-hidden ${theme === "dark" ? "bg-[#0f0c29]" : "bg-gradient-to-r from-slate-100 to-slate-200"}`}>
      {/* Animated waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute bottom-0 left-0 w-full h-[200px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              className={`${theme === "dark" ? "fill-[#1a1a2e]" : "fill-white"}`}
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            >
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                         M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,154.7C672,128,768,96,864,106.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                         M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </path>
          </svg>
        </div>
      </div>

      {/* Spectrum effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bfff] via-[#8a2be2] to-[#00bfff] animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand Section */}
          <motion.div 
            className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 cursor-pointer text-center md:text-left"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            onClick={scrollToHero}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={logoImage} 
                alt="J Logo" 
                className="h-12 w-auto mx-auto md:mx-0"
              />
            </motion.div>
            <div>
              <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>Portfolio</h3>
              <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} text-sm`}>Creating digital experiences</p>
              <p className="text-xs text-[#00bfff] mt-1 font-semibold">Let's build something great together!</p>
            </div>
          </motion.div>

          {/* Quick Links - Horizontal Menu */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Home", id: "home" },
              { name: "Projects", id: "projects" },
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" }
            ].map((link) => (
              <motion.div 
                key={link.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <button 
                  onClick={() => scrollToSection(link.id)}
                  className={`${theme === "dark" ? "text-gray-300 hover:text-[#00bfff]" : "text-gray-600 hover:text-[#1a1a2e]"} 
                    transition-all duration-300 flex items-center group relative font-medium`}
                >
                  <SAOText variant="p" className={`${theme === "dark" ? "text-white" : "text-black"}`}>{link.name}</SAOText>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00bfff] group-hover:w-full transition-all duration-300"></span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <motion.a 
              href="mailto:pomoy.jackielene.s@gmail.com"
              title="Email"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.1 }}
              className={`w-10 h-10 ${theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"} 
                rounded-full flex items-center justify-center hover:bg-[#6a5acd] transition-all duration-300 
                shadow-lg hover:shadow-[#6a5acd]/50`}
            >
              <Mail className={`h-5 w-5 ${theme === "dark" ? "text-white" : "text-black"} hover:text-white`} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/jackielene-pomoy/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.1 }}
              className={`w-10 h-10 ${theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"} 
                rounded-full flex items-center justify-center hover:bg-[#6a5acd] transition-all duration-300 
                shadow-lg hover:shadow-[#6a5acd]/50`}
            >
              <Linkedin className={`h-5 w-5 ${theme === "dark" ? "text-white" : "text-black"} hover:text-white`} />
            </motion.a>
            <motion.a 
              href="https://github.com/Jackielene"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.1 }}
              className={`w-10 h-10 ${theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"} 
                rounded-full flex items-center justify-center hover:bg-[#6a5acd] transition-all duration-300 
                shadow-lg hover:shadow-[#6a5acd]/50`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-5 w-5 ${theme === "dark" ? "text-white" : "text-black"} hover:text-white`}
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToHero}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#00bfff] to-[#8a2be2] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 focus:outline-none"
          title="Back to Top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
        </button>

        {/* Bottom Bar */}
        <div className={`pt-6 border-t ${theme === "dark" ? "border-gray-800" : "border-gray-200"} shadow-t-lg`}> 
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} text-sm flex items-center`}
            >
              <svg className="h-4 w-4 mr-1 inline-block" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1.5A6.5 6.5 0 1110 3.5a6.5 6.5 0 010 13z" /></svg>
              <span>© {new Date().getFullYear()} Jackielene Pomoy. All rights reserved.</span>
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 md:mt-0"
            >
              <p className={`${theme === "dark" ? "text-[#00bfff]" : "text-[#8a2be2]"} text-sm flex items-center font-semibold tracking-wide`}> 
                Made with 
                <motion.span 
                  className="mx-1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ❤️
                </motion.span> 
                using React & Tailwind
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00bfff] via-[#8a2be2] to-[#00bfff] animate-gradient-x"></div>
      {/* Divider/Shadow above footer */}
      <div className="absolute top-0 left-0 right-0 h-2 shadow-lg z-20"></div>
    </footer>
  );
};

const LoadingSpinner = () => {
  // Audio removed to prevent autoplay errors - browsers require user interaction for audio playback

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,191,255,0.1)_50%,transparent_100%)] bg-[length:100%_8px] animate-grid"></div>
      
      {/* Main Container */}
      <div className="relative w-full max-w-2xl mx-auto px-4">
        {/* Hexagon Border */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00bfff] to-[#8a2be2] rounded-lg blur-xl opacity-50"></div>
          <div className="relative bg-black/90 border-2 border-[#00bfff] rounded-lg p-8 overflow-hidden">
            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00bfff] to-[#8a2be2] mb-4"
              >
                LINK START
              </motion.h2>
              
              {/* Loading Bar */}
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-[#00bfff] to-[#8a2be2]"
                />
              </div>

              {/* Status Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-[#00bfff] text-sm font-mono"
              >
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                >
                  INITIALIZING SYSTEM...
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00bfff] to-[#8a2be2]"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#8a2be2] to-[#00bfff]"></div>
            
            {/* Corner Decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#00bfff]"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#8a2be2]"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#8a2be2]"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#00bfff]"></div>
          </div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0 
            }}
            animate={{ 
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1
            }}
            className="absolute w-1 h-1 bg-[#00bfff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden w-full hide-scrollbar">
        <AnimatePresence>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="content-container"
            >
              <Navbar />
              <HeroSection />
              <ProjectsSection />
              <ServicesSection />
              <CertificatesSection />
              <AboutSection />
              <ContactSection />
              <Footer />
              <TidioChat />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}

export default Home
