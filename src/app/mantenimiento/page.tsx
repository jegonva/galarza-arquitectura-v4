"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { MoveLeft, MapPin, Check, X } from "lucide-react";
import MaintenanceDashboard from "@/components/MaintenanceDashboard";
import ProjectFolder from "@/components/ProjectFolder";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECTS_MANTENIMIENTO = [
  {
    id: 401,
    title: "3 Hermanos",
    location: "Cancún, Quintana Roo",
    year: "2023",
    description: "Gestión Integral de Mantenimiento. Supervisión 24/7 y ejecución de protocolos preventivos para asegurar la plusvalía y operatividad constante del activo.",
    images: [],
    videos: ["/images/3 HERMANOS/9.mov"]
  },
  {
    id: 402,
    title: "Cda Paracaima - Mantenimiento",
    location: "Ciudad de México",
    year: "2023",
    description: "Mantenimiento Residencial Premium. Intervencion técnica en instalaciones hidrosanitarias, eléctricas y acabados finos bajo estándares corporativos.",
    images: ["/images/Cda Paracaima 20/MANTENIMIENTO/1.jpeg", "/images/Cda Paracaima 20/MANTENIMIENTO/2.jpeg", "/images/Cda Paracaima 20/MANTENIMIENTO/3.jpg", "/images/Cda Paracaima 20/MANTENIMIENTO/4.jpg", "/images/Cda Paracaima 20/MANTENIMIENTO/5.jpg", "/images/Cda Paracaima 20/MANTENIMIENTO/6.jpg", "/images/Cda Paracaima 20/MANTENIMIENTO/7.jpg", "/images/Cda Paracaima 20/MANTENIMIENTO/8.jpg", "/images/Cda Paracaima 20/MANTENIMIENTO/9.jpg"],
  }
];

const PLANES_DATA = [
  {
    name: "Básico",
    priceMonthly: 2500,
    priceYearly: 25000,
    description: "Ideal para propietarios con uso esporádico que buscan tranquilidad.",
    features: [
      { text: "1 visita mensual programada", included: true },
      { text: "Inspección fotográfica digital", included: true },
      { text: "Soporte vía WhatsApp", included: true },
      { text: "$800 MXN en trabajo incluido", included: true },
      { text: "Mantenimiento preventivo básico", included: true },
      { text: "Respuesta emergencias < 4h", included: false },
    ]
  },
  {
    name: "Intermedio",
    priceMonthly: 4500,
    priceYearly: 45000,
    description: "Para propiedades con uso frecuente y exigencia media.",
    features: [
      { text: "1 visita mensual + reporte técnico", included: true },
      { text: "$1,800 MXN en trabajo incluido", included: true },
      { text: "Fumigación 1x al año", included: true },
      { text: "10% descuento en DCM", included: true },
      { text: "Soporte priority", included: true },
      { text: "Gestor de cuenta", included: false },
    ]
  },
  {
    name: "Premium",
    priceMonthly: 8000,
    priceYearly: 80000,
    description: "Gestión proactiva para Airbnbs y rentas de alta rotación.",
    features: [
      { text: "2 visitas mensuales", included: true },
      { text: "Emergencias 24/7 (< 4h)", included: true },
      { text: "Fumigación semestral", included: true },
      { text: "$3,000 MXN en trabajo incluido", included: true },
      { text: "Electricista incluido", included: true },
      { text: "Reporte mensual detallado", included: true },
    ]
  },
  {
    name: "Elite 24/7",
    priceMonthly: 13500,
    priceYearly: 135000,
    description: "Garantía total de operatividad. Gestión absoluta de activos.",
    features: [
      { text: "4 visitas mensuales programadas", included: true },
      { text: "Emergencias PRIORITY (< 2h)", included: true },
      { text: "Impermeabilización incluida", included: true },
      { text: "Carpintería mayor", included: true },
      { text: "$5,000 MXN en trabajo incluido", included: true },
      { text: "Gestor dedicado 24/7", included: true },
    ]
  }
];

export default function MantenimientoPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-title-word", { y: "0%", duration: 1, ease: "power4.out", stagger: 0.1 });
    }, tableRef);
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: "transparent", color: "var(--clr-text-primary)", minHeight: "100vh" }} ref={tableRef}>
      
      {/* 1. INTRO / HERO */}
      <section style={{ height: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 4rem", position: "relative" }}>
          <Link href="/" style={{ position: "absolute", top: "2rem", left: "2rem", zIndex: 10, background: "rgba(12,12,11,0.05)", width: "50px", height: "50px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--clr-text-primary)", border: "1px solid rgba(0,0,0,0.1)", textDecoration: "none" }}>
            <MoveLeft size={20} />
          </Link>
          
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--clr-accent)", color: "var(--clr-background)", padding: "0.5rem 1rem", borderRadius: "100px", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", width: "fit-content", marginBottom: "2rem" }}>
             <MapPin size={14} /> Exclusivo: Cancún & Zona Hotelera
          </div>
          
          <h1 className="display-font" style={{ fontSize: "var(--text-h1)", lineHeight: 1 }}>
             <span style={{overflow:"hidden", display:"block"}}><span className="hero-title-word" style={{display:"block", transform:"translateY(100%)"}}>MATRIZ DE</span></span>
             <span style={{overflow:"hidden", display:"block"}}><span className="hero-title-word accent-text" style={{display:"block", transform:"translateY(100%)"}}>MANTENIMIENTO.</span></span>
          </h1>
      </section>

      {/* 2. DASHBOARD */}
      <MaintenanceDashboard />

      {/* 3. PORTFOLIO DE GESTION */}
      <section style={{ padding: "10rem 4rem", maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "5rem" }}>
             <h2 className="display-font" style={{ fontSize: "3.5rem" }}>Casos de Éxito</h2>
             <p className="body-font" style={{ opacity: 0.6 }}>Propiedades bajo nuestra gestión directa y continua.</p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {PROJECTS_MANTENIMIENTO.map(proj => (
              <ProjectFolder key={proj.id} project={proj} />
            ))}
          </div>
      </section>

      {/* 4. TABLA DE PLANES */}
      <section id="comparativa" style={{ padding: "10rem 4rem", maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
             <h2 className="display-font" style={{ fontSize: "3.5rem" }}>Planes de Gestión</h2>
             <p className="body-font" style={{ opacity: 0.6 }}>Selecciona la recurrencia que mejor se adapte a tu propiedad.</p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: "4rem" }}>
             <div style={{ background: "rgba(12, 12, 11, 0.05)", padding: "0.4rem", borderRadius: "100px", display: "flex", gap: "0.5rem" }}>
                <button 
                  onClick={() => setBillingCycle("monthly")}
                  style={{ padding: "0.8rem 1.5rem", borderRadius: "100px", border: "none", background: billingCycle === "monthly" ? "var(--clr-text-primary)" : "transparent", color: billingCycle === "monthly" ? "#fff" : "var(--clr-text-primary)", cursor: "pointer", transition: "all 0.3s ease" }}
                >Mensual</button>
                <button 
                  onClick={() => setBillingCycle("yearly")}
                  style={{ padding: "0.8rem 1.5rem", borderRadius: "100px", border: "none", background: billingCycle === "yearly" ? "var(--clr-text-primary)" : "transparent", color: billingCycle === "yearly" ? "#fff" : "var(--clr-text-primary)", cursor: "pointer", transition: "all 0.3s ease" }}
                >Anual (-17%)</button>
             </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
             {PLANES_DATA.map((plan, idx) => (
               <div key={idx} style={{ background: "#121211", color: "#fff", padding: "4rem 2.5rem", borderRadius: "24px", display: "flex", flexDirection: "column", border: "1px solid rgba(255,255,255,0.05)" }}>
                   <h3 className="display-font" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{plan.name}</h3>
                   <p className="body-font" style={{ fontSize: "0.9rem", opacity: 0.5, marginBottom: "3rem", minHeight: "3em" }}>{plan.description}</p>
                   
                   <div style={{ marginBottom: "4rem" }}>
                     <span className="display-font" style={{ fontSize: "3.5rem" }}>
                       ${(billingCycle === "monthly" ? plan.priceMonthly : Math.floor(plan.priceYearly/12)).toLocaleString()}
                     </span>
                     <span className="body-font" style={{ opacity: 0.5 }}> / mes</span>
                   </div>

                   <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                     {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", opacity: feat.included ? 1 : 0.2 }}>
                           {feat.included ? <Check size={18} style={{color:"var(--clr-accent)"}} /> : <X size={18} />}
                           <span className="body-font" style={{ fontSize: "0.95rem" }}>{feat.text}</span>
                        </div>
                     ))}
                   </div>

                   <Link href={`https://wa.me/529991725555?text=Deseo%20cotizar%20el%20Plan%20${plan.name}`} target="_blank" style={{ 
                      marginTop: "4rem", padding: "1.2rem", background: "var(--clr-accent)", color: "#000", textAlign: "center",
                      borderRadius: "12px", textDecoration: "none", fontWeight: 700, textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px"
                   }}>
                      Contratar ahora
                   </Link>
               </div>
             ))}
          </div>
      </section>
    </div>
  );
}
