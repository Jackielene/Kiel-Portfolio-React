import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import logoImage from "../assets/j-logo.png";
import SAOText from "./ui/SAOText";

interface NavbarProps {
  sections?: string[];
  activeSection?: string;
  onSectionClick?: (section: string) => void;
}

const Navbar = ({
  sections = ["Home", "Projects", "Services", "About", "Contact"],
  activeSection = "Home",
  onSectionClick = () => {},
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (section: string) => {
    // Handle section navigation
    if (section === "Home") {
      // Scroll to top for Home section
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else if (section === "Projects") {
      // Scroll to Projects section
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (section === "Services") {
      // Scroll to Services section
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (section === "About") {
      // Scroll to About section
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (section === "Contact") {
      // Scroll to Contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // For other sections, use the onSectionClick prop
      onSectionClick(section);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="cursor-pointer transition duration-300"
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSectionClick("Home")}
        >
          <img 
            src={logoImage} 
            alt="J Logo" 
            className="h-16 w-auto hover:opacity-80 transition-opacity" // Increased from h-10 to h-16
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((section) => (
            <motion.button
              key={section}
              onClick={() => handleSectionClick(section)}
              className="relative cursor-pointer group"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              <SAOText variant="p" className={activeSection === section ? "text-primary" : "text-foreground hover:text-primary"}>
                {section}
              </SAOText>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === section
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </motion.button>
          ))}

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="cursor-pointer p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition duration-300 shadow-sm hover:shadow-lg"
            whileHover={{ scale: 1.15, rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground cursor-pointer"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {sections.map((section) => (
                <motion.button
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className="py-2 text-left cursor-pointer transition-colors duration-300"
                  whileHover={{ x: 10, scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <SAOText variant="p" className={activeSection === section ? "text-primary font-semibold" : "text-foreground hover:text-primary"}>
                    {section}
                  </SAOText>
                </motion.button>
              ))}

              {/* Mobile Theme Toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-sm text-muted-foreground">Toggle theme</span>
                <motion.button
                  onClick={toggleTheme}
                  className="cursor-pointer p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/30 transition duration-300 shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.1, rotate: 20 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
