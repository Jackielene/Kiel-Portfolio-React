import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Code, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"
import ParticleBackground from "./HeroSection/ParticleBackground"
// Import profile image and resume
import profileImage from "../assets/profile.png"
import resumePDF from "../assets/Resume.pdf" // Import the resume file

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

      // Apply subtle tilt effect (max 5 degrees)
      const tiltX = distY * 5
      const tiltY = -distX * 5

      profileElement.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
    }

    const handleMouseLeave = () => {
      profileElement.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
      profileElement.style.transition = "transform 0.5s ease"
    }

    window.addEventListener("mousemove", handleMouseMove)
    profileElement.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (profileElement) {
        profileElement.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  // Create array of individual letters for animating the name
  const nameArray = Array.from(nameText)

  return (
    <section id="home" className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 text-center">
      {/* Interactive background */}
      <ParticleBackground className="overflow-hidden" />

      {/* Content */}
      <div className="z-10 max-w-4xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Profile Image with enhanced styling */}
        <motion.div
          ref={profileRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          className="relative transition-transform duration-300 ease-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative h-[280px] w-[280px] md:h-[320px] md:w-[320px] rounded-full overflow-hidden">
            {/* Glowing backdrop */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-purple-500/40 blur-xl opacity-70 animate-pulse-subtle"></div>

            {/* Main image container */}
            <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/30 backdrop-blur-sm shadow-xl">
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
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 hover:opacity-40 transition-opacity duration-700"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -inset-1 rounded-full border border-primary/20 opacity-70"></div>
            <div className="absolute -inset-3 rounded-full border border-primary/10 opacity-50"></div>

            {/* Floating dots decoration */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-primary/80"
                style={{
                  top: `${20 + i * 15}%`,
                  left: i % 2 === 0 ? "-5%" : "105%",
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-2 text-xl font-medium text-primary md:text-2xl">Hello, I'm</h2>
          </motion.div>

          {/* Enhanced animated name */}
          <motion.div
            className="relative mb-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="flex flex-wrap justify-center text-3xl font-bold tracking-tight md:justify-start md:text-5xl lg:text-6xl">
              {nameArray.map((letter, index) => (
                <motion.span
                  key={index}
                  className={`${letterClass} inline-block`}
                  initial={{
                    opacity: 0,
                    y: 50,
                    rotateY: 90,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.2,
                    color: "#7c3aed",
                    transition: { duration: 0.1 }, // Changed from 0.2 to 0.1 for faster hover effect
                  }}
                >
                  <span className="relative inline-block bg-gradient-to-br from-primary to-purple-500 bg-clip-text text-transparent dark:from-primary dark:to-purple-400">
                    {letter === " " ? "\u00A0" : letter}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </motion.span>
              ))}
            </h1>

            {/* Animated underline */}
            <motion.div
              className="mx-auto mt-2 h-1 w-0 rounded-full bg-gradient-to-r from-primary to-purple-500 dark:from-primary dark:to-purple-400 md:ml-0 md:mr-auto"
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
              transition={{ delay: 2.5, duration: 0.8, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.p
            className="mb-8 text-base text-muted-foreground text-center max-w-md mx-auto md:text-lg lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build beautiful, interactive, and responsive web experiences with modern technologies and creative
            solutions.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Enhanced Download CV button with open in new tab functionality */}
            <Button
              size="lg"
              onClick={() => {
                // Open resume in a new tab using the imported PDF
                window.open(resumePDF, '_blank');
              }}
              className="group relative flex items-center gap-2 overflow-hidden bg-primary text-primary-foreground transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-primary/20"
            >
              <span className="z-10 font-medium">Download CV</span>
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1 group-hover:animate-bounce" />

              {/* Background effect */}
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-60"></span>

              {/* Shining effect */}
              <span className="absolute -inset-x-full top-0 z-20 h-[2px] w-[200%] skew-x-12 animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"></span>
            </Button>

            {/* Enhanced social buttons */}
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
                  className="relative overflow-hidden transition-all duration-500 hover:scale-110 hover:border-primary hover:text-primary hover:shadow-md dark:hover:border-primary dark:hover:text-primary dark:hover:shadow-primary/20"
                >
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    {/* Icon */}
                    <span className="relative z-10">{icon}</span>

                    {/* Background effect on hover */}
                    <span className="absolute inset-0 z-0 bg-primary/10 opacity-0 transition-opacity duration-300 hover:opacity-100 dark:bg-primary/20"></span>

                    {/* Ripple effect */}
                    <span className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-primary/20 transition-transform duration-500 group-hover:scale-100"></span>
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech stack icons */}
      <motion.div
        className="absolute bottom-10 flex items-center justify-center gap-6 text-muted-foreground overflow-x-auto max-w-full px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Code className="h-5 w-5" />
        <span className="text-sm font-medium">React</span>
        <span className="text-sm">•</span>
        <span className="text-sm font-medium">TypeScript</span>
        <span className="text-sm">•</span>
        <span className="text-sm font-medium">Tailwind</span>
        <span className="text-sm">•</span>
        <span className="text-sm font-medium">Laravel</span>
        <span className="text-sm">•</span>
        <span className="text-sm font-medium">PHP</span>
        <span className="text-sm">•</span>
        <span className="text-sm font-medium">WordPress</span>
        <Code className="h-5 w-5" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 1 },
          y: { delay: 1.5, duration: 1.5, repeat: Number.POSITIVE_INFINITY },
        }}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}

export default HeroSection
