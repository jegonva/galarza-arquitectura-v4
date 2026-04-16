"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const chapters = [
  {
    title: "El Origen",
    text: "Comenzamos en la línea de fuego de las construcciones, notando el vacío infinito entre los despachos de arquitectos y las empresas que deben mantener la obra viva años después. En ese vacío el dinero de los clientes se evaporaba.",
    img: "/IMAGENES RAMAS/URBANIZACION/clipboard_2026-04-16_13-2.webp"
  },
  {
    title: "La Evolución",
    text: "Decidimos cerrar esa brecha. Hoy no solo pintamos planos, vaciamos el concreto de la calle e impermeabilizamos el techo que diseñamos. Todo bajo un ecosistema corporativo estandarizado.",
    img: "/IMAGENES RAMAS/DCM/clipboard_2026-04-16_13-23.webp"
  },
  {
    title: "El Horizonte",
    text: "Más de 50 propiedades operativas intervenidas. Desarrollo macro-urbano continuo. El objetivo no ha cambiado: Ejecución y permanencia las 24 horas del día.",
    img: "/IMAGENES RAMAS/FV/converted.webp"
  }
];

export default function NosotrosPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".horizontal-panel");
      
      // Horizontal GSAP Scroll Pin
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          start: "top top",
          end: () => "+=" + (scrollWrapperRef.current?.offsetWidth || 2000)
        }
      });
      
      // Text reveals within panels
      sections.forEach((sec: any) => {
        gsap.fromTo(sec.querySelector(".anim-txt"), 
           { y: 50, opacity: 0 },
           {
             y: 0, opacity: 1, duration: 1,
             scrollTrigger: {
               trigger: sec,
               start: "left center",
             }
           }
        );
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: "transparent", color: "var(--clr-text-primary)", overflowX: "hidden" }}>
      
      <Link href="/" style={{
          position: "fixed", top: "2rem", left: "2rem", zIndex: 100,
          background: "rgba(12,12,11,0.05)", width: "50px", height: "50px",
          borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--clr-text-primary)", border: "1px solid rgba(0,0,0,0.1)", textDecoration: "none",
          backdropFilter: "blur(10px)"
      }}>
        <MoveLeft size={20} />
      </Link>

      <section style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 4rem" }}>
        <h1 className="display-font" style={{ fontSize: "var(--text-h1)", maxWidth: "1200px", lineHeight: 0.9 }}>
          Ingeniería continua para un <span style={{color: "var(--clr-accent)"}}>patrimonio</span> impecable.
        </h1>
        <p className="body-font" style={{ fontSize: "1.2rem", marginTop: "2rem", opacity: 0.6, letterSpacing: "1px", textTransform: "uppercase" }}>[ Desliza para explorar nuestro ADN ]</p>
      </section>

      {/* HORIZONTAL SCROLL CONTAINER */}
      <div ref={containerRef} style={{ height: "100vh", overflow: "hidden", display: "flex", flexWrap: "nowrap" }}>
         <div ref={scrollWrapperRef} style={{ display: "flex", width: "400vw", height: "100%" }}>
            
            {/* Panel 0: The Intro to Scroll */}
            <div className="horizontal-panel" style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", color: "var(--clr-text-primary)" }}>
               <h2 className="display-font anim-txt" style={{ fontSize: "5rem", textAlign: "center" }}>Ecosistema<br/>Galarza.</h2>
            </div>

            {/* Panels 1-3 */}
            {chapters.map((cap, i) => (
              <div key={i} className="horizontal-panel" style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", padding: "0 8rem", position: "relative" }}>
                  <div style={{ flex: 1, zIndex: 2 }}>
                     <h3 className="body-font accent-text anim-txt" style={{ textTransform: "uppercase", letterSpacing: "3px", marginBottom: "1.5rem", fontWeight: 700 }}>Visión 0{i + 1}</h3>
                     <h2 className="display-font anim-txt" style={{ fontSize: "var(--text-h2)", marginBottom: "2rem", maxWidth: "600px" }}>{cap.title}</h2>
                     <p className="body-font anim-txt" style={{ fontSize: "1.3rem", maxWidth: "500px", opacity: 0.8, lineHeight: 1.6 }}>{cap.text}</p>
                  </div>
                  <div style={{ flex: 1, height: "70vh", borderRadius: "24px", overflow: "hidden", position: "relative", boxShadow: "0 40px 100px rgba(0,0,0,0.2)" }}>
                     {cap.img && <img src={cap.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                     <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))" }} />
                  </div>
              </div>
            ))}

         </div>
      </div>
      
    </div>
  );
}
