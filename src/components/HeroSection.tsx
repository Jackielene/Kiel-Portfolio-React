import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"
import ParticleBackground from "./HeroSection/ParticleBackground"
// Import profile image and resume
import profileImage from "../assets/profile.png"
import resumePDF from "../assets/Resume.pdf" // Import the resume file
import { SAOText } from "./SAOText"



const HeroSection = () => {
  // Animation for text reveal effect
  const nameText = "Jackielene Pomoy"
  const [letterClass, setLetterClass] = useState("text-animate-hover")
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate")
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [])

  // Mouse follow effect for profile image
  useEffect(() => {
    const profileElement = profileRef.current
    if (!profileElement) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = profileElement.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2

      // Calculate distance from center (normalized)
      const distX = (e.clientX - centerX) / (window.innerWidth / 2)
      const distY = (e.clientY - centerY) / (window.innerHeight / 2)

      // Apply subtle tilt effect (max 3 degrees) and prevent upside down rotation
      const tiltX = Math.min(Math.max(distY * 3, -3), 3)
      const tiltY = Math.min(Math.max(-distX * 3, -3), 3)

      profileElement.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
    }

    const handleMouseLeave = () => {
      profileElement.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
      profileElement.style.transition = "transform 0.5s ease"
    }

    const handleScroll = () => {
      // Reset transform when scrolling
      profileElement.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
      profileElement.style.transition = "transform 0.3s ease"
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    profileElement.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      if (profileElement) {
        profileElement.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  // Create array of individual letters for animating the name
  const nameArray = Array.from(nameText)

  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-0">
      {/* Interactive background */}
      <ParticleBackground className="overflow-hidden" />

      {/* Content Container */}
      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-items-center lg:justify-items-start w-full">
          
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1 max-w-lg lg:max-w-none">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <SAOText variant="h2" className="text-lg sm:text-xl lg:text-2xl font-medium text-muted-foreground">
                Hello, I'm
              </SAOText>
            </motion.div>

            {/* Name */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SAOText variant="h1" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight whitespace-nowrap">
                {nameArray.map((letter, index) => (
                  <motion.span
                    key={index}
                    className={`${letterClass} inline-block`}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + index * 0.05,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </SAOText>

              {/* Animated underline */}
              <motion.div
                className="mt-4 h-1 w-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-primary lg:ml-0"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Role Labels */}
            <motion.div
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {["Web Developer", "Funnel Designer/Builder", "Email Marketing Specialist", "CRM Specialist (GoHighLevel)"].map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full"
            >
              <SAOText variant="p" className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-md lg:max-w-lg">
                I build beautiful, interactive, and responsive web experiences with modern technologies and creative
                solutions.
              </SAOText>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[
                { number: "11", label: "Projects" },
                { number: "2+", label: "Years Exp" },
                { number: "100%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Download CV Button */}
              <Button
                size="lg"
                onClick={() => {
                  window.open(resumePDF, '_blank');
                }}
                className="group relative flex items-center gap-3 overflow-hidden bg-primary text-primary-foreground transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-primary/20 w-full sm:w-auto px-8 py-3 text-base font-medium"
              >
                <span className="z-10">Download CV</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1 group-hover:animate-bounce" />

                {/* Background effect */}
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-60"></span>

                {/* Shining effect */}
                <span className="absolute -inset-x-full top-0 z-20 h-[2px] w-[200%] skew-x-12 animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"></span>
              </Button>

              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  {
                    icon: <Github className="h-5 w-5" />,
                    href: "https://github.com/Jackielene",
                    label: "GitHub",
                  },
                  {
                    icon: <Linkedin className="h-5 w-5" />,
                    href: "https://www.linkedin.com/in/jackielene-pomoy/",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Mail className="h-5 w-5" />,
                    href: "mailto:pomoy.jackielene.s@gmail.com",
                    label: "Email",
                  },
                ].map(({ icon, href, label }, i) => (
                  <Button
                    key={i}
                    size="icon"
                    variant="outline"
                    asChild
                    className="relative overflow-hidden transition-all duration-500 hover:scale-110 hover:border-primary hover:text-primary hover:shadow-md dark:hover:border-primary dark:hover:text-primary dark:hover:shadow-primary/20 h-12 w-12"
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                      <span className="relative z-10">{icon}</span>
                      <span className="absolute inset-0 z-0 bg-primary/10 opacity-0 transition-opacity duration-300 hover:opacity-100 dark:bg-primary/20"></span>
                      <span className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-primary/20 transition-transform duration-500 group-hover:scale-100"></span>
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
                     <motion.div
             ref={profileRef}
             initial={{ opacity: 0, scale: 0.9, x: 50 }}
             animate={{ opacity: 1, scale: 1, x: 0 }}
             transition={{
               duration: 1,
               delay: 0.3,
               type: "spring",
               stiffness: 100,
             }}
             className="relative transition-transform duration-300 ease-out preserve-3d order-1 lg:order-2 flex-shrink-0 mt-8 lg:mt-0"
           >
                           <div className="relative h-[240px] w-[240px] sm:h-[280px] sm:w-[280px] lg:h-[380px] lg:w-[380px] xl:h-[420px] xl:w-[420px] rounded-full overflow-hidden">
                {/* Glowing backdrop */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-purple-500/30 to-primary/30 blur-2xl opacity-80 animate-pulse-subtle"></div>

                {/* Main image container */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl">
                  <img
                    src={profileImage || "/placeholder.svg"}
                    alt="Jackielene Pomoy"
                    className="h-full w-full object-cover scale-[1.02] hover:scale-[1.05] transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/400?text=Profile+Image"
                    }}
                    style={{ transform: "translateZ(20px)" }}
                  />

                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 hover:opacity-60 transition-opacity duration-700"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -inset-2 rounded-full border-2 border-primary/30 opacity-80"></div>
                <div className="absolute -inset-4 rounded-full border border-primary/20 opacity-60"></div>
                <div className="absolute -inset-6 rounded-full border border-primary/10 opacity-40"></div>
              </div>

              {/* Available for work status - positioned outside the profile container to overlap */}
              <motion.div
                className="absolute -top-2 -right-2 flex items-center gap-2 rounded-full bg-green-500 px-3 py-2 shadow-lg z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-medium text-white">Available for work</span>
              </motion.div>

             
           </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
