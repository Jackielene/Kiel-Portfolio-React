import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SAOText } from "./SAOText";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { X } from "lucide-react";

// Import Email Campaign images
import emailCampaign1 from "../assets/Email Campaign 1.png";
import emailCampaign2 from "../assets/Email Campaign 2.png";
import emailCampaign3 from "../assets/Email Campaign 3.png";
import emailCampaign4 from "../assets/Email Campaign 4.png";
import emailCampaign5 from "../assets/Email Campaign 5.png";
import emailCampaign6 from "../assets/Email Campaign 6.png";
import emailCampaign7 from "../assets/Email Campaign 7.png";
import emailCampaign8 from "../assets/Email Campaign 8.png";

// Import Funnel images (prioritize 6, then 5.2, then 2.2, then the rest)
import funnel6 from "../assets/Funnel 6.png";
import funnel52 from "../assets/Funnel 5.2.png";
import funnel22 from "../assets/Funnel 2.2.png";
import funnel12 from "../assets/Funnel 1.2.png";
import funnel42 from "../assets/Funnel 42.png";

interface ImageItem {
  id: string;
  src: string;
  title: string;
  type: "email-campaign" | "funnel";
}

const emailCampaignImages: ImageItem[] = [
  { id: "ec-1", src: emailCampaign1, title: "Email Campaign 1", type: "email-campaign" },
  { id: "ec-2", src: emailCampaign2, title: "Email Campaign 2", type: "email-campaign" },
  { id: "ec-3", src: emailCampaign3, title: "Email Campaign 3", type: "email-campaign" },
  { id: "ec-4", src: emailCampaign4, title: "Email Campaign 4", type: "email-campaign" },
  { id: "ec-5", src: emailCampaign5, title: "Email Campaign 5", type: "email-campaign" },
  { id: "ec-6", src: emailCampaign6, title: "Email Campaign 6", type: "email-campaign" },
  { id: "ec-7", src: emailCampaign7, title: "Email Campaign 7", type: "email-campaign" },
  { id: "ec-8", src: emailCampaign8, title: "Email Campaign 8", type: "email-campaign" },
];

// Funnel images prioritized: 6, then 5.2, then 2.2, then the rest
// Titles are in sequence (1-5) regardless of actual file names
const funnelImages: ImageItem[] = [
  { id: "f-6", src: funnel6, title: "Funnel 1", type: "funnel" },
  { id: "f-5.2", src: funnel52, title: "Funnel 2", type: "funnel" },
  { id: "f-2.2", src: funnel22, title: "Funnel 3", type: "funnel" },
  { id: "f-1.2", src: funnel12, title: "Funnel 4", type: "funnel" },
  { id: "f-42", src: funnel42, title: "Funnel 5", type: "funnel" },
];

type FilterType = "email-campaign" | "funnel";

const EmailCampaignSection = () => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("email-campaign");
  const [numColumns, setNumColumns] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasScrolledRef = useRef(false);

  // Get filtered images based on active filter
  const getFilteredImages = (): ImageItem[] => {
    if (activeFilter === "email-campaign") {
      return emailCampaignImages;
    } else {
      return funnelImages;
    }
  };

  const filteredImages = getFilteredImages();

  // Debug: Log filter changes
  useEffect(() => {
    console.log("Active filter:", activeFilter);
    console.log("Filtered images count:", filteredImages.length);
    console.log("Filtered images:", filteredImages.map(img => img.title));
  }, [activeFilter, filteredImages]);

  // Calculate number of columns based on screen size
  useEffect(() => {
    const updateColumns = () => {
      const cols = window.innerWidth >= 1280 ? 4 : window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      setNumColumns(cols);
    };

    updateColumns();
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(updateColumns, 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  // Auto-show email campaigns on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolledRef.current && activeFilter === "email-campaign") {
        hasScrolledRef.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeFilter]);

  const openImageModal = (image: ImageItem) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="email-campaigns"
      className="py-20 px-4 md:px-8 lg:px-16 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SAOText variant="h2" className="mb-4">
            Funnel Design and Email Campaigns
          </SAOText>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my email marketing designs and funnel designs that drive engagement and conversions.
          </p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-row items-center justify-between gap-4 max-w-2xl mx-auto w-full"
          >
            {/* Email Campaigns Button - Left */}
            <button
              type="button"
              onClick={() => {
                console.log("Email Campaigns button clicked");
                setActiveFilter("email-campaign");
              }}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 ${
                activeFilter === "email-campaign"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Email Campaigns
            </button>

            {/* Funnel Design Button - Right */}
            <button
              type="button"
              onClick={() => {
                console.log("Funnel Design button clicked");
                setActiveFilter("funnel");
              }}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 ${
                activeFilter === "funnel"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Funnel Design
            </button>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="masonry-grid"
            style={{
              columnCount: numColumns,
              columnGap: '1rem',
            }}
          >
            {filteredImages.length > 0 ? (
              filteredImages.map((image, imageIndex) => (
                <motion.div
                  key={`${activeFilter}-${image.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: imageIndex * 0.05,
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group cursor-pointer mb-4 break-inside-avoid"
                  onClick={() => openImageModal(image)}
                >
                <div className="relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/10">
                  {/* Image container */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-auto object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      loading="lazy"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-semibold text-sm">{image.title}</p>
                    </div>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                </div>
              </motion.div>
              ))
            ) : (
              <div className="text-center py-12 text-muted-foreground w-full">
                No images found
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Image Detail Modal */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => selectedImage && closeImageModal()}
      >
        {selectedImage && (
          <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 overflow-y-auto bg-background/95 backdrop-blur-sm border-none shadow-2xl rounded-xl mx-2 sm:mx-4">
            <DialogTitle className="sr-only">{selectedImage.title}</DialogTitle>
            <div className="relative">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={closeImageModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 rounded-full bg-black/70 border border-gray-400/50 hover:bg-black/90 text-white z-10 transition-all duration-200 hover:scale-110 shadow-md w-8 h-8 sm:w-10 sm:h-10"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              {/* Image */}
              <div className="relative w-full overflow-hidden rounded-t-xl">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Title */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold">{selectedImage.title}</h3>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default EmailCampaignSection;

