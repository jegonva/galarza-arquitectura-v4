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

const PROJECTS_DISEÑO = [
  { 
    id: 1, 
    title: "Vicario 137", 
    location: "Cancún, Quintana Roo", 
    year: "2023", 
    description: "Diseño Arquitectónico · Interiores. El espacio perfecto no se encuentra — se diseña. Trabajamos contigo desde la primera idea hasta el último detalle, creando ambientes que te sorprenden cada vez que entras. Nada de plantillas genéricas: cada proyecto refleja quién eres y cómo quieres vivir o trabajar.",
    videos: ["/images/vicario137/DRON.mov"],
    images: ["/images/vicario137/2.png", "/images/vicario137/4.png", "/images/vicario137/6.png", "/images/vicario137/8.png", "/images/vicario137/9.png", "/images/vicario137/11.png", "/images/vicario137/12.png", "/images/vicario137/14.png", "/images/vicario137/15.png", "/images/vicario137/16.png", "/images/vicario137/17.png", "/images/vicario137/18.png", "/images/vicario137/19.png", "/images/vicario137/20.png", "/images/vicario137/21.png", "/images/vicario137/22.png", "/images/vicario137/23.png"]
  }
];

const PROJECTS_CONSTRUCCION = [
  { 
    id: 3, 
    title: "PB Tulum / Paramar Black", 
    location: "Tulum, Quintana Roo", 
    year: "2022", 
    description: "Auditoría Técnica · Complejo Departamental. Supervisión profesional en cada etapa. Tu inversión está documentada y bajo control — sin sorpresas al final.",
    images: ["/images/Paramar Black Tulum - Auditoria/2.jpg", "/images/Paramar Black Tulum - Auditoria/3.jpg", "/images/Paramar Black Tulum - Auditoria/5.jpg", "/images/Paramar Black Tulum - Auditoria/6.jpg", "/images/Paramar Black Tulum - Auditoria/7.jpg", "/images/Paramar Black Tulum - Auditoria/8.jpg", "/images/Paramar Black Tulum - Auditoria/9.jpg", "/images/Paramar Black Tulum - Auditoria/10.jpg"]
  },
  { 
    id: 4, 
    title: "Paracaima - Remodelación", 
    location: "Ciudad de México", 
    year: "2023", 
    description: "Remodelación Integral. Modernización de espacios residenciales con acabados de alta gama y reconfiguración arquitectónica funcional.",
    videos: ["/images/Cda Paracaima 20/REMODELACION/1.mov", "/images/Cda Paracaima 20/REMODELACION/2.mov", "/images/Cda Paracaima 20/REMODELACION/9.mov", "/images/Cda Paracaima 20/REMODELACION/11.mov"],
    images: ["/images/Cda Paracaima 20/REMODELACION/3.jpeg", "/images/Cda Paracaima 20/REMODELACION/4.JPG", "/images/Cda Paracaima 20/REMODELACION/5.jpeg", "/images/Cda Paracaima 20/REMODELACION/6.jpeg", "/images/Cda Paracaima 20/REMODELACION/7.jpeg", "/images/Cda Paracaima 20/REMODELACION/8.jpeg", "/images/Cda Paracaima 20/REMODELACION/10.jpeg"]
  },
  {
    id: 41,
    title: "Paracaima - Energías Renovables",
    location: "Ciudad de México",
    year: "2023",
    description: "Integración de Paneles Solares y sistemas de eficiencia energética para residencias premium. Ingeniería aplicada a la sostenibilidad.",
    videos: ["/images/Cda Paracaima 20/ENERGIAS RENOVABLES PANELES SOLARES/1.mov", "/images/Cda Paracaima 20/ENERGIAS RENOVABLES PANELES SOLARES/2.mov", "/images/Cda Paracaima 20/ENERGIAS RENOVABLES PANELES SOLARES/3.mov", "/images/Cda Paracaima 20/ENERGIAS RENOVABLES PANELES SOLARES/4.mov", "/images/Cda Paracaima 20/ENERGIAS RENOVABLES PANELES SOLARES/8.mov", "/images/Cda Paracaima 20/ENERGIAS RENOVABLES PANELES SOLARES/11.mov"],
    images: ["/images/Cda Paracaima 20/ENERGIAS RENOVABLES PANELES SOLARES/5.jpeg"]
  },
  { 
    id: 5, 
    title: "Construcción Cancún", 
    location: "Cancún, Quintana Roo", 
    year: "2023", 
    description: "Ejecución de obra civil desde cimentación hasta entrega llave en mano. Contamos con ingeniería propia y experiencia en proyectos residenciales y comerciales en toda la República.",
    videos: ["/images/CONSTRUCCION CANCUN/1.mov", "/images/CONSTRUCCION CANCUN/2.mov", "/images/CONSTRUCCION CANCUN/3.mov"],
    images: ["/images/CONSTRUCCION CANCUN/4.jpg", "/images/CONSTRUCCION CANCUN/5.jpg", "/images/CONSTRUCCION CANCUN/6.jpg"]
  }
];

const PROJECTS_AUDITORIA = [
  {
    id: 6,
    title: "Monte Everest",
    location: "Cancún, Quintana Roo",
    year: "2022",
    description: "Auditoría Técnica estructural y de instalaciones. Diagnóstico preciso para asegurar la integridad y plusvalía del inmueble mediante tecnología alemana.",
    videos: ["/images/Monte everest - Auditoria Tecnica/2.mov"],
    images: ["/images/Monte everest - Auditoria Tecnica/1.JPG", "/images/Monte everest - Auditoria Tecnica/3.jpeg", "/images/Monte everest - Auditoria Tecnica/4.jpeg", "/images/Monte everest - Auditoria Tecnica/5.jpeg"]
  }
];

export default function DCMPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proj-row", {
        y: 60, opacity: 0, duration: 1, stagger: 0.1, ease: "power4.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
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
             <span className="accent-text">ESTUDIO</span><br/>DCM.
          </h1>
          <p className="body-font" style={{ fontSize: "1.2rem", marginTop: "2rem", opacity: 0.4, letterSpacing: "2px", textTransform: "uppercase" }}>Diseño · Construcción · Mantenimiento</p>
      </section>

      {/* 2. PROJECTS LIST */}
      <section ref={containerRef} style={{ paddingBottom: "10rem" }}>
         
         {/* DISEÑO Section */}
         <div style={{ padding: "4rem" }}>
            <h2 className="body-font accent-text" style={{ textTransform: "uppercase", letterSpacing: "4px", fontSize: "0.8rem", marginBottom: "3rem", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: "1rem" }}>01. Diseño & Arquitectura</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
               {PROJECTS_DISEÑO.map(proj => (
                 <ProjectFolder key={proj.id} project={proj} />
               ))}
            </div>
         </div>

         {/* CONSTRUCCION Section */}
         <div style={{ padding: "4rem" }}>
            <h2 className="body-font accent-text" style={{ textTransform: "uppercase", letterSpacing: "4px", fontSize: "0.8rem", marginBottom: "3rem", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: "1rem" }}>02. Ingeniería & Ejecución</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
               {PROJECTS_CONSTRUCCION.map(proj => (
                 <ProjectFolder key={proj.id} project={proj} />
               ))}
            </div>
         </div>

         {/* AUDITORIA Section */}
         <div style={{ padding: "4rem" }}>
            <h2 className="body-font accent-text" style={{ textTransform: "uppercase", letterSpacing: "4px", fontSize: "0.8rem", marginBottom: "3rem", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: "1rem" }}>03. Auditoría Técnica</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
               {PROJECTS_AUDITORIA.map(proj => (
                 <ProjectFolder key={proj.id} project={proj} />
               ))}
            </div>
         </div>

      </section>

    </div>
  );
}
