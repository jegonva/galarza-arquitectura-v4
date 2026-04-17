import { createClient } from "@/utils/supabase/server";
import { Users, Phone, Calendar, Clock } from "lucide-react";
import { cookies } from "next/headers";
import AdminLogin from "@/components/AdminLogin";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("galarza_admin_auth")?.value;

  if (auth !== process.env.ADMIN_PASSWORD) {
    return <AdminLogin />;
  }

  const supabase = await createClient();

  const { data: leads, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div style={{ color: "red", padding: "2rem", background: "rgba(255,0,0,0.1)", borderRadius: "12px" }}>
        <h3>Error al cargar los clientes:</h3>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
        <div>
          <h1 className="display-font" style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Prospectos Recientes</h1>
          <p className="body-font" style={{ opacity: 0.7 }}>Base de datos en tiempo real de clientes interesados y agendados.</p>
        </div>
        <div style={{ background: "rgba(255,255,255,0.05)", padding: "0.5rem 1rem", borderRadius: "20px", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Users size={18} color="var(--clr-accent)" />
          <span style={{ fontWeight: "bold" }}>Total: {leads?.length || 0}</span>
        </div>
      </div>

      <div style={{ width: "100%", overflowX: "auto", background: "#111", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <th style={{ padding: "1.5rem 1rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}>Fecha / Hora</th>
              <th style={{ padding: "1.5rem 1rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}>Nombre</th>
              <th style={{ padding: "1.5rem 1rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}>Teléfono</th>
              <th style={{ padding: "1.5rem 1rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {leads?.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: "3rem", textAlign: "center", opacity: 0.5 }}>No hay prospectos registrados aún.</td>
              </tr>
            ) : (
              leads?.map((lead) => {
                const date = new Date(lead.created_at);
                const formattedDate = date.toLocaleDateString('es-MX', { day: '2-digit', month: 'short' });
                const formattedTime = date.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });

                return (
                  <tr key={lead.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)", transition: "background 0.2s" }} className="hoverable-row">
                    <td style={{ padding: "1.2rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem", opacity: 0.8 }}>
                       <Calendar size={14} /> {formattedDate} <span style={{ opacity: 0.3 }}>|</span> <Clock size={14} /> {formattedTime}
                    </td>
                    <td style={{ padding: "1.2rem 1rem", fontWeight: "no" }}>{lead.nombre}</td>
                    <td style={{ padding: "1.2rem 1rem" }}>
                      <a href={`https://wa.me/${lead.telefono.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--clr-accent)", textDecoration: "none" }}>
                         <Phone size={14} /> {lead.telefono}
                      </a>
                    </td>
                    <td style={{ padding: "1.2rem 1rem" }}>
                      <span style={{ 
                        background: lead.estado === 'nuevo' ? "rgba(184, 150, 46, 0.2)" : "rgba(255,255,255,0.1)", 
                        color: lead.estado === 'nuevo' ? "var(--clr-accent)" : "white",
                        padding: "0.3rem 0.8rem", 
                        borderRadius: "20px", 
                        fontSize: "0.8rem",
                        textTransform: "uppercase"
                      }}>
                        {lead.estado}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      
      <style>{`
        .hoverable-row:hover {
          background: rgba(255,255,255,0.02);
        }
      `}</style>
    </div>
  );
}
