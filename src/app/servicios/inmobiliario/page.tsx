"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import styles from "../servicios.module.css";
import ProjectFolder from "@/components/ProjectFolder";

const PROJECTS_PI = [
  { 
    id: 501, 
    title: "Propiedad Residencial Cancún", 
    location: "Cancún, Quintana Roo", 
    year: "2023", 
    description: "Gestión inmobiliaria integral. Desde la valuación comercial hasta el cierre de venta/renta bajo estándares de absoluta confianza y transparencia.",
    images: [] 
  }
];

export default function InmobiliariaPage() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-title-word", { y: "0%", duration: 1.2, ease: "power4.out", stagger: 0.1 });
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.pageWrapper} ref={wrapperRef} style={{ background: "transparent" }}>
      
      <Link href="/" className={styles.backBtn}><MoveLeft size={20} /></Link>

      <section className={styles.hero}>
        <div className={styles.heroImageContainer}>
          {/* MEDIA REMOVED */}
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroHeadline} display-font`}>
             <span className={styles.textMask}><span className="hero-title-word">GALARZA</span></span><br/>
              <span className={styles.textMask}><span className="hero-title-word" style={{color: "var(--clr-accent)"}}>P.I.</span></span>
          </h1>
          <p className={`${styles.heroSub} body-font`}>Gestión de activos inmobiliarios con visión de ingeniería. Plusvalía y seguridad jurídica.</p>
        </div>
      </section>

      <section className={styles.section}>
         <div className="text-line"><h2 className="display-font" style={{fontSize: "3rem", marginBottom: "3rem"}}>LISTADO DE PROPIEDADES</h2></div>
         <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {PROJECTS_PI.map(project => (
              <ProjectFolder key={project.id} project={project} />
            ))}
         </div>
      </section>

    </div>
  );
}
