"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import styles from "./page.module.css";
import Testimonials from "@/components/Testimonials";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import { useLeadModal } from "@/context/LeadContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const title3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Watermark
      gsap.to(watermarkRef.current, {
        y: 100, // Moves slightly down as we scroll
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // Hero reveal
      gsap.fromTo(
        [title1Ref.current, title2Ref.current, title3Ref.current],
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1 }
      );

      // Section fades on scroll
      gsap.utils.toArray(".gsap-fade-up").forEach((entry: any) => {
        gsap.fromTo(
          entry,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: entry,
              start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const { openLeadModal } = useLeadModal();

  return (
    <main className={styles.main}>
      {/* WATERMARK LOGO - Subtle background branding */}
      <div className={styles.logoWatermark} ref={watermarkRef}>
        <img 
          src="/images/Logo Galarza PNG negro.png" 
          alt="" 
          aria-hidden="true"
          className={styles.watermarkImg}
        />
      </div>

      {/* 1. HERO */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroHeadline} display-font`}>
            <span className={styles.mask}><span ref={title1Ref}>IDEA. EJECUCIÓN.</span></span>
            <span className={styles.mask}><br /><span ref={title2Ref} className="accent-text">PERMANENCIA.</span></span>
            <span className={styles.mask}><span ref={title3Ref} className="accent-text">24/7.</span></span>
          </h1>
          <p className={`${styles.heroSubhead} body-font`} ref={subRef}>
            Diseño, Construcción, Urbanización y Mantenimiento. El único motor de
            soluciones integrales en México que toma tu proyecto desde el plano y
            no lo suelta nunca.
          </p>
          <MagneticButton>
            <button onClick={() => openLeadModal()} className={styles.goldenBtn} style={{ border: "none", cursor: "pointer", display: "inline-block" }}>
              Agendar asesoría gratis
            </button>
          </MagneticButton>
        </div>
      </section>

      {/* 2. PROBLEMA VS SOLUCION */}
      <section className={`${styles.pvs} gsap-fade-up`}>
        <h2 className={`${styles.pvsTitle} display-font`}>
          ¿Vives en tu propiedad o la usas de vez en cuando?
        </h2>
        <div className={styles.pvsGrid}>
          <div className={styles.pvsSide}>
            <div className={styles.pvsCard}>
              <h3 className="body-font">Sin Mantenimiento Preventivo</h3>
              <p className="body-font" style={{ opacity: 0.7, marginTop: "1rem" }}>
                Gasto reactivo altísimo. En promedio, reparaciones por urgencia o
                abandono pueden llegar a costar más de $37,000 MXN anuales. Pierdes
                tiempo buscando contratistas y tu inversión decae.
              </p>
            </div>
          </div>
          <div className={styles.pvsSide}>
            <div className={`${styles.pvsCard} ${styles.accent}`}>
              <h3 className="body-font">Con Grupo Galarza</h3>
              <p className="body-font" style={{ opacity: 0.7, marginTop: "1rem" }}>
                Cero sorpresas. Visitas programadas para detectar daños estructurales
                antes de que sean graves, atención a emergencias en menos de 4
                horas y un reporte fotográfico el mismo día de la visita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUESTRAS RAMAS (EDGE TO EDGE LIQUID GLASS) */}
      <section className={`${styles.ramas} gsap-fade-up`}>
        <div className={styles.ramasTitle}>
          <h2 className="display-font">El Ecosistema Completo</h2>
        </div>
        
        <div className={styles.ramasGrid}>
          {/* DCM */}
          <TiltCard>
            <Link href="/servicios/dcm" className={styles.ramaImage}>
              <img src="/IMAGENES RAMAS/DCM/clipboard_2026-04-16_13-23.webp" alt="Galarza DCM" />
              <div className={styles.glassBox}>
                <h3>GALARZA DCM</h3>
                <p>DISEÑO / CONSTRUCCIÓN / MANTENIMIENTO. Un solo equipo para todo.</p>
              </div>
            </Link>
          </TiltCard>

          {/* Urbanización */}
          <TiltCard>
            <Link href="/servicios/urbanizacion" className={styles.ramaImage}>
              <img src="/IMAGENES RAMAS/URBANIZACION/clipboard_2026-04-16_13-2.webp" alt="Galarza Urbanización" />
              <div className={styles.glassBox}>
                <h3>GALARZA URBANIZACIÓN</h3>
                <p>Redes de distribución, movimiento de tierras y planeación a gran escala.</p>
              </div>
            </Link>
          </TiltCard>

          {/* PI */}
          <TiltCard>
            <Link href="/servicios/inmobiliario" className={styles.ramaImage}>
              <img src="/IMAGENES RAMAS/PI/clipboard_2026-04-16_13-28.webp" alt="Galarza P.I." />
              <div className={styles.glassBox}>
                <h3>GALARZA P.I.</h3>
                <p>Proyectos Inmobiliarios. Nosotros promovemos, certificamos y ofertamos tus propiedades.</p>
              </div>
            </Link>
          </TiltCard>

          {/* Fotografía */}
          <TiltCard>
            <Link href="/servicios/fotografia" className={styles.ramaImage}>
              <img src="/IMAGENES RAMAS/FV/converted.webp" alt="Galarza F&V" />
              <div className={styles.glassBox}>
                <h3>GALARZA F&V</h3>
                <p>Documentación de foto y video profesional de obras completas y portafolio.</p>
              </div>
            </Link>
          </TiltCard>
        </div>
      </section>
      
      <Testimonials />
    </main>
  );
}
