"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Arq. Manuel Cervantes",
    role: "Desarrollador Inmobiliario - Tulum",
    text: "El nivel de transparencia con los reportes fotográficos de Galarza es irreal. Saber qué está pasando en mi obra sin tener que viajar 2 horas cada día me salvó la vida."
  },
  {
    name: "Regina S.",
    role: "Dueña de Airbnb Premium",
    text: "Contraté el plan Intermedio Húmedo para mi casa en Zona Hotelera. Tuvimos una fuga el 24 de diciembre a las 10 PM. El equipo de Galarza estuvo ahí en 40 minutos. No los cambio por nada."
  },
  {
    name: "Eduardo T.",
    role: "Inversionista",
    text: "Hicieron todo el movimiento de tierras para nuestro residencial. Rápidos, técnicos y sin sorpresas en el presupuesto."
  },
  {
    name: "Capital Partners",
    role: "Gestión de Portafolios",
    text: "El esquema de Flipping Arquitectónico de Galarza PI nos aumentó el retorno de inversión un 18% en solo 6 meses de remodelación y venta. Ejecución perfecta."
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section style={{ padding: "8rem 0", overflow: "hidden", background: "var(--clr-surface)" }}>
      <div style={{ padding: "0 4rem", marginBottom: "4rem" }}>
        <h2 className="display-font" style={{ fontSize: "var(--text-h2)" }}>Lo que dicen quienes nos confían su patrimonio.</h2>
        <p className="body-font" style={{ opacity: 0.6, marginTop: "1rem" }}>Arrastra para explorar testimonios.</p>
      </div>

      <div ref={containerRef} style={{ width: "100%", overflow: "hidden", padding: "0 4rem" }}>
        <motion.div 
          drag="x" 
          dragConstraints={containerRef}
          whileTap={{ cursor: "grabbing" }}
          style={{ display: "flex", gap: "2rem", width: "max-content", cursor: "grab" }}
        >
          {reviews.map((rev, i) => (
            <motion.div 
              key={i} 
              style={{
                width: "400px", minHeight: "250px", background: "var(--clr-background)",
                padding: "3rem", borderRadius: "var(--radius-soft)",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                pointerEvents: "none" // Allow dragging without highlighting text
              }}
            >
              <div>
                <div style={{ display:"flex", gap:"0.2rem", color:"var(--clr-accent)", marginBottom: "1.5rem" }}>
                  <Star size={16} fill="currentColor"/>
                  <Star size={16} fill="currentColor"/>
                  <Star size={16} fill="currentColor"/>
                  <Star size={16} fill="currentColor"/>
                  <Star size={16} fill="currentColor"/>
                </div>
                <p className="body-font" style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.6 }}>"{rev.text}"</p>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <h4 className="display-font" style={{ fontSize: "1.2rem", letterSpacing: "1px" }}>{rev.name}</h4>
                <p className="body-font" style={{ fontSize: "0.8rem", color: "var(--clr-text-secondary)", textTransform: "uppercase", letterSpacing: "1px", marginTop: "0.2rem" }}>{rev.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
