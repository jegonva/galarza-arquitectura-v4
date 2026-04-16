"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ShieldCheck, Zap, Clock, Users } from "lucide-react";
import styles from "./MaintenanceDashboard.module.css";

const DATA = {
  casa: {
    title: "¿Vives en tu propiedad o la usas de vez en cuando?",
    desc: "Nuestro servicio garantiza que cuando llegues, todo esté en perfectas condiciones. Sin sorpresas, sin llamadas de emergencia en el peor momento.",
    plan_rec: "Plan Básico",
    stats: {
      anual: 30000,
      trabajo: 9600,
      sin_plan_min: 28000,
      sin_plan_max: 46000,
      avg_spend: 37000
    },
    con_galarza: [
      "Visitas programadas para detectar problemas antes de que crezcan",
      "Reporte fotográfico en cada visita — sabes qué pasa siempre",
      "Atención de emergencias en menos de 4 horas",
      "Coordinamos plomeros, electricistas y proveedores por ti"
    ],
    sin_galarza: [
      "Te enteras del problema cuando ya es costoso",
      "Emergencias sin respaldo profesional inmediato",
      "Tiempo perdido buscando y coordinando proveedores",
      "Sin registro del historial de tu propiedad"
    ]
  },
  airbnb: {
    title: "¿Rentas tu propiedad por Airbnb u otras plataformas?",
    desc: "El estado de tu propiedad impacta directamente en tus reseñas y tu ocupación. Nosotros la mantenemos lista para recibir huéspedes en todo momento.",
    plan_rec: "Plan Premium",
    stats: {
      anual: 96000,
      trabajo: 36000,
      sin_plan_min: 85000,
      sin_plan_max: 130000,
      avg_spend: 107500
    },
    con_galarza: [
      "Revisión entre huéspedes — siempre impecable para el siguiente",
      "Reportes fotográficos que documentan el estado antes y después",
      "Respuesta inmediata ante daños o emergencias reportadas",
      "Gestión de proveedores sin que tú tengas que intervenir"
    ],
    sin_galarza: [
      "Una mala reseña puede costar decenas de reservas",
      "Daños sin detectar que se acumulan entre huésped y huésped",
      "Tiempos muertos mientras buscas quién arregla algo",
      "Sin evidencia fotográfica para reclamar daños"
    ]
  },
  inversion: {
    title: "¿Tienes una propiedad como activo o en construcción?",
    desc: "Una propiedad sin mantenimiento pierde valor. Nosotros la protegemos y documentamos su estado para que tu inversión siempre esté respaldada.",
    plan_rec: "Plan Elite 24/7",
    stats: {
      anual: 162000,
      trabajo: 60000,
      sin_plan_min: 160000,
      sin_plan_max: 260000,
      avg_spend: 210000
    },
    con_galarza: [
      "Monitoreo constante del estado estructural y de instalaciones",
      "Historial fotográfico completo para valuar o vender",
      "Prevención de daños que deprecian el valor del inmueble",
      "Informe mensual detallado para el propietario o inversionista"
    ],
    sin_galarza: [
      "Deterioro silencioso que reduce el valor de mercado",
      "Sin documentación al momento de vender o rentar",
      "Costos de rehabilitación mucho mayores por negligencia",
      "Sin control profesional del estado del activo"
    ]
  }
};

export default function MaintenanceDashboard() {
  const [profile, setProfile] = useState<keyof typeof DATA>("airbnb");
  const current = DATA[profile];

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.header}>
        <span className="accent-text">¿TE CONVIENE?</span>
        <h2 className="display-font">Selecciona tu perfil</h2>
        <p className="body-font">Ve exactamente cómo el servicio funciona para ti.</p>
      </div>

      <div className={styles.selectors}>
        {(Object.keys(DATA) as Array<keyof typeof DATA>).map((key) => (
          <button 
            key={key}
            className={`${styles.profileBtn} ${profile === key ? styles.active : ""}`}
            onClick={() => setProfile(key)}
          >
            {key === "casa" ? "Mi casa" : key === "airbnb" ? "Airbnb / Renta" : "Propiedad de Inversión"}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={profile}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={styles.mainBox}
        >
          <div className={styles.heroSection}>
            <h3 className="display-font">{current.title}</h3>
            <p className="body-font">{current.desc}</p>
          </div>

          <div className={styles.comparisonGrid}>
            <div className={styles.prosCons}>
              <div className={styles.column}>
                <h4 className={styles.conGalarza}>CON GALARZA</h4>
                <ul>
                  {current.con_galarza.map((item, idx) => (
                    <li key={idx}><ShieldCheck size={18} className={styles.checkIcon} /> {item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.column}>
                <h4 className={styles.sinGalarza}>SIN MANTENIMIENTO</h4>
                <ul>
                  {current.sin_galarza.map((item, idx) => (
                    <li key={idx}><X size={18} className={styles.errorIcon} /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className={styles.recBanner}>
               Recomendado para este perfil: <strong>{current.plan_rec}</strong> — Ideal para empezar
            </div>
          </div>

          <div className={styles.chartsSection}>
             <h4 className="display-font">Valor real de cada plan vs. lo que pagarías solo</h4>
             
             <div className={styles.chartWrapper}>
                <ChartBar label="Plan Anual" value={current.stats.anual} max={current.stats.sin_plan_max} color="var(--clr-accent)" />
                <ChartBar label="Trabajo incluido en el plan" value={current.stats.trabajo} max={current.stats.sin_plan_max} color="#D4C08D" subtitle="Mano de obra ya cubierta" />
                <ChartBar label="Estimado sin plan - mismo perfil" value={current.stats.sin_plan_max} max={current.stats.sin_plan_max} color="#6B2D2D" subtitle="Pintura, plomería, AC, proveedores..." isRange />
             </div>

             <div className={styles.savingAlert}>
                <Zap size={20} />
                <p>Sin este plan, propiedades con perfil <strong>&quot;{profile === 'casa' ? 'Casa propia' : profile === 'airbnb' ? 'Airbnb activo' : 'Inversión activa'}&quot;</strong> gastan en promedio <strong>${current.stats.avg_spend.toLocaleString()}</strong> al año en mantenimiento reactivo.</p>
             </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ChartBar({ label, value, max, color, subtitle, isRange }: { label: string, value: number, max: number, color: string, subtitle?: string, isRange?: boolean }) {
  const percentage = (value / max) * 100;
  return (
    <div className={styles.barItem}>
       <div className={styles.barHeader}>
          <div>
            <span className={styles.barLabel}>{label}</span>
            {subtitle && <span className={styles.barSub}>{subtitle}</span>}
          </div>
          <span className={styles.barValue}>${value.toLocaleString()}</span>
       </div>
       <div className={styles.track}>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "circOut" }}
            className={styles.fill} 
            style={{ backgroundColor: color, background: isRange ? `repeating-linear-gradient(45deg, ${color}, ${color} 10px, #4a1d1d 10px, #4a1d1d 20px)` : color }}
          />
       </div>
    </div>
  );
}
