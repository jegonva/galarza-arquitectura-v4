import { ReactNode } from "react";
import Link from "next/link";
import { ShieldCheck, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#fff", display: "flex", flexDirection: "column" }}>
      <header style={{ 
        padding: "1.5rem 2rem", 
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <ShieldCheck color="var(--clr-accent)" />
          <span className="display-font" style={{ letterSpacing: "2px", fontSize: "1.2rem" }}>GALARZA CRM</span>
        </div>
        <Link href="/" style={{ color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", textDecoration: "none" }}>
          Volver a web <LogOut size={16} />
        </Link>
      </header>

      <main style={{ flex: 1, padding: "3rem 2rem", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        {children}
      </main>
    </div>
  );
}
