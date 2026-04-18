"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger, createMotionPath } from "animejs";
import styles from "../page.module.css";
import MagneticButton from "@/components/MagneticButton";

/**
 * BIENVENIDO AL LABORATORIO DE ANIME.JS V4 - FASE 2: MOTION PATH
 */

export default function Playground() {
  const heroRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const title3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const sparkRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  
  const [lastAction, setLastAction] = useState("Esperando orden...");

  useEffect(() => {
    // 1. Animación de entrada inicial
    const targets = [title1Ref.current, title2Ref.current, title3Ref.current].filter(Boolean);
    
    if (targets.length > 0) {
      animate(targets, {
        y: [100, 0],
        opacity: [0, 1],
        delay: stagger(200),
        duration: 1200,
        ease: 'easeOutExpo'
      });
    }

    if (subRef.current) {
      animate(subRef.current, {
        y: [30, 0],
        opacity: [0, 1],
        delay: 1000,
        duration: 1000,
        ease: 'easeOutQuad'
      });
    }

    if (watermarkRef.current) {
      animate(watermarkRef.current, {
        opacity: [0, 0.1],
        scale: [0.8, 1],
        duration: 2000,
        ease: 'easeOutSine'
      });
    }
  }, []);

  // 2. Funciones para los botones
  const girarLogo = () => {
    if (!watermarkRef.current) return;
    setLastAction("Girando logo 360 grados...");
    animate(watermarkRef.current, {
      rotate: '+=360',
      duration: 2000,
      ease: 'easeInOutElastic(1, .5)'
    });
  };

  const efectoRebote = () => {
    const targets = [title1Ref.current, title2Ref.current, title3Ref.current].filter(Boolean);
    if (targets.length === 0) return;
    setLastAction("Efecto de rebote en títulos...");
    animate(targets, {
      scale: [1, 1.2, 1],
      delay: stagger(100),
      duration: 1000,
      ease: 'easeOutElastic(1, .8)'
    });
  };

  const lanzarEstela = () => {
    if (!sparkRef.current || !pathRef.current) return;
    setLastAction("🚀 Lanzando efecto estela...");
    
    // Mostramos la chispa
    animate(sparkRef.current, { opacity: 1, duration: 100 });

    // Creamos el camino del movimiento
    const pathData = createMotionPath(pathRef.current);

    // Ejecutamos la animación siguiendo el camino
    animate(sparkRef.current, {
      ...pathData,
      duration: 3000,
      ease: 'easeInOutQuart'
    }).then(() => {
      // Al terminar, la ocultamos suavemente
      animate(sparkRef.current, { opacity: 0, duration: 500 });
    });
  };

  const mostrarTodo = () => {
    const targets = [title1Ref.current, title2Ref.current, title3Ref.current, subRef.current].filter(Boolean);
    if (targets.length === 0) return;
    setLastAction("Revelando elementos...");
    animate(targets, {
      opacity: 1,
      y: 0,
      delay: stagger(150),
      duration: 1000,
      ease: 'easeOutExpo'
    });
  };

  return (
    <main className={styles.main} style={{ overflow: 'hidden', height: '100vh', position: 'relative', backgroundColor: '#050505' }}>
      
      {/* PANEL DE CONTROL */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        backgroundColor: 'rgba(0,0,0,0.9)',
        padding: '20px',
        borderRadius: '15px',
        border: '1px solid #c5a47e',
        color: 'white',
        boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
        width: '280px'
      }}>
        <h3 style={{ color: '#c5a47e', marginBottom: '10px' }}>Laboratorio Fase 2</h3>
        <p style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '20px' }}>Estado: {lastAction}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button onClick={lanzarEstela} style={{...buttonStyle, backgroundColor: '#c5a47e', color: 'black', fontWeight: 'bold'}}>🚀 Lanzar Efecto Estela</button>
          <button onClick={girarLogo} style={buttonStyle}>🎡 Girar Logo Fondo</button>
          <button onClick={efectoRebote} style={buttonStyle}>🏀 Efecto Rebote</button>
          <button onClick={mostrarTodo} style={buttonStyle}>✨ Resetear Escena</button>
        </div>
        
        <p style={{ marginTop: '20px', fontSize: '0.7rem', color: '#c5a47e' }}>
          * Usando `createMotionPath` para seguir un trazado vectorial.
        </p>
      </div>

      {/* SVG EXPERIMENTAL (Invisible pero sirve de guía) */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '400px', opacity: 0.1, pointerEvents: 'none' }}>
        <svg viewBox="0 0 800 400" width="100%" height="100%" fill="none">
          <path 
            ref={pathRef}
            d="M 100 200 Q 200 100 400 200 T 700 200" 
            stroke="#c5a47e" 
            strokeWidth="2" 
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      {/* LA "CHISPA" (Spark) */}
      <div 
        ref={sparkRef} 
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0,
          boxShadow: '0 0 20px 5px #c5a47e, 0 0 40px 10px #fff',
          zIndex: 500
        }}
      />

      <div className={styles.logoWatermark} ref={watermarkRef} style={{ pointerEvents: 'none' }}>
        <img 
          src="/images/Logo Galarza PNG negro.png" 
          alt="" 
          className={styles.watermarkImg}
        />
      </div>

      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroHeadline} display-font`} style={{ position: 'relative' }}>
            <span className={styles.mask}><span ref={title1Ref}>DISEÑO QUE</span></span>
            <span className={styles.mask}><br /><span ref={title2Ref} className="accent-text">COBRA VIDA.</span></span>
          </h1>
          <p className={`${styles.heroSubhead} body-font`} ref={subRef} style={{ maxWidth: '600px' }}>
            Imagina esta luz dorada recorriendo cada letra del logo de Galarza. 
            Ese nivel de detalle es lo que separa una web común de una experiencia de marca.
          </p>
        </div>
      </section>
    </main>
  );
}

const buttonStyle = {
  backgroundColor: 'transparent',
  border: '1px solid #c5a47e',
  color: '#c5a47e',
  padding: '12px',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s',
  textAlign: 'left' as const,
  fontSize: '0.9rem'
};
