"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { Mail, MapPin, Phone } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  return (
    <footer className={styles.footer} style={{ background: "transparent", color: "var(--clr-text-primary)" }}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Identity Column */}
          <div className={styles.column}>
            <div style={{ height: "50px", marginBottom: "1.5rem" }} />
            <p className="body-font" style={{ color: "var(--clr-text-primary)", opacity: 0.7 }}>
              Servicios integrales de mantenimiento, construcción, diseño y gestión de propiedades en Cancún, Q. Roo.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.infoLine}>
                <MapPin size={16} className="accent-text" />
                <span>Cancún, Quintana Roo, México</span>
              </div>
              <div className={styles.infoLine}>
                <Phone size={16} className="accent-text" />
                <span>+52 999 172 5555</span>
              </div>
              <div className={styles.infoLine}>
                <Mail size={16} className="accent-text" />
                <span>galarza.dmcc@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className={styles.column}>
            <h4 className={styles.colTitle}>SERVICIOS</h4>
            <nav className={styles.nav}>
              <Link href="/mantenimiento" style={{ color: "var(--clr-text-primary)" }}>Mantenimiento</Link>
              <Link href="/servicios/dcm" style={{ color: "var(--clr-text-primary)" }}>Construcción</Link>
              <Link href="/servicios/dcm" style={{ color: "var(--clr-text-primary)" }}>Diseño</Link>
              <Link href="/servicios/urbanizacion" style={{ color: "var(--clr-text-primary)" }}>Urbanización</Link>
              <Link href="/servicios/inmobiliario" style={{ color: "var(--clr-text-primary)" }}>Inmobiliario</Link>
              <Link href="/servicios/fotografia" style={{ color: "var(--clr-text-primary)" }}>Documentación</Link>
            </nav>
          </div>

          {/* Access Column */}
          <div className={styles.column}>
            <h4 className={styles.colTitle}>ACCESOS</h4>
            <nav className={styles.nav}>
              <Link href="/portal" style={{ color: "var(--clr-text-primary)" }}>Portal Cliente</Link>
              <Link href="/contacto" style={{ color: "var(--clr-text-primary)" }}>Contacto</Link>
              <Link href="https://wa.me/529991725555?text=EMERGENCIA" className={styles.emergencyLink}>Emergencias</Link>
            </nav>
          </div>

        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © 2026 Grupo Galarza. Todos los derechos reservados.
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/privacidad" style={{ color: "var(--clr-text-primary)" }}>Aviso de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
