"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Play } from "lucide-react";
import styles from "./ProjectFolder.module.css";
import TiltCard from "./TiltCard";

interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  description: string;
  images: string[];
  videoUrl?: string; // Legacy support
  videos?: string[]; // New support for multiple videos
  logoUrl?: string;
  mapAddress?: string;
}

export default function ProjectFolder({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const stripRef = useRef<HTMLDivElement>(null);

  // Merge all media into one array
  const allMedia = [
    ...(project.videoUrl ? [{ url: project.videoUrl, type: "video" }] : []),
    ...(project.videos ? project.videos.map(v => ({ url: v, type: "video" })) : []),
    ...(project.images ? project.images.map(img => ({ url: img, type: "image" })) : [])
  ];

  const handleScroll = () => {
    if (stripRef.current && stripRef.current.scrollLeft > 50) {
      setShowHint(false);
    }
  };

  useEffect(() => {
    const strip = stripRef.current;
    if (strip) {
      strip.addEventListener("scroll", handleScroll);
      return () => strip.removeEventListener("scroll", handleScroll);
    }
  }, [isOpen]);

  return (
    <div className={`${styles.projectCard} ${isOpen ? styles.isOpen : ""}`}>
      {/* HEADER / TRIGGER */}
      <div 
        className={styles.header} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.titleInfo}>
          <span className={styles.index}>0{project.id % 100}</span>
          <h3 className="display-font">{project.title}</h3>
        </div>
        
        <div className={styles.meta}>
          <span className="body-font">{project.location}</span>
          <motion.div 
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={styles.contentWrapper}
          >
            <div className={styles.innerContent}>
               
               <div className={styles.infoCol}>
                  <p className="body-font" style={{ fontSize: "1.05rem", opacity: 0.8, lineHeight: 1.6, marginBottom: "2rem" }}>
                    {project.description}
                  </p>
                  
                  <div style={{ display: "flex", gap: "2rem", marginBottom: "3rem" }}>
                    <div>
                      <span className={styles.label}>Ubicación</span>
                      <span className={styles.val}>{project.location}</span>
                    </div>
                    <div>
                      <span className={styles.label}>Año</span>
                      <span className={styles.val}>{project.year}</span>
                    </div>
                  </div>

                  {project.mapAddress && (
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.mapAddress)}`}
                      target="_blank"
                      className={styles.mapLink}
                    >
                      <MapPin size={16} /> Ver en Mapa
                    </a>
                  )}
               </div>

               <div className={styles.mediaStripWrapper}>
                  {project.logoUrl && (
                    <div className={styles.projectLogoOverlay}>
                      <img src={project.logoUrl} alt="Logo" className={styles.projectLogo} />
                    </div>
                  )}
                  
                  <div className={styles.mediaStrip} ref={stripRef}>
                    {allMedia.map((media, idx) => (
                      <div key={idx} className={styles.mediaCardWrapper}>
                        <TiltCard>
                          <div className={styles.mediaCard}>
                            {media.type === "video" ? (
                              <div className={styles.videoWrapper}>
                                <video 
                                  src={media.url} 
                                  autoPlay 
                                  loop 
                                  muted 
                                  playsInline 
                                  className={styles.stripMedia}
                                />
                                <div className={styles.videoIndicator}><Play size={12} fill="white" /></div>
                              </div>
                            ) : (
                              <img src={media.url} alt={project.title} className={styles.stripMedia} />
                            )}
                          </div>
                        </TiltCard>
                      </div>
                    ))}
                  </div>
                  
                  <AnimatePresence>
                    {showHint && allMedia.length > 2 && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.scrollHint}
                      >
                        <span className="body-font">[ Desliza para explorar todo el archivo → ]</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className={styles.rightFade}></div>
               </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
