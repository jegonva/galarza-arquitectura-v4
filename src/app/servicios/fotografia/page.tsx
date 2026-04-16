"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import styles from "../servicios.module.css";
import ProjectFolder from "@/components/ProjectFolder";

const PROJECTS_FV = [
  { 
    id: 301, 
    title: "Xieltun", 
    location: "Tulum, Quintana Roo", 
    year: "2023", 
    description: "Fotografía · Video · Dron. 111 hectáreas certificadas UMA/PIMVS de turismo regenerativo, arte y biotecnología en Tulum. Realizamos la producción integral del complejo y su entorno natural.", 
    videos: ["/images/FOTO Y VIDEO/AREA NATURAL PROTEGIDA TULUM/1.mov", "/images/FOTO Y VIDEO/AREA NATURAL PROTEGIDA TULUM/2.mp4"],
    images: [],
    logoUrl: "/images/FOTO Y VIDEO/AREA NATURAL PROTEGIDA TULUM/LOGO.png",
    mapAddress: "Carr. Tulum-Cancún KM 240, Ejido Jacinto Pat, Tulum, Q.Roo"
  },
  { 
    id: 302, 
    title: "Complejo Departamental Tulum", 
    location: "Tulum, Quintana Roo", 
    year: "2022", 
    description: "Fotografía Arquitectónica. Las propiedades con buenas fotos se rentan más rápido, generan más confianza y justifican mejor el precio. Captura de ángulos premium.", 
    images: ["/images/FOTO Y VIDEO/COMPLEJO DEPARTAMENTAL TULUM/1.jpeg", "/images/FOTO Y VIDEO/COMPLEJO DEPARTAMENTAL TULUM/2.jpeg", "/images/FOTO Y VIDEO/COMPLEJO DEPARTAMENTAL TULUM/3.jpeg", "/images/FOTO Y VIDEO/COMPLEJO DEPARTAMENTAL TULUM/4.jpeg", "/images/FOTO Y VIDEO/COMPLEJO DEPARTAMENTAL TULUM/5.jpeg", "/images/FOTO Y VIDEO/COMPLEJO DEPARTAMENTAL TULUM/6.jpeg", "/images/FOTO Y VIDEO/COMPLEJO DEPARTAMENTAL TULUM/7.jpeg", "/images/FOTO Y VIDEO/COMPLEJO DEPARTAMENTAL TULUM/8.jpeg", "/images/FOTO Y VIDEO/COMPLEJO DEPARTAMENTAL TULUM/9.jpeg", "/images/FOTO Y VIDEO/COMPLEJO DEPARTAMENTAL TULUM/10.jpeg", "/images/FOTO Y VIDEO/COMPLEJO DEPARTAMENTAL TULUM/11.JPG"] 
  },
  { 
    id: 303, 
    title: "Zona Hotelera Cancún", 
    location: "Cancún, Quintana Roo", 
    year: "2023", 
    description: "Video · Dron. Fotografía y video profesional de propiedades para renta vacacional, venta y contenido digital de alto impacto.", 
    videos: ["/images/FOTO Y VIDEO/COMPLEJO DEPARTAMENTAL ZONA HOTELERA CANCUN/1.mov"],
    images: []
  },
  {
    id: 304,
    title: "3 Hermanos",
    location: "Cancún, Quintana Roo",
    year: "2023",
    description: "Drone Cinematography. Captura de avance de obra y portafolio de activos desde una perspectiva aérea profesional.",
    videos: ["/images/3 HERMANOS/10.mov"],
    images: []
  }
];

export default function FotografiaPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".photo-card", {
        y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.pageWrapper} ref={containerRef}>
      
      <Link href="/" className={styles.backBtn}>
        <MoveLeft size={20} />
      </Link>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} style={{ background: "linear-gradient(to top, var(--clr-bg-main) 0%, transparent 100%)" }} />
        <div className={styles.heroContent}>
           <h1 className={`${styles.heroHeadline} display-font`}>
              <span className={styles.textMask}><span className="accent-text">MEDIA</span></span><br/>
              <span className={styles.textMask}>STUDIO.</span>
           </h1>
           <p className={`${styles.heroSub} body-font`}>Producción Visual · Dron · Arquitectura</p>
        </div>
      </section>

      <section className={styles.section}>
         <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {PROJECTS_FV.map(proj => (
              <div key={proj.id} className="photo-card">
                 <ProjectFolder project={proj} />
              </div>
            ))}
         </div>
      </section>

    </div>
  );
}
