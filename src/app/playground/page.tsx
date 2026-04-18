"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import styles from "../page.module.css";
import MagneticButton from "@/components/MagneticButton";

/**
 * BIENVENIDO AL LABORATORIO DE ANIME.JS
 * 
 * Este archivo es una copia segura para experimentar.
 * He reemplazado GSAP por Anime.js para que veas la diferencia.
 */

export default function Playground() {
  const heroRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const title3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const [lastAction, setLastAction] = useState("Esperando orden...");

  // 1. Animación de entrada (equivalente a la que viste antes)
  useEffect(() => {
    // Animación de los títulos (Staggering)
    anime({
      targets: [title1Ref.current, title2Ref.current, title3Ref.current],
      translateY: [100, 0],
      opacity: [0, 1],
      delay: anime.stagger(200), // Aparecen uno tras otro
      duration: 1200,
      easing: 'easeOutExpo'
    });

    // Animación del subtítulo
    anime({
      targets: subRef.current,
      translateY: [30, 0],
      opacity: [0, 1],
      delay: 1000,
      duration: 1000,
      easing: 'easeOutQuad'
    });

    // Animación del Watermark (el logo de fondo)
    anime({
      targets: watermarkRef.current,
      opacity: [0, 0.1],
      scale: [0.8, 1],
      duration: 2000,
      easing: 'easeOutSine'
    });
  }, []);

  // 2. Funciones para los botones del "Panel de Control"
  const girarLogo = () => {
    setLastAction("Girando logo 360 grados...");
    anime({
      targets: watermarkRef.current,
      rotate: '+=360',
      duration: 2000,
      easing: 'easeInOutElastic(1, .5)'
    });
  };

  const efectoRebote = () => {
    setLastAction("Efecto de rebote en títulos...");
    anime({
      targets: [title1Ref.current, title2Ref.current, title3Ref.current],
      scale: [1, 1.2, 1],
      delay: anime.stagger(100),
      duration: 1000,
      easing: 'easeOutElastic(1, .8)'
    });
  };

  const ocultarTodo = () => {
    setLastAction("Ocultando elementos...");
    anime({
      targets: [title1Ref.current, title2Ref.current, title3Ref.current, subRef.current],
      opacity: 0,
      translateY: 50,
      duration: 500,
      easing: 'easeInQuad'
    });
  };

  const mostrarTodo = () => {
    setLastAction("Revelando elementos...");
    anime({
      targets: [title1Ref.current, title2Ref.current, title3Ref.current, subRef.current],
      opacity: 1,
      translateY: 0,
      delay: anime.stagger(150),
      duration: 1000,
      easing: 'easeOutExpo'
    });
  };

  return (
    <main className={styles.main} style={{ overflow: 'hidden', height: '100vh', position: 'relative' }}>
      
      {/* PANEL DE CONTROL (Solo para este experimento) */}
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
        <h3 style={{ color: '#c5a47e', marginBottom: '10px' }}>Laboratorio Anime.js</h3>
        <p style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '20px' }}>Estado: {lastAction}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button onClick={girarLogo} style={buttonStyle}>🎡 Girar Logo Fondo</button>
          <button onClick={efectoRebote} style={buttonStyle}>🏀 Efecto Rebote</button>
          <button onClick={ocultarTodo} style={buttonStyle}>👻 Ocultar Todo</button>
          <button onClick={mostrarTodo} style={buttonStyle}>✨ Mostrar Todo</button>
        </div>
        
        <p style={{ marginTop: '20px', fontSize: '0.7rem', color: '#c5a47e' }}>
          * Esto es una copia segura en la rama <b>experimento-animejs</b>.
        </p>
      </div>

      {/* CONTENIDO DE LA PÁGINA (Igual que el Home) */}
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
            Este es tu patio de juegos técnico. Aquí puedes ver cómo Anime.js mueve
            las piezas de tu tablero de forma fluida y elegante.
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
