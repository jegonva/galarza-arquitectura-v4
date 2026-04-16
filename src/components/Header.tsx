"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import MagneticButton from "@/components/MagneticButton";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isSubpage = pathname !== "/";
  const showGlass = scrolled || isSubpage;

  const navLinks = [
    { href: "/nosotros", label: "Nosotros" },
    { href: "/servicios/dcm", label: "DCM" },
    { href: "/servicios/urbanizacion", label: "Urbanización" },
    { href: "/servicios/inmobiliario", label: "Inmobiliaria" },
    { href: "/servicios/fotografia", label: "FV" },
    { href: "/mantenimiento", label: "Mantenimiento" },
  ];

  return (
    <header className={`${styles.header} ${showGlass ? styles.scrolled : ""} ${menuOpen ? styles.menuOpen : ""}`}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logoLink}>
          <span className={styles.logoText}>GRUPO GALARZA</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className={`${styles.desktopNav} body-font`}>
          {navLinks.map((link) => (
            <MagneticButton key={link.href}>
              <Link href={link.href} className={styles.navLink}>{link.label}</Link>
            </MagneticButton>
          ))}
          <MagneticButton>
            <Link href="/contacto" className={styles.contactBtn}>Contacto</Link>
          </MagneticButton>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={styles.mobileToggle} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`${styles.mobileNavOverlay} ${menuOpen ? styles.active : ""}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contacto" 
            className={styles.mobileContactBtn}
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
