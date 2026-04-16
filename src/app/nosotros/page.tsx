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
      const isMobile = window.innerWidth <= 900;
      
      if (!isMobile) {
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
        
        // Text reveals within panels (Desktop)
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
      } else {
        // Simple Fade-up for mobile (Vertical Stack)
        gsap.utils.toArray(".anim-txt").forEach((entry: any) => {
           gsap.fromTo(entry, 
             { y: 30, opacity: 0 },
             {
               y: 0, opacity: 1, duration: 0.8,
               scrollTrigger: {
                 trigger: entry,
                 start: "top 85%",
               }
             }
           );
        });
      }

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: "transparent", color: "var(--clr-text-primary)", overflowX: "hidden" }}>
      
      <Link href="/" style={{
          position: "fixed", top: "1.5rem", left: "1.5rem", zIndex: 1100,
          background: "var(--clr-glass)", width: "45px", height: "45px",
          borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--clr-text-primary)", border: "1px solid rgba(0,0,0,0.1)", textDecoration: "none",
          backdropFilter: "blur(10px)", boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
      }}>
        <MoveLeft size={20} />
      </Link>

      <section style={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        padding: "0 clamp(1.5rem, 5vw, 4rem)" 
      }}>
        <h1 className="display-font" style={{ 
          fontSize: "var(--text-h1)", 
          maxWidth: "1200px", 
          lineHeight: 0.9,
          marginTop: "4rem"
        }}>
          Ingeniería continua para un <span style={{color: "var(--clr-accent)"}}>patrimonio</span> impecable.
        </h1>
        <p className="body-font" style={{ 
          fontSize: "clamp(0.8rem, 1vw, 1.2rem)", 
          marginTop: "2rem", 
          opacity: 0.6, 
          letterSpacing: "1px", 
          textTransform: "uppercase" 
        }}>[ Desliza para explorar nuestro ADN ]</p>
      </section>

      {/* HORIZONTAL/VERTICAL CONTAINER */}
      <div ref={containerRef} className="nosotros-content-wrapper">
         <div ref={scrollWrapperRef} className="nosotros-scroll-inner">
            
            {/* Panel 0: The Intro to Scroll */}
            <div className="horizontal-panel intro-panel">
               <h2 className="display-font anim-txt" style={{ fontSize: "var(--text-h1)", textAlign: "center" }}>Ecosistema<br/>Galarza.</h2>
            </div>

            {/* Panels 1-3 */}
            {chapters.map((cap, i) => (
              <div key={i} className="horizontal-panel content-panel">
                  <div className="panel-text-box">
                     <h3 className="body-font accent-text anim-txt" style={{ textTransform: "uppercase", letterSpacing: "3px", marginBottom: "1rem", fontWeight: 700, fontSize: "0.9rem" }}>Visión 0{i + 1}</h3>
                     <h2 className="display-font anim-txt" style={{ fontSize: "var(--text-h2)", marginBottom: "1.5rem", maxWidth: "600px" }}>{cap.title}</h2>
                     <p className="body-font anim-txt" style={{ fontSize: "clamp(1rem, 1.2vw, 1.3rem)", maxWidth: "500px", opacity: 0.8, lineHeight: 1.6 }}>{cap.text}</p>
                  </div>
                  <div className="panel-image-box">
                     {cap.img && <img src={cap.img} alt={cap.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                     <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))" }} />
                  </div>
              </div>
            ))}

         </div>
      </div>
      
      <style jsx>{`
        .nosotros-content-wrapper {
          overflow: hidden;
        }
        .nosotros-scroll-inner {
          display: flex;
          flex-wrap: nowrap;
          width: 400vw;
          height: 100vh;
        }
        .horizontal-panel {
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 8rem;
          position: relative;
        }
        .intro-panel {
          justify-content: center;
        }
        .panel-text-box {
          flex: 1;
          z-index: 2;
        }
        .panel-image-box {
          flex: 1;
          height: 70vh;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 40px 100px rgba(0,0,0,0.2);
        }

        @media (max-width: 900px) {
          .nosotros-scroll-inner {
            flex-direction: column;
            width: 100%;
            height: auto;
          }
          .horizontal-panel {
            width: 100%;
            height: auto;
            flex-direction: column;
            padding: 4rem 1.5rem;
            min-height: 80vh;
            justify-content: center;
          }
          .panel-text-box {
             order: 2;
             margin-top: 2rem;
             width: 100%;
          }
          .panel-image-box {
             order: 1;
             width: 100%;
             height: 40vh;
             border-radius: 16px;
          }
        }
      `}</style>
    </div>
  );
}
