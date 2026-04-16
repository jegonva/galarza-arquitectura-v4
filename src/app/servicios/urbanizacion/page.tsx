"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import ProjectFolder from "@/components/ProjectFolder";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECTS_URBANIZACION = [
  { 
    id: 101, 
    title: "Complejo Residencial Cancún", 
    location: "Cancún, Quintana Roo", 
    year: "2023", 
    description: "Urbanización completa para desarrollo residencial de alta densidad. Infraestructura que soporta el crecimiento. Diseño, ingeniería y ejecución de obras urbanas.",
    videos: ["/images/urbanizacion/Complejo Residencial Cancun/3.mov", "/images/urbanizacion/Complejo Residencial Cancun/4.mov", "/images/urbanizacion/Complejo Residencial Cancun/5.mov"],
    images: ["/images/urbanizacion/Complejo Residencial Cancun/1.jpeg", "/images/urbanizacion/Complejo Residencial Cancun/2.jpeg", "/images/urbanizacion/Complejo Residencial Cancun/6.jpeg", "/images/urbanizacion/Complejo Residencial Cancun/7.jpeg", "/images/urbanizacion/Complejo Residencial Cancun/8.jpeg", "/images/urbanizacion/Complejo Residencial Cancun/9.jpeg"]
  },
  { 
    id: 102, 
    title: "Complejo Residencial CDMX", 
    location: "Ciudad de México", 
    year: "2022", 
    description: "Desarrollo de infraestructura urbana en zona metropolitana bajo rigor técnico, cumplimiento normativo y coordinación de todas las especialidades involucradas.",
    videos: ["/images/urbanizacion/Complejo Residencial Ciudad de Mexico/1.mov", "/images/urbanizacion/Complejo Residencial Ciudad de Mexico/2.mov"],
    images: ["/images/urbanizacion/Complejo Residencial Ciudad de Mexico/4.jpg", "/images/urbanizacion/Complejo Residencial Ciudad de Mexico/5.jpg"]
  }
];

export default function UrbanizacionPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proj-card", {
        y: 40, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: "transparent", minHeight: "100vh", color: "var(--clr-text-primary)" }}>
      
      {/* 1. HERO */}
      <section style={{ height: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 4rem", position: "relative" }}>
          <Link href="/" style={{ position: "absolute", top: "2rem", left: "2rem", zIndex: 10, background: "rgba(12,12,11,0.05)", width: "50px", height: "50px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--clr-text-primary)", border: "1px solid rgba(0,0,0,0.1)", textDecoration: "none" }}>
            <MoveLeft size={20} />
          </Link>
          <h1 className="display-font" style={{ fontSize: "var(--text-h1)", lineHeight: 1 }}>
             <span className="accent-text">INFRAESTRUCTURA</span><br/>URBANA.
          </h1>
          <p className="body-font" style={{ fontSize: "1.2rem", marginTop: "2rem", opacity: 0.4, letterSpacing: "2px", textTransform: "uppercase" }}>Urbanización · Macrolotes · Terracerías</p>
      </section>

      {/* 2. LIST */}
      <section ref={containerRef} style={{ padding: "0 4rem 10rem 4rem" }}>
         <div style={{ display: "flex", flexDirection: "column" }}>
            {PROJECTS_URBANIZACION.map(proj => (
              <div key={proj.id} className="proj-card">
                 <ProjectFolder project={proj} />
              </div>
            ))}
         </div>
      </section>

    </div>
  );
}
