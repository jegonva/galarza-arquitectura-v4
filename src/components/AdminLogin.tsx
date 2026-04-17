"use client";

import { useState } from "react";
import { loginAdmin } from "@/app/actions/auth";
import { Lock, ArrowRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const res = await loginAdmin(formData);
    
    if (res.error) {
      setError(res.error);
      setLoading(false);
    } else {
      // Refresh to load the protected page
      router.refresh();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
      <div style={{ background: "#111", padding: "3rem", borderRadius: "24px", maxWidth: "400px", width: "100%", border: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
          <div style={{ background: "rgba(184, 150, 46, 0.1)", padding: "1rem", borderRadius: "50%" }}>
            <Lock color="var(--clr-accent)" size={32} />
          </div>
        </div>
        
        <h2 className="display-font" style={{ textAlign: "center", marginBottom: "0.5rem" }}>Bóveda Segura</h2>
        <p className="body-font" style={{ textAlign: "center", opacity: 0.6, marginBottom: "2rem", fontSize: "0.9rem" }}>
          Ingresa la clave maestra para acceder a los prospectos.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input 
            type="password" 
            name="password" 
            placeholder="Contraseña" 
            required
            autoFocus
            style={{ 
              padding: "1rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", 
              background: "rgba(0,0,0,0.5)", color: "white", fontFamily: "var(--font-dm-sans)", fontSize: "1rem"
            }}
          />
          
          {error && <div style={{ color: "#ff6b6b", fontSize: "0.85rem", textAlign: "center" }}>{error}</div>}

          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              marginTop: "1rem", padding: "1rem", background: "var(--clr-accent)", color: "white", 
              border: "none", borderRadius: "12px", cursor: "pointer", fontWeight: "bold", 
              textTransform: "uppercase", letterSpacing: "1px", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem"
            }}
          >
            {loading ? <Loader2 className="spinner" size={18} /> : <>Desbloquear <ArrowRight size={18} /></>}
          </button>
        </form>
      </div>
    </div>
  );
}
