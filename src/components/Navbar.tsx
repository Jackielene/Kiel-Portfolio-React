import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
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
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (section: string) => {
    // Restore body overflow first to allow scrolling
    document.body.style.overflow = '';
    
    // Close menu immediately for better UX
    setIsMobileMenuOpen(false);
    
    // Use setTimeout with minimal delay to ensure overflow is restored and DOM is ready
    setTimeout(() => {
      // Handle section navigation
      if (section === "Home") {
        // Scroll to top for Home section
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        // Map section names to IDs (Projects uses sub-sections: funnel-builds, website-builds)
        const sectionMap: Record<string, string> = {
          "Services": "services",
          "About": "about",
          "Contact": "contact"
        };
        
        const sectionId = sectionMap[section];
        if (sectionId) {
          const targetSection = document.getElementById(sectionId);
          if (targetSection) {
            // Calculate offset for fixed navbar
            const navbarHeight = 80; // Approximate navbar height
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        } else {
          // For other sections, use the onSectionClick prop
          onSectionClick(section);
        }
      }
    }, 50); // Small delay to ensure menu closes and overflow is restored
  };

  // Scroll to a section by ID (used by Projects dropdown and other links)
  const scrollToSection = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const navbarHeight = 80;
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('nav')) {
          setIsMobileMenuOpen(false);
          document.body.style.overflow = ''; // Restore body scroll
        }
      }
      // Close projects dropdown when clicking outside
      if (isProjectsDropdownOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('[data-projects-dropdown]')) {
          setIsProjectsDropdownOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent body scroll when menu is open
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (!isMobileMenuOpen) {
        document.body.style.overflow = '';
      }
    };
  }, [isMobileMenuOpen, isProjectsDropdownOpen]);

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
          {sections.map((section) =>
            section === "Projects" ? (
              <div
                key={section}
                data-projects-dropdown
                className="relative"
              >
                <motion.button
                  onClick={() => setIsProjectsDropdownOpen((prev) => !prev)}
                  className="relative cursor-pointer group inline-flex items-center gap-1"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SAOText variant="p" className={activeSection === section ? "text-primary" : "text-foreground hover:text-primary"}>
                    {section}
                  </SAOText>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isProjectsDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-primary transition-all duration-300 ${
                      activeSection === section
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </motion.button>
                <AnimatePresence>
                  {isProjectsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 py-1 min-w-[140px] rounded-lg bg-background/95 backdrop-blur-md border border-border shadow-lg z-50"
                    >
                      <motion.button
                        onClick={() => {
                          scrollToSection("funnel-builds");
                          setIsProjectsDropdownOpen(false);
                        }}
                        className="relative cursor-pointer group w-full px-4 py-2 text-left rounded-md overflow-visible"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <SAOText variant="p" className="text-foreground group-hover:text-primary text-sm transition-colors duration-200">
                          Funnel
                        </SAOText>
                        <span className="absolute -bottom-0.5 left-4 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-[calc(100%-2rem)]" />
                      </motion.button>
                      <motion.button
                        onClick={() => {
                          scrollToSection("website-builds");
                          setIsProjectsDropdownOpen(false);
                        }}
                        className="relative cursor-pointer group w-full px-4 py-2 text-left rounded-md overflow-visible"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <SAOText variant="p" className="text-foreground group-hover:text-primary text-sm transition-colors duration-200">
                          Website
                        </SAOText>
                        <span className="absolute -bottom-0.5 left-4 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-[calc(100%-2rem)]" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
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
            )
          )}

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
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="cursor-pointer p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition duration-300 shadow-sm hover:shadow-lg z-50 relative"
            whileHover={{ scale: 1.15, rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
          
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMobileMenuOpen((prev) => !prev);
            }}
            className="p-2 text-foreground cursor-pointer z-50 relative touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md shadow-lg z-40 relative"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {sections.map((section) =>
                section === "Projects" ? (
                  <div key={section} className="flex flex-col space-y-1">
                    <SAOText variant="p" className="py-2 px-2 text-muted-foreground text-sm">
                      Projects
                    </SAOText>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        document.body.style.overflow = "";
                        setIsMobileMenuOpen(false);
                        setTimeout(() => scrollToSection("funnel-builds"), 50);
                      }}
                      className="py-3 text-left cursor-pointer transition-colors duration-200 w-full hover:bg-primary/10 rounded-md pl-6 pr-2 active:bg-primary/20"
                      type="button"
                    >
                      <SAOText variant="p" className="text-foreground hover:text-primary">Funnel</SAOText>
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        document.body.style.overflow = "";
                        setIsMobileMenuOpen(false);
                        setTimeout(() => scrollToSection("website-builds"), 50);
                      }}
                      className="py-3 text-left cursor-pointer transition-colors duration-200 w-full hover:bg-primary/10 rounded-md pl-6 pr-2 active:bg-primary/20"
                      type="button"
                    >
                      <SAOText variant="p" className="text-foreground hover:text-primary">Website</SAOText>
                    </button>
                  </div>
                ) : (
                  <button
                    key={section}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleSectionClick(section);
                    }}
                    className="py-3 text-left cursor-pointer transition-colors duration-200 w-full hover:bg-primary/10 rounded-md px-2 active:bg-primary/20"
                    type="button"
                  >
                    <SAOText variant="p" className={activeSection === section ? "text-primary font-semibold" : "text-foreground hover:text-primary"}>
                      {section}
                    </SAOText>
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
