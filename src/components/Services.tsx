import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { SAOText } from "./SAOText";
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Globe, 
  ShoppingCart, 
  Zap,
  Search,
  Settings,
  Rocket
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface Technology {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Platforms";
  logo?: string;
}

const ServicesSection = () => {
  const { theme } = useTheme();

  const services: Service[] = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description: "Build powerful, scalable web applications from scratch or enhance existing ones with modern technologies and best practices.",
      features: [
        "Custom website development",
        "Full-stack web applications",
        "RESTful API integration",
        "Performance optimization"
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Create beautiful, intuitive user interfaces that provide exceptional user experiences across all devices and platforms.",
      features: [
        "User interface design",
        "User experience optimization",
        "Responsive design",
        "Interactive prototypes"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Ensure your website looks perfect and functions flawlessly on desktop, tablet, and mobile devices.",
      features: [
        "Mobile-first approach",
        "Cross-browser compatibility",
        "Touch-friendly interfaces",
        "Adaptive layouts"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "WordPress Development",
      description: "Custom WordPress themes, plugins, and websites tailored to your brand and business needs.",
      features: [
        "Custom theme development",
        "Plugin customization",
        "E-commerce integration",
        "Content management"
      ]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Solutions",
      description: "Build robust online stores with secure payment gateways, inventory management, and seamless shopping experiences.",
      features: [
        "Shopping cart functionality",
        "Payment integration",
        "Product management",
        "Order processing"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Automation & Integration",
      description: "Streamline your workflows with custom automation solutions using GoHighLevel, Zapier, and other integration platforms.",
      features: [
        "Workflow automation",
        "Third-party integrations",
        "API connections",
        "Data synchronization"
      ]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Improve your website's visibility and ranking on search engines with proven SEO strategies and optimization techniques.",
      features: [
        "On-page SEO",
        "Performance optimization",
        "Meta tag optimization",
        "Site speed enhancement"
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Consulting & Support",
      description: "Get expert advice and ongoing support for your web projects, from initial planning to post-launch maintenance.",
      features: [
        "Technical consulting",
        "Code reviews",
        "Performance audits",
        "Ongoing maintenance"
      ]
    }
  ];

  const technologies: Technology[] = [
    // Frontend
    { name: "HTML", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", category: "Frontend", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Bootstrap", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    
    // Backend
    { name: "PHP", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", category: "Backend", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
    
    // Database
    { name: "MySQL", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    
    // Platforms & Tools (combined for marquee)
    { name: "WordPress", category: "Platforms", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "GoHighLevel", category: "Platforms", logo: "https://logo.clearbit.com/gohighlevel.com" },
    { name: "Figma", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Canva", category: "Tools", logo: "https://img.icons8.com/color/256/canva.png" },
    { name: "Trello", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
    { name: "Slack", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
    { name: "Discord", category: "Tools", logo: "https://logo.clearbit.com/discord.com" },
    { name: "GoDaddy", category: "Tools", logo: "https://logo.clearbit.com/godaddy.com" },
    { name: "Hostinger", category: "Tools", logo: "https://logo.clearbit.com/hostinger.com" },
    { name: "Zapier", category: "Tools", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
    { name: "Google Workspace", category: "Tools", logo: "https://ssl.gstatic.com/images/branding/product/1x/gsa_32dp.png" },
    { name: "Microsoft Office", category: "Tools", logo: "https://img.icons8.com/color/256/microsoft-office-2019.png" }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const groupedTechnologies = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, Technology[]>);

  // Get Platforms and Tools for marquee
  const platformsAndTools = technologies.filter(
    tech => tech.category === "Platforms" || tech.category === "Tools"
  );

  return (
    <section
      id="services"
      className={`py-20 relative overflow-hidden ${
        theme === "dark" ? "text-white bg-[#0f0c29]" : "text-black bg-white"
      }`}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M400,200 Q550,100 700,300 T800,600"
            fill="none"
            stroke="#8a2be2"
            strokeWidth="2"
          />
          <path
            d="M100,300 Q250,200 400,400 T700,500"
            fill="none"
            stroke="#00bfff"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-[#8a2be2] to-[#6a5acd]/30 w-72 py-4 px-6 rounded-full">
              <SAOText variant="h2" className="text-white uppercase">
                Services
              </SAOText>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-lg md:text-xl max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I offer comprehensive web development and digital solutions tailored to your business needs. 
            From custom websites to automation systems, I help bring your ideas to life with cutting-edge technology.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <div
                className={`h-full rounded-[30px] p-6 relative overflow-hidden transition-all duration-500 ${
                  theme === "dark"
                    ? "bg-[#1a1a2e]/80 hover:bg-[#1a1a2e] border border-[#6a5acd]/20 hover:border-[#8a2be2]/50"
                    : "bg-white/90 hover:bg-white border border-gray-200 hover:border-[#8a2be2]/50 shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8a2be2]/5 via-transparent to-[#00bfff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[30px]" />
                
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-[#8a2be2] to-[#6a5acd] text-white"
                      : "bg-gradient-to-br from-[#8a2be2] to-[#6a5acd] text-white"
                  }`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold mb-3 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {service.title}
                </h3>
                
                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className={`flex items-center text-xs ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00bfff] mr-2 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00bfff]/20 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="bg-gradient-to-r from-[#00bfff] to-[#8a2be2]/30 w-64 py-3 px-6 rounded-full">
                <h2 className="text-2xl font-bold text-white">Technologies & Tools</h2>
              </div>
            </motion.div>
            <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Technologies I use to build amazing digital experiences
            </p>
          </div>

          {/* Grouped Technologies */}
          <div className="space-y-10">
            {Object.entries(groupedTechnologies)
              .filter(([category]) => category !== "Platforms" && category !== "Tools")
              .map(([category, techs], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className={`rounded-[30px] p-8 ${
                    theme === "dark"
                      ? "bg-[#1a1a2e]/60 border border-[#6a5acd]/20"
                      : "bg-gradient-to-r from-slate-50 to-white border border-gray-200 shadow-lg"
                  }`}
                >
                  <h3
                    className={`text-lg font-bold mb-6 flex items-center ${
                      theme === "dark" ? "text-[#00bfff]" : "text-[#8a2be2]"
                    }`}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {techs.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.05 + techIndex * 0.03,
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 ${
                          theme === "dark"
                            ? "bg-[#1a1a2e]/40 hover:bg-[#1a1a2e] border border-[#6a5acd]/10 hover:border-[#00bfff]/50"
                            : "bg-white/80 hover:bg-white border border-gray-200 hover:border-[#8a2be2]/50 shadow-sm hover:shadow-md"
                        }`}
                      >
                        {tech.logo ? (
                          <div className="w-12 h-12 mb-2 flex items-center justify-center">
                            <img
                              src={tech.logo}
                              alt={tech.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div
                            className={`w-12 h-12 mb-2 rounded-lg flex items-center justify-center ${
                              theme === "dark"
                                ? "bg-gradient-to-br from-[#8a2be2] to-[#6a5acd]"
                                : "bg-gradient-to-br from-[#8a2be2] to-[#6a5acd]"
                            }`}
                          >
                            <Code2 className="w-6 h-6 text-white" />
                          </div>
                        )}
                        <span
                          className={`text-xs font-medium text-center mt-1 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Platforms & Tools Marquee Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`rounded-[30px] p-8 ${
              theme === "dark"
                ? "bg-[#1a1a2e]/60 border border-[#6a5acd]/20"
                : "bg-gradient-to-r from-slate-50 to-white border border-gray-200 shadow-lg"
            }`}
          >
            <h3
              className={`text-lg font-bold mb-8 flex items-center justify-center ${
                theme === "dark" ? "text-[#00bfff]" : "text-[#8a2be2]"
              }`}
            >
              <Zap className="w-5 h-5 mr-2" />
              Platforms & Tools
            </h3>
            
            {/* Marquee Container */}
            <div className="relative overflow-hidden py-4">
              {/* Gradient fade on edges */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" 
                style={{ 
                  background: theme === "dark" 
                    ? "linear-gradient(to right, #0f0c29, transparent)" 
                    : "linear-gradient(to right, white, transparent)" 
                }} 
              />
              <div 
                className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" 
                style={{ 
                  background: theme === "dark" 
                    ? "linear-gradient(to left, #0f0c29, transparent)" 
                    : "linear-gradient(to left, white, transparent)" 
                }} 
              />
              
              {/* Marquee Content */}
              <div 
                className="flex gap-8 animate-marquee whitespace-nowrap" 
                style={{ 
                  display: 'flex',
                  width: 'fit-content',
                  willChange: 'transform'
                }}
              >
                {/* First set of icons */}
                {platformsAndTools.map((tech, index) => (
                  <motion.div
                    key={`first-${index}`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl min-w-[120px] transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-[#1a1a2e]/40 hover:bg-[#1a1a2e] border border-[#6a5acd]/20 hover:border-[#00bfff]/50"
                        : "bg-white/80 hover:bg-white border border-gray-200 hover:border-[#8a2be2]/50 shadow-sm hover:shadow-lg"
                    }`}
                  >
                    {tech.logo ? (
                      <div className="w-16 h-16 mb-3 flex items-center justify-center">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Fallback if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="w-16 h-16 rounded-lg flex items-center justify-center ${
                                theme === "dark"
                                  ? "bg-gradient-to-br from-[#8a2be2] to-[#6a5acd]"
                                  : "bg-gradient-to-br from-[#8a2be2] to-[#6a5acd]"
                              }"><svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg></div>`;
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-16 h-16 mb-3 rounded-lg flex items-center justify-center ${
                          theme === "dark"
                            ? "bg-gradient-to-br from-[#8a2be2] to-[#6a5acd]"
                            : "bg-gradient-to-br from-[#8a2be2] to-[#6a5acd]"
                        }`}
                      >
                        <Code2 className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <span
                      className={`text-sm font-medium text-center ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
                {/* Duplicate set for seamless loop */}
                {platformsAndTools.map((tech, index) => (
                  <motion.div
                    key={`second-${index}`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl min-w-[120px] transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-[#1a1a2e]/40 hover:bg-[#1a1a2e] border border-[#6a5acd]/20 hover:border-[#00bfff]/50"
                        : "bg-white/80 hover:bg-white border border-gray-200 hover:border-[#8a2be2]/50 shadow-sm hover:shadow-lg"
                    }`}
                  >
                    {tech.logo ? (
                      <div className="w-16 h-16 mb-3 flex items-center justify-center">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="w-16 h-16 rounded-lg flex items-center justify-center ${
                                theme === "dark"
                                  ? "bg-gradient-to-br from-[#8a2be2] to-[#6a5acd]"
                                  : "bg-gradient-to-br from-[#8a2be2] to-[#6a5acd]"
                              }"><svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg></div>`;
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-16 h-16 mb-3 rounded-lg flex items-center justify-center ${
                          theme === "dark"
                            ? "bg-gradient-to-br from-[#8a2be2] to-[#6a5acd]"
                            : "bg-gradient-to-br from-[#8a2be2] to-[#6a5acd]"
                        }`}
                      >
                        <Code2 className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <span
                      className={`text-sm font-medium text-center ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center rounded-[40px] p-12 ${
            theme === "dark"
              ? "bg-gradient-to-br from-[#1a1a2e] to-[#0f0c29] border border-[#6a5acd]/30"
              : "bg-gradient-to-br from-slate-100 to-white border border-gray-200 shadow-xl"
          }`}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Rocket className={`w-16 h-16 mx-auto mb-6 ${
              theme === "dark" ? "text-[#00bfff]" : "text-[#8a2be2]"
            }`} />
          </motion.div>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Ready to Start Your Project?
          </h2>
          <p
            className={`text-lg mb-8 max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Let's collaborate and turn your vision into reality. I'm here to help you build something amazing.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-[#8a2be2] to-[#6a5acd] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

