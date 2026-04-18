"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import styles from "../page.module.css";
import MagneticButton from "@/components/MagneticButton";

/**
 * BIENVENIDO AL LABORATORIO DE ANIME.JS V4
 * 
 * He ajustado la sintaxis para que sea 100% compatible con la v4.
 * Ahora usamos: animate(objetivo, { propiedades })
 */

export default function Playground() {
  const heroRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const title3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
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

  const ocultarTodo = () => {
    const targets = [title1Ref.current, title2Ref.current, title3Ref.current, subRef.current].filter(Boolean);
    if (targets.length === 0) return;
    setLastAction("Ocultando elementos...");
    animate(targets, {
      opacity: 0,
      y: 50,
      duration: 500,
      ease: 'easeInQuad'
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
    <main className={styles.main} style={{ overflow: 'hidden', height: '100vh', position: 'relative' }}>
      
      {/* PANEL DE CONTROL */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: '20px',
        borderRadius: '15px',
        border: '1px solid #c5a47e',
        color: 'white',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        width: '280px'
      }}>
        <h3 style={{ color: '#c5a47e', marginBottom: '10px' }}>Laboratorio Anime.js V4</h3>
        <p style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '20px' }}>Estado: {lastAction}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button onClick={girarLogo} style={buttonStyle}>🎡 Girar Logo Fondo</button>
          <button onClick={efectoRebote} style={buttonStyle}>🏀 Efecto Rebote</button>
          <button onClick={ocultarTodo} style={buttonStyle}>👻 Ocultar Todo</button>
          <button onClick={mostrarTodo} style={buttonStyle}>✨ Mostrar Todo</button>
        </div>
        
        <p style={{ marginTop: '20px', fontSize: '0.7rem', color: '#c5a47e' }}>
          * Sintaxis corregida: <br/> `animate(target, &#123; props &#125;)`
        </p>
      </div>

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
            <span className={styles.mask}><span ref={title1Ref}>IDEA. EJECUCIÓN.</span></span>
            <span className={styles.mask}><br /><span ref={title2Ref} className="accent-text">PERMANENCIA.</span></span>
            <span className={styles.mask}><span ref={title3Ref} className="accent-text">24/7.</span></span>
          </h1>
          <p className={`${styles.heroSubhead} body-font`} ref={subRef}>
            ¡Logrado! Esta es la versión 4 funcionando. Prueba los botones de arriba
            para ver cómo fluye ahora el diseño.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <MagneticButton>
              <button className={styles.goldenBtn} style={{ border: "none", cursor: "pointer" }}>
                Botón de prueba
              </button>
            </MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}

const buttonStyle = {
  backgroundColor: 'transparent',
  border: '1px solid #c5a47e',
  color: '#c5a47e',
  padding: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'all 0.3s',
  textAlign: 'left' as const,
  fontSize: '0.9rem'
};
