import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

const ThemeProvider = ({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) => {
  // Check if there's a saved theme preference in localStorage
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    return (savedTheme as Theme) || defaultTheme;
  });

  // Apply theme to document when it changes
  useEffect(() => {
    const root = window.document.documentElement;

    // Remove the previous theme class
    root.classList.remove("light", "dark");

    // Add the new theme class
    root.classList.add(theme);

    // Save theme preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-background"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
