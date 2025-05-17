import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

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
      name: "Bu ild D ynamic U ser Interfaces (U I) for Websites",
      organization: "Coursera",
      date: "April 4, 2024",
      credentialId: "https://coursera.org/verify/PRGFXZDULWGC",
      credentialPDF: cert3PDF,
      logo: cert3,
    },
    {
      name: "Fou ndations of U ser Ex perience (U X) D esign",
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
      name: "Cybersecu rity for Everyone",
      organization: "Coursera",
      date: "March 12, 2024",
      credentialId: "https://coursera.org/verify/WWAQHUVUW7SX",
      credentialPDF: cert8PDF,
      logo: cert8,
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">Certificates</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-background rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <div className="relative h-40 overflow-hidden bg-muted/50">
                <motion.img
                  src={certificate.logo}
                  alt={`${certificate.organization} logo`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0"
                  animate={{ opacity: hoveredIndex === index ? 0.7 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full"
                  animate={{ 
                    translateY: hoveredIndex === index ? 0 : '100%',
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm font-medium">{certificate.organization}</p>
                </motion.div>
              </div>
              <div className="p-6">
                <motion.h3 
                  className="font-semibold text-lg mb-1"
                  animate={{ 
                    color: hoveredIndex === index ? 'var(--primary)' : 'var(--foreground)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {certificate.name}
                </motion.h3>
                <p className="text-muted-foreground mb-2">
                  {certificate.organization}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-muted-foreground">
                    {certificate.date}
                  </span>
                  {certificate.credentialPDF && (
                    <motion.a
                      href={certificate.credentialPDF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center gap-1 group"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Certificate
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ 
                          opacity: hoveredIndex === index ? 1 : 0,
                          x: hoveredIndex === index ? 0 : -5
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink size={14} />
                      </motion.span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
