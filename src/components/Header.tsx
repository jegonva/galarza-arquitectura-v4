"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import MagneticButton from "@/components/MagneticButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSubpage = pathname !== "/";
  const showGlass = scrolled || isSubpage;

  return (
    <header className={`${styles.header} ${showGlass ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logoLink}>
        <img 
          src="/images/Logo Galarza PNG negro.png" 
          alt="Grupo Galarza" 
          className={styles.mainLogo}
        />
      </Link>
      
      <nav className={`${styles.nav} body-font`}>
        <MagneticButton><Link href="/nosotros" className={styles.navLink}>Nosotros</Link></MagneticButton>
        <MagneticButton><Link href="/servicios/dcm" className={styles.navLink}>DCM</Link></MagneticButton>
        <MagneticButton><Link href="/servicios/urbanizacion" className={styles.navLink}>Urbanización</Link></MagneticButton>
        <MagneticButton><Link href="/servicios/inmobiliario" className={styles.navLink}>Inmobiliaria</Link></MagneticButton>
        <MagneticButton><Link href="/servicios/fotografia" className={styles.navLink}>FV</Link></MagneticButton>
        <MagneticButton><Link href="/mantenimiento" className={styles.navLink}>Mantenimiento</Link></MagneticButton>
        <MagneticButton><Link href="/contacto" className={styles.contactBtn}>Contacto</Link></MagneticButton>
      </nav>
    </header>
  );
}
