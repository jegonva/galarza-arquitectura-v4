"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger, createMotionPath } from "animejs";
import styles from "../page.module.css";
import MagneticButton from "@/components/MagneticButton";

/**
 * BIENVENIDO AL LABORATORIO DE ANIME.JS V4 - FASE 3: LOGO VECTORIAL (CODIFICADO)
 * 
 * En esta fase, he "calcalcado" el logo de Galarza usando código matemático (SVG).
 * No es una imagen, es geometría pura que podemos animar.
 */

export default function Playground() {
  const [lastAction, setLastAction] = useState("Esperando orden...");
  const sparkRef = useRef<HTMLDivElement>(null);
  
  // Referencias para las partes del logo "codificado"
  const gPathRef = useRef<SVGPathElement>(null);
  const wavePathRef = useRef<SVGPathElement>(null);

  // 1. Efecto inicial de revelado
  useEffect(() => {
    // Escondemos los trazos inicialmente (longitud de línea 0)
    // En Anime.js v4, usamos 'stroke-dashoffset' para el efecto de dibujo
    if (gPathRef.current && wavePathRef.current) {
      animate([gPathRef.current, wavePathRef.current], {
        opacity: [0, 1],
        duration: 1000,
        ease: 'easeOutSine'
      });
    }
  }, []);

  // 2. LA MAGIA: Dibujar el logo con una chispa
  const activarLogoVectorial = () => {
    if (!gPathRef.current || !wavePathRef.current || !sparkRef.current) return;
    setLastAction("🎨 Dibujando logo vectorial con código...");

    // Reiniciamos visibilidad
    sparkRef.current.style.opacity = "1";
    
    // PASO 1: La chispa recorre la "G"
    const gMotion = createMotionPath(gPathRef.current);
    
    const timeline = animate(sparkRef.current, {
      ...gMotion,
      duration: 1500,
      ease: 'easeInOutQuart'
    });

    timeline.then(() => {
      // PASO 2: La chispa recorre la ONDA
      const waveMotion = createMotionPath(wavePathRef.current);
      animate(sparkRef.current, {
        ...waveMotion,
        duration: 2000,
        ease: 'easeInOutSine'
      }).then(() => {
        setLastAction("✅ Logo dibujado con éxito.");
        animate(sparkRef.current, { opacity: 0, duration: 500 });
      });
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
        backgroundColor: 'rgba(0,0,0,0.92)',
        padding: '20px',
        borderRadius: '15px',
        border: '1px solid #c5a47e',
        color: 'white',
        boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
        width: '280px'
      }}>
        <h3 style={{ color: '#c5a47e', marginBottom: '10px' }}>Laboratorio Fase 3</h3>
        <p style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '20px' }}>Estado: {lastAction}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button onClick={activarLogoVectorial} style={{...buttonStyle, backgroundColor: '#c5a47e', color: 'black', fontWeight: 'bold'}}>🎨 Activar Logo Vectorial</button>
          <button onClick={() => window.location.reload()} style={buttonStyle}>🔄 Reiniciar Laboratorio</button>
        </div>
        
        <div style={{ marginTop: '20px', padding: '10px', borderTop: '1px solid #333' }}>
          <p style={{ fontSize: '0.75rem', color: '#c5a47e', lineHeight: '1.4' }}>
            <b>Concepto:</b> Este logo no es una imagen. Es una instrucción matemática 
            que la computadora dibuja punto por punto.
          </p>
        </div>
      </div>

      {/* EL LOGO CODIFICADO (SVG) */}
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: '600px', 
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <svg viewBox="0 0 600 300" width="100%" height="100%" style={{ overflow: 'visible' }}>
          {/* El Camino de la "G" (Simplificado) */}
          <path 
            ref={gPathRef}
            d="M 330,150 A 50,50 0 1 1 315,110 M 330,150 H 290" 
            stroke="#fff" 
            strokeWidth="4" 
            fill="none"
            strokeLinecap="round"
            style={{ opacity: 0.2 }}
          />
          {/* La Onda (Calculada para cruzar la G) */}
          <path 
            ref={wavePathRef}
            d="M 50,150 Q 150,100 250,150 T 450,150 Q 500,200 550,150" 
            stroke="#c5a47e" 
            strokeWidth="2" 
            fill="none"
            style={{ opacity: 0.3 }}
          />
        </svg>
      </div>

      {/* LA "CHISPA" (Spark) */}
      <div 
        ref={sparkRef} 
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0,
          boxShadow: '0 0 15px 5px #c5a47e, 0 0 30px 10px #fff',
          zIndex: 500
        }}
      />

      {/* TEXTO DE APOYO */}
      <div style={{ position: 'absolute', bottom: '10%', width: '100%', textAlign: 'center' }}>
        <h2 className="display-font" style={{ color: '#fff', fontSize: '1.5rem', opacity: 0.5 }}>
          CONSTRUCCIÓN DIGITAL DE MARCA
        </h2>
      </div>

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
  textAlign: 'center' as const,
  fontSize: '0.9rem'
};
