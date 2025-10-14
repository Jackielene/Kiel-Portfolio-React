import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { SAOText } from "./SAOText";

// Import certificate images and PDFs
import cert1 from "../assets/certs/cert-1.png";
import cert2 from "../assets/certs/cert-2.png";
import cert3 from "../assets/certs/cert-3.png";
import cert4 from "../assets/certs/cert-4.png";
import cert5 from "../assets/certs/cert-5.png";
import cert6 from "../assets/certs/cert-6.png";
import cert7 from "../assets/certs/cert-7.png";
import cert8 from "../assets/certs/cert-8.png";

// Import certificate PDFs
import cert1PDF from "../assets/certs/cert-1.pdf";
import cert2PDF from "../assets/certs/cert-2.pdf";
import cert3PDF from "../assets/certs/cert-3.pdf";
import cert4PDF from "../assets/certs/cert-4.pdf";
import cert5PDF from "../assets/certs/cert-5.pdf";
import cert6PDF from "../assets/certs/cert-6.pdf";
import cert7PDF from "../assets/certs/cert-7.pdf";
import cert8PDF from "../assets/certs/cert-8.pdf";

interface Certificate {
  name: string;
  organization: string;
  date: string;
  credentialId?: string;
  credentialPDF: string;
  logo: string;
}

const CertificatesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const certificates: Certificate[] = [
    {
      name: "Using HTML and CSS to Design a Website",
      organization: "DICT",
      date: "March 06, 2024",
      credentialId: "adf0176-eac5-4f75-afd5-f13082fc9f81",
      credentialPDF: cert1PDF,
      logo: cert1,
    },
    {
      name: "Basic Javascript for Web Development",
      organization: "DICT",
      date: "September 02, 2024",
      credentialId: "6880a21-738b-4ea6-869d-6e6693dab51e",
      credentialPDF: cert2PDF,
      logo: cert2,
    },
    {
      name: "Build Dynamic User Interfaces (UI) for Websites",
      organization: "Coursera",
      date: "April 4, 2024",
      credentialId: "https://coursera.org/verify/PRGFXZDULWGC",
      credentialPDF: cert3PDF,
      logo: cert3,
    },
    {
      name: "Foundations of User Experience (UX) Design",
      organization: "Coursera",
      date: "April 3, 2024",
      credentialId: "https://coursera.org/verify/K6C69P4GRC2J",
      credentialPDF: cert4PDF,
      logo: cert4,
    },
    {
      name: "Data Privacy - Good Governance",
      organization: "DICT",
      date: "March 19, 2024",
      credentialId: "a06cbd5-ac79-40b2-ad0a-8a7629b6d474",
      credentialPDF: cert5PDF,
      logo: cert5,
    },
    {
      name: " Introduction to Data Privacy",
      organization: "DICT",
      date: "March 19, 2024",
      credentialId: "98bb9fb-5d8e-4f1c-b72e-f9f3a01f69b0",
      credentialPDF: cert6PDF,
      logo: cert6,
    },
    {
      name: "Foundations:Data, Data, Everywhere",
      organization: "Coursera",
      date: "April 4, 2024",
      credentialId: "https://coursera.org/verify/8HDN9Z2A2D6E",
      credentialPDF: cert7PDF,
      logo: cert7,
    },
    {
      name: "Cybersecurity for Everyone",
      organization: "Coursera",
      date: "March 12, 2024",
      credentialId: "https://coursera.org/verify/WWAQHUVUW7SX",
      credentialPDF: cert8PDF,
      logo: cert8,
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SAOText variant="h2" className="mb-4">Certificates</SAOText>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professional certifications that validate my expertise and knowledge
            in various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group perspective-1000 h-full"
            >
              <div 
                className="relative overflow-hidden h-full cursor-pointer transition-all duration-500
                  bg-gradient-to-br from-card/90 via-card/70 to-card/90 backdrop-blur-xl
                  rounded-2xl
                  border-2 border-primary/10 hover:border-primary/30
                  shadow-lg hover:shadow-2xl hover:shadow-primary/20
                  before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:via-purple-500/5 before:to-primary/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:rounded-2xl"
                style={{ transform: 'translateZ(0)' }}
              >
                {/* Gradient border glow effect */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-primary/0 via-primary/50 to-purple-500/50 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10 rounded-2xl" />
                
                {/* Certificate Image Section with modern overlays */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                  
                  <motion.img
                    src={certificate.logo}
                    alt={`${certificate.organization} logo`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Verified badge */}
                  <motion.div 
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-green-500/90 backdrop-blur-sm flex items-center justify-center shadow-lg border-2 border-white/30"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.08 + 0.3,
                      type: "spring",
                      stiffness: 200,
                      damping: 12
                    }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>

                  {/* Dark gradient overlay from bottom */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0.3
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Organization label with slide up animation */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-4"
                    animate={{ 
                      y: hoveredIndex === index ? 0 : 10,
                      opacity: hoveredIndex === index ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm font-bold text-white drop-shadow-lg backdrop-blur-sm">
                      {certificate.organization}
                    </p>
                  </motion.div>

                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  {/* Floating particles effect */}
                  <div className="absolute top-2 right-4 w-2 h-2 rounded-full bg-primary/50 blur-sm animate-pulse-subtle" />
                  <div className="absolute bottom-6 left-6 w-1 h-1 rounded-full bg-purple-500/50 blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
                  
                  <motion.h3 
                    className="font-bold text-base mb-2 line-clamp-2 min-h-[3rem]"
                    animate={{ 
                      color: hoveredIndex === index ? 'hsl(var(--primary))' : 'hsl(var(--foreground))'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {certificate.name}
                  </motion.h3>
                  
                  {/* Date with icon */}
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{certificate.date}</span>
                  </div>
                  
                  {/* View Certificate Button */}
                  {certificate.credentialPDF && (
                    <motion.a
                      href={certificate.credentialPDF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300 relative"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="relative z-10">View Certificate</span>
                      <motion.span
                        className="relative z-10"
                        animate={{ 
                          x: hoveredIndex === index ? 3 : 0,
                          opacity: hoveredIndex === index ? 1 : 0.7
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink size={16} />
                      </motion.span>
                      
                      {/* Underline effect */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover/btn:w-full transition-all duration-300" />
                    </motion.a>
                  )}

                  {/* Credential ID tooltip */}
                  {certificate.credentialId && (
                    <motion.div
                      className="mt-3 p-2 rounded-lg bg-muted/50 backdrop-blur-sm border border-primary/10"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 1 : 0,
                        height: hoveredIndex === index ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-xs text-muted-foreground truncate">
                        ID: {certificate.credentialId}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Bottom gradient bar */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.2, duration: 0.8 }}
                />

                {/* Corner shine effect */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
