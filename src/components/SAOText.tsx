import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface SAOTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "p";
  className?: string;
}

export const SAOText: React.FC<SAOTextProps> = ({
  children,
  variant = "p",
  className,
  ...props
}) => {
  const baseStyles = "font-mono tracking-wider";
  
  const variantStyles = {
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold",
    h2: "text-3xl md:text-4xl lg:text-5xl font-semibold",
    h3: "text-2xl md:text-3xl lg:text-4xl font-medium",
    p: "text-base md:text-lg lg:text-xl",
  };

  const Tag = variant as keyof JSX.IntrinsicElements;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative group"
    >
      {/* Main text with gradient */}
      <Tag
        className={cn(
          baseStyles,
          "text-transparent bg-clip-text bg-gradient-to-r from-[#00bfff] to-[#8a2be2]",
          "drop-shadow-[0_0_4px_rgba(0,191,255,0.3)]",
          variantStyles[variant],
          "relative",
          "group-hover:from-[#00bfff] group-hover:to-[#8a2be2]",
          "transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </Tag>

      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default SAOText; 