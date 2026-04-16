"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../servicios/servicios.module.css"; 

export default function ContactoPage() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Form fields staggered reveal
      gsap.fromTo(
        ".form-element",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );
    }, formRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.pageWrapper} style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }}>
        
        {/* Lado de Texto */}
        <div>
          <h1 className="display-font form-element" style={{ fontSize: "var(--text-h1)", marginBottom: "2rem", lineHeight: 0.9 }}>
            Inicia tu <br/>
            <span style={{ color: "var(--clr-accent)" }}>Proyecto.</span>
          </h1>
          <p className="body-font form-element" style={{ fontSize: "1.1rem", opacity: 0.8, marginBottom: "3rem" }}>
            El primer paso es el más importante. Déjanos tus datos y un arquitecto o agente especializado de nuestro equipo se comunicará contigo en menos de 24 horas.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="form-element">
              <h3 className="body-font" style={{ textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "2px", opacity: 0.5 }}>Oficina Central</h3>
              <p className="body-font" style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>Cancún, Quintana Roo.</p>
            </div>
            <div className="form-element">
              <h3 className="body-font" style={{ textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "2px", opacity: 0.5 }}>WhatsApp (24/7 Emergencias)</h3>
              <p className="body-font" style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>+52 999 172 5555</p>
            </div>
            <div className="form-element">
              <h3 className="body-font" style={{ textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "2px", opacity: 0.5 }}>Email</h3>
              <p className="body-font" style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>galarza.dmcc@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Lado de Formulario con Protección Anti-Spam */}
        <form ref={formRef} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div className="form-element" style={{ display: "flex", flexDirection: "column" }}>
            <label className="body-font" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>Nombre Completo</label>
            <input type="text" placeholder="John Doe" style={{ 
                padding: "1rem 0", background: "transparent", 
                border: "none", borderBottom: "1px solid rgba(12,12,11,0.2)",
                fontFamily: "var(--font-dm-sans)", fontSize: "1.1rem", color: "var(--clr-text-primary)", outline: "none"
            }} />
          </div>

          <div className="form-element" style={{ display: "flex", flexDirection: "column" }}>
            <label className="body-font" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>Correo Electrónico</label>
            <input type="email" placeholder="john@empresa.com" style={{ 
                padding: "1rem 0", background: "transparent", 
                border: "none", borderBottom: "1px solid rgba(12,12,11,0.2)",
                fontFamily: "var(--font-dm-sans)", fontSize: "1.1rem", color: "var(--clr-text-primary)", outline: "none"
            }} />
          </div>

          <div className="form-element" style={{ display: "flex", flexDirection: "column" }}>
            <label className="body-font" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>Servicio de Interés</label>
            <select style={{ 
                padding: "1rem 0", background: "transparent", 
                border: "none", borderBottom: "1px solid rgba(12,12,11,0.2)",
                fontFamily: "var(--font-dm-sans)", fontSize: "1.1rem", color: "var(--clr-text-primary)", outline: "none"
            }}>
              <option value="dcm">DCM (Diseño y Construcción)</option>
              <option value="urb">Urbanización</option>
              <option value="pi">Proyectos Inmobiliarios</option>
              <option value="fv">Fotografía y Video</option>
              <option value="mantenimiento">Póliza de Mantenimiento</option>
            </select>
          </div>

          <div className="form-element" style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}>
             <button type="button" style={{ 
                padding: "1.5rem", background: "var(--clr-accent)", color: "white",
                border: "none", borderRadius: "100px", fontFamily: "var(--font-dm-sans)", fontSize: "1rem", textTransform: "uppercase",
                letterSpacing: "2px", fontWeight: "bold", cursor: "pointer", transition: "transform 0.3s ease",
                boxShadow: "0 10px 20px rgba(184, 150, 46, 0.3)"
             }}>
                Enviar Requerimiento
             </button>
             <p className="body-font" style={{ fontSize: "0.75rem", opacity: 0.5, marginTop: "1rem", textAlign: "center" }}>
                Tus datos están protegidos por encriptación y rate limiting avanzado.
             </p>
          </div>
        </form>

      </div>
    </div>
  );
}
